---
title: Infinite Table Type Definitions
description: TypeScript type definitions for Infinite Table
---



These are the public type definitions for `InfiniteTable` and related components, that you can import with named imports from the `@infinite-table/infinite-react` package.


```tsx title="Importing the type for rowInfo"

import type { InfiniteTableRowInfo } from '@infinite-table/infinite-react'

```


<Note title="Naming convention ⚠️">

The types of all properties in the `InfiniteTable` and `DataSource` components respect the following naming convention: `<ComponentName>Prop<PropName>`

So, for example, the type for <DPropLink name="groupBy" /> is <TypeLink name="DataSourcePropGroupBy" />

</Note>


<PropTable searchPlaceholder="Type to filter type definitions">

<Prop name="DataSourceSingleSortInfo" generic>

> Represents information on a specific sort. Contains info about the field to sort by, the sort direction, and the sort type.

This is the referenced by the <DPropLink name="sortInfo" /> prop.

Basically the <DPropLink name="sortInfo" /> prop can be either an array of <TypeLink name="DataSourceSingleSortInfo" /> objects, or a single <TypeLink name="DataSourceSingleSortInfo" /> object (or null).

These are the type properties:

 - `dir`: `1 | -1` - 1 means ascending sort order; -1 means descending sort order.
 - `field?`: `keyof DATA_TYPE` - the field to sort by.
 - `id?`: `string` - an id for the sort info. When a column is not bound to a `field`, use the column id as the `id` property of the sort info, if you need to specify a default sort order by that column. Note that columns have a <PropLink name="columns.valueGetter">valueGetter</PropLink>, which will be used when doing local sorting and the column is not bound to an exact field.
 - `type?`: `string` - the sort type to apply. See <DPropLink name="sortType" /> for more details. For example, you can use `"string"` or `"number"` or `"date"`


</Prop>

<Prop name="DataSourcePropSortInfo" generic>

> The type of the <DPropLink name="sortInfo" /> DataSource prop.

Valid types for this prop are: 
 * `null`
 * <TypeLink name="DataSourceSingleSortInfo" />
 * <TypeLink name="DataSourceSingleSortInfo" />[]

</Prop>

<Prop name="DataSourcePropGroupBy" generic>

> The type of the <DPropLink name="groupBy" /> prop. Basically this type is an array of <TypeLink name="DataSourceGroupBy" />.

</Prop>

<Prop name="InfiniteTableComputedColumn" generic>

> This represents an enhanced column definition for a column. A computed column is basically a column with more information computed at runtime, based on everything Infinite Table can aggregate about it.

This type also includes the properties of the `InfinteTableColumn` type: <PropLink name="columns.id" />, <PropLink name="columns.field" />, <PropLink name="columns.valueGetter" />, etc.

Additional type properties:

 - `id`: `string` - the id of the column. This is the same as the <PropLink name="columns.id" /> prop.
 - `computedEditable`: `boolean| Function` - whether this column is ediable or not. See <PropLink name="columns.defaultEditable" /> for more details.
 - `computedWidth`: `number` - the actual calculated width of the column (in pixels) that will be used for rendering. This is computed based on the <PropLink name="columns.defaultWidth" />,  <PropLink name="columns.defaultFlex" /> and other min/max constraints.
 - `computedPinned`: `false | "start" | "end"`
 - `computedSortInfo`: <TypeLink name="DataSourceSingleSortInfo" /> or null - the sort info for this column.
 - `computedSorted`: `boolean` - whether this column is currently sorted or not.
 - `computedSortedAsc`: `boolean` - whether this column is currently sorted ascending or not.
 - `computedSortedDesc`: `boolean` - whether this column is currently sorted descending or not.
 - `computedFiltered`: `boolean` - whether this column is currently filtered or not.
 - ... and more (docs coming soon)


</Prop>

<Prop  name="InfiniteTableColumnCellContextType" generic>

> The type for the parameter of <PropLink name="columns.renderValue"/> (and related rendering functions) and also for the object you get back when you call <HookLink name="useInfiniteColumnCell" />

