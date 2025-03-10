import {
  DataSourceComponentActions,
  DataSourceDataParams,
  DataSourceRowInfoReducer,
  RowSelectionState,
} from '..';
import { dbg } from '../../../utils/debug';
import { DeepMap } from '../../../utils/DeepMap';
import defaultSortTypes from '../../../utils/multisort/sortTypes';
import { raf } from '../../../utils/raf';
import { shallowEqualObjects } from '../../../utils/shallowEqualObjects';
import { ForwardPropsToStateFnResult } from '../../hooks/useComponentState';
import { ComponentInterceptedActions } from '../../hooks/useComponentState/types';
import { InfiniteTableRowInfo, Scrollbars } from '../../InfiniteTable';
import { rowSelectionStateConfigGetter } from '../../InfiniteTable/api/getSelectionApi';
import { ScrollStopInfo } from '../../InfiniteTable/types/InfiniteTableProps';
import { buildSubscriptionCallback } from '../../utils/buildSubscriptionCallback';
import { discardCallsWithEqualArg } from '../../utils/discardCallsWithEqualArg';
import { isControlledValue } from '../../utils/isControlledValue';
import { RenderRange } from '../../VirtualBrain';

import { defaultFilterTypes } from '../defaultFilterTypes';
import { GroupRowsState } from '../GroupRowsState';
import { Indexer } from '../Indexer';
import { buildDataSourceDataParams } from '../privateHooks/useLoadData';
import { RowSelectionStateObject } from '../RowSelectionState';
import {
  DataSourceMappedState,
  DataSourceProps,
  DataSourceDerivedState,
  DataSourceSetupState,
  DataSourceState,
  LazyGroupDataDeepMap,
  LazyRowInfoGroup,
  DataSourceFilterOperator,
  DataSourcePropOnRowSelectionChange_MultiRow,
  DataSourcePropOnRowSelectionChange_SingleRow,
  DataSourcePropSelectionMode,
} from '../types';

import { normalizeSortInfo } from './normalizeSortInfo';

export const defaultCursorId = Symbol('cursorId');

export function initSetupState<T>(): DataSourceSetupState<T> {
  const now = Date.now();
  const originalDataArray: T[] = [];
  const dataArray: InfiniteTableRowInfo<T>[] = [];

  const originalLazyGroupData: LazyGroupDataDeepMap<T> = new DeepMap<
    string,
    LazyRowInfoGroup<T>
  >();

  return {
    // TODO cleanup indexer on unmount
    indexer: new Indexer<T, any>(),

    idToIndexMap: new Map<any, number>(),

    // TODO: cleanup cache on unmount
    cache: undefined,

    originalDataArrayChanged: false,
    originalDataArrayChangedInfo: {
      timestamp: 0,
      mutations: undefined,
    },
    lazyLoadCacheOfLoadedBatches: new DeepMap<string, true>(),
    dataParams: undefined,
    notifyScrollbarsChange: buildSubscriptionCallback<Scrollbars>(),
    notifyScrollStop: buildSubscriptionCallback<ScrollStopInfo>(),
    notifyRenderRangeChange: buildSubscriptionCallback<RenderRange>(),
    pivotTotalColumnPosition: 'end',
    pivotGrandTotalColumnPosition: false,
    scrollStopDelayUpdatedByTable: 100,
    originalLazyGroupData,
    originalLazyGroupDataChangeDetect: 0,
    originalDataArray,
    cursorId: defaultCursorId,
    showSeparatePivotColumnForSingleAggregation: false,

    propsCache: new Map<keyof DataSourceProps<T>, WeakMap<any, any>>([
      ['sortInfo', new WeakMap()],
    ]),

    rowInfoReducerResults: undefined,
    pivotMappings: undefined,

    pivotColumns: undefined,
    pivotColumnGroups: undefined,
    dataArray,
    unfilteredCount: dataArray.length,
    filteredCount: dataArray.length,

    updatedAt: now,
    groupedAt: 0,
    sortedAt: 0,
    filteredAt: 0,
    reducedAt: now,
    generateGroupRows: true,
    groupDeepMap: undefined,
    reducerResults: undefined,
    allRowsSelected: false,
    someRowsSelected: false,
    // selectedRowCount: 0,
    postSortDataArray: undefined,
    postGroupDataArray: undefined,
    lastSortDataArray: undefined,
    lastGroupDataArray: undefined,
  };
}

