import * as React$1 from 'react';
import React__default, { CSSProperties, HTMLProps, RefCallback, MutableRefObject, MouseEvent, KeyboardEvent, ReactNode } from 'react';

type SortDir = 1 | -1;
type MultisortInfo<T> = {
    /**
     * The sorting direction
     */
    dir: SortDir;
    /**
     * for now 'string' and 'number' are known types, meaning they have
     * sort functions already implemented
     */
    type?: string | string[];
    fn?: (a: any, b: any) => number;
    /**
     * a property whose value to use for sorting on the array items
     */
    field?: keyof T;
    /**
     * or a function to retrieve the item value to use for sorting
     */
    valueGetter?: (item: T) => any;
};
type MultisortInfoAllowMultipleFields<T> = Omit<MultisortInfo<T>, 'field'> & {
    field?: keyof T | (keyof T | ((item: T) => any))[];
};
declare const multisort: {
    <T>(sortInfo: MultisortInfoAllowMultipleFields<T>[], array: T[], get?: ((item: any) => T) | undefined): T[];
    knownTypes: {
        [key: string]: (first: any, second: any) => number;
    };
};

type VoidFn$1 = () => void;
type Pair<KeyType, ValueType> = {
    value?: ValueType;
    map?: Map<KeyType, Pair<KeyType, ValueType>>;
    length: number;
    revision?: number;
};
type DeepMapVisitFn<KeyType, ValueType> = (pair: Pair<KeyType, ValueType>, keys: KeyType[], next: VoidFn$1) => void;
declare class DeepMap<KeyType, ValueType> {
    private map;
    private length;
    private revision;
    private emptyKey;
    static clone<KeyType, ValueType>(map: DeepMap<KeyType, ValueType>): DeepMap<KeyType, ValueType>;
    constructor(initial?: [KeyType[], ValueType][]);
    fill(initial?: [KeyType[], ValueType][]): void;
    getValuesStartingWith(keys: KeyType[], excludeSelf?: boolean, depthLimit?: number): ValueType[];
    getKeysStartingWith(keys: KeyType[], excludeSelf?: boolean, depthLimit?: number): KeyType[][];
    private getStartingWith;
    private getMapAt;
    getAllChildrenSizeFor(keys: KeyType[]): number;
    getDirectChildrenSizeFor(keys: KeyType[]): number;
    set(keys: KeyType[] & {
        length: Omit<number, 0>;
    }, value: ValueType): this;
    get(keys: KeyType[]): ValueType | undefined;
    get size(): number;
    clear(): void;
    delete(keys: KeyType[]): boolean;
    has(keys: KeyType[]): boolean;
    private visitKey;
    visit: (fn: DeepMapVisitFn<KeyType, ValueType>) => void;
    visitDepthFirst: (fn: (value: ValueType, keys: KeyType[], indexInGroup: number, next?: VoidFn$1) => void) => void;
    private visitWithNext;
    private getArray;
    valuesAt(keys: KeyType[]): ValueType[];
    values(): Generator<ValueType, void, unknown>;
    keys(): Generator<KeyType[], void, unknown>;
    entries(): Generator<[KeyType[], ValueType], void, unknown>;
    topDownEntries(): [KeyType[], ValueType][];
    topDownKeys(): KeyType[][];
    topDownValues(): ValueType[];
    private sortedIterator;
}

declare enum InfiniteTableActionType {
    SET_COLUMN_SIZE = 0,
    SET_SCROLL_POSITION = 1,
    SET_BODY_SIZE = 2,
    SET_COLUMN_ORDER = 3,
    SET_COLUMN_VISIBILITY = 4,
    SET_COLUMN_SHIFTS = 5,
    SET_COLUMN_PINNING = 6,
    SET_COLUMN_AGGREGATIONS = 7,
    SET_DRAGGING_COLUMN_ID = 8
}

type InfiniteTableAction = {
    type: InfiniteTableActionType;
    payload?: any;
};

type Renderable = React$1.ReactNode | JSX.Element;

type MenuIconProps = {
    lineWidth?: number;
    lineStyle?: React$1.CSSProperties;
    style?: React$1.CSSProperties;
    className?: string;
    domProps?: React$1.HTMLAttributes<HTMLDivElement>;
    reserveSpaceWhenHidden?: boolean;
    menuVisible?: boolean;
    children?: React$1.ReactNode;
};
declare function MenuIcon(props: MenuIconProps): JSX.Element;

declare function useInfiniteHeaderCell<T>(): {
    dragging: boolean;
    column: InfiniteTableComputedColumn<T>;
    columnsMap: Map<string, InfiniteTableComputedColumn<T>>;
    columnSortInfo: DataSourceSingleSortInfo<T> | null;
    columnFilterValue: DataSourceFilterValueItem<T> | null;
    selectionMode: DataSourcePropSelectionMode;
    allRowsSelected: boolean;
    someRowsSelected: boolean;
    filtered: boolean;
    api: InfiniteTableApi<T>;
    columnApi: InfiniteTableColumnApi<T>;
    renderBag: {
        all?: Renderable;
        header: Renderable;
        sortIcon?: Renderable;
        menuIcon?: Renderable;
        menuIconProps?: MenuIconProps | undefined;
        filterIcon?: Renderable;
        selectionCheckBox?: Renderable;
    };
} & {
    domRef: ((instance: HTMLElement | null) => void) | undefined;
    insideColumnMenu: false;
} & {
    domRef: ((instance: HTMLElement | null) => void) | undefined;
    insideColumnMenu: false;
};

declare function useInfiniteColumnCell<T>(): InfiniteTableColumnCellContextType<T, InfiniteTableComputedColumn<T>>;
declare function useInfiniteColumnEditor<T>(): InfiniteColumnEditorContextType<T>;

declare function useInfiniteColumnFilterEditor<T>(): {
    api: InfiniteTableApi<T>;
    column: InfiniteTableComputedColumn<T>;
    columnFilterValue: DataSourceFilterValueItem<any> | null;
    columnApi: InfiniteTableColumnApi<T>;
    operatorName: string | undefined;
    operator: DataSourceFilterOperator<any> | undefined;
    value: any;
    disabled: boolean | undefined;
    filterType: DataSourceFilterType<any>;
    filterTypes: DataSourcePropFilterTypes<any>;
    filterTypeKey: string;
    filtered: boolean;
    setValue: (filterValue: any) => void;
    ariaLabel: string;
    className: string;
};

declare const InfiniteTableClassName: string;
declare const InfiniteTableComponent: React$1.MemoExoticComponent<(<T>() => JSX.Element)>;
declare function InfiniteTable<T>(props: InfiniteTableProps<T>): JSX.Element;
declare namespace InfiniteTable {
    var defaultProps: {
        rowHeight: number;
        columnHeaderHeight: string;
    };
}

interface Size {
    width: number;
    height: number;
}

type InfiniteTableBaseCellProps<T> = {
    column: InfiniteTableComputedColumn<T>;
    align?: InfiniteTableColumnAlignValues;
    rowId?: any;
    renderChildren: () => Renderable;
    width: number;
    cssEllipsis?: boolean;
    contentStyle?: CSSProperties;
    contentClassName?: string;
    virtualized?: boolean;
    skipColumnShifting?: boolean;
    beforeChildren?: Renderable;
    afterChildren?: Renderable;
    cssPosition?: CSSProperties['position'];
    domRef?: React.RefCallback<HTMLElement>;
};
type InfiniteTableCellProps<T> = ({
    cellType: 'header';
} & InfiniteTableBaseCellProps<T>) | ({
    cellType: 'body';
} & InfiniteTableBaseCellProps<T>);

type DiscriminatedUnion<A, B> = (A & {
    [K in keyof B]?: undefined;
}) | (B & {
    [K in keyof A]?: undefined;
});
type KeyOfNoSymbol<T> = Exclude<keyof T, Symbol>;
/**
 * Restrict using either exclusively the keys of T or exclusively the keys of U.
 *
 * No unique keys of T can be used simultaneously with any unique keys of U.
 *
 * @example
 *```
 * const myVar: XOR<T, U>
 *```
 *
 * @see https://github.com/maninak/ts-xor/tree/master#description
 */
type XOR<T, U> = T | U extends object ? Prettify<Without<T, U> & U> | Prettify<Without<U, T> & T> : T | U;
/**
 * Useful if applying XOR on more than 2 types.
 * It comes with the penalty of having the types wrapped in an array
 *
 * @example
 * ```
 * AllXOR<[
 *   { a: AModule },
 *   { b: BModule },
 *   { c: CModule },
 *   { d: DModule }
 * ]>
 * ```
 * @see https://github.com/Microsoft/TypeScript/issues/14094#issuecomment-723571692
 */
type AllXOR<T extends any[]> = T extends [infer Only] ? Only : T extends [infer A, infer B, ...infer Rest] ? AllXOR<[XOR<A, B>, ...Rest]> : never;
/**
 * Get the keys of T without any keys of U.
 */
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * Resolve mapped types and show the derived keys and their types when hovering in
 * IDEs, instead of just showing the names those mapped types are defined with.
 */
type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

type NonUndefined<T> = T extends undefined ? never : T;

type InfiniteTableToggleGroupRowFn = (groupKeys: any[]) => void;
type InfiniteTableSelectRowFn = (id: any) => void;
type InfiniteTableColumnHeaderParam<DATA_TYPE, COL_TYPE = InfiniteTableComputedColumn<DATA_TYPE>> = {
    dragging: boolean;
    column: COL_TYPE;
    columnsMap: Map<string, COL_TYPE>;
    columnSortInfo: DataSourceSingleSortInfo<DATA_TYPE> | null;
    columnFilterValue: DataSourceFilterValueItem<DATA_TYPE> | null;
    selectionMode: DataSourcePropSelectionMode;
    allRowsSelected: boolean;
    someRowsSelected: boolean;
    filtered: boolean;
    api: InfiniteTableApi<DATA_TYPE>;
    columnApi: InfiniteTableColumnApi<DATA_TYPE>;
    renderBag: {
        all?: Renderable;
        header: string | number | Renderable;
        sortIcon?: Renderable;
        menuIcon?: Renderable;
        menuIconProps?: MenuIconProps;
        filterIcon?: Renderable;
        selectionCheckBox?: Renderable;
    };
} & ({
    domRef: InfiniteTableCellProps<DATA_TYPE>['domRef'];
    insideColumnMenu: false;
} | {
    insideColumnMenu: true;
});
type InfiniteTableColumnRenderBag = {
    value: string | number | Renderable;
    groupIcon?: Renderable;
    all?: Renderable;
    selectionCheckBox?: Renderable;
};
type InfiniteTableColumnRenderParamBase<DATA_TYPE, COL_TYPE = InfiniteTableComputedColumn<DATA_TYPE>> = {
    domRef: InfiniteTableCellProps<DATA_TYPE>['domRef'];
    value: string | number | Renderable;
    align: InfiniteTableColumnAlignValues;
    verticalAlign: InfiniteTableColumnVerticalAlignValues;
    renderBag: InfiniteTableColumnRenderBag;
    rowIndex: number;
    rowActive: boolean;
    api: InfiniteTableApi<DATA_TYPE>;
    editError?: Error;
    column: COL_TYPE;
    columnsMap: Map<string, COL_TYPE>;
    fieldsToColumn: Map<keyof DATA_TYPE, COL_TYPE>;
    groupByColumn?: InfiniteTableComputedColumn<DATA_TYPE>;
    toggleCurrentGroupRow: () => void;
    toggleGroupRow: InfiniteTableToggleGroupRowFn;
    toggleCurrentGroupRowSelection: () => void;
    toggleCurrentRowSelection: () => void;
    selectCurrentRow: () => void;
    selectRow: InfiniteTableSelectRowFn;
    deselectRow: InfiniteTableSelectRowFn;
    deselectCurrentRow: () => void;
    toggleRowSelection: InfiniteTableSelectRowFn;
    toggleGroupRowSelection: InfiniteTableToggleGroupRowFn;
    selectionMode: DataSourcePropSelectionMode | undefined;
    rootGroupBy: DataSourceState<DATA_TYPE>['groupBy'];
    pivotBy?: DataSourceState<DATA_TYPE>['pivotBy'];
};
type InfiniteTableColumnCellContextType<DATA_TYPE, COL_TYPE = InfiniteTableComputedColumn<DATA_TYPE>> = InfiniteTableColumnRenderParamBase<DATA_TYPE, COL_TYPE> & InfiniteTableRowInfoDataDiscriminator<DATA_TYPE>;
type InfiniteTableColumnRenderValueParam<DATA_TYPE, COL_TYPE = InfiniteTableComputedColumn<DATA_TYPE>> = InfiniteTableColumnCellContextType<DATA_TYPE, COL_TYPE>;
type InfiniteTableColumnRowspanParam<DATA_TYPE, COL_TYPE = InfiniteTableComputedColumn<DATA_TYPE>> = {
    rowInfo: InfiniteTableRowInfo<DATA_TYPE>;
    data: DATA_TYPE | Partial<DATA_TYPE> | null;
    dataArray: InfiniteTableRowInfo<DATA_TYPE>[];
    rowIndex: number;
    column: COL_TYPE;
};
type InfiniteTableColumnRenderFunctionForGroupRows<DATA_TYPE, COL_TYPE = InfiniteTableComputedColumn<DATA_TYPE>> = (renderParams: InfiniteTableColumnCellContextType<DATA_TYPE, COL_TYPE> & {
    isGroupRow: true;
}) => Renderable | null;
type InfiniteTableColumnRenderFunctionForNormalRows<DATA_TYPE, COL_TYPE = InfiniteTableComputedColumn<DATA_TYPE>> = (renderParams: InfiniteTableColumnCellContextType<DATA_TYPE, COL_TYPE> & {
    isGroupRow: false;
}) => Renderable | null;
type InfiniteTableColumnRenderFunction<DATA_TYPE, COL_TYPE = InfiniteTableComputedColumn<DATA_TYPE>> = (renderParams: InfiniteTableColumnCellContextType<DATA_TYPE, COL_TYPE>) => Renderable | null;
type InfiniteTableColumnHeaderRenderFunction<T> = (headerParams: InfiniteTableColumnHeaderParam<T>) => Renderable;
type InfiniteTableColumnContentFocusable<T> = boolean | InfiniteTableColumnContentFocusableFn<T>;
type InfiniteTableColumnEditable<T> = boolean | InfiniteTableColumnEditableFn<T>;
type InfiniteTableColumnContentFocusableFn<T> = (params: InfiniteTableColumnContentFocusableParams<T>) => boolean;
type InfiniteTableColumnEditableFn<T> = (params: InfiniteTableColumnEditableParams<T>) => boolean | Promise<boolean>;
type InfiniteTableColumnContentFocusableParams<T> = InfiniteTableRowInfoDataDiscriminatorWithColumnAndApis<T>;
type InfiniteTableColumnEditableParams<T> = InfiniteTableColumnContentFocusableParams<T>;
type InfiniteTableColumnGetValueToPersistParams<T> = InfiniteTableColumnEditableParams<T> & {
    initialValue: any;
};
type InfiniteTableColumnAlignValues = 'start' | 'center' | 'end';
type InfiniteTableColumnVerticalAlignValues = 'start' | 'center' | 'end';
type InfiniteTableColumnHeader<T> = Renderable | InfiniteTableColumnHeaderRenderFunction<T>;
type InfiniteTableDataTypeNames = 'string' | 'number' | 'date' | string;
type InfiniteTableColumnTypeNames = 'string' | 'number' | 'date' | string;
type InfiniteTableColumnStyleFnParams<T> = {
    value: Renderable;
    column: InfiniteTableComputedColumn<T>;
    inEdit: boolean;
    editError: InfiniteTableColumnRenderParamBase<T>['editError'];
} & InfiniteTableRowInfoDataDiscriminator<T>;
type InfiniteTableColumnStyleFn<T> = (params: InfiniteTableColumnStyleFnParams<T>) => undefined | React__default.CSSProperties;
type InfiniteTableColumnHeaderClassNameFn<T> = (params: InfiniteTableColumnHeaderParam<T>) => undefined | string;
type InfiniteTableColumnHeaderStyleFn<T> = (params: InfiniteTableColumnHeaderParam<T>) => undefined | React__default.CSSProperties;
type InfiniteTableColumnClassNameFn<T> = (params: InfiniteTableColumnStyleFnParams<T>) => undefined | string;
type InfiniteTableColumnStyle<T> = CSSProperties | InfiniteTableColumnStyleFn<T>;
type InfiniteTableColumnAlign<T> = InfiniteTableColumnAlignValues | InfiniteTableColumnAlignFn<T>;
type InfiniteTableColumnVerticalAlign<T> = InfiniteTableColumnVerticalAlignValues | InfiniteTableColumnVerticalAlignFn<T>;
type InfiniteTableColumnAlignFn<T> = (params: InfiniteTableColumnAlignFnParams<T>) => InfiniteTableColumnAlignValues;
type InfiniteTableColumnAlignFnParams<T> = XOR<{
    isHeader: true;
    column: InfiniteTableComputedColumn<T>;
}, InfiniteTableColumnStyleFnParams<T> & {
    isHeader: false;
}>;
type InfiniteTableColumnVerticalAlignFn<T> = (params: InfiniteTableColumnAlignFnParams<T>) => InfiniteTableColumnVerticalAlignValues;
type InfiniteTableColumnHeaderStyle<T> = CSSProperties | InfiniteTableColumnHeaderStyleFn<T>;
type InfiniteTableColumnClassName<T> = string | InfiniteTableColumnClassNameFn<T>;
type InfiniteTableColumnHeaderClassName<T> = string | InfiniteTableColumnHeaderClassNameFn<T>;
type InfiniteTableColumnValueGetterParams<T> = ValueGetterParams<T>;
type InfiniteTableColumnValueFormatterParams<T> = InfiniteTableRowInfoDataDiscriminator<T>;
type InfiniteTableColumnValueGetter<T, VALUE_GETTER_TYPE = string | number | boolean | Date | null | undefined> = (params: InfiniteTableColumnValueGetterParams<T>) => VALUE_GETTER_TYPE;
type InfiniteTableColumnValueFormatter<T, VALUE_FORMATTER_TYPE = string | number | boolean | Date | null | undefined> = (params: InfiniteTableColumnValueFormatterParams<T>) => VALUE_FORMATTER_TYPE;
type InfiniteTableColumnRowspanFn<T> = (params: InfiniteTableColumnRowspanParam<T>) => number;
type InfiniteTableColumnComparer<T> = (a: T, b: T) => number;
type InfiniteTableColumnSortableFn<T> = (context: {
    api: InfiniteTableApi<T>;
    columnApi: InfiniteTableColumnApi<T>;
    column: InfiniteTableComputedColumn<T>;
    columns: Map<string, InfiniteTableComputedColumn<T>>;
}) => boolean;
type InfiniteTableColumnSortable<T> = boolean | InfiniteTableColumnSortableFn<T>;
/**
 * Defines a column in the table.
 *
 * @typeParam DATA_TYPE The type of the data in the table.
 *
 * Can be bound to a field which is a `keyof DATA_TYPE`.
 */
