import * as React from 'react';
import { InfiniteTableComputedColumn } from '../../types';

import { InfiniteTableComponentState } from '../../types/InfiniteTableState';
import {
  ColGroupTreeItem,
  buildColumnAndGroupTree,
} from './buildColumnAndGroupTree';
import { InfiniteTableHeaderCell } from './InfiniteTableHeaderCell';
import { InfiniteTableHeaderGroup } from './InfiniteTableHeaderGroup';

type BuildColumnHeaderGroupsConfig<T> = {
  columnGroups: InfiniteTableComponentState<T>['columnGroups'];
  columnGroupsDepthsMap: InfiniteTableComponentState<T>['columnGroupsDepthsMap'];
  columns: InfiniteTableComputedColumn<T>[];
  allVisibleColumns: Map<string, InfiniteTableComputedColumn<T>>;
};

export function renderColumnHeaderGroups<T>(
  config: BuildColumnHeaderGroupsConfig<T>,
): JSX.Element[] {
  const { columns, columnGroups, allVisibleColumns, columnGroupsDepthsMap } =
    config;

  if (!columns.length) {
    return [];
  }

  const items = buildColumnAndGroupTree(
    columns,
    columnGroups,
    columnGroupsDepthsMap,
  );

  function toJSX(items: ColGroupTreeItem<T>[]): JSX.Element[] {
    return items.map((colGroupItem) => {
      if (colGroupItem.type === 'column') {
        const col = colGroupItem.ref;
        return (
          <InfiniteTableHeaderCell<T>
            key={col.id}
            column={col}
            columns={allVisibleColumns}
            virtualized={false}
          />
        );
      }

      const colIds: string[] = [];
      const columns = colGroupItem.columnItems.map((item) => {
        const col = allVisibleColumns.get(item.id)!;

        colIds.push(col.id);
        return col;
      });
      return (
        <InfiniteTableHeaderGroup<T>
          key={`${colGroupItem.uniqueGroupId.join('/')}`}
          columns={columns}
          columnGroup={{
            ...colGroupItem.ref,
            id: colGroupItem.id,
            uniqueGroupId: colGroupItem.uniqueGroupId,
            depth: colGroupItem.depth,
            columns: colIds,
            computedWidth: colGroupItem.computedWidth,
            groupOffset: colGroupItem.groupOffset,
          }}
        >
          {toJSX(colGroupItem.children)}
        </InfiniteTableHeaderGroup>
      );
    });
  }

  return toJSX(items);
}