function getCompareObjectForDataParams<T>(
  dataParams: DataSourceDataParams<T>,
): Partial<DataSourceDataParams<T>> {
  const obj: Partial<DataSourceDataParams<T>> = {
    ...dataParams,
  };

  delete obj.originalDataArray;

  return obj;
}
export const forwardProps = <T>(
  setupState: DataSourceSetupState<T>,
): ForwardPropsToStateFnResult<
  DataSourceProps<T>,
  DataSourceMappedState<T>,
  DataSourceSetupState<T>
> => {
  return {
    onDataParamsChange: (fn) =>
      fn
        ? discardCallsWithEqualArg(fn, 100, getCompareObjectForDataParams)
        : undefined,
    lazyLoad: (lazyLoad) => !!lazyLoad,
    data: 1,
    pivotBy: 1,
    primaryKey: 1,
    livePagination: 1,
    refetchKey: (refetchKey) => refetchKey ?? '',
    filterFunction: 1,
    filterValue: 1,
    useGroupKeysForMultiRowSelection: (useGroupKeysForMultiRowSelection) =>
      useGroupKeysForMultiRowSelection ?? false,
    filterDelay: (filterDelay) => filterDelay ?? 200,
    filterTypes: (filterTypes) => {
      return { ...defaultFilterTypes, ...filterTypes };
    },

    sortTypes: (sortTypes) => {
      return { ...defaultSortTypes, ...sortTypes };
    },

    sortFunction: 1,
    onReady: 1,
    rowInfoReducers: (reducers, state) => {
      const idToIndexReducer: DataSourceRowInfoReducer<T> = {
        initialValue: () => {
          state.idToIndexMap.clear();
        },
        reducer: (_, rowInfo) => {
          state.idToIndexMap.set(rowInfo.id, rowInfo.indexInAll);
        },
      };
      return reducers
        ? {
            ...reducers,
            __idToIndex: idToIndexReducer,
          }
        : {
            __idToIndex: idToIndexReducer,
          };
    },
    isRowSelected: 1,
    onDataArrayChange: 1,
    onDataMutations: 1,
    aggregationReducers: 1,
    collapseGroupRowsOnDataFunctionChange: (
      collapseGroupRowsOnDataFunctionChange,
    ) => collapseGroupRowsOnDataFunctionChange ?? true,

    loading: (loading) => loading ?? false,
    sortInfo: (sortInfo) =>
      normalizeSortInfo(sortInfo, setupState.propsCache.get('sortInfo')),
    groupBy: (groupBy) => groupBy ?? [],
  };
};

function getLivePaginationCursorValue<T>(
  livePaginationCursorProp: DataSourceProps<T>['livePaginationCursor'],
  state: DataSourceState<T>,
) {
  const livePaginationCursor =
    typeof livePaginationCursorProp === 'function'
      ? livePaginationCursorProp({
          array: state.originalDataArray,
          length: state.originalDataArray.length,
          lastItem: state.originalDataArray[state.originalDataArray.length - 1],
        })
      : livePaginationCursorProp;

  return livePaginationCursor;
}