type InfiniteTableColumn<DATA_TYPE> = {
    field?: KeyOfNoSymbol<DATA_TYPE>;
    valueGetter?: InfiniteTableColumnValueGetter<DATA_TYPE>;
    defaultSortable?: InfiniteTableColumnSortable<DATA_TYPE>;
    draggable?: boolean;
    resizable?: boolean;
    shouldAcceptEdit?: (params: InfiniteTablePropOnEditAcceptedParams<DATA_TYPE>) => boolean | Error | Promise<boolean | Error>;
    contentFocusable?: InfiniteTableColumnContentFocusable<DATA_TYPE>;
    defaultEditable?: InfiniteTableColumnEditable<DATA_TYPE>;
    getValueToEdit?: (params: InfiniteTableColumnEditableParams<DATA_TYPE>) => any | Promise<any>;
    getValueToPersist?: (params: InfiniteTableColumnGetValueToPersistParams<DATA_TYPE>) => any | Promise<any>;
    comparer?: InfiniteTableColumnComparer<DATA_TYPE>;
    defaultHiddenWhenGroupedBy?: '*' | true | keyof DATA_TYPE | {
        [k in keyof Partial<DATA_TYPE>]: true;
    };
    align?: InfiniteTableColumnAlign<DATA_TYPE>;
    headerAlign?: InfiniteTableColumnAlign<DATA_TYPE>;
    verticalAlign?: InfiniteTableColumnVerticalAlign<DATA_TYPE>;
    columnGroup?: string;
    header?: InfiniteTableColumnHeader<DATA_TYPE>;
    renderHeader?: InfiniteTableColumnHeaderRenderFunction<DATA_TYPE>;
    name?: Renderable;
    cssEllipsis?: boolean;
    headerCssEllipsis?: boolean;
    type?: InfiniteTableColumnTypeNames | InfiniteTableColumnTypeNames[] | null;
    dataType?: InfiniteTableDataTypeNames;
    sortType?: string | string[];
    filterType?: string;
    style?: InfiniteTableColumnStyle<DATA_TYPE>;
    headerStyle?: InfiniteTableColumnHeaderStyle<DATA_TYPE>;
    headerClassName?: InfiniteTableColumnHeaderClassName<DATA_TYPE>;
    className?: InfiniteTableColumnClassName<DATA_TYPE>;
    rowspan?: InfiniteTableColumnRowspanFn<DATA_TYPE>;
    render?: InfiniteTableColumnRenderFunction<DATA_TYPE>;
    renderValue?: InfiniteTableColumnRenderFunction<DATA_TYPE>;
    renderGroupValue?: InfiniteTableColumnRenderFunctionForGroupRows<DATA_TYPE>;
    renderLeafValue?: InfiniteTableColumnRenderFunctionForNormalRows<DATA_TYPE>;
    valueFormatter?: InfiniteTableColumnValueFormatter<DATA_TYPE, Renderable>;
    defaultWidth?: number;
    defaultFlex?: number;
    defaultFilterable?: boolean;
    minWidth?: number;
    maxWidth?: number;
    renderGroupIcon?: InfiniteTableColumnRenderFunctionForGroupRows<DATA_TYPE>;
    renderSortIcon?: InfiniteTableColumnHeaderRenderFunction<DATA_TYPE>;
    renderFilterIcon?: InfiniteTableColumnHeaderRenderFunction<DATA_TYPE>;
    renderSelectionCheckBox?: boolean | InfiniteTableColumnRenderFunction<DATA_TYPE>;
    renderMenuIcon?: boolean | InfiniteTableColumnHeaderRenderFunction<DATA_TYPE>;
    renderHeaderSelectionCheckBox?: boolean | InfiniteTableColumnHeaderRenderFunction<DATA_TYPE>;
    components?: {
        ColumnCell?: (props: HTMLProps<HTMLDivElement>) => JSX.Element | null;
        HeaderCell?: (props: HTMLProps<HTMLDivElement>) => JSX.Element | null;
        Editor?: () => JSX.Element | null;
        FilterEditor?: () => JSX.Element | null;
        FilterOperatorSwitch?: () => JSX.Element | null;
        MenuIcon?: (props: MenuIconProps) => JSX.Element | null;
    };
};
type InfiniteTableGeneratedGroupColumn<T> = Omit<InfiniteTableColumn<T>, 'defaultSortable'> & {
    groupByForColumn: GroupBy<T> | GroupBy<T>[];
    id?: string;
};
type InfiniteTablePivotColumn<T> = InfiniteTableColumn<T> & ColumnTypeWithInherit<Partial<InfiniteTablePivotFinalColumnVariant<T, any>>>;
type InfiniteTablePivotFinalColumnGroup<DataType, KeyType extends any = any> = InfiniteTableColumnGroup & {
    pivotBy: DataSourcePivotBy<DataType>[];
    pivotTotalColumnGroup?: true;
    pivotGroupKeys: KeyType[];
    pivotByAtIndex: PivotBy<DataType, KeyType>;
    pivotGroupKey: KeyType;
    pivotIndex: number;
};
type InfiniteTablePivotFinalColumn<DataType, KeyType extends any = any> = InfiniteTableColumn<DataType> & {
    pivotBy: DataSourcePivotBy<DataType>[];
    pivotColumn: true;
    pivotTotalColumn: boolean;
    pivotAggregator: AggregationReducer<DataType, any>;
    pivotAggregatorIndex: number;
    pivotGroupKeys: KeyType[];
    pivotByAtIndex?: PivotBy<DataType, KeyType>;
    pivotIndex: number;
    pivotGroupKey: KeyType;
};
type InfiniteTablePivotFinalColumnVariant<DataType, KeyType extends any = any> = InfiniteTablePivotFinalColumn<DataType, KeyType>;
type InfiniteTableComputedColumnBase<T> = {
    computedFilterType: string;
    computedSortType: string | string[];
    computedDataType: string;
    computedWidth: number;
    computedFlex: number | null;
    computedMinWidth: number;
    computedMaxWidth: number;
    computedOffset: number;
    computedPinningOffset: number;
    computedAbsoluteOffset: number;
    computedSortInfo: DataSourceSingleSortInfo<T> | null;
    computedSorted: boolean;
    computedSortedAsc: boolean;
    computedSortedDesc: boolean;
    computedSortIndex: number;
    computedVisible: boolean;
    computedVisibleIndex: number;
    computedVisibleIndexInCategory: number;
    computedMultiSort: boolean;
    computedFiltered: boolean;
    computedFilterable: boolean;
    computedFilterValue: DataSourceFilterValueItem<T> | null;
    computedPinned: InfiniteTableColumnPinnedValues;
    computedDraggable: boolean;
    computedResizable: boolean;
    computedFirstInCategory: boolean;
    computedLastInCategory: boolean;
    computedFirst: boolean;
    computedLast: boolean;
    computedEditable: NonUndefined<InfiniteTableColumn<T>['defaultEditable']>;
    computedSortable: NonUndefined<InfiniteTableColumn<T>['defaultSortable']>;
    colType: InfiniteTableColumnType<T>;
    id: string;
};
type InfiniteTableComputedColumn<T> = InfiniteTableColumn<T> & InfiniteTableComputedColumnBase<T> & Partial<InfiniteTablePivotFinalColumn<T>> & Partial<InfiniteTableGeneratedGroupColumn<T>>;
type InfiniteTableComputedPivotFinalColumn<T> = InfiniteTableComputedColumn<T> & InfiniteTablePivotFinalColumn<T>;

interface LogFn {
    (...args: any[]): LogFn;
    extend: (channelName: string) => LogFn;
}
declare class Logger {
    debug: LogFn;
    error: LogFn;
    constructor(channelName: string);
}

interface ScrollPosition {
    scrollTop: number;
    scrollLeft: number;
}
type OnScrollFn = (scrollPosition: ScrollPosition) => void;

type VoidFn = () => void;

type FixedPosition = false | 'start' | 'end';
type SpanFunction = ({ rowIndex, colIndex, }: {
    rowIndex: number;
    colIndex: number;
}) => number;
type RenderRangeType = {
    startIndex: number;
    endIndex: number;
};
type ItemSizeFunction = (index: number) => number;
type MatrixBrainOptions = {
    width: number;
    height: number;
    cols: number;
    rows: number;
    rowHeight: number | ItemSizeFunction;
    colWidth: number | ItemSizeFunction;
    rowspan?: SpanFunction;
    colspan?: SpanFunction;
};
type TableRenderRange = {
    start: [number, number];
    end: [number, number];
    rowFixed?: FixedPosition;
    colFixed?: FixedPosition;
};
type WhichDirection = {
    horizontal?: boolean;
    vertical?: boolean;
};
type FnOnRenderRangeChange = (range: TableRenderRange) => void;
type FnOnDirectionalRenderRangeChange = (range: [number, number]) => void;
type FnOnRenderCountChange = ({ horizontal, vertical, }: {
    horizontal: number;
    vertical: number;
}) => void;
type OnAvailableSizeChange = (size: Size) => void;
declare class MatrixBrain extends Logger {
    private scrolling;
    private width;
    private height;
    private cols;
    private rows;
    private rowHeight;
    private colWidth;
    private rowspan;
    private colspan;
    private rowspanParent;
    private rowspanValue;
    private rowHeightCache;
    private rowOffsetCache;
    private verticalTotalSize;
    private colspanParent;
    private colspanValue;
    private colWidthCache;
    private colOffsetCache;
    private horizontalTotalSize;
    private horizontalRenderCount?;
    private verticalRenderCount?;
    private horizontalRenderRange;
    private verticalRenderRange;
    private extraSpanCells;
    private scrollPosition;
    private onScrollFns;
    private onRenderRangeChangeFns;
    private onVerticalRenderRangeChangeFns;
    private onHorizontalRenderRangeChangeFns;
    private onDestroyFns;
    private destroyed;
    private onRenderCountChangeFns;
    private onAvailableSizeChangeFns;
    private onScrollStartFns;
    private onScrollStopFns;
    private scrollTimeoutId;
    private scrollStopDelay;
    /**
     * Number of columns that are fixed at the start
     */
    private fixedColsStart;
    /**
     * Number of columns that are fixed at the end
     */
    private fixedColsEnd;
    /**
     * Number of rows that are fixed at the start
     */
    private fixedRowsStart;
    /**
     * Number of rows that are fixed at the end
     */
    private fixedRowsEnd;
    constructor(name?: string);
    private reset;
    private resetVertical;
    private resetHorizontal;
    setScrollStopDelay: (scrollStopDelay: number) => void;
    getRowCount: () => number;
    getColCount: () => number;
    update: (options: Partial<MatrixBrainOptions>) => void;
    setRowAndColumnSizes({ rowHeight, colWidth, }: {
        rowHeight: number | ItemSizeFunction;
        colWidth: number | ItemSizeFunction;
    }): void;
    setRowsAndCols: ({ rows, cols }: {
        rows: number;
        cols: number;
    }) => void;
    setAvailableSize(size: Partial<Size>, config?: {
        skipUpdateRenderCount?: boolean;
    }): void;
    updateRenderCount: (which?: WhichDirection) => void;
    private doUpdateRenderCount;
    get scrollTopMax(): number;
    get scrollLeftMax(): number;
    private setScrolling;
    private notifyScrollStart;
    private notifyScrollStop;
    setScrollPosition: (scrollPosition: ScrollPosition, callback?: ((scrollPos: ScrollPosition) => void) | undefined) => void;
    private notifyAvailableSizeChange;
    private notifyRenderRangeChange;
    private notifyVerticalRenderRangeChange;
    private notifyHorizontalRenderRangeChange;
    private notifyScrollChange;
    private computeDirectionalRenderCount;
    getFixedSize(direction: 'horizontal' | 'vertical'): number;
    getFixedStartSize(direction: 'horizontal' | 'vertical'): number;
    getFixedEndSize(direction: 'horizontal' | 'vertical'): number;
    isColFixedEnd: (colIndex: number) => boolean;
    isColFixedStart: (colIndex: number) => boolean;
    isRowFixedEnd: (rowIndex: number) => boolean;
    isRowFixedStart: (rowIndex: number) => boolean;
    isColFixed: (colIndex: number) => boolean;
    isRowFixed: (rowIndex: number) => boolean;
    getFixedEndColsWidth: () => number;
    /**
     * Returns an array of offsets for all cols fixed at the end
     *
     * The order in the array is from leftmost col to the rightmost col
     * The reference for offset is the left side of the table.
     * The offsets take into account the scroll position and return the correct position.
     *
     * The indexes in the returned array are the absolute indexes of the cols, so the returned array is an array with holes
     *
     */
    getFixedEndColsOffsets: ({ skipScroll }?: {
        skipScroll: boolean;
    }) => number[];
    /**
     * Returns an array of offsets for all rows fixed at the end
     *
     * The order in the array is from topmost row to the bottom-most row
     * The reference for offset is the top side of the table.
     * The offsets take into account the scroll position and return the correct position.
     *
     * The indexes in the returned array are the absolute indexes of the rows, so the returned array is an array with holes
     *
     */
    getFixedEndRowsOffsets: ({ skipScroll }?: {
        skipScroll: boolean;
    }) => number[];
    getFixedStartColsWidth: () => number;
    getFixedEndRowsHeight: () => number;
    getFixedStartRowsHeight: () => number;
    computeRenderCount: (which?: WhichDirection) => {
        horizontal: number;
        vertical: number;
    };
    setRenderCount: ({ horizontal, vertical, }: {
        horizontal: number | undefined;
        vertical: number | undefined;
    }) => void;
    private notifyRenderCountChange;
    updateFixedCells: (config: {
        fixedColsStart?: number;
        fixedColsEnd?: number;
        fixedRowsStart?: number;
        fixedRowsEnd?: number;
    }) => void;
    getFixedCellInfo: () => {
        fixedRowsStart: number;
        fixedColsStart: number;
        fixedRowsEnd: number;
        fixedColsEnd: number;
    };
    updateRenderRange: (which?: WhichDirection) => void;
    getExtraSpanCellsForRange: ({ horizontal, vertical, }: {
        horizontal: RenderRangeType;
        vertical: RenderRangeType;
    }) => [number, number][];
    computeRenderRange: (which?: WhichDirection) => {
        horizontal: RenderRangeType;
        vertical: RenderRangeType;
        extraCells: [number, number][];
    };
    computeDirectionalRenderRange: (direction: 'horizontal' | 'vertical') => {
        startIndex: number;
        endIndex: number;
    };
    getItemAt: (scrollPos: number, direction: 'horizontal' | 'vertical') => number;
    getCellOffset: (rowIndex: number, colIndex: number) => {
        x: number;
        y: number;
    };
    getItemOffsetFor: (itemIndex: number, direction: 'horizontal' | 'vertical') => number;
    private computeCacheFor;
    private getItemSizeCacheFor;
    private computeItemSpanUpTo;
    private getCellSpan;
    getRowspan: (rowIndex: number, colIndex: number) => number;
    getColspan: (rowIndex: number, colIndex: number) => number;
    getRowspanParent: (rowIndex: number, colIndex: number) => number;
    getColspanParent: (rowIndex: number, colIndex: number) => number;
    getItemSpanParent: (rowIndex: number, colIndex: number, direction: 'horizontal' | 'vertical') => number;
    getRowHeightWithSpan: (rowIndex: number, colIndex: number, rowspan: number) => number;
    getColWidthWithSpan: (rowIndex: number, colIndex: number, colspan: number) => number;
    private getItemSizeWithSpan;
    getRowHeight: (rowIndex: number) => number;
    getColWidth: (colIndex: number) => number;
    /**
     * For now, this doesn't take into account the row/colspan, and it's okay not to
     * @param itemIndex
     * @returns the size of the specified item
     */
    getItemSize: (itemIndex: number, direction: 'horizontal' | 'vertical') => number;
    getTotalSize: () => {
        height: number;
        width: number;
    };
    getTotalSizeFor: (direction: 'horizontal' | 'vertical') => number;
    setRenderRange: ({ horizontal, vertical, extraCells, }: {
        horizontal: RenderRangeType;
        vertical: RenderRangeType;
        extraCells?: [number, number][] | undefined;
    }) => void;
    getRenderRangeCellCount: (range: TableRenderRange) => number;
    getExtraCells: () => [
        number,
        number
    ][];
    getScrollPosition: () => ScrollPosition;
    getRenderRange: () => TableRenderRange;
    onScroll: (fn: OnScrollFn) => () => void;
    onScrollStart: (fn: VoidFunction) => () => void;
    onScrollStop: (fn: (scrollPos: ScrollPosition) => void) => () => void;
    onRenderRangeChange: (fn: FnOnRenderRangeChange) => () => void;
    onVerticalRenderRangeChange: (fn: FnOnDirectionalRenderRangeChange) => () => void;
    onHorizontalRenderRangeChange: (fn: FnOnDirectionalRenderRangeChange) => () => void;
    onRenderCountChange: (fn: FnOnRenderCountChange) => () => void;
    onAvailableSizeChange: (fn: OnAvailableSizeChange) => () => void;
    onDestroy: (fn: VoidFn) => () => void;
    getAvailableSize: () => {
        width: number;
        height: number;
    };
    private notifyDestroy;
    destroy: () => void;
}

