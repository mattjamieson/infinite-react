import { InfiniteTableActions, InfiniteTableState } from './InfiniteTableState';
import { InfiniteTableComputedValues } from './InfiniteTableComputedValues';
import { InfiniteTableApi, InfiniteTableColumnApi } from './InfiniteTableProps';
import {
  DataSourceApi,
  DataSourceComponentActions,
  DataSourceState,
} from '../../DataSource';
import { OnCellClickContext } from '../eventHandlers/onCellClick';
import { InfiniteTableComputedColumn } from './InfiniteTableColumn';

export interface InfiniteTableContextValue<T> {
  api: InfiniteTableApi<T>;
  dataSourceApi: DataSourceApi<T>;
  state: InfiniteTableState<T>;
  actions: InfiniteTableActions<T>;
  dataSourceActions: DataSourceComponentActions<T>;
  computed: InfiniteTableComputedValues<T>;
  getComputed: () => InfiniteTableComputedValues<T>;
  getState: () => InfiniteTableState<T>;
  getDataSourceState: () => DataSourceState<T>;
}

export interface InfiniteTablePublicContext<T> {
  api: InfiniteTableApi<T>;
  dataSourceApi: DataSourceApi<T>;
  getState: () => InfiniteTableState<T>;
  getDataSourceState: () => DataSourceState<T>;
}

export interface InfiniteTableCellContext<T> {
  rowIndex: OnCellClickContext<T>['rowIndex'];
  colIndex: OnCellClickContext<T>['colIndex'];
  column: InfiniteTableComputedColumn<T>;
  columnApi: InfiniteTableColumnApi<T>;
}