export function deriveStateFromProps<T extends any>(params: {
  props: DataSourceProps<T>;

  state: DataSourceState<T>;
  oldState: DataSourceState<T> | null;
}): DataSourceDerivedState<T> {
  const { props, state, oldState } = params;

  const controlledSort = isControlledValue(props.sortInfo);
  const controlledFilter = isControlledValue(props.filterValue);

  const { filterTypes } = state;

  const operatorsByFilterType = Object.keys(filterTypes).reduce((acc, key) => {
    const operators = filterTypes[key].operators;

    acc[key] = acc[key] || {};
    const currentFilterTypeOperators = acc[key];

    operators.forEach((operator) => {
      currentFilterTypeOperators[operator.name] = operator;
    });

    return acc;
  }, {} as Record<string, Record<string, DataSourceFilterOperator<T>>>);

  let selectionMode: DataSourcePropSelectionMode | undefined =
    props.selectionMode;

  if (selectionMode === undefined) {
    if (
      props.cellSelection !== undefined ||
      props.defaultCellSelection !== undefined
    ) {
      // TODO implement single cell selection as well
      selectionMode = 'multi-cell';
    } else {
      const rowSelectionProp =
        props.rowSelection !== undefined
          ? props.rowSelection
          : props.defaultRowSelection;
      if (rowSelectionProp !== undefined) {
        if (rowSelectionProp && typeof rowSelectionProp === 'object') {
          selectionMode = 'multi-row';
        } else {
          selectionMode = 'single-row';
        }
      }
      selectionMode = selectionMode ?? false;
    }
  }

  let rowSelectionState: RowSelectionState | null | number | string = null;

  let currentRowSelection =
    props.rowSelection !== undefined
      ? props.rowSelection
      : state.rowSelection === undefined
      ? props.defaultRowSelection !== undefined
        ? props.defaultRowSelection
        : null
      : state.rowSelection;

  if (selectionMode !== false) {
    if (selectionMode === 'single-row' || selectionMode === 'multi-row') {
      if (currentRowSelection === null) {
        rowSelectionState =
          selectionMode === 'single-row'
            ? null
            : new RowSelectionState(
                {
                  selectedRows: [],
                  deselectedRows: [],
                  defaultSelection: false,
                },
                rowSelectionStateConfigGetter(state),
              );
      } else {
        rowSelectionState =
          selectionMode === 'single-row'
            ? (currentRowSelection as string | number)
            : currentRowSelection instanceof RowSelectionState
            ? currentRowSelection
            : new RowSelectionState(
                currentRowSelection as RowSelectionStateObject,
                rowSelectionStateConfigGetter(state),
              );
      }
    }
  }

  const primaryKeyDescriptor = state.primaryKey;
  const toPrimaryKey =
    typeof primaryKeyDescriptor === 'function'
      ? (data: T) => primaryKeyDescriptor(data)
      : (data: T) => data[primaryKeyDescriptor];

  let groupRowsState =
    props.groupRowsState || state.groupRowsState || props.defaultGroupRowsState;

  if (groupRowsState && !(groupRowsState instanceof GroupRowsState)) {
    groupRowsState = new GroupRowsState(groupRowsState);
  }

  groupRowsState =
    groupRowsState ||
    new GroupRowsState(
      state.lazyLoad
        ? { expandedRows: [], collapsedRows: true }
        : {
            expandedRows: true,
            collapsedRows: [],
          },
    );

  const result: DataSourceDerivedState<T> = {
    selectionMode,
    groupRowsState,
    // for whatever reason I had to do this cast to appease TS
    rowSelection: rowSelectionState as any as null,

    toPrimaryKey,
    operatorsByFilterType,
    controlledSort,
    controlledFilter,

    sortMode: props.sortFunction
      ? 'local'
      : props.sortMode ?? (controlledSort ? 'remote' : 'local'),
    filterMode:
      typeof props.filterFunction === 'function'
        ? 'local'
        : props.filterMode ??
          (typeof props.data === 'function' ? 'remote' : 'local'),

    multiSort: Array.isArray(
      controlledSort ? props.sortInfo : props.defaultSortInfo,
    ),
    lazyLoadBatchSize:
      typeof props.lazyLoad === 'object' ? props.lazyLoad.batchSize : undefined,
  };

  if (props.livePagination) {
    const dataArrayChanged =
      !oldState || oldState.originalDataArray !== state.originalDataArray;

    const livePaginationCursor =
      typeof props.livePaginationCursor === 'function'
        ? dataArrayChanged
          ? getLivePaginationCursorValue(props.livePaginationCursor, state)
          : state.livePaginationCursor
        : props.livePaginationCursor;

    result.livePaginationCursor = livePaginationCursor;
  }

  return result;
}

const debugFullLazyLoad = dbg('DataSource:fullLazyLoad');