type RowSelectionStateItem = (any | any[])[];
type RowSelectionStateObject = {
    selectedRows: RowSelectionStateItem;
    deselectedRows: RowSelectionStateItem;
    defaultSelection: boolean;
} | {
    defaultSelection: true;
    deselectedRows: RowSelectionStateItem;
    selectedRows?: RowSelectionStateItem;
} | {
    defaultSelection: false;
    selectedRows: RowSelectionStateItem;
    deselectedRows?: RowSelectionStateItem;
};
type RowSelectionStateConfig<T> = {
    groupBy: DataSourceState<T>['groupBy'];
    groupDeepMap: DataSourceState<T>['groupDeepMap'];
    toPrimaryKey: DataSourceState<T>['toPrimaryKey'];
    totalCount: number;
    indexer: DataSourceState<T>['indexer'];
    lazyLoad: boolean;
    onlyUsePrimaryKeys: boolean;
};
type GetRowSelectionStateConfig<T> = () => RowSelectionStateConfig<T>;
type RowSelectionStateOverride = {
    getGroupKeysForPrimaryKey: RowSelectionState<any>['getGroupKeysForPrimaryKey'];
    getGroupByLength: RowSelectionState<any>['getGroupByLength'];
    getGroupCount: RowSelectionState<any>['getGroupCount'];
    getGroupKeysDirectlyInsideGroup: RowSelectionState<any>['getGroupKeysDirectlyInsideGroup'];
    getAllPrimaryKeysInsideGroup: RowSelectionState<any>['getAllPrimaryKeysInsideGroup'];
};
declare class RowSelectionState<T = any> {
    selectedRows: RowSelectionStateItem | null;
    deselectedRows: RowSelectionStateItem | null;
    defaultSelection: boolean;
    selectedMap: DeepMap<any, true>;
    deselectedMap: DeepMap<any, true>;
    onlyUsePrimaryKeys: boolean;
    selectionCache: DeepMap<any, boolean | null>;
    selectionCountCache: DeepMap<any, {
        selectedCount: number;
        deselectedCount: number;
    }>;
    getConfig: GetRowSelectionStateConfig<T>;
    getGroupKeysForPrimaryKey(pk: any): any[];
    getGroupDeepMap(): DeepMap<any, DeepMapGroupValueType<T, any>> | undefined;
    getGroupCount(groupKeys: any[]): number;
    getGroupKeysDirectlyInsideGroup(groupKeys: any[]): any[][];
    getAllPrimaryKeysInsideGroup(groupKeys: any[]): any[];
    getGroupByLength(): number;
    static from<T>(rowSeleStateObject: RowSelectionStateObject, getConfig: GetRowSelectionStateConfig<T>, overrides?: RowSelectionStateOverride): RowSelectionState<T>;
    constructor(state: RowSelectionStateObject | RowSelectionState, getConfig: GetRowSelectionStateConfig<T>, _forTestingOnly?: RowSelectionStateOverride);
    mapSet: (name: 'selected' | 'deselected', key: any | any[]) => void;
    _selectedMapSet: (key: any | any[]) => void;
    _deselectedMapSet: (key: any | any[]) => void;
    update(stateObject: RowSelectionStateObject): void;
    private xcache;
    getState(): RowSelectionStateObject;
    deselectAll(): void;
    selectAll(): void;
    isRowDefaultSelected(): boolean;
    isRowDefaultDeselected(): boolean;
    /**
     *
     * @param key the id of the row - if a row in a grouped datasource, this is the final row id, without the group keys
     * @param groupKeys the keys of row parents, in order
     * @returns Whether the row is selected or not.
     */
    isRowSelected(key: any, groupKeys?: any[]): boolean;
    isRowDeselected(key: any, groupKeys?: any[]): boolean;
    setRowSelected(key: string | number, selected: boolean, groupKeys?: any[]): void;
    /**
     * Returns if the selection state ('full','partial','none') for the current group
     *
     * The selection state will be full (true) if either of those are true:
     *  * the group keys are specified as selected
     *  * all the children are specified as selected
     *
     * The selection state will be partial (null) if either of those are true:
     *  * the group keys are partially selected
     *  * some of the children are specified as selected
     *
     *
     * @param groupKeys the keys of the group row
     * @param children leaf children that belong to the group
     * @returns boolean
     */
    getGroupRowSelectionState(initialGroupKeys: any[]): boolean | null;
    private getGroupRowBooleanSelectionStateFromParent;
    isGroupRowPartlySelected(groupKeys: any[]): boolean;
    isGroupRowSelected(groupKeys: any[]): boolean;
    isGroupRowDeselected(groupKeys: any[]): boolean;
    selectGroupRow(groupKeys: any[]): void;
    deselectGroupRow(groupKeys: any[]): void;
    setRowAsSelected(key: string | number, groupKeys?: any[]): void;
    setRowAsDeselected(key: string | number, groupKeys?: any[]): void;
    deselectRow(key: any, groupKeys?: any[]): void;
    selectRow(key: any, groupKeys?: any[]): void;
    toggleGroupRowSelection(groupKeys: any[]): void;
    toggleRowSelection(key: string | number, groupKeys?: any[] | undefined): void;
    getSelectedCount(): number;
    getDeselectedCount(): number;
    getSelectionCountFor(groupKeys?: any[], parentSelected?: boolean): {
        selectedCount: number;
        deselectedCount: number;
    };
}

type MultiRowSelectorOptions = {
    getIdForIndex: (index: number) => string | number;
};
declare class MultiRowSelector {
    getIdForIndex: MultiRowSelectorOptions['getIdForIndex'];
    multiSelectStartIndex: number;
    multiSelectEndIndex?: number;
    _rowSelectionState: RowSelectionState;
    constructor(options: MultiRowSelectorOptions);
    set rowSelectionState(rowSelectionState: RowSelectionState);
    get rowSelectionState(): RowSelectionState;
    private selectRange;
    private deselectRange;
    /**
     * This is the single click, without any modifier
     */
    resetClick(index: number): void;
    /**
     * This is the click with ctrl/cmd key pressed
     * @param index
     */
    singleAddClick(index: number): void;
    multiSelectClick(index: number): void;
}

interface InfiniteTableComputedValues<T> {
    scrollbars: {
        vertical: boolean;
        horizontal: boolean;
    };
    multiRowSelector: MultiRowSelector;
    renderSelectionCheckBox: boolean;
    rowspan?: MatrixBrainOptions['rowspan'];
    computedPinnedStartOverflow: boolean;
    computedPinnedEndOverflow: boolean;
    computedPinnedStartColumns: InfiniteTableComputedColumn<T>[];
    computedPinnedEndColumns: InfiniteTableComputedColumn<T>[];
    computedUnpinnedColumns: InfiniteTableComputedColumn<T>[];
    computedVisibleColumns: InfiniteTableComputedColumn<T>[];
    computedVisibleColumnsMap: Map<string, InfiniteTableComputedColumn<T>>;
    computedColumnsMap: Map<string, InfiniteTableComputedColumn<T>>;
    computedColumnsMapInInitialOrder: Map<string, InfiniteTableComputedColumn<T>>;
    computedColumnOrder: InfiniteTablePropColumnOrderNormalized;
    computedPinnedStartColumnsWidth: number;
    computedPinnedStartWidth: number;
    computedPinnedEndColumnsWidth: number;
    computedPinnedEndWidth: number;
    computedUnpinnedColumnsWidth: number;
    computedUnpinnedOffset: number;
    computedPinnedEndOffset: number;
    computedRemainingSpace: number;
    fieldsToColumn: Map<keyof T, InfiniteTableComputedColumn<T>>;
    toggleGroupRow: (groupKeys: any[]) => void;
    columnSize: (colIndex: number) => number;
}

type PointCoords = {
    top: number;
    left: number;
};

type TableRenderCellFnParam = {
    domRef: RefCallback<HTMLElement>;
    rowIndex: number;
    colIndex: number;
    rowspan: number;
    colspan: number;
    hidden: boolean;
    width: number;
    height: number;
    widthWithColspan: number;
    heightWithRowspan: number;
    rowFixed: FixedPosition;
    colFixed: FixedPosition;
    onMouseEnter: VoidFunction;
    onMouseLeave: VoidFunction;
};
type TableRenderCellFn = (param: TableRenderCellFnParam) => Renderable;
declare class ReactHeadlessTableRenderer extends Logger {
    private brain;
    private destroyed;
    private scrolling;
    cellHoverClassNames: string[];
    name: string;
    private itemDOMElements;
    private itemDOMRefs;
    private updaters;
    private mappedCells;
    private items;
    private currentHoveredRow;
    private onDestroy;
    private hoverRowUpdatesInProgress;
    private infiniteNode;
    private getInfiniteNode;
    setTransform: (element: HTMLElement, _rowIndex: number, colIndex: number, { x, y, scrollLeft, scrollTop, }: {
        x: number;
        y: number;
        scrollLeft?: boolean | undefined;
        scrollTop?: boolean | undefined;
    }, zIndex: number | 'auto' | undefined | null) => void;
    constructor(brain: MatrixBrain);
    getFullyVisibleRowsRange: () => {
        start: number;
        end: number;
    } | null;
    getScrollPositionForScrollRowIntoView: (rowIndex: number, config?: {
        scrollAdjustPosition?: ScrollAdjustPosition;
        offset?: number;
    }) => ScrollPosition | null;
    getScrollPositionForScrollColumnIntoView: (colIndex: number, config?: {
        scrollAdjustPosition?: ScrollAdjustPosition;
        offset?: number;
    }) => ScrollPosition | null;
    getScrollPositionForScrollCellIntoView: (rowIndex: number, colIndex: number, config?: {
        rowScrollAdjustPosition?: ScrollAdjustPosition;
        colScrollAdjustPosition?: ScrollAdjustPosition;
        scrollAdjustPosition?: ScrollAdjustPosition;
        offsetTop: number;
        offsetLeft: number;
    }) => ScrollPosition | null;
    isRowFullyVisible: (rowIndex: number, offsetMargin?: number) => boolean;
    isRowVisible: (rowIndex: number, offsetMargin?: number) => boolean;
    isRowRendered: (rowIndex: number) => boolean;
    isCellVisible: (rowIndex: number, colIndex: number) => boolean;
    isCellFullyVisible: (rowIndex: number, colIndex: number) => boolean;
    isColumnFullyVisible: (colIndex: number, offsetMargin?: number) => boolean;
    isColumnVisible: (colIndex: number, offsetMargin?: number) => boolean;
    isCellRendered: (rowIndex: number, colIndex: number) => boolean;
    isColumnRendered: (colIndex: number) => boolean;
    getExtraSpanCellsForRange: (range: TableRenderRange) => [number, number][];
    renderRange: (range: TableRenderRange, { renderCell, force, onRender, }: {
        force?: boolean | undefined;
        renderCell: TableRenderCellFn;
        onRender: (items: Renderable[]) => void;
    }) => Renderable[];
    private renderElement;
    getFixedRanges: (currentRenderRange: TableRenderRange) => TableRenderRange[];
    private isCellFixed;
    private isCellCovered;
    private renderCellAtElement;
    private onMouseEnter;
    private addHoverClass;
    private onMouseLeave;
    private removeHoverClass;
    private updateHoverClassNamesForRow;
    private updateElementPosition;
    private onScrollStart;
    private onScrollStop;
    adjustFixedElementsOnScroll: (scrollPosition?: ScrollPosition) => void;
    destroy: () => void;
    reset(): void;
}

type ComponentStateContext<T_STATE, T_ACTIONS> = {
    getComponentState: () => T_STATE;
    componentState: T_STATE;
    componentActions: T_ACTIONS;
};
type ComponentStateGeneratedActions<T_STATE> = {
    [k in keyof T_STATE]: T_STATE[k] | React.SetStateAction<T_STATE[k]>;
};
type ComponentInterceptedActions<T_STATE> = {
    [k in keyof T_STATE]?: (value: T_STATE[k], { actions, state, }: {
        actions: ComponentStateGeneratedActions<T_STATE>;
        state: T_STATE;
    }) => void | boolean;
};
type ComponentMappedCallbacks<T_STATE> = {
    [k in keyof T_STATE]: (value: T_STATE[k], state: T_STATE) => {
        callbackName: string;
        callbackParams: any[];
    };
};
type ComponentStateActions<T_STATE> = ComponentStateGeneratedActions<T_STATE>;

type CellPosition = {
    rowIndex: number;
    colIndex: number;
};

type SubscriptionCallbackOnChangeFn<T> = (node: T | null) => void;
interface SubscriptionCallback<T> {
    (node: T, callback?: () => void): void;
    get: () => T | null;
    destroy: VoidFn;
    onChange: (fn: SubscriptionCallbackOnChangeFn<T>) => VoidFn;
}

declare class ScrollListener {
    private scrollPosition;
    private onScrollFns;
    getScrollPosition: () => ScrollPosition;
    onScroll: (fn: OnScrollFn) => () => void;
    setScrollPosition: (scrollPosition: ScrollPosition) => void;
    private notifyScrollChange;
    destroy: () => void;
}

type CellContextMenuLocation = {
    rowId: any;
    rowIndex: number;
    columnId: string;
    colIndex: number;
};
type CellContextMenuLocationWithEvent = CellContextMenuLocation & {
    event: React.MouseEvent;
    target: HTMLElement;
};
type ContextMenuLocationWithEvent = Partial<CellContextMenuLocation> & {
    event: React.MouseEvent;
    target: HTMLElement;
};
interface InfiniteTableSetupState<T> {
    renderer: ReactHeadlessTableRenderer;
    getDOMNodeForCell: (cellPos: CellPosition) => HTMLElement | null;
    onRenderUpdater: SubscriptionCallback<Renderable>;
    propsCache: Map<keyof InfiniteTableProps<T>, WeakMap<any, any>>;
    columnsWhenInlineGroupRenderStrategy?: Map<string, InfiniteTableColumn<T>>;
    domRef: MutableRefObject<HTMLDivElement | null>;
    editingValueRef: MutableRefObject<any | null>;
    scrollerDOMRef: MutableRefObject<HTMLDivElement | null>;
    portalDOMRef: MutableRefObject<HTMLDivElement | null>;
    focusDetectDOMRef: MutableRefObject<HTMLDivElement | null>;
    activeCellIndicatorDOMRef: MutableRefObject<HTMLDivElement | null>;
    onRowHeightCSSVarChange: SubscriptionCallback<number>;
    onColumnMenuClick: SubscriptionCallback<{
        target: HTMLElement | EventTarget;
        column: InfiniteTableComputedColumn<T>;
    }>;
    onFilterOperatorMenuClick: SubscriptionCallback<{
        target: HTMLElement | EventTarget;
        column: InfiniteTableComputedColumn<T>;
    }>;
    cellContextMenu: SubscriptionCallback<CellContextMenuLocationWithEvent>;
    contextMenu: SubscriptionCallback<ContextMenuLocationWithEvent>;
    cellContextMenuVisibleFor: CellContextMenuLocation | null;
    contextMenuVisibleFor: (Partial<CellContextMenuLocation> & {
        point: PointCoords;
    }) | null;
    columnMenuVisibleForColumnId: string | null;
    columnMenuTargetRef: MutableRefObject<HTMLElement | null>;
    columnMenuVisibleKey: string | number;
    filterOperatorMenuVisibleForColumnId: string | null;
    onColumnHeaderHeightCSSVarChange: SubscriptionCallback<number>;
    cellClick: SubscriptionCallback<CellPosition & {
        event: MouseEvent;
    }>;
    cellMouseDown: SubscriptionCallback<CellPosition & {
        event: MouseEvent;
    }>;
    keyDown: SubscriptionCallback<KeyboardEvent>;
    columnsWhenGrouping?: InfiniteTableColumnsMap<T>;
    bodySize: Size;
    brain: MatrixBrain;
    headerBrain: MatrixBrain;
    focused: boolean;
    ready: boolean;
    columnReorderDragColumnId: false | string;
    columnVisibilityForGrouping: Record<string, false>;
    focusedWithin: boolean;
    scrollPosition: ScrollPosition;
    pinnedStartScrollListener: ScrollListener;
    pinnedEndScrollListener: ScrollListener;
    editingCell: {
        active: true;
        accepted: false;
        columnId: string;
        value: any;
        persisted: false;
        initialValue: any;
        rowIndex: number;
        primaryKey: any;
    } | null | {
        active: false;
        columnId: string;
        rowIndex: number;
        value: any;
        initialValue: any;
        primaryKey?: any;
        waiting: 'accept' | 'persist' | false;
        accepted: boolean | Error;
        persisted: boolean | Error;
        cancelled?: boolean;
    };
}
type InfiniteTableColumnGroupsDepthsMap = Map<string, number>;
type InfiniteTablePropPivotTotalColumnPosition = false | 'start' | 'end';
type InfiniteTablePropPivotGrandTotalColumnPosition = InfiniteTablePropPivotTotalColumnPosition;
interface InfiniteTableMappedState<T> {
    id: InfiniteTableProps<T>['id'];
    scrollTopKey: InfiniteTableProps<T>['scrollTopKey'];
    multiSortBehavior: NonUndefined<InfiniteTableProps<T>['multiSortBehavior']>;
    viewportReservedWidth: InfiniteTableProps<T>['viewportReservedWidth'];
    resizableColumns: InfiniteTableProps<T>['resizableColumns'];
    groupColumn: InfiniteTableProps<T>['groupColumn'];
    onKeyDown: InfiniteTableProps<T>['onKeyDown'];
    onCellClick: InfiniteTableProps<T>['onCellClick'];
    headerOptions: NonUndefined<InfiniteTableProps<T>['headerOptions']>;
    onScrollbarsChange: InfiniteTableProps<T>['onScrollbarsChange'];
    getContextMenuItems: InfiniteTableProps<T>['getContextMenuItems'];
    getCellContextMenuItems: InfiniteTableProps<T>['getCellContextMenuItems'];
    getColumnMenuItems: InfiniteTableProps<T>['getColumnMenuItems'];
    getFilterOperatorMenuItems: InfiniteTableProps<T>['getFilterOperatorMenuItems'];
    columnPinning: InfiniteTablePropColumnPinning;
    loadingText: InfiniteTableProps<T>['loadingText'];
    components: InfiniteTableProps<T>['components'];
    columns: InfiniteTableColumnsMap<T>;
    pivotColumns: InfiniteTableProps<T>['pivotColumns'];
    onReady: InfiniteTableProps<T>['onReady'];
    onContextMenu: InfiniteTableProps<T>['onContextMenu'];
    onCellContextMenu: InfiniteTableProps<T>['onCellContextMenu'];
    onSelfFocus: InfiniteTableProps<T>['onSelfFocus'];
    onSelfBlur: InfiniteTableProps<T>['onSelfBlur'];
    onFocusWithin: InfiniteTableProps<T>['onFocusWithin'];
    onBlurWithin: InfiniteTableProps<T>['onBlurWithin'];
    onEditCancelled: InfiniteTableProps<T>['onEditCancelled'];
    onEditRejected: InfiniteTableProps<T>['onEditRejected'];
    onEditAccepted: InfiniteTableProps<T>['onEditAccepted'];
    shouldAcceptEdit: InfiniteTableProps<T>['shouldAcceptEdit'];
    persistEdit: InfiniteTableProps<T>['persistEdit'];
    onEditPersistSuccess: InfiniteTableProps<T>['onEditPersistSuccess'];
    onEditPersistError: InfiniteTableProps<T>['onEditPersistError'];
    autoSizeColumnsKey: InfiniteTableProps<T>['autoSizeColumnsKey'];
    activeRowIndex: InfiniteTableProps<T>['activeRowIndex'];
    activeCellIndex: InfiniteTableProps<T>['activeCellIndex'];
    scrollStopDelay: NonUndefined<InfiniteTableProps<T>['scrollStopDelay']>;
    onScrollToTop: InfiniteTableProps<T>['onScrollToTop'];
    onScrollToBottom: InfiniteTableProps<T>['onScrollToBottom'];
    onScrollStop: InfiniteTableProps<T>['onScrollStop'];
    scrollToBottomOffset: InfiniteTableProps<T>['scrollToBottomOffset'];
    focusedClassName: InfiniteTableProps<T>['focusedClassName'];
    focusedWithinClassName: InfiniteTableProps<T>['focusedWithinClassName'];
    focusedStyle: InfiniteTableProps<T>['focusedStyle'];
    focusedWithinStyle: InfiniteTableProps<T>['focusedWithinStyle'];
    showSeparatePivotColumnForSingleAggregation: NonUndefined<InfiniteTableProps<T>['showSeparatePivotColumnForSingleAggregation']>;
    domProps: InfiniteTableProps<T>['domProps'];
    editable: InfiniteTableProps<T>['editable'];
    columnMenuRealignDelay: NonUndefined<InfiniteTableProps<T>['columnMenuRealignDelay']>;
    columnDefaultEditable: InfiniteTableProps<T>['columnDefaultEditable'];
    columnDefaultFilterable: InfiniteTableProps<T>['columnDefaultFilterable'];
    columnDefaultSortable: InfiniteTableProps<T>['columnDefaultSortable'];
    rowStyle: InfiniteTableProps<T>['rowStyle'];
    rowProps: InfiniteTableProps<T>['rowProps'];
    rowClassName: InfiniteTableProps<T>['rowClassName'];
    pinnedStartMaxWidth: InfiniteTableProps<T>['pinnedStartMaxWidth'];
    pinnedEndMaxWidth: InfiniteTableProps<T>['pinnedEndMaxWidth'];
    pivotColumn: InfiniteTableProps<T>['pivotColumn'];
    pivotColumnGroups: InfiniteTablePropColumnGroupsMap;
    columnMinWidth: NonUndefined<InfiniteTableProps<T>['columnMinWidth']>;
    columnMaxWidth: NonUndefined<InfiniteTableProps<T>['columnMaxWidth']>;
    columnDefaultWidth: NonUndefined<InfiniteTableProps<T>['columnDefaultWidth']>;
    columnDefaultFlex: InfiniteTableProps<T>['columnDefaultFlex'];
    columnCssEllipsis: NonUndefined<InfiniteTableProps<T>['columnCssEllipsis']>;
    draggableColumns: NonUndefined<InfiniteTableProps<T>['draggableColumns']>;
    sortable: InfiniteTableProps<T>['sortable'];
    hideEmptyGroupColumns: NonUndefined<InfiniteTableProps<T>['hideEmptyGroupColumns']>;
    hideColumnWhenGrouped: NonUndefined<InfiniteTableProps<T>['hideColumnWhenGrouped']>;
    keyboardSelection: NonUndefined<InfiniteTableProps<T>['keyboardSelection']>;
    columnOrder: NonUndefined<InfiniteTableProps<T>['columnOrder']>;
    showZebraRows: NonUndefined<InfiniteTableProps<T>['showZebraRows']>;
    showHoverRows: NonUndefined<InfiniteTableProps<T>['showHoverRows']>;
    header: NonUndefined<InfiniteTableProps<T>['header']>;
    virtualizeColumns: NonUndefined<InfiniteTableProps<T>['virtualizeColumns']>;
    rowHeight: number;
    columnHeaderHeight: number;
    licenseKey: NonUndefined<InfiniteTableProps<T>['licenseKey']>;
    columnVisibility: InfiniteTablePropColumnVisibility;
    columnSizing: InfiniteTablePropColumnSizing;
    columnTypes: InfiniteTablePropColumnTypes<T>;
    columnGroups: InfiniteTablePropColumnGroupsMap;
    collapsedColumnGroups: NonUndefined<InfiniteTableProps<T>['collapsedColumnGroups']>;
    pivotTotalColumnPosition: NonUndefined<InfiniteTableProps<T>['pivotTotalColumnPosition']>;
    pivotGrandTotalColumnPosition: InfiniteTableProps<T>['pivotGrandTotalColumnPosition'];
}
interface InfiniteTableDerivedState<T> {
    groupBy: DataSourceProps<T>['groupBy'];
    computedColumns: Map<string, InfiniteTableColumn<T>>;
    initialColumns: InfiniteTableProps<T>['columns'];
    showColumnFilters: NonUndefined<InfiniteTableProps<T>['showColumnFilters']>;
    groupRenderStrategy: NonUndefined<InfiniteTableProps<T>['groupRenderStrategy']>;
    columnHeaderCssEllipsis: NonUndefined<InfiniteTableProps<T>['columnHeaderCssEllipsis']>;
    keyboardNavigation: NonUndefined<InfiniteTableProps<T>['keyboardNavigation']>;
    columnGroupsDepthsMap: InfiniteTableColumnGroupsDepthsMap;
    columnGroupsMaxDepth: number;
    computedColumnGroups: InfiniteTablePropColumnGroupsMap;
    rowHeightCSSVar: string;
    columnHeaderHeightCSSVar: string;
    controlledColumnVisibility: boolean;
}
type InfiniteTableActions<T> = ComponentStateActions<InfiniteTableState<T>>;
interface InfiniteTableState<T> extends InfiniteTableMappedState<T>, InfiniteTableDerivedState<T>, InfiniteTableSetupState<T> {
}