These are the type properties:

 - `isGroupRow`: `boolean` - whether the current row is a group row or not.
 - `data`: `DATA_TYPE` | `Partial<DATA_TYPE>` | `null` - the data object for the current row.
  Because the DataSource can be grouped, the `data` object can be either the original data object, or a partial data object (containing the aggregated values - in case of a group row), or null. You can use `isGroupRow` to discriminate between these cases. If `isGroupRow` is `false`, then `data` is of type `DATA_TYPE`.
 - `rowInfo`: <TypeLink name="InfiniteTableRowInfo" />. See that type for more details.
 - `rawValue`: `string` | `number` | other - the raw value for the cell - as computed from the <PropLink name="columns.field" code={false}>column field</PropLink> or <PropLink name="columns.valueGetter">valueGetter</PropLink> function.
 - `value`: `Renderable` - the current value to render for the cell. This is based on the `rawValue`, but if a <PropLink name="columns.valueFormatter" code={false}>column valueFormatter</PropLink> exists, it will be the result of that.
 - `column`: <TypeLink name="InfiniteTableComputedColumn" /> - the (computed) column definition for the current cell.
 - `columnsMap`: a map collection of <TypeLink name="InfiniteTableComputedColumn" /> objects, keyed by column id.
 - `fieldsToColumn`: a map collection of <TypeLink name="InfiniteTableComputedColumn" /> objects, keyed by the column field. If a column is not bound to a field, it will not be included in this map.
 - `align`: the computed value of the <PropLink name="columns.align">align</PropLink> prop for the current cell. This will be `"start"`, `"center"` or `"end"`.
 - `api`: [`InfiniteTableApi`](/docs/reference/api) - the api object.
 - `rowInfo`: <TypeLink name="InfiniteTableRowInfo" /> - the row info for the current row.
 - `rowIndex`: `number` - the index of the current row.
 - `renderBag`: See [column rendering](/docs/learn/columns/column-rendering#rendering-pipeline) for more details.
 - `toggleCurrentGroupRow`: `() => void` - a function that can be used to toggle the current row, if it's a group row.
 - `rootGroupBy`: <TypeLink name="DataSourceGroupBy" /> - the group by specified in the <DPropLink name="groupBy" /> prop of the `DataSource`.
 - `groupByForColumn`: available for group columns. When <PropLink name="groupRenderStrategy" /> is `"multi-column"`, this will be a single <TypeLink name="DataSourcePropGroupBy" />, for each of the generated group columns. When <PropLink name="groupRenderStrategy" /> is `"single-column"`, this will be an array of <TypeLink name="DataSourcePropGroupBy" /> objects - it will be available only in the single group column that will be generated. 


</Prop>

<Prop  name="InfiniteColumnEditorContextType" generic>

> The type for the object you get back when you call <HookLink name="useInfiniteColumnEditor" />

These are the type properties:

 - `api`: [`InfiniteTableApi`](/docs/reference/api) - the api object.
 - `initialValue`: `any` - the initial value for the editor.
 - `value`: `any` - the current value for the editor. Initially will be the same as `initialValue`. If you use this value, then your editor is "controlled", so make sure that when the editor is changed, you call the `setValue` function with the new value.
 - `setValue`: `(value: any) => void` - should be called to update the value in the cell editor. Calling this does not complete the edit.
 - `confirmEdit`: a reference to <ApiLink name="confirmEdit"  code={false}>InfiniteTableApi.confirmEdit</ApiLink>. If you have called `setValue` while editing (meaning your editor was controlled), you don't have to pass any parameters to this function. - the last value of the editor will be used. If your editor is uncontrolled and you haven't called `setValue`, you need to call `confirmEdit` with the value that you want to confirm for the edit.
 
 - `cancelEdit`: a reference to <ApiLink name="cancelEdit" code={false}>InfiniteTableApi.cancelEdit</ApiLink>. Call this to cancel the edit and close the editor. Doesn't require any parameters.
 - `rejectEdit`: a reference to <ApiLink name="rejectEdit" code={false}>InfiniteTableApi.rejectEdit</ApiLink>. Call this to reject the edit and close the editor. You can pass an `Error` object when calling this function to specify the reason for the rejection.
- `readOnly`: `boolean` - whether the cell is read-only or not.

<Note>

Inside the <HookLink name="useInfiniteColumnEditor" /> hook, you can still call <HookLink name="useInfiniteColumnCell" /> to get access to the cell-related information.

</Note>

</Prop>

<Prop name="DataSourceGroupBy" generic>

> The type for the objects in the <DPropLink name="groupBy" /> array. See related <TypeLink name="DataSourcePropGroupBy" />

<Note>

The type is generic, and the generic type parameter is the type of the data in the grid. In this documentation, either `DATA_TYPE` or `T` will be used to refer to the generic type parameter.

</Note>

These are the type properties:
- `field` - `keyof DATA_TYPE`. The field to group by.
- `column`: `Partial<InfiniteTableColumn>`
- `toKey?`: `(value: any, data: DATA_TYPE) => any` - a function that can be used to decide the bucket where each data object from the data set will be placed. If not provided, the `field` value will be used.

</Prop>

<Prop name="InfiniteTableRowInfo" generic>

> Type for `rowInfo` object representing rows in the table. See [Using RowInfo](/docs/learn/rows/using-row-info) for more details.

<Note>

The type is generic, and the generic type parameter is the type of the data in the grid. In this documentation, either `DATA_TYPE` or `T` will be used to refer to the generic type parameter.

</Note>

Many methods in Infinite Table are called with `rowInfo` objects that are typed to <TypeLink name="InfiniteTableRowInfo" />. (see <PropLink name="columns.style" />, <PropLink name="rowStyle" />, <PropLink name="rowClassName" />, <PropLink name="persistEdit" />, <PropLink name="onEditAccepted" /> and many others)

This is a discriminated type, based on the `dataSourceHasGrouping` boolean property and the `isGroupRow` boolean property. This means that the type of the object will change based on the value of those properties.

```ts

export type InfiniteTableRowInfo<T> =
  // dataSourceHasGrouping = false, isGroupRow = false
  | InfiniteTable_NoGrouping_RowInfoNormal<T>; 

  // dataSourceHasGrouping = true, isGroupRow = false
  | InfiniteTable_HasGrouping_RowInfoNormal<T> 

   // dataSourceHasGrouping = true, isGroupRow = true
  | InfiniteTable_HasGrouping_RowInfoGroup<T>
```

The common properties of the type (in all discriminated cases) are:

* `id` - the primary key of the row, as retrieved using the <DPropLink name="idProperty" /> prop.
* `indexInAll` - the index in all currently visible rows.
* `rowSelected` - whether the row is selected or not - `boolean | null`.


### InfiniteTable_NoGrouping_RowInfoNormal

This type has `dataSourceHasGrouping` set to `false` and `isGroupRow` set to `false`.

Additional properties to the ones already mentioned above:

 * `data` - the data for the underlying row, of type `DATA_TYPE`.
 * `isGroupRow` - `false`
 * `dataSourceHasGrouping` - `false`
 * `selfLoaded` - `boolean` - useful when lazy loading is configured.


### InfiniteTable_HasGrouping_RowInfoNormal

This type has `dataSourceHasGrouping` set to `true` and `isGroupRow` set to `false`. So we're in a scenario where grouping is configured via <DPropLink name="groupBy" />, but the current row is not a group row.

Additional properties this type exposes:

 * `data` - the data for the underlying row, of type `DATA_TYPE`.
 * `dataSourceHasGrouping` - `true`
 * `isGroupRow` - `false`
 * `indexInGroup` - type: `number`. The index of the row in its parent group.
 * `groupKeys` - type: `any[]`, but usually it's actually `string[]`. For normal rows, the group keys will have all the keys starting from the topmost parent down to the last group row in the hierarchy (the direct parent of the current row).
 * `groupBy` - type `(keyof T)[]`. Has the same structure as groupKeys, but it will contain the fields used to group the rows.
 * `rootGroupBy` - type `(keyof T)[]`. The groupBy value of the DataSource component, mapped to the `groupBy.field`
 * `parents` - a list of `rowInfo` objects that are the parents of the current row.
 * `indexInParentGroups[]` - type: `number[]`. See below for an example
 * `groupCount` - type: `number`. The count of leaf rows that the current group (in this case, the parent group) contains
 * `groupNesting` - type `number`. The nesting of the parent group.
 * `collapsed` - type `boolean`.
 * `selfLoaded` - type: `boolean`. Useful in lazy-loading scenarios, when there is batching present. If you're not in such a scenario, the value will be `false`.

### InfiniteTable_HasGrouping_RowInfoGroup

This type has `dataSourceHasGrouping` set to `true` and `isGroupRow` set to `true`. So we're in a scenario where grouping is configured via <DPropLink name="groupBy" /> and the current row is a group row.

Additional properties this type exposes:

 * `data` - the data for the underlying row, of type `Partial<DATA_TYPE> | null`. If there are [aggregations configured](/docs/learn/grouping-and-pivoting/group-aggregations), then `data` will be an object that contains those aggregated values (so the shape of the object will be `Partial<DATA_TYPE>`). When no aggregations, `data` will be `null`
 * `dataSourceHasGrouping` - `true`
 * `isGroupRow` - `false`
 * `error` - type: `string?`. If there was an error while loading the group (when the group row is expanded), this will contain the error message. If the group row was loaded with the `cache: true` flag sent in the server response, the error will remain on the `rowInfo` object even when you collapse the group row, otherwise, if `cache: true` was not present, the `error` property will be removed on collapse.
 * `indexInGroup` - type: `number`. The index of the row in the its parent group.
 * `deepRowInfoArray` - an array of `rowInfo` objects. This array contains all the (uncollapsed, so visible) row infos under this group, at any level of nesting, in the order in which they are visible in the table.
 * `reducerResults` - type `Record<string, AggregationReducerResult>`. The result of the <DataSourcePropLink name="aggregationReducers">aggregation reducers</DataSourcePropLink> for each field in the <DataSourcePropLink name="aggregationReducers" /> prop.
 * `groupCount` - type: `number`. The count of leaf rows that the current group (in this case, the parent group) contains
 * `groupData` - type: `DATA_TYPE[]`. The array of the data of all leaf nodes (normal nodes) that are inside this group.

</Prop>

</PropTable>