export function onPropChange<T>(
  params: { name: keyof T; newValue: any; oldValue: any },
  props: DataSourceProps<T>,
  actions: DataSourceComponentActions<T>,
) {
  const { name, newValue } = params;

  if (
    name === 'data' &&
    typeof newValue === 'function' &&
    !props.groupRowsState
  ) {
    if (props.lazyLoad) {
      debugFullLazyLoad(`"data" function prop has changed`);
    }

    if (props.collapseGroupRowsOnDataFunctionChange !== false) {
      actions.groupRowsState = new GroupRowsState({
        collapsedRows: true,
        expandedRows: [],
      });
    }
  }
}

const debugDataParams = dbg('DataSource:dataParams');

export type DataSourceMappedCallbackParams<T> = {
  [k in keyof DataSourceState<T>]: (
    value: DataSourceState<T>[k],
    state: DataSourceState<T>,
  ) => {
    callbackName?: string;
    callbackParams: any[];
  };
};

export function getMappedCallbacks<T>() {
  return {
    rowSelection: (
      rowSelection,
      state: DataSourceState<T>,
    ): { callbackParams: any[] } => {
      if (state.selectionMode === 'single-row') {
        return {
          callbackParams: [
            rowSelection,
            'single-row',
          ] as Parameters<DataSourcePropOnRowSelectionChange_SingleRow>,
        };
      }
      return {
        callbackParams: [
          (rowSelection as RowSelectionState).getState(),
          'multi-row',
        ] as Parameters<DataSourcePropOnRowSelectionChange_MultiRow>,
      };
    },
  } as DataSourceMappedCallbackParams<T>;
}

export function getInterceptActions<T>(): ComponentInterceptedActions<
  DataSourceState<T>
> {
  return {
    sortInfo: (sortInfo, { actions, state }) => {
      const dataParams = buildDataSourceDataParams(state, {
        sortInfo,
        livePaginationCursor: null,
      });

      actions.dataParams = dataParams;

      if (state.livePagination) {
        // #wait_for_update do it on raf, since it also does actions.dataParams assignment
        // so we allow dataParams to be updated (the call 3 lines above) in state

        raf(() => {
          actions.livePaginationCursor = null;
        });
      }
    },
    groupBy: (groupBy, { actions, state }) => {
      const dataParams = buildDataSourceDataParams(state, {
        groupBy,
        livePaginationCursor: null,
      });

      actions.dataParams = dataParams;

      if (state.livePagination) {
        // see #wait_for_update above

        raf(() => {
          actions.livePaginationCursor = null;
        });
      }
    },
    pivotBy: (pivotBy, { actions, state }) => {
      const dataParams = buildDataSourceDataParams(state, {
        pivotBy,
        livePaginationCursor: null,
      });

      actions.dataParams = dataParams;

      if (state.livePagination) {
        // see #wait_for_update above

        raf(() => {
          actions.livePaginationCursor = null;
        });
      }
    },
    filterValue: (filterValue, { actions, state }) => {
      const dataParams = buildDataSourceDataParams(state, {
        filterValue,
        livePaginationCursor: null,
      });

      actions.dataParams = dataParams;

      if (state.livePagination) {
        // see #wait_for_update above

        raf(() => {
          actions.livePaginationCursor = null;
        });
      }
    },
    cursorId: (cursorId, { actions, state }) => {
      const dataParams = buildDataSourceDataParams(state, {
        __cursorId: cursorId,
      });
      actions.dataParams = dataParams;
    },
    livePaginationCursor: (livePaginationCursor, { actions, state }) => {
      const dataParams = buildDataSourceDataParams(state, {
        livePaginationCursor,
      });

      actions.dataParams = dataParams;
    },
    dataParams: (dataParams, { state }) => {
      if (
        shallowEqualObjects(
          dataParams!,
          state.dataParams!,
          new Set<keyof DataSourceDataParams<T>>([
            'changes',
            'originalDataArray',
          ]),
        )
      ) {
        return false;
      }

      debugDataParams(
        'onDataParamsChange triggered because the following values have changed',
        dataParams?.changes,
      );

      return true;
    },
  };
}