type ArrayOfIds = Pick<InfiniteTable_RowInfoBase<any>, 'id'>[];
type InfiniteTableSelectionApi = {
    get allRowsSelected(): boolean;
    isRowSelected(pk: any, groupKeys?: any[]): boolean;
    isRowDeselected(pk: any, groupKeys?: any[]): boolean;
    selectRow(pk: any, groupKeys?: any[]): void;
    deselectRow(pk: any, groupKeys?: any[]): void;
    toggleRowSelection(pk: any, groupKeys?: any[]): void;
    selectGroupRow(groupKeys: any[], children?: ArrayOfIds): void;
    deselectGroupRow(groupKeys: any[], children?: ArrayOfIds): void;
    toggleGroupRowSelection(groupKeys: any[], children?: ArrayOfIds): void;
    getGroupRowSelectionState(groupKeys: any[]): boolean | null;
    getSelectedPrimaryKeys(rowSelection?: RowSelectionStateObject): (string | number)[];
    selectAll(): void;
    deselectAll(): void;
};

type InfiniteTableEventHandlerContext<T> = {
    getComputed: () => InfiniteTableComputedValues<T>;
    getState: () => InfiniteTableState<T>;
    actions: InfiniteTableActions<T>;
    cloneRowSelection: (rowSelection: RowSelectionState<T>) => RowSelectionState<T>;
    getDataSourceState: () => DataSourceState<T>;
    dataSourceActions: DataSourceComponentActions<T>;
    api: InfiniteTableApi<T>;
    dataSourceApi: DataSourceApi<T>;
};
type InfiniteTableKeyboardEventHandlerContext<T> = InfiniteTableEventHandlerContext<T>;
type InfiniteTableCellClickEventHandlerContext<T> = InfiniteTableEventHandlerContext<T> & {
    rowIndex: number;
    colIndex: number;
    column: InfiniteTableComputedColumn<T>;
    columnApi: InfiniteTableColumnApi<T>;
};

type OnCellClickContext<T> = InfiniteTableCellClickEventHandlerContext<T> & InfiniteTableKeyboardEventHandlerContext<T>;

interface InfiniteTableContextValue<T> {
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
interface InfiniteTablePublicContext<T> {
    api: InfiniteTableApi<T>;
    dataSourceApi: DataSourceApi<T>;
    getState: () => InfiniteTableState<T>;
    getDataSourceState: () => DataSourceState<T>;
}
interface InfiniteTableCellContext<T> {
    rowIndex: OnCellClickContext<T>['rowIndex'];
    colIndex: OnCellClickContext<T>['colIndex'];
    column: InfiniteTableComputedColumn<T>;
    columnApi: InfiniteTableColumnApi<T>;
}

type ValueGetterParams<T> = {
    data: T;
    field?: keyof T;
};
type GroupKeyType$1<T extends any = any> = T;
type GroupByValueGetter<T> = (params: ValueGetterParams<T>) => any;
type GroupBy<DataType, KeyType = any> = {
    toKey?: (value: any, data: DataType) => GroupKeyType$1<KeyType>;
    column?: Partial<InfiniteTableGroupColumnBase<DataType>>;
} & AllXOR<[
    {
        field: KeyOfNoSymbol<DataType>;
    },
    {
        valueGetter: GroupByValueGetter<DataType>;
        field: KeyOfNoSymbol<DataType>;
    },
    {
        valueGetter: GroupByValueGetter<DataType>;
        field?: KeyOfNoSymbol<DataType>;
        groupField: string;
    }
]>;

type RenderRange = {
    renderStartIndex: number;
    renderEndIndex: number;
};

type DataSourceMutation<T> = {
    type: 'delete';
    primaryKey: any;
    originalData: T;
    metadata: any;
} | {
    type: 'update';
    primaryKey: any;
    data: Partial<T>;
    originalData: T;
    metadata: any;
} | {
    type: 'insert';
    primaryKey: any;
    position: 'before' | 'after';
    originalData: null;
    data: T;
    metadata: any;
};
declare class DataSourceCache<DataType, PrimaryKeyType = string> {
    private affectedFields;
    private allFieldsAffected;
    private primaryKeyToData;
    static clone<DataType, PrimaryKeyType = string>(cache: DataSourceCache<DataType, PrimaryKeyType>, { light }?: {
        light?: boolean;
    }): DataSourceCache<DataType, PrimaryKeyType>;
    getAffectedFields: () => true | Set<keyof DataType>;
    delete: (primaryKey: PrimaryKeyType, originalData: DataType, metadata: any) => void;
    insert: (primaryKey: PrimaryKeyType, data: DataType, position: 'before' | 'after', metadata: any) => void;
    update: (primaryKey: PrimaryKeyType, data: Partial<DataType>, originalData: DataType, metadata: any) => void;
    clear: () => void;
    isEmpty: () => boolean;
    removeInfo: (primaryKey: PrimaryKeyType) => void;
    getMutationsForPrimaryKey: (primaryKey: PrimaryKeyType) => DataSourceMutation<DataType>[] | undefined;
    getMutations: () => Map<string, DataSourceMutation<DataType>[]>;
}

type BooleanDeepCollectionStateKeys<KeyType> = true | KeyType[][];
type BooleanDeepCollectionStateObject<KeyType> = {
    positiveItems: BooleanDeepCollectionStateKeys<KeyType>;
    negativeItems: BooleanDeepCollectionStateKeys<KeyType>;
};
declare abstract class BooleanDeepCollectionState<StateObject, KeyType extends any = any> {
    protected positiveMap?: DeepMap<KeyType, true>;
    protected negativeMap?: DeepMap<KeyType, true>;
    protected allNegative: boolean;
    protected allPositive: boolean;
    private initialState;
    constructor(state: BooleanDeepCollectionStateObject<KeyType> | BooleanDeepCollectionState<StateObject, KeyType>);
    abstract getPositiveFromState(state: StateObject): BooleanDeepCollectionStateKeys<KeyType>;
    abstract getNegativeFromState(state: StateObject): BooleanDeepCollectionStateKeys<KeyType>;
    abstract getState(): StateObject;
    protected getInitialState(): BooleanDeepCollectionStateObject<KeyType>;
    destroy(): void;
    private update;
    protected areAllNegative(): boolean;
    protected areAllPositive(): boolean;
    protected makeAllNegative(): void;
    protected makeAllPositive(): void;
    protected isItemPositive(keys: KeyType[]): boolean | undefined;
    protected isItemNegative(keys: KeyType[]): boolean;
    protected setItemValue(keys: KeyType[], shouldMakePositive: boolean): void;
    protected makeItemNegative(keys: KeyType[]): void;
    protected makeItemPositive(keys: KeyType[]): void;
    protected toggleItem(keys: KeyType[]): void;
}

declare class GroupRowsState<KeyType extends any = any> extends BooleanDeepCollectionState<DataSourcePropGroupRowsStateObject<KeyType>, KeyType> {
    constructor(state: DataSourcePropGroupRowsStateObject<KeyType> | GroupRowsState<KeyType>);
    getState(): DataSourcePropGroupRowsStateObject<KeyType>;
    getPositiveFromState(state: DataSourcePropGroupRowsStateObject<KeyType>): DataSourceGroupRowsList<KeyType>;
    getNegativeFromState(state: DataSourcePropGroupRowsStateObject<KeyType>): DataSourceGroupRowsList<KeyType>;
    areAllCollapsed(): boolean;
    areAllExpanded(): boolean;
    collapseAll(): void;
    expandAll(): void;
    isGroupRowExpanded(keys: KeyType[]): boolean | undefined;
    isGroupRowCollapsed(keys: KeyType[]): boolean;
    setGroupRowExpanded(keys: KeyType[], shouldExpand: boolean): void;
    collapseGroupRow(keys: KeyType[]): void;
    expandGroupRow(keys: KeyType[]): void;
    toggleGroupRow(keys: KeyType[]): void;
}

declare class Indexer<DataType, PrimaryKeyType = string> {
    primaryKeyToData: Map<string, DataType>;
    private add;
    clear: () => void;
    getDataForPrimaryKey: (primaryKey: PrimaryKeyType | string) => DataType | undefined;
    indexArray: (arr: DataType[], options: {
        toPrimaryKey: (data: DataType) => PrimaryKeyType;
        cache?: DataSourceCache<DataType, string> | undefined;
    }) => DataType[];
}

interface DataSourceDataParams<T> {
    originalDataArray: T[];
    sortInfo?: DataSourceSortInfo<T>;
    groupBy?: DataSourcePropGroupBy<T>;
    pivotBy?: DataSourcePropPivotBy<T>;
    filterValue?: DataSourcePropFilterValue<T>;
    refetchKey?: DataSourceProps<T>['refetchKey'];
    groupRowsState?: DataSourcePropGroupRowsStateObject<any>;
    lazyLoadBatchSize?: number;
    lazyLoadStartIndex?: number;
    groupKeys?: any[];
    append?: boolean;
    aggregationReducers?: DataSourcePropAggregationReducers<T>;
    livePaginationCursor?: DataSourceLivePaginationCursorValue;
    __cursorId?: DataSourceSetupState<T>['cursorId'];
    changes?: DataSourceDataParamsChanges<T>;
}
type DataSourceDataParamsChanges<T> = Partial<Record<keyof Omit<DataSourceDataParams<T>, 'originalDataArray' | 'changes'>, true>>;
type DataSourceSingleSortInfo<T> = MultisortInfoAllowMultipleFields<T> & {
    id?: string;
};
type DataSourceGroupBy<T> = GroupBy<T, any>;
type DataSourcePivotBy<T> = PivotBy<T, any>;
type DataSourceSortInfo<T> = null | DataSourceSingleSortInfo<T> | DataSourceSingleSortInfo<T>[];
type DataSourcePropSortInfo<T> = DataSourceSortInfo<T>;
type DataSourceRemoteData<T> = {
    data: T[] | LazyGroupDataItem<T>[];
    mappings?: DataSourceMappings;
    cache?: boolean;
    error?: string;
    totalCount?: number;
    totalCountUnfiltered?: number;
    livePaginationCursor?: DataSourceLivePaginationCursorValue;
};
type DataSourceData<T> = T[] | DataSourceRemoteData<T> | Promise<T[] | DataSourceRemoteData<T>> | ((dataInfo: DataSourceDataParams<T>) => T[] | Promise<T[] | DataSourceRemoteData<T>>);
type DataSourceGroupRowsList<KeyType> = true | KeyType[][];
type DataSourcePropGroupRowsStateObject<KeyType> = {
    expandedRows: DataSourceGroupRowsList<KeyType>;
    collapsedRows: DataSourceGroupRowsList<KeyType>;
};
type DataSourcePropGroupBy<T> = DataSourceGroupBy<T>[];
type DataSourcePropPivotBy<T> = DataSourcePivotBy<T>[];
interface DataSourceMappedState<T> {
    aggregationReducers?: DataSourceProps<T>['aggregationReducers'];
    livePagination: DataSourceProps<T>['livePagination'];
    refetchKey: NonUndefined<DataSourceProps<T>['refetchKey']>;
    isRowSelected: DataSourceProps<T>['isRowSelected'];
    onDataArrayChange: DataSourceProps<T>['onDataArrayChange'];
    onDataMutations: DataSourceProps<T>['onDataMutations'];
    onReady: DataSourceProps<T>['onReady'];
    rowInfoReducers: DataSourceProps<T>['rowInfoReducers'];
    lazyLoad: DataSourceProps<T>['lazyLoad'];
    useGroupKeysForMultiRowSelection: NonUndefined<DataSourceProps<T>['useGroupKeysForMultiRowSelection']>;
    onDataParamsChange: DataSourceProps<T>['onDataParamsChange'];
    data: DataSourceProps<T>['data'];
    sortFunction: DataSourceProps<T>['sortFunction'];
    filterFunction: DataSourceProps<T>['filterFunction'];
    filterValue: DataSourceProps<T>['filterValue'];
    filterTypes: NonUndefined<DataSourceProps<T>['filterTypes']>;
    primaryKey: DataSourceProps<T>['primaryKey'];
    filterDelay: NonUndefined<DataSourceProps<T>['filterDelay']>;
    groupBy: NonUndefined<DataSourceProps<T>['groupBy']>;
    pivotBy: DataSourceProps<T>['pivotBy'];
    loading: NonUndefined<DataSourceProps<T>['loading']>;
    sortTypes: NonUndefined<DataSourceProps<T>['sortTypes']>;
    collapseGroupRowsOnDataFunctionChange: NonUndefined<DataSourceProps<T>['collapseGroupRowsOnDataFunctionChange']>;
    sortInfo: DataSourceSingleSortInfo<T>[] | null;
}
type DataSourceRawReducer<T, RESULT_TYPE> = {
    initialValue?: RESULT_TYPE | (() => RESULT_TYPE);
    reducer: (accumulator: any, value: T) => RESULT_TYPE;
    done?: (accumulatedValue: RESULT_TYPE, array: T[]) => RESULT_TYPE;
};
type DataSourceAggregationReducer<T, AggregationResultType> = {
    name?: string;
    field?: keyof T;
    initialValue?: AggregationResultType | (() => any);
    getter?: (data: T) => any;
    reducer: string | ((accumulator: any, value: any, data: T, index: number, groupKeys: any[] | undefined) => AggregationResultType | any);
    done?: (accumulatedValue: AggregationResultType | any, array: T[]) => AggregationResultType;
    pivotColumn?: ColumnTypeWithInherit<Partial<InfiniteTableColumn<T>>> | (({ column, }: {
        column: InfiniteTablePivotFinalColumnVariant<T>;
    }) => ColumnTypeWithInherit<Partial<InfiniteTablePivotColumn<T>>>);
};
type ColumnTypeWithInherit<COL_TYPE> = COL_TYPE & {
    inheritFromColumn?: string | boolean;
};
type DataSourceMappings = Record<'totals' | 'values', string>;
type LazyGroupDataItem<DataType> = {
    data: Partial<DataType>;
    keys: any[];
    aggregations?: Record<string, any>;
    dataset?: DataSourceRemoteData<DataType>;
    totalChildrenCount?: number;
    pivot?: {
        values: Record<string, any>;
        totals?: Record<string, any>;
    };
};
type LazyRowInfoGroup<DataType> = {
    /**
     * Those are direct children of the current lazy group row
     */
    children: LazyGroupDataItem<DataType>[];
    childrenLoading: boolean;
    childrenAvailable: boolean;
    cache: boolean;
    totalCount: number;
    totalCountUnfiltered: number;
    error?: string;
};
type LazyGroupDataDeepMap<DataType, KeyType = string> = DeepMap<KeyType, LazyRowInfoGroup<DataType>>;
interface DataSourceSetupState<T> {
    indexer: Indexer<T, any>;
    idToIndexMap: Map<any, number>;
    cache?: DataSourceCache<T>;
    unfilteredCount: number;
    filteredCount: number;
    rowInfoReducerResults?: Record<string, any>;
    originalDataArrayChanged: boolean;
    originalDataArrayChangedInfo: {
        timestamp: number;
        mutations?: Map<string, DataSourceMutation<T>[]>;
    };
    lazyLoadCacheOfLoadedBatches: DeepMap<string, true>;
    pivotMappings?: DataSourceMappings;
    propsCache: Map<keyof DataSourceProps<T>, WeakMap<any, any>>;
    showSeparatePivotColumnForSingleAggregation: boolean;
    dataParams?: DataSourceDataParams<T>;
    originalLazyGroupData: LazyGroupDataDeepMap<T>;
    originalLazyGroupDataChangeDetect: number | string;
    scrollStopDelayUpdatedByTable: number;
    notifyScrollbarsChange: SubscriptionCallback<Scrollbars>;
    notifyScrollStop: SubscriptionCallback<ScrollStopInfo>;
    notifyRenderRangeChange: SubscriptionCallback<RenderRange>;
    originalDataArray: T[];
    lastFilterDataArray?: T[];
    lastSortDataArray?: T[];
    lastGroupDataArray?: InfiniteTableRowInfo<T>[];
    dataArray: InfiniteTableRowInfo<T>[];
    groupDeepMap?: DeepMap<GroupKeyType, DeepMapGroupValueType<T, any>>;
    groupRowsIndexesInDataArray?: number[];
    reducerResults?: Record<string, AggregationReducerResult>;
    allRowsSelected: boolean;
    someRowsSelected: boolean;
    pivotTotalColumnPosition: InfiniteTablePropPivotTotalColumnPosition;
    pivotGrandTotalColumnPosition: InfiniteTablePropPivotGrandTotalColumnPosition;
    cursorId: number | symbol | DataSourceLivePaginationCursorValue;
    updatedAt: number;
    reducedAt: number;
    groupedAt: number;
    sortedAt: number;
    filteredAt: number;
    generateGroupRows: boolean;
    postFilterDataArray?: T[];
    postSortDataArray?: T[];
    postGroupDataArray?: InfiniteTableRowInfo<T>[];
    pivotColumns?: Map<string, InfiniteTableColumn<T>>;
    pivotColumnGroups?: Map<string, InfiniteTableColumnGroup>;
}
type DataSourcePropAggregationReducers<T> = Record<string, DataSourceAggregationReducer<T, any>>;
type DataSourcePropMultiRowSelectionChangeParamType = RowSelectionStateObject;
type DataSourcePropRowSelection = DataSourcePropRowSelection_MultiRow | DataSourcePropRowSelection_SingleRow;
type DataSourcePropRowSelection_MultiRow = RowSelectionStateObject;
type DataSourcePropRowSelection_SingleRow = null | string | number;
type DataSourcePropCellSelection = any;
type DataSourcePropSelectionMode = false | 'single-cell' | 'single-row' | 'multi-cell' | 'multi-row';
type DataSourcePropOnRowSelectionChange_MultiRow = (rowSelection: DataSourcePropRowSelection_MultiRow, selectionMode: 'multi-row') => void;
type DataSourcePropOnRowSelectionChange_SingleRow = (rowSelection: DataSourcePropRowSelection_SingleRow, selectionMode: 'single-row') => void;
type DataSourcePropOnRowSelectionChange = DataSourcePropOnRowSelectionChange_SingleRow | DataSourcePropOnRowSelectionChange_MultiRow;
type DataSourcePropOnCellSelectionChange = (cellSelectionParams: any) => void;
type DataSourcePropIsRowSelected<T> = (rowInfo: InfiniteTableRowInfo<T>, rowSelectionState: RowSelectionState, selectionMode: 'multi-row') => boolean | null;
type DataSourcePropSortFn<T> = (sortInfo: MultisortInfoAllowMultipleFields<T>[], array: T[], get?: (item: any) => T) => T[];
type DataSourceCRUDParam = {
    flush?: boolean;
    metadata?: any;
};
type DataSourceInsertParam = DataSourceCRUDParam & ({
    position: 'before' | 'after';
    primaryKey: any;
} | {
    position: 'start' | 'end';
});
interface DataSourceApi<T> {
    getOriginalDataArray: () => T[];
    getRowInfoArray: () => InfiniteTableRowInfo<T>[];
    getDataByPrimaryKey(id: any): T | null;
    getRowInfoByIndex(index: number): InfiniteTableRowInfo<T> | null;
    getRowInfoByPrimaryKey(id: any): InfiniteTableRowInfo<T> | null;
    getIndexByPrimaryKey(id: any): number;
    getPrimaryKeyByIndex(id: any): any;
    updateData(data: Partial<T>, options?: DataSourceCRUDParam): Promise<any>;
    updateDataArray(data: Partial<T>[], options?: DataSourceCRUDParam): Promise<any>;
    removeDataByPrimaryKey(id: any, options?: DataSourceCRUDParam): Promise<any>;
    removeDataArrayByPrimaryKeys(id: any[], options?: DataSourceCRUDParam): Promise<any>;
    removeData(data: Partial<T>, options?: DataSourceCRUDParam): Promise<any>;
    removeDataArray(data: Partial<T>[], options?: DataSourceCRUDParam): Promise<any>;
    addData(data: T, options?: DataSourceCRUDParam): Promise<any>;
    addDataArray(data: T[], options?: DataSourceCRUDParam): Promise<any>;
    insertData(data: T, options: DataSourceInsertParam): Promise<any>;
    insertDataArray(data: T[], options: DataSourceInsertParam): Promise<any>;
    setSortInfo(sortInfo: null | DataSourceSingleSortInfo<T>[]): void;
}
type DataSourcePropRowInfoReducers<T> = Record<string, DataSourceRowInfoReducer<T>>;
type DataSourceRowInfoReducer<T> = DataSourceRawReducer<InfiniteTableRowInfo<T>, any>;
type DataSourceProps<T> = {
    children: React$1.ReactNode | ((contextData: DataSourceState<T>) => React$1.ReactNode);
    primaryKey: keyof T | ((data: T) => string);
    /**
     * @deprecated for now
     */
    fields?: (keyof T)[];
    refetchKey?: number | string | object;
    rowInfoReducers?: DataSourcePropRowInfoReducers<T>;
    data: DataSourceData<T>;
    selectionMode?: DataSourcePropSelectionMode;
    useGroupKeysForMultiRowSelection?: boolean;
    rowSelection?: DataSourcePropRowSelection_MultiRow | DataSourcePropRowSelection_SingleRow;
    defaultRowSelection?: DataSourcePropRowSelection_MultiRow | DataSourcePropRowSelection_SingleRow;
    cellSelection?: DataSourcePropCellSelection;
    defaultCellSelection?: DataSourcePropCellSelection;
    onCellSelectionChange?: DataSourcePropOnCellSelectionChange;
    isRowSelected?: DataSourcePropIsRowSelected<T>;
    lazyLoad?: boolean | {
        batchSize?: number;
    };
    loading?: boolean;
    defaultLoading?: boolean;
    onLoadingChange?: (loading: boolean) => void;
    onReady?: (api: DataSourceApi<T>) => void;
    pivotBy?: DataSourcePropPivotBy<T>;
    defaultPivotBy?: DataSourcePropPivotBy<T>;
    onPivotByChange?: (pivotBy: DataSourcePropPivotBy<T>) => void;
    aggregationReducers?: DataSourcePropAggregationReducers<T>;
    defaultAggregationReducers?: DataSourcePropAggregationReducers<T>;
    groupBy?: DataSourcePropGroupBy<T>;
    defaultGroupBy?: DataSourcePropGroupBy<T>;
    onGroupByChange?: (groupBy: DataSourcePropGroupBy<T>) => void;
    groupRowsState?: GroupRowsState | DataSourcePropGroupRowsStateObject<any>;
    defaultGroupRowsState?: GroupRowsState | DataSourcePropGroupRowsStateObject<keyof T>;
    onGroupRowsStateChange?: (groupRowsState: GroupRowsState) => void;
    collapseGroupRowsOnDataFunctionChange?: boolean;
    sortFunction?: DataSourcePropSortFn<T>;
    sortInfo?: DataSourceSortInfo<T>;
    defaultSortInfo?: DataSourceSortInfo<T>;
    onSortInfoChange?: ((sortInfo: DataSourceSingleSortInfo<T> | null) => void) | ((sortInfo: DataSourceSingleSortInfo<T>[]) => void);
    onDataParamsChange?: (dataParamsChange: DataSourceDataParams<T>) => void;
    onDataArrayChange?: (dataArray: DataSourceState<T>['originalDataArray'], info: DataSourceState<T>['originalDataArrayChangedInfo']) => void;
    onDataMutations?: ({ dataArray, timestamp, mutations, primaryKeyField, }: {
        primaryKeyField: undefined | keyof T;
        dataArray: DataSourceState<T>['originalDataArray'];
        timestamp: number;
        mutations: NonUndefined<DataSourceState<T>['originalDataArrayChangedInfo']['mutations']>;
    }) => void;
    livePagination?: boolean;
    livePaginationCursor?: DataSourcePropLivePaginationCursor<T>;
    onLivePaginationCursorChange?: (livePaginationCursor: DataSourceLivePaginationCursorValue) => void;
    filterFunction?: DataSourcePropFilterFunction<T>;
    sortMode?: 'local' | 'remote';
    filterMode?: 'local' | 'remote';
    filterValue?: DataSourcePropFilterValue<T>;
    defaultFilterValue?: DataSourcePropFilterValue<T>;
    onFilterValueChange?: (filterValue: DataSourcePropFilterValue<T>) => void;
    filterDelay?: number;
    filterTypes?: DataSourcePropFilterTypes<T>;
    sortTypes?: DataSourcePropSortTypes;
} & ({
    selectionMode?: 'multi-row';
    rowSelection?: DataSourcePropRowSelection_MultiRow;
    defaultRowSelection?: DataSourcePropRowSelection_MultiRow;
    onRowSelectionChange?: DataSourcePropOnRowSelectionChange_MultiRow;
} | {
    selectionMode?: 'single-row';
    rowSelection?: DataSourcePropRowSelection_SingleRow;
    defaultRowSelection?: DataSourcePropRowSelection_SingleRow;
    onRowSelectionChange?: DataSourcePropOnRowSelectionChange_SingleRow;
} | {
    selectionMode?: 'single-cell';
} | {
    selectionMode?: 'multi-cell';
} | {
    selectionMode?: false;
});
type DataSourcePropSortTypes = Record<string, (first: any, second: any) => number>;
type DataSourcePropFilterTypes<T> = Record<string, DataSourceFilterType<T>>;
type DataSourceFilterFunctionParam<T> = {
    data: T;
    index: number;
    dataArray: T[];
    primaryKey: any;
};
type DataSourcePropFilterFunction<T> = (filterParam: DataSourceFilterFunctionParam<T>) => boolean;
type DataSourcePropFilterValue<T> = DataSourceFilterValueItem<T>[];
type DataSourceFilterValueItem<T> = DiscriminatedUnion<{
    field: keyof T;
}, {
    id: string;
}> & {
    valueGetter?: DataSourceFilterValueItemValueGetter<T>;
    filter: {
        type: string;
        operator: string;
        value: any;
    };
    disabled?: boolean;
};
type DataSourceFilterValueItemValueGetter<T> = (param: DataSourceFilterFunctionParam<T> & {
    field?: keyof T;
}) => any;
type DataSourceFilterType<T> = {
    emptyValues: any[];
    label?: string;
    defaultOperator: string;
    valueGetter?: DataSourceFilterValueItemValueGetter<T>;
    components?: {
        FilterEditor?: () => JSX.Element | null;
        FilterOperatorSwitch?: () => JSX.Element | null;
    };
    operators: DataSourceFilterOperator<T>[];
};
type DataSourceFilterOperator<T> = {
    name: string;
    label?: string;
    components?: {
        FilterEditor?: () => JSX.Element | null;
        Icon?: (props: any) => JSX.Element | null;
    };
    fn: DataSourceFilterOperatorFunction<T>;
};
type DataSourceFilterOperatorFunction<T> = (filterOperatorFunctionParam: DataSourceFilterOperatorFunctionParam<T>) => boolean;
type DataSourceFilterOperatorFunctionParam<T> = {
    currentValue: any;
    filterValue: any;
    emptyValues: any[];
    field?: keyof T;
} & DataSourceFilterFunctionParam<T>;
type DataSourcePropLivePaginationCursor<T> = DataSourceLivePaginationCursorValue | DataSourceLivePaginationCursorFn<T>;
type DataSourceLivePaginationCursorFn<T> = (params: DataSourceLivePaginationCursorParams<T>) => DataSourceLivePaginationCursorValue;
type DataSourceLivePaginationCursorParams<T> = {
    array: T[];
    lastItem: T | Partial<T> | null;
    length: number;
};
type DataSourceLivePaginationCursorValue = string | number | null;
interface DataSourceState<T> extends DataSourceSetupState<T>, DataSourceDerivedState<T>, DataSourceMappedState<T> {
}
type DataSourceDerivedState<T> = {
    toPrimaryKey: (data: T) => any;
    operatorsByFilterType: Record<string, Record<string, DataSourceFilterOperator<T>>>;
    sortMode: NonUndefined<DataSourceProps<T>['sortMode']>;
    filterMode: NonUndefined<DataSourceProps<T>['filterMode']>;
    groupRowsState: GroupRowsState<T>;
    multiSort: boolean;
    controlledSort: boolean;
    controlledFilter: boolean;
    livePaginationCursor?: DataSourceLivePaginationCursorValue;
    lazyLoadBatchSize?: number;
    rowSelection: RowSelectionState | null | number | string;
    selectionMode: NonUndefined<DataSourceProps<T>['selectionMode']>;
};
type DataSourceComponentActions<T> = ComponentStateActions<DataSourceState<T>>;
interface DataSourceContextValue<T> {
    api: DataSourceApi<T>;
    getState: () => DataSourceState<T>;
    componentState: DataSourceState<T>;
    componentActions: DataSourceComponentActions<T>;
}
declare enum DataSourceActionType {
    INIT = "INIT"
}
interface DataSourceAction<T> {
    type: DataSourceActionType;
    payload: T;
}

declare const defaultFilterTypes: Record<string, DataSourceFilterType<any>>;

declare function useDataSource<T>(): DataSourceState<T>;

declare function DataSource<T>(props: DataSourceProps<T>): JSX.Element;
declare function useRowInfoReducers(): Record<string, any> | undefined;

type AggregationReducer<T, AggregationResultType = any> = DataSourceAggregationReducer<T, AggregationResultType> & {
    id: string;
};
type AggregationReducerResult<AggregationResultType extends any = any> = AggregationResultType;
/**
 * InfiniteTableRowInfo can have different object shape depending on the presence or absence of grouping.
 *
 * You can use `dataSourceHasGrouping: boolean` as a discriminator to determine the shape of the object, to know
 * if the dataSource had grouping or not. Furthermore, for when the dataSource has grouping,
 * you can use `isGroupRow: boolean` to discriminate between group rows vs normal rows.
 *
 */
type InfiniteTableRowInfo<T> = InfiniteTable_HasGrouping_RowInfoNormal<T> | InfiniteTable_HasGrouping_RowInfoGroup<T> | InfiniteTable_NoGrouping_RowInfoNormal<T>;
type InfiniteTableRowInfoDataDiscriminator_RowInfoNormal<T> = {
    data: T;
    isGroupRow: false;
    rowActive: boolean;
    rowInfo: InfiniteTable_NoGrouping_RowInfoNormal<T> | InfiniteTable_HasGrouping_RowInfoNormal<T>;
    field?: keyof T;
    value: any;
    rawValue: any;
    rowSelected: boolean | null;
};
type InfiniteTableRowInfoDataDiscriminator_RowInfoGroup<T> = {
    rowActive: boolean;
    data: Partial<T> | null;
    rowInfo: InfiniteTable_HasGrouping_RowInfoGroup<T>;
    isGroupRow: true;
    field?: keyof T;
    value: any;
    rawValue: any;
    rowSelected: boolean | null;
};
type InfiniteTableRowInfoDataDiscriminator<T> = InfiniteTableRowInfoDataDiscriminator_RowInfoNormal<T> | InfiniteTableRowInfoDataDiscriminator_RowInfoGroup<T>;
/**
 * This is the base row info for all scenarios - things every
 * rowInfo is guaranteed to have (be it group or normal row, or dataSource with or without grouping)
 *
 */
type InfiniteTable_RowInfoBase<_T> = {
    id: any;
    value?: any;
    indexInAll: number;
    rowSelected: boolean | null;
};
type InfiniteTable_HasGrouping_RowInfoNormal<T> = {
    dataSourceHasGrouping: true;
    data: T;
    isGroupRow: false;
} & InfiniteTable_HasGrouping_RowInfoBase<T> & InfiniteTable_RowInfoBase<T>;
type InfiniteTable_HasGrouping_RowInfoGroup<T> = {
    dataSourceHasGrouping: true;
    data: Partial<T> | null;
    reducerData?: Partial<Record<keyof T, any>>;
    isGroupRow: true;
    /**
     * This array contains all the (uncollapsed, so visible) row infos under this group, at any level of nesting,
     * in the order in which they are visible in the table
     */
    deepRowInfoArray: (InfiniteTable_HasGrouping_RowInfoNormal<T> | InfiniteTable_HasGrouping_RowInfoGroup<T>)[];
    error?: string;
    reducerResults?: Record<string, AggregationReducerResult>;
    /**
     * The count of all leaf nodes (normal rows) that are inside this group.
     * This count is the same as the length of the groupData array property.
     *
     */
    groupCount: number;
    /**
     * The array of all leaf nodes (normal rows) that are inside this group.
     */
    groupData: T[];
    /**
     * The count of all selected leaf nodes (normal rows) inside the group that are selected
     */
    selectedChildredCount: number;
    /**
     * The count of all deselected leaf nodes (normal rows) inside the group that are selected
     */
    deselectedChildredCount: number;
    /**
     * Will be used only with lazy loading, if the server provides this info on the data items.
     *
     * Represents the total count of all leaf nodes (normal rows) that are under this group
     * at any level (so not only direct children). This is needed for multiple selection to work properly,
     * so the table component knows how many rows are on the remote backend, and whether to show a group as selected or not
     * when it has a certain number of rows selected
     */
    totalChildrenCount?: number;
    /**
     * The count of all leaf nodes (normal rows) inside the group that are not being visible
     * due to collapsing (either the current row is collapsed or any of its children)
     */
    collapsedChildrenCount: number;
    collapsedGroupsCount: number;
    /**
     * The count of the direct children of the current group. Direct children can be either normal rows or groups.
     */
    directChildrenCount: number;
    directChildrenLoadedCount: number;
    /**
     *
     * A DeepMap of pivot values.
     *
     * For each pivot reducer result, it contains all the items that make up the pivot value.
     *
     */
    pivotValuesMap?: PivotValuesDeepMap<T, any>;
    /**
     * For non-lazy grouping, this is always true.
     * For lazy/batched grouping, this is true if the group has been expanded at least once (and if the remote call has been configured with cache: true),
     * since if the remote call is not cached, collapsing the row group should lose all the data that was loaded for it, and it's as if it was never loaded, so in that case, childrenAvailable is false.
     *
     * NOTE: if this is true, it doesn't mean that all the children have been loaded, it only means that some children have been loaded and are available
     *
     * Use directChildrenCount and directChildrenLoadedCount to know if all the children have been loaded or not.
     */
    childrenAvailable: boolean;
    /**
     * Boolean flag that will be true while lazy loading direct children of the current row group.
     *
     * NOTE: with batched loading, if the user is no longer scrolling, after everything
     * in the viewport has loaded (and thus for example a certain row group had childrenLoading: true)
     * if no new batches are being loaded, childrenLoading will be false again, even though
     * the current row group still has children that are not loaded yet.
     * Use directChildrenLoadedCount and directChildrenCount to know if all the children have been loaded or not.
     */
    childrenLoading: boolean;
} & InfiniteTable_HasGrouping_RowInfoBase<T> & InfiniteTable_RowInfoBase<T>;
type InfiniteTable_NoGrouping_RowInfoNormal<T> = {
    dataSourceHasGrouping: false;
    data: T;
    isGroupRow: false;
    selfLoaded: boolean;
} & InfiniteTable_RowInfoBase<T>;
type InfiniteTable_HasGrouping_RowInfoBase<T> = {
    indexInGroup: number;
    /**
     * Available on all rowInfo objects when the datasource is grouped, otherwise, it will be undefined.
     *
     * For group rows, the group keys will have all the keys starting from the topmost parent
     * down to the current group row (including the group row).
     * For normal rows, the group keys will have all the keys starting from the topmost parent
     * down to the last group row in the hierarchy (the direct parent of the current row).
     *
     * Example: People grouped by country and city
     *
     * Italy  - country         - groupKeys: ['Italy']
     *    Rome - city           - groupKeys: ['Italy', 'Rome']
     *      Marco    - person   - groupKeys: ['Italy', 'Rome']
     *      Luca     - person   - groupKeys: ['Italy', 'Rome']
     *      Giuseppe  - person  - groupKeys: ['Italy', 'Rome']
     *
     */
    groupKeys: any[];
    /**
     * Available on all rowInfo objects when the datasource is grouped, otherwise, it will be undefined.
     *
     * Has the same structure as groupKeys, but it will contain the fields used to group the rows.
     *
     * Example: People grouped by country and city
     *
     * Italy  - country         - groupBy: [{field: 'country'}]
     *    Rome - city           - groupBy: [{field: 'country'}, {field: 'city'} ]
     *      Marco    - person   - groupBy: [{field: 'country'}, {field: 'city'} ]
     *      Luca     - person   - groupBy: [{field: 'country'}, {field: 'city'} ]
     *      Giuseppe  - person  - groupBy: [{field: 'country'}, {field: 'city'} ]
     */
    groupBy: GroupBy<T, any>[];
    /**
     * The groupBy value of the DataSource component, mapped to the groupBy.field
     */
    rootGroupBy: GroupBy<T, any>[];
    /**
     * Available on all rowInfo objects when the datasource is grouped.
     *
     * Italy  - country         - parent mapped to their ids will be: [] // rowInfo.parents.map((p: any) => p.id)
     *    Rome - city           - parent mapped to their ids will be: ['Italy']
     *      Marco    - person   - parent mapped to their ids will be: ['Italy','Italy,Rome']
     *      Luca     - person   - parent mapped to their ids will be: ['Italy','Italy,Rome']
     *      Giuseppe  - person  - parent mapped to their ids will be: ['Italy','Italy,Rome']
     * USA - country            - parent mapped to their ids will be: []
     *    LA - city             - parent mapped to their ids will be: ['USA']
     *      Bob  - person       - parent mapped to their ids will be: ['USA','USA,LA']
     */
    parents: InfiniteTable_HasGrouping_RowInfoGroup<T>[];
    /**
     * Available when the datasource is grouped, this will be set for both group and normal rows.
     * Italy  - country         - indexInParentGroups: [0]
     *    Rome - city           - indexInParentGroups: [0,0]
     *      Marco    - person   - indexInParentGroups: [0,0,0]
     *      Luca     - person   - indexInParentGroups: [0,0,1]
     *      Giuseppe  - person  - indexInParentGroups: [0,0,2]
     * USA - country            - indexInParentGroups: [1]
     *    LA - city             - indexInParentGroups: [1,0]
     *      Bob  - person       - indexInParentGroups: [1,0,2]
     */
    indexInParentGroups: number[];
    /**
     * Available on all rowInfo objects when the datasource is grouped.
     *
     * For every rowInfo object, it counts the number of leaf/normal rows that the group contains.
     * For normal rows, the groupCount represents the groupCount of the direct parent.
     *
     * Italy  - country         - groupCount: 3
     *    Rome - city           - groupCount: 2
     *      Marco    - person   - groupCount: 2
     *      Luca     - person   - groupCount: 2
     *    Napoli - city         - groupCount: 1
     *      Giuseppe  - person  - groupCount: 1
     * USA - country            - groupCount: 1
     *    LA - city             - groupCount: 1
     *      Bob  - person       - groupCount: 1
     */
    groupCount: number;
    groupNesting: number;
    collapsed: boolean;
    /**
     * This is false only when the DataSource is configured with lazy batching and the current
     * row has not been loaded yet. It has nothing to do with children, only with self.
     */
    selfLoaded: boolean;
};
type GroupKeyType<T extends any = any> = T;
type PivotReducerResults<T = any> = Record<string, AggregationReducerResult<T>>;
type PivotGroupValueType<DataType, KeyType> = {
    reducerResults: PivotReducerResults<KeyType>;
    items: DataType[];
};
type PivotValuesDeepMap<DataType, KeyType> = DeepMap<GroupKeyType<KeyType>, PivotGroupValueType<DataType, KeyType>>;
type DeepMapGroupValueType<DataType, KeyType> = {
    /**
     * These are leaf items. This array may be empty when there is batched lazy loading
     */
    items: DataType[];
    commonData?: Partial<DataType>;
    childrenLoading: boolean;
    childrenAvailable: boolean;
    totalChildrenCount?: number;
    cache: boolean;
    error?: string;
    reducerResults: Record<string, AggregationReducerResult>;
    pivotDeepMap?: DeepMap<GroupKeyType<KeyType>, PivotGroupValueType<DataType, KeyType>>;
};
type PivotBy<DataType, KeyType> = Omit<GroupBy<DataType, KeyType>, 'column'> & {
    column?: ColumnTypeWithInherit<Partial<InfiniteTableColumn<DataType>>> | (({ column, }: {
        column: InfiniteTablePivotFinalColumnVariant<DataType, KeyType>;
    }) => Partial<InfiniteTablePivotColumn<DataType>>);
    columnGroup?: InfiniteTableColumnGroup | (({ columnGroup, }: {
        columnGroup: InfiniteTablePivotFinalColumnGroup<DataType, KeyType>;
    }) => ColumnTypeWithInherit<Partial<InfiniteTablePivotFinalColumnGroup<DataType>>>);
};
type GroupParams<DataType, KeyType> = {
    groupBy: GroupBy<DataType, KeyType>[];
    defaultToKey?: (value: any, item: DataType) => GroupKeyType<KeyType>;
    pivot?: PivotBy<DataType, KeyType>[];
    reducers?: Record<string, DataSourceAggregationReducer<DataType, any>>;
};
type DataGroupResult<DataType, KeyType extends any> = {
    deepMap: DeepMap<GroupKeyType<KeyType>, DeepMapGroupValueType<DataType, KeyType>>;
    groupParams: GroupParams<DataType, KeyType>;
    initialData: DataType[];
    reducerResults?: Record<string, AggregationReducerResult>;
    topLevelPivotColumns?: DeepMap<GroupKeyType<KeyType>, boolean>;
    pivot?: PivotBy<DataType, KeyType>[];
};
declare function group<DataType, KeyType = any>(groupParams: GroupParams<DataType, KeyType>, data: DataType[]): DataGroupResult<DataType, KeyType>;
declare function flatten<DataType, KeyType extends any>(groupResult: DataGroupResult<DataType, KeyType>): DataType[];

type InfiniteCheckBoxPropChecked = true | false | null;
type InfiniteCheckBoxProps = {
    disabled?: boolean;
    checked?: InfiniteCheckBoxPropChecked;
    defaultChecked?: InfiniteCheckBoxPropChecked;
    onChange?: (checked: InfiniteCheckBoxPropChecked) => void;
    domProps?: React$1.HTMLProps<HTMLElement>;
};
declare function InfiniteCheckBox(props: InfiniteCheckBoxProps): JSX.Element;

type CoordsWithSize = {
    width: number;
    height: number;
    left: number;
    top: number;
};
type CoordsNoSize = {
    right: number;
    bottom: number;
    left: number;
    top: number;
};
type RectangleCoords = CoordsWithSize | CoordsNoSize;

type Alignable = RectangleCoords | HTMLElement | DOMRect;
type AlignPositionEnum = 'TopLeft' | 'TopCenter' | 'TopRight' | 'CenterRight' | 'BottomRight' | 'BottomCenter' | 'BottomLeft' | 'CenterLeft' | 'Center';
type AlignPositionItem = [AlignPositionEnum, AlignPositionEnum];
type AlignPositionOptions = {
    alignPosition: AlignPositionItem[];
    constrainTo?: Alignable;
    alignAnchor: Alignable;
    alignTarget: Alignable;
};

type OverlayParams = {
    portalContainer?: ElementContainerGetter | null | false;
    constrainTo?: OverlayShowParams['constrainTo'];
};
type ElementContainerGetter = (() => HTMLElement | string | Promise<HTMLElement | string>) | string | HTMLElement | Promise<HTMLElement | string>;
type AdvancedAlignable = Alignable | ElementContainerGetter;
/**
 * If portal container is given, it will create a React portal from that element
 * otherwise it will simply render another node as portal
 *
 * @param portalContainer
 */
declare function useOverlayPortal(content: ReactNode, portalContainer?: ElementContainerGetter | null | false): string | number | boolean | JSX.Element | React$1.ReactFragment | null | undefined;
type OverlayShowParams = {
    id?: string | number;
    constrainTo?: AdvancedAlignable | boolean;
    alignPosition: AlignPositionOptions['alignPosition'];
    alignTo: AdvancedAlignable | PointCoords;
};
type ShowOverlayFn = (content: ReactNode | (() => ReactNode), params: OverlayShowParams) => VoidFunction | undefined;
declare function useOverlay(params: OverlayParams): {
    portal: string | number | boolean | JSX.Element | React$1.ReactFragment | null | undefined;
    hideOverlay: (id: string) => void;
    clearAll: () => void;
    rerenderOverlays: () => void;
    showOverlay: ShowOverlayFn;
};

/**

We have this utility - it's used in Menu Renderable declaration
because:

type Renderable = React.ReactNode;

const x: Renderable = <div />;
const y: Renderable = {};

we don't want to allow the above `y` as a valid declaration

it breaks some types in the Menu component as well

 */
type RemoveObject<T> = T extends null | undefined ? T : T extends unknown ? keyof T extends never ? never : T : never;

type MenuSetupState = {
    domRef: MutableRefObject<HTMLDivElement | null>;
    keyboardActiveItemKey: string | null;
    activeItemKey: string | null;
    generatedId: string;
    focused: boolean;
    destroyed: boolean;
};
type MenuDerivedState = {
    runtimeItems: MenuRuntimeItem[];
    runtimeSelectableItems: MenuRuntimeItemSelectable[];
    columns: MenuColumn[];
    menuId: string;
};
type MenuMappedState = {
    parentMenuId: MenuProps['parentMenuId'];
    parentMenuItemKey: MenuProps['parentMenuItemKey'];
    constrainTo: MenuProps['constrainTo'];
    autoFocus: MenuProps['autoFocus'];
    onHideIntent: MenuProps['onHideIntent'];
    onAction: MenuProps['onAction'];
    onShow: MenuProps['onShow'];
    onHide: MenuProps['onHide'];
    wrapLabels: MenuProps['wrapLabels'];
};
interface MenuState extends MenuMappedState, MenuDerivedState, MenuSetupState {
}
type MenuApi = {
    focus: VoidFunction;
    getMenuId: () => string;
    getParentMenuId: () => string | undefined;
};

type MenuRenderable = string | number | RemoveObject<Renderable>;
type MenuRuntimeItemSelectable = {
    type: 'item';
    key: string;
    parentMenuId: string;
    active: boolean;
    keyboardActive: boolean;
    value: MenuItemObject;
    style?: CSSProperties;
    className?: string;
    disabled: boolean;
    span: number;
    menu: MenuProps | (() => MenuProps) | null;
    originalMenuItem: MenuItemObject;
};
type MenuRuntimeItem = MenuRuntimeItemSelectable | {
    type: 'decoration';
    value: MenuDecoration;
    style: CSSProperties;
    span: number;
};
type MenuChildrenFnParam = {
    item: MenuRuntimeItem;
    column: MenuColumn;
    columns: MenuColumn[];
};
type MenuProps = {
    id?: string;
    portalContainer?: ElementContainerGetter | false | null;
    items?: MenuItemDefinition[];
    constrainTo?: OverlayShowParams['constrainTo'];
    columns?: MenuColumn[];
    children?: MenuRenderable;
    wrapLabels?: boolean;
    onShow?: (state: MenuState, api: MenuApi) => void;
    onHide?: (state: MenuState) => void;
    onHideIntent?: (state: MenuState) => void;
    bubbleActionsFromSubmenus?: boolean;
    addSubmenuColumnIfNeeded?: boolean;
    onAction?: (key: string, item: MenuItemObject) => void;
    parentMenuId?: string;
    parentMenuItemKey?: string;
    autoFocus?: boolean;
};
type MenuSeparator = '-';
type MenuItemDefinition = MenuItemObject | MenuDecoration | MenuSeparator;
type MenuItemSubMenu = Omit<MenuProps, 'children' | 'items'> & {
    items: (MenuItemObject | MenuSeparator)[];
};
type MenuItemObject = {
    key: string;
    label: NonUndefined<MenuRenderable>;
    span?: number;
    description?: MenuRenderable;
    disabled?: boolean;
    menu?: MenuItemSubMenu | (() => MenuItemSubMenu);
    style?: CSSProperties;
    className?: string;
    onClick?: (event: React.MouseEvent) => void;
    onAction?: (key: string, item: MenuItemObject) => void;
    [k: string]: any;
};
type MenuDecoration = MenuRenderable;
type MenuColumn = {
    flex?: number;
    width?: string | number;
    style?: CSSProperties;
    name: string;
    field?: string;
    render?: (param: MenuColumnRenderParam) => MenuRenderable;
};
type MenuColumnRenderParam = {
    item: MenuItemObject;
    column: MenuColumn;
    value: MenuRenderable;
    domProps: HTMLProps<HTMLDivElement>;
};

type LoadMaskProps = {
    visible: boolean;
    children: Renderable;
};
type InfiniteTablePropColumnOrderNormalized = string[];
type InfiniteTablePropColumnOrder = InfiniteTablePropColumnOrderNormalized | true;
type InfiniteTablePropColumnVisibility = Record<string, false>;
type InfiniteTableColumnPinnedValues = false | 'start' | 'end';
type InfiniteTablePropColumnPinning = Record<string, true | 'start' | 'end'>;
type InfiniteTableRowStyleFnParams<T> = {
    rowIndex: number;
} & InfiniteTableRowInfoDataDiscriminator<T>;
type InfiniteTableRowStyleFn<T> = (params: InfiniteTableRowStyleFnParams<T>) => undefined | React$1.CSSProperties;
type InfiniteTableRowClassNameFn<T> = (params: InfiniteTableRowStyleFnParams<T>) => string | undefined;
type InfiniteTablePropRowStyle<T> = React$1.CSSProperties | InfiniteTableRowStyleFn<T>;
type InfiniteTablePropRowClassName<T> = string | InfiniteTableRowClassNameFn<T>;
type InfiniteTableColumnAggregator<T, AggregationResultType> = Omit<AggregationReducer<T, AggregationResultType>, 'getter' | 'id'> & {
    getter?: AggregationReducer<T, AggregationResultType>['getter'];
    field?: keyof T;
};
type InfiniteTableColumnType<T> = {
    minWidth?: number;
    maxWidth?: number;
    filterType?: string;
    sortType?: string;
    dataType?: InfiniteTableDataTypeNames;
    defaultWidth?: number;
    defaultFlex?: number;
    defaultPinned?: InfiniteTableColumnPinnedValues;
    defaultHiddenWhenGroupedBy?: InfiniteTableColumn<T>['defaultHiddenWhenGroupedBy'];
    header?: InfiniteTableColumn<T>['header'];
    comparer?: InfiniteTableColumn<T>['comparer'];
    draggable?: InfiniteTableColumn<T>['draggable'];
    resizable?: InfiniteTableColumn<T>['resizable'];
    align?: InfiniteTableColumn<T>['align'];
    headerAlign?: InfiniteTableColumn<T>['headerAlign'];
    verticalAlign?: InfiniteTableColumn<T>['verticalAlign'];
    contentFocusable?: InfiniteTableColumn<T>['contentFocusable'];
    defaultSortable?: InfiniteTableColumn<T>['defaultSortable'];
    defaultEditable?: InfiniteTableColumn<T>['defaultEditable'];
    defaultFilterable?: InfiniteTableColumn<T>['defaultFilterable'];
    columnGroup?: string;
    cssEllipsis?: boolean;
    headerCssEllipsis?: boolean;
    field?: KeyOfNoSymbol<T>;
    components?: InfiniteTableColumn<T>['components'];
    renderMenuIcon?: InfiniteTableColumn<T>['renderMenuIcon'];
    renderSortIcon?: InfiniteTableColumn<T>['renderSortIcon'];
    renderSelectionCheckBox?: InfiniteTableColumn<T>['renderSelectionCheckBox'];
    renderHeaderSelectionCheckBox?: InfiniteTableColumn<T>['renderHeaderSelectionCheckBox'];
    renderValue?: InfiniteTableColumn<T>['renderValue'];
    render?: InfiniteTableColumn<T>['render'];
    valueGetter?: InfiniteTableColumn<T>['valueGetter'];
    valueFormatter?: InfiniteTableColumn<T>['valueFormatter'];
    getValueToEdit?: InfiniteTableColumn<T>['getValueToEdit'];
    getValueToPersist?: InfiniteTableColumn<T>['getValueToPersist'];
    shouldAcceptEdit?: InfiniteTableColumn<T>['shouldAcceptEdit'];
    style?: InfiniteTableColumn<T>['style'];
    headerStyle?: InfiniteTableColumn<T>['headerStyle'];
    headerClassName?: InfiniteTableColumn<T>['headerClassName'];
};
type InfiniteTablePropColumnTypes<T> = Record<'default' | string, InfiniteTableColumnType<T>>;
type InfiniteTableColumnSizingOptions = {
    flex?: number;
    width?: number;
    minWidth?: number;
    maxWidth?: number;
};
type InfiniteTablePropColumnSizing = Record<string, InfiniteTableColumnSizingOptions>;
type ColumnCellValues = {
    value: any;
    rawValue: any;
    formattedValue: any;
};
type InfiniteTableColumnApi<_T> = {
    showContextMenu: (target: EventTarget | HTMLElement) => void;
    toggleContextMenu: (target: EventTarget | HTMLElement) => void;
    hideContextMenu: () => void;
    showFilterOperatorMenu: (target: EventTarget | HTMLElement) => void;
    toggleFilterOperatorMenu: (target: EventTarget | HTMLElement) => void;
    hideFilterOperatorMenu: () => void;
    isVisible: () => boolean;
    isSortable: () => boolean;
    getSortInfo: () => DataSourceSingleSortInfo<_T> | null;
    getSortDir(): SortDir | null;
    toggleSort: (options?: MultiSortBehaviorOptions) => void;
    clearSort: () => void;
    setSort: (sort: SortDir | null, options?: MultiSortBehaviorOptions) => void;
    setFilter: (value: any) => void;
    clearFilter: (value: any) => void;
    getCellValuesByPrimaryKey: (id: any) => null | ColumnCellValues;
    getCellValueByPrimaryKey: (id: any) => any | null;
};
type InfiniteTableApiStopEditParams = {
    cancel: true;
    reject?: never;
    value?: never;
} | {
    reject: Error;
    cancel?: never;
    value?: never;
} | {
    value?: any;
    cancel?: never;
    reject?: never;
};
type InfiniteTableApiIsCellEditableParams = InfiniteTableApiCellLocator;
type InfiniteTableApiCellLocator = {
    columnId: string;
} & XOR<{
    rowIndex: number;
}, {
    primaryKey: any;
}>;
type InfiniteTableApiStopEditPromiseResolveType = {
    cancel: true;
    value: null;
} | {
    reject: Error;
    value: any;
} | boolean;
type MultiSortBehaviorOptions = {
    multiSortBehavior?: InfiniteTablePropMultiSortBehavior;
};
interface InfiniteTableApi<T> {
    get selectionApi(): InfiniteTableSelectionApi;
    setColumnOrder: (columnOrder: InfiniteTablePropColumnOrder) => void;
    setColumnVisibility: (columnVisibility: InfiniteTablePropColumnVisibility) => void;
    isDestroyed: () => boolean;
    clearEditInfo: () => void;
    hideContextMenu: () => void;
    realignColumnContextMenu: () => void;
    getColumnOrder: () => string[];
    getVisibleColumnOrder: () => string[];
    isEditorVisibleForCell(params: {
        rowIndex: number;
        columnId: string;
    }): boolean;
    get scrollLeft(): number;
    set scrollLeft(value: number);
    get scrollTop(): number;
    set scrollTop(value: number);
    isCellEditable: (params: InfiniteTableApiIsCellEditableParams) => Promise<boolean>;
    startEdit: (params: InfiniteTableApiIsCellEditableParams) => Promise<boolean>;
    stopEdit: (params?: InfiniteTableApiStopEditParams) => Promise<InfiniteTableApiStopEditPromiseResolveType>;
    persistEdit: (params?: {
        value?: any;
    }) => Promise<true | Error>;
    rejectEdit: (error: Error) => Promise<InfiniteTableApiStopEditPromiseResolveType>;
    confirmEdit: (value?: any) => Promise<InfiniteTableApiStopEditPromiseResolveType>;
    cancelEdit: () => Promise<InfiniteTableApiStopEditPromiseResolveType>;
    isEditInProgress: () => boolean;
    getVerticalRenderRange: () => {
        renderStartIndex: number;
        renderEndIndex: number;
    };
    collapseAllGroupRows: () => void;
    toggleGroupRow: (groupKeys: any[]) => void;
    collapseGroupRow: (groupKeys: any[]) => boolean;
    expandGroupRow: (groupKeys: any[]) => boolean;
    setSortInfoForColumn: (columnId: string, sortInfo: DataSourceSingleSortInfo<T> | null) => void;
    getSortInfoForColumn: (columnId: string) => DataSourceSingleSortInfo<T> | null;
    getSortTypeForColumn: (columnId: string) => string | string[] | null;
    toggleSortingForColumn: (columnId: string, options?: MultiSortBehaviorOptions) => void;
    setColumnFilter: (columnId: string, filterValue: any) => void;
    setColumnFilterOperator: (columnId: string, operator: string) => void;
    clearColumnFilter: (columnId: string) => void;
    isColumnSortable: (columnId: string) => boolean;
    setFilterValueForColumn: (columnId: string, filterValue: DataSourceFilterValueItem<T>) => void;
    setPinningForColumn: (columnId: string, pinning: InfiniteTableColumnPinnedValues) => void;
    setSortingForColumn: (columnId: string, dir: SortDir | null) => void;
    getSortingForColumn: (columnId: string) => SortDir | null;
    getColumnApi: (columnId: string) => InfiniteTableColumnApi<T> | null;
    setVisibilityForColumn: (columnId: string, visible: boolean) => void;
    getVisibleColumnsCount: () => number;
    scrollRowIntoView: (rowIndex: number, config?: {
        scrollAdjustPosition?: ScrollAdjustPosition;
        offset?: number;
    }) => boolean;
    scrollColumnIntoView: (colId: string, config?: {
        scrollAdjustPosition?: ScrollAdjustPosition;
        offset?: number;
    }) => boolean;
    scrollCellIntoView: (rowIndex: number, colIdOrIndex: string | number, config?: {
        scrollAdjustPosition?: ScrollAdjustPosition;
        offset?: number;
    }) => boolean;
    getCellValues: (cellLocator: InfiniteTableApiCellLocator) => ColumnCellValues | null;
    getCellValue: (cellLocator: InfiniteTableApiCellLocator) => any | null;
    getState: () => InfiniteTableState<T>;
    getDataSourceState: () => DataSourceState<T>;
    focus: () => void;
}
type InfiniteTablePropVirtualizeColumns<T> = boolean | ((columns: InfiniteTableComputedColumn<T>[]) => boolean);
type InfiniteTableColumnsMap<T, ColumnType = InfiniteTableColumn<T>> = Map<string, ColumnType>;
type InfiniteTablePropColumns<T, ColumnType = InfiniteTableColumn<T>> = Record<string, ColumnType> | InfiniteTableColumnsMap<T, ColumnType>;
type InfiniteTablePropColumnGroupsMap = Map<string, InfiniteTableColumnGroup>;
type InfiniteTablePropColumnGroupsRecord = Record<string, InfiniteTableColumnGroup>;
type InfiniteTablePropColumnGroups = InfiniteTablePropColumnGroupsRecord | InfiniteTablePropColumnGroupsMap;
type InfiniteTablePropCollapsedColumnGroups = Map<string[], string>;
type InfiniteTableColumnGroupHeaderRenderParams = {
    columnGroup: InfiniteTableComputedColumnGroup;
};
type InfiniteTableColumnGroupHeaderRenderFunction = (params: InfiniteTableColumnGroupHeaderRenderParams) => Renderable;
type InfiniteTableColumnGroup = {
    columnGroup?: string;
    header?: Renderable | InfiniteTableColumnGroupHeaderRenderFunction;
};
type InfiniteTableComputedColumnGroup = InfiniteTableColumnGroup & {
    id: string;
    groupOffset: number;
    computedWidth: number;
    uniqueGroupId: string[];
    columns: string[];
    depth: number;
};
type InfiniteTableGroupColumnGetterOptions<T> = {
    groupIndexForColumn?: number;
    groupByForColumn?: DataSourceGroupBy<T>;
    selectionMode: DataSourcePropSelectionMode;
    groupRenderStrategy: InfiniteTablePropGroupRenderStrategy;
    groupCount: number;
    groupBy: DataSourceGroupBy<T>[];
    pivotBy?: DataSourcePivotBy<T>[];
    sortable?: boolean;
};
type InfiniteTablePivotColumnGetterOptions<T, COL_TYPE = InfiniteTableColumn<T>> = {
    column: COL_TYPE;
    groupBy: DataSourcePropGroupBy<T>;
    pivotBy: DataSourcePropPivotBy<T>;
};
type InfiniteTablePropGroupRenderStrategy = 'single-column' | 'multi-column' | 'inline';
type InfiniteTableGroupColumnBase<T> = Partial<InfiniteTableColumn<T>> & {
    renderGroupIcon?: InfiniteTableColumnRenderFunctionForGroupRows<T>;
    id?: string;
};
type InfiniteTablePivotColumnBase<T> = InfiniteTableColumn<T> & {
    renderValue?: InfiniteTableColumnRenderFunction<T, InfiniteTableComputedPivotFinalColumn<T>>;
};
type InfiniteTablePropGroupColumn<T> = InfiniteTableGroupColumnBase<T> | InfiniteTableGroupColumnFunction<T>;
type InfiniteTableGroupColumnFunction<T> = (options: InfiniteTableGroupColumnGetterOptions<T>, toggleGroupRow: (groupKeys: any[]) => void) => Partial<InfiniteTableGroupColumnBase<T>>;
type InfiniteTablePropPivotColumn<T, COL_TYPE = InfiniteTableColumn<T>> = Partial<InfiniteTablePivotColumnBase<T>> | ((options: InfiniteTablePivotColumnGetterOptions<T, COL_TYPE>) => InfiniteTablePivotColumnBase<T>);
type InfiniteTablePropComponents = {
    LoadMask?: (props: LoadMaskProps & {
        children?: React$1.ReactNode | undefined;
    }) => JSX.Element | null;
    CheckBox?: (props: InfiniteCheckBoxProps) => JSX.Element | null;
    Menu?: (props: MenuProps & {
        children?: React$1.ReactNode | undefined;
    }) => JSX.Element | null;
    MenuIcon?: (props: MenuIconProps) => JSX.Element | null;
};
type ScrollStopInfo = {
    scrollTop: number;
    firstVisibleRowIndex: number;
    lastVisibleRowIndex: number;
};
type InfiniteTableRowInfoDataDiscriminatorWithColumn<T> = {
    column: InfiniteTableComputedColumn<T>;
    columnApi: InfiniteTableColumnApi<T>;
} & InfiniteTableRowInfoDataDiscriminator<T>;
type InfiniteTableRowInfoDataDiscriminatorWithColumnAndApis<T> = {
    api: InfiniteTableApi<T>;
    dataSourceApi: DataSourceApi<T>;
} & InfiniteTableRowInfoDataDiscriminatorWithColumn<T>;
type InfiniteTablePropEditable<T> = InfiniteTableColumnEditableFn<T> | undefined;
type InfiniteTablePropSortable<T> = InfiniteTableColumnSortable<T> | undefined;
type InfiniteTablePropOnEditAcceptedParams<T> = InfiniteTableRowInfoDataDiscriminatorWithColumnAndApis<T> & {
    initialValue: any;
};
type InfiniteTablePropOnEditCancelledParams<T> = InfiniteTablePropOnEditAcceptedParams<T>;
type InfiniteTablePropOnEditRejectedParams<T> = InfiniteTableRowInfoDataDiscriminatorWithColumnAndApis<T> & {
    initialValue: any;
    error: Error;
};
type InfiniteTablePropOnEditPersistParams<T> = InfiniteTablePropOnEditAcceptedParams<T>;
type InfiniteTablePropMultiSortBehavior = 'append' | 'replace';
interface InfiniteTableProps<T> {
    columns: InfiniteTablePropColumns<T>;
    pivotColumns?: InfiniteTableColumnsMap<T, InfiniteTablePivotColumn<T>>;
    loadingText?: Renderable;
    components?: InfiniteTablePropComponents;
    viewportReservedWidth?: number;
    onViewportReservedWidthChange?: (viewportReservedWidth: number) => void;
    showColumnFilters?: boolean;
    pivotColumn?: InfiniteTablePropPivotColumn<T, InfiniteTableColumn<T> & InfiniteTablePivotFinalColumn<T>>;
    columnDefaultFilterable?: boolean;
    columnDefaultEditable?: boolean;
    /**
     * Default behavior for column sorting. Defaults to true.
     *
     * This is overriden by all other props that can control sorting behavior (`column.defaultSortable`, `columnType.defaultSortable`, `sortable`).
     */
    columnDefaultSortable?: boolean;
    /**
     * This overrides both the global `columnDefaultSortable` prop and the column's own `defaultSortable` prop.
     * When used, it's the ultimate source of truth for whether (and which) columns are sortable.
     */
    sortable?: InfiniteTablePropSortable<T>;
    /**
     * This overrides both the global `columnDefaultEditable` prop and the column's own `defaultEditable` prop.
     */
    editable?: InfiniteTablePropEditable<T>;
    pivotTotalColumnPosition?: InfiniteTablePropPivotTotalColumnPosition;
    pivotGrandTotalColumnPosition?: InfiniteTablePropPivotGrandTotalColumnPosition;
    groupColumn?: InfiniteTablePropGroupColumn<T>;
    groupRenderStrategy?: InfiniteTablePropGroupRenderStrategy;
    hideEmptyGroupColumns?: boolean;
    columnVisibility?: InfiniteTablePropColumnVisibility;
    defaultColumnVisibility?: InfiniteTablePropColumnVisibility;
    pinnedStartMaxWidth?: number;
    pinnedEndMaxWidth?: number;
    shouldAcceptEdit?: InfiniteTableColumn<T>['shouldAcceptEdit'];
    onEditCancelled?: (params: InfiniteTablePropOnEditCancelledParams<T>) => void;
    onEditAccepted?: (params: InfiniteTablePropOnEditAcceptedParams<T>) => void;
    onEditRejected?: (params: InfiniteTablePropOnEditRejectedParams<T>) => void;
    persistEdit?: (params: InfiniteTablePropOnEditPersistParams<T>) => any | Error | Promise<any | Error>;
    onEditPersistSuccess?: (params: InfiniteTablePropOnEditPersistParams<T>) => void;
    onEditPersistError?: (params: InfiniteTablePropOnEditPersistParams<T> & {
        error: Error;
    }) => void;
    columnPinning?: InfiniteTablePropColumnPinning;
    defaultColumnPinning?: InfiniteTablePropColumnPinning;
    onColumnPinningChange?: (columnPinning: InfiniteTablePropColumnPinning) => void;
    columnSizing?: InfiniteTablePropColumnSizing;
    defaultColumnSizing?: InfiniteTablePropColumnSizing;
    onColumnSizingChange?: (columnSizing: InfiniteTablePropColumnSizing) => void;
    pivotColumnGroups?: InfiniteTablePropColumnGroups;
    columnGroups?: InfiniteTablePropColumnGroups;
    defaultColumnGroups?: InfiniteTablePropColumnGroups;
    defaultCollapsedColumnGroups?: InfiniteTablePropCollapsedColumnGroups;
    collapsedColumnGroups?: InfiniteTablePropCollapsedColumnGroups;
    onScrollbarsChange?: (scrollbars: Scrollbars) => void;
    onColumnVisibilityChange?: (columnVisibility: InfiniteTablePropColumnVisibility) => void;
    columnTypes?: InfiniteTablePropColumnTypes<T>;
    showSeparatePivotColumnForSingleAggregation?: boolean;
    rowHeight?: number | string;
    rowStyle?: InfiniteTablePropRowStyle<T>;
    rowClassName?: InfiniteTablePropRowClassName<T>;
    columnHeaderHeight?: number | string;
    onKeyDown?: (context: InfiniteTablePublicContext<T> & {
        actions: InfiniteTableEventHandlerContext<T>['actions'];
    }, event: React$1.KeyboardEvent) => void;
    onCellClick?: (context: InfiniteTablePublicContext<T> & InfiniteTableCellContext<T>, event: React$1.MouseEvent) => void;
    onContextMenu?: (context: InfiniteTablePublicContext<T> & {
        event: React$1.MouseEvent;
    } & Partial<InfiniteTableRowInfoDataDiscriminatorWithColumn<T>>, event: React$1.MouseEvent) => void;
    onCellContextMenu?: (context: InfiniteTablePublicContext<T> & InfiniteTableRowInfoDataDiscriminatorWithColumn<T> & {
        event: React$1.MouseEvent;
    }, event: React$1.MouseEvent) => void;
    /**
     * Properties to be sent directly to the DOM element underlying InfiniteTable.
     *
     * Useful for passing a className or style and any other event handlers. For more context
     * on some event handlers (eg: onKeyDown), you might want to use dedicated props that give you access
     * to component state as well.
     */
    domProps?: React$1.HTMLProps<HTMLDivElement>;
    /**
     * A unique identifier for the table instance. Will not be passed to the DOM.
     */
    id?: string;
    showZebraRows?: boolean;
    showHoverRows?: boolean;
    multiSortBehavior?: InfiniteTablePropMultiSortBehavior;
    keyboardNavigation?: InfiniteTablePropKeyboardNavigation;
    keyboardSelection?: InfiniteTablePropKeyboardSelection;
    defaultActiveRowIndex?: number | null;
    activeRowIndex?: number | null;
    onActiveRowIndexChange?: (activeRowIndex: number) => void;
    onActiveCellIndexChange?: (activeCellIndex: [number, number]) => void;
    activeCellIndex?: [number, number] | null;
    defaultActiveCellIndex?: [number, number] | null;
    draggableColumns?: boolean;
    header?: boolean;
    headerOptions?: InfiniteTablePropHeaderOptions;
    focusedClassName?: string;
    focusedWithinClassName?: string;
    focusedStyle?: React$1.CSSProperties;
    focusedWithinStyle?: React$1.CSSProperties;
    columnCssEllipsis?: boolean;
    columnHeaderCssEllipsis?: boolean;
    columnDefaultWidth?: number;
    columnDefaultFlex?: number;
    columnMinWidth?: number;
    columnMaxWidth?: number;
    hideColumnWhenGrouped?: boolean;
    resizableColumns?: boolean;
    virtualizeColumns?: InfiniteTablePropVirtualizeColumns<T>;
    virtualizeRows?: boolean;
    onSelfFocus?: (event: React$1.FocusEvent<HTMLDivElement>) => void;
    onSelfBlur?: (event: React$1.FocusEvent<HTMLDivElement>) => void;
    onFocusWithin?: (event: React$1.FocusEvent<HTMLDivElement>) => void;
    onBlurWithin?: (event: React$1.FocusEvent<HTMLDivElement>) => void;
    /**
     * When a column is hidden by using the column menu, the column menu will stay open,
     * so it needs (generally) to be realigned to the correct location. This prop
     * configures the delay in milliseconds before the column menu is realigned.
     *
     * @default 50
     */
    columnMenuRealignDelay?: number;
    onScrollToTop?: () => void;
    onScrollToBottom?: () => void;
    scrollStopDelay?: number;
    onScrollStop?: (param: ScrollStopInfo) => void;
    scrollToBottomOffset?: number;
    defaultColumnOrder?: InfiniteTablePropColumnOrder;
    columnOrder?: InfiniteTablePropColumnOrder;
    onColumnOrderChange?: (columnOrder: InfiniteTablePropColumnOrderNormalized) => void;
    onRowHeightChange?: (rowHeight: number) => void;
    onReady?: ({ api, dataSourceApi, }: {
        api: InfiniteTableApi<T>;
        dataSourceApi: DataSourceApi<T>;
    }) => void;
    rowProps?: React$1.HTMLProps<HTMLDivElement> | ((rowArgs: InfiniteTableRowStyleFnParams<T>) => React$1.HTMLProps<HTMLDivElement>);
    licenseKey?: string;
    scrollTopKey?: string | number;
    autoSizeColumnsKey?: InfiniteTablePropAutoSizeColumnsKey;
    getCellContextMenuItems?: InfiniteTablePropGetCellContextMenuItems<T>;
    getContextMenuItems?: InfiniteTablePropGetContextMenuItems<T>;
    getColumnMenuItems?: InfiniteTablePropGetColumnMenuItems<T>;
    getFilterOperatorMenuItems?: InfiniteTablePropGetFilterOperatorMenuItems<T>;
}
type InfiniteTablePropGetColumnMenuItems<T> = (defaultItems: Exclude<MenuProps['items'], undefined>, params: {
    column: InfiniteTableComputedColumn<T>;
    columnApi: InfiniteTableColumnApi<T>;
    getComputed: () => InfiniteTableComputedValues<T>;
} & InfiniteTablePublicContext<T>) => MenuProps['items'];
type GetContextMenuItemsReturnType = MenuProps['items'] | null | {
    items: MenuProps['items'];
    columns: MenuColumn[];
};
type InfiniteTablePropGetCellContextMenuItems<T> = (info: InfiniteTableRowInfoDataDiscriminatorWithColumn<T> & {
    event: React$1.MouseEvent;
}, params: InfiniteTablePublicContext<T>) => GetContextMenuItemsReturnType;
type InfiniteTablePropGetContextMenuItems<T> = (param: {
    event: React$1.MouseEvent;
} & Partial<InfiniteTableRowInfoDataDiscriminatorWithColumn<T>>, params: InfiniteTablePublicContext<T>) => GetContextMenuItemsReturnType;
type InfiniteTablePropGetFilterOperatorMenuItems<T> = (defaultItems: Exclude<MenuProps['items'], undefined>, params: {
    column: InfiniteTableComputedColumn<T>;
    filterTypes: DataSourceProps<T>['filterTypes'];
    columnFilterValue: DataSourceFilterValueItem<T> | null;
    api: InfiniteTableApi<T>;
    getState: () => InfiniteTableState<T>;
    getComputed: () => InfiniteTableComputedValues<T>;
    actions: InfiniteTableActions<T>;
}) => MenuProps['items'];
type InfiniteTablePropKeyboardNavigation = 'cell' | 'row' | false;
type InfiniteTablePropKeyboardSelection = boolean;
type InfiniteTablePropHeaderOptions = {
    alwaysReserveSpaceForSortIcon: boolean;
};
type InfiniteTablePropAutoSizeColumnsKey = string | number | {
    key: string | number;
    columnsToSkip?: string[];
    columnsToResize?: string[];
    includeHeader?: boolean;
};
type Scrollbars = {
    vertical: boolean;
    horizontal: boolean;
};
type ScrollAdjustPosition = 'start' | 'end' | 'center';
type InfiniteColumnEditorContextType<T> = {
    api: InfiniteTableApi<T>;
    initialValue: any;
    value: any;
    readOnly: boolean;
    column: InfiniteTableComputedColumn<T>;
    rowInfo: InfiniteTableRowInfo<T>;
    setValue: (value: any) => void;
    confirmEdit: InfiniteTableApi<T>['confirmEdit'];
    cancelEdit: InfiniteTableApi<T>['cancelEdit'];
    rejectEdit: InfiniteTableApi<T>['rejectEdit'];
};

declare function debounce(fn: Function, { wait }: {
    wait: number;
}): (...args: any[]) => void;

declare function Menu(props: MenuProps & HTMLProps<HTMLDivElement>): JSX.Element;
declare namespace Menu {
    var defaultProps: MenuProps & {
        __is_infinite_menu_component?: boolean | undefined;
    };
}

declare function StringFilterEditor<T>(): JSX.Element;
declare function NumberFilterEditor<T>(): JSX.Element;

type ForwardPropsToStateFnResult<TYPE_PROPS, TYPE_RESULT, COMPONENT_SETUP_STATE> = {
    [propName in keyof TYPE_PROPS & keyof TYPE_RESULT]: 1 | ((value: TYPE_PROPS[propName], setupState: COMPONENT_SETUP_STATE) => TYPE_RESULT[propName]);
};
type ComponentStateRootConfig<T_PROPS, COMPONENT_MAPPED_STATE, COMPONENT_SETUP_STATE = {}, COMPONENT_DERIVED_STATE = {}, T_ACTIONS = {}, T_PARENT_STATE = {}> = {
    debugName?: string;
    initSetupState?: () => COMPONENT_SETUP_STATE;
    layoutEffect?: boolean;
    forwardProps?: (setupState: COMPONENT_SETUP_STATE) => ForwardPropsToStateFnResult<T_PROPS, COMPONENT_MAPPED_STATE, COMPONENT_SETUP_STATE>;
    allowedControlledPropOverrides?: Record<keyof T_PROPS, true>;
    interceptActions?: ComponentInterceptedActions<COMPONENT_MAPPED_STATE & COMPONENT_DERIVED_STATE & COMPONENT_SETUP_STATE>;
    mappedCallbacks?: ComponentMappedCallbacks<COMPONENT_MAPPED_STATE & COMPONENT_DERIVED_STATE & COMPONENT_SETUP_STATE>;
    onPropChange?: (params: {
        name: keyof T_PROPS;
        oldValue: any;
        newValue: any;
    }, props: T_PROPS, actions: ComponentStateActions<COMPONENT_MAPPED_STATE & COMPONENT_DERIVED_STATE & COMPONENT_SETUP_STATE>, state: COMPONENT_MAPPED_STATE & COMPONENT_SETUP_STATE & Partial<COMPONENT_DERIVED_STATE>) => void;
    onPropsChange?: (newPropValues: {
        [k in keyof T_PROPS]?: {
            newValue: T_PROPS[k];
            oldValue: T_PROPS[k];
        };
    }, props: T_PROPS, actions: ComponentStateActions<COMPONENT_MAPPED_STATE & COMPONENT_DERIVED_STATE & COMPONENT_SETUP_STATE>, state: COMPONENT_MAPPED_STATE & COMPONENT_SETUP_STATE & Partial<COMPONENT_DERIVED_STATE>) => void;
    mapPropsToState?: (params: {
        props: T_PROPS;
        state: COMPONENT_MAPPED_STATE & COMPONENT_SETUP_STATE & Partial<COMPONENT_DERIVED_STATE>;
        oldState: null | (COMPONENT_MAPPED_STATE & COMPONENT_SETUP_STATE & Partial<COMPONENT_DERIVED_STATE>);
        parentState: T_PARENT_STATE | null;
    }) => COMPONENT_DERIVED_STATE;
    concludeReducer?: (params: {
        previousState: COMPONENT_MAPPED_STATE & COMPONENT_SETUP_STATE & COMPONENT_DERIVED_STATE;
        state: COMPONENT_MAPPED_STATE & COMPONENT_SETUP_STATE & COMPONENT_DERIVED_STATE;
        updatedProps: Partial<T_PROPS> | null;
        parentState: T_PARENT_STATE | null;
    }) => COMPONENT_MAPPED_STATE & COMPONENT_SETUP_STATE & COMPONENT_DERIVED_STATE;
    getReducerActions?: (dispatch: React$1.Dispatch<any>) => T_ACTIONS;
    getParentState?: () => T_PARENT_STATE;
    cleanup?: (state: COMPONENT_MAPPED_STATE & COMPONENT_SETUP_STATE & COMPONENT_DERIVED_STATE) => void;
    onControlledPropertyChange?: (name: string, newValue: any, oldValue: any) => void | ((value: any, oldValue: any) => any);
};
declare function getComponentStateRoot<T_PROPS, COMPONENT_MAPPED_STATE extends object, COMPONENT_SETUP_STATE extends object = {}, COMPONENT_DERIVED_STATE extends object = {}, T_ACTIONS = {}, T_PARENT_STATE = {}>(config: ComponentStateRootConfig<T_PROPS, COMPONENT_MAPPED_STATE, COMPONENT_SETUP_STATE, COMPONENT_DERIVED_STATE, T_ACTIONS, T_PARENT_STATE>): React$1.NamedExoticComponent<T_PROPS & {
    children: React$1.ReactNode;
}>;
declare function useComponentState<COMPONENT_STATE>(): ComponentStateContext<COMPONENT_STATE, ComponentStateGeneratedActions<COMPONENT_STATE>>;

type InterceptedMapFns<K, V> = {
    set?: (k: K, v: V) => void;
    beforeClear?: (map: Map<K, V>) => void;
    clear?: () => void;
    delete?: (k: K) => void;
};
/**
 *
 * @param map Map to intercept
 * @param fns fns to inject
 * @returns a function to restore the map to initial methods
 */
declare function interceptMap<K, V>(map: Map<K, V>, fns: InterceptedMapFns<K, V>): () => void;

declare function useEffectWithChanges<T>(fn: (changes: Record<keyof T, any>, prevValues: Record<string, any>) => void | (() => void), deps: Record<keyof T, any>): void;

declare const components: {
    CheckBox: typeof InfiniteCheckBox;
    LoadMask: (props: LoadMaskProps) => JSX.Element;
    MenuIcon: typeof MenuIcon;
    StringFilterEditor: typeof StringFilterEditor;
    NumberFilterEditor: typeof NumberFilterEditor;
};

export { AdvancedAlignable, ColumnTypeWithInherit, DataSource, DataSourceAction, DataSourceActionType, DataSourceAggregationReducer, DataSourceApi, DataSourceCRUDParam, DataSourceComponentActions, DataSourceContextValue, DataSourceData, DataSourceDataParams, DataSourceDataParamsChanges, DataSourceDerivedState, DataSourceFilterFunctionParam, DataSourceFilterOperator, DataSourceFilterOperatorFunction, DataSourceFilterOperatorFunctionParam, DataSourceFilterType, DataSourceFilterValueItem, DataSourceFilterValueItemValueGetter, DataSourceGroupBy, DataSourceGroupRowsList, DataSourceInsertParam, DataSourceLivePaginationCursorFn, DataSourceLivePaginationCursorParams, DataSourceLivePaginationCursorValue, DataSourceMappedState, DataSourceMappings, DataSourcePivotBy, DataSourcePropAggregationReducers, DataSourcePropCellSelection, DataSourcePropFilterFunction, DataSourcePropFilterTypes, DataSourcePropFilterValue, DataSourcePropGroupBy, DataSourcePropGroupRowsStateObject, DataSourcePropIsRowSelected, DataSourcePropLivePaginationCursor, DataSourcePropMultiRowSelectionChangeParamType, DataSourcePropOnCellSelectionChange, DataSourcePropOnRowSelectionChange, DataSourcePropOnRowSelectionChange_MultiRow, DataSourcePropOnRowSelectionChange_SingleRow, DataSourcePropPivotBy, DataSourcePropRowInfoReducers, DataSourcePropRowSelection, DataSourcePropRowSelection_MultiRow, DataSourcePropRowSelection_SingleRow, DataSourcePropSelectionMode, DataSourcePropSortFn, DataSourcePropSortInfo, DataSourcePropSortTypes, DataSourceProps, DataSourceRawReducer, DataSourceRemoteData, DataSourceRowInfoReducer, DataSourceSetupState, DataSourceSingleSortInfo, DataSourceSortInfo, DataSourceState, DeepMap, ElementContainerGetter, GroupRowsState, InfiniteColumnEditorContextType, InfiniteTable, InfiniteTableAction, InfiniteTableActionType, InfiniteTableApi, InfiniteTableClassName, InfiniteTableColumn, InfiniteTableColumnAggregator, InfiniteTableColumnApi, InfiniteTableColumnCellContextType, InfiniteTableColumnComparer, InfiniteTableColumnGroup, InfiniteTableColumnRenderFunctionForGroupRows, InfiniteTableColumnRenderFunctionForNormalRows, InfiniteTableColumnRenderValueParam, InfiniteTableColumnRowspanParam, InfiniteTableColumnSizingOptions, InfiniteTableColumnValueFormatterParams, InfiniteTableColumnValueGetterParams, InfiniteTableColumnsMap, InfiniteTableComponent, InfiniteTableComputedColumn, InfiniteTableComputedValues, InfiniteTableContextValue, InfiniteTableGroupColumnBase, InfiniteTableGroupColumnFunction, InfiniteTableGroupColumnGetterOptions, InfiniteTablePivotColumn, InfiniteTablePropAutoSizeColumnsKey, InfiniteTablePropColumnGroups, InfiniteTablePropColumnOrder, InfiniteTablePropColumnPinning, InfiniteTablePropColumnSizing, InfiniteTablePropColumnTypes, InfiniteTablePropColumnVisibility, InfiniteTablePropColumns, InfiniteTablePropComponents, InfiniteTablePropGetCellContextMenuItems, InfiniteTablePropGetColumnMenuItems, InfiniteTablePropGroupColumn, InfiniteTablePropGroupRenderStrategy, InfiniteTablePropHeaderOptions, InfiniteTablePropKeyboardNavigation, InfiniteTablePropMultiSortBehavior, InfiniteTablePropRowClassName, InfiniteTablePropRowStyle, InfiniteTableProps, InfiniteTableRowClassNameFn, InfiniteTableRowInfo, InfiniteTableRowStyleFn, InfiniteTableState, LazyGroupDataDeepMap, LazyGroupDataItem, LazyRowInfoGroup, Menu, MenuChildrenFnParam, MenuColumn, MenuColumnRenderParam, MenuDecoration, MenuIconProps, MenuItemDefinition, MenuItemObject, MenuProps, MenuRenderable, MenuRuntimeItem, MenuRuntimeItemSelectable, MenuSeparator, OverlayShowParams, RowSelectionState, Scrollbars, ShowOverlayFn, components, debounce, defaultFilterTypes, defaultFilterTypes as filterTypes, flatten, getComponentStateRoot, group, interceptMap, multisort, useComponentState, useDataSource, useEffectWithChanges, useInfiniteColumnCell, useInfiniteColumnEditor, useInfiniteColumnFilterEditor, useInfiniteHeaderCell, useOverlay, useOverlayPortal, useRowInfoReducers };
