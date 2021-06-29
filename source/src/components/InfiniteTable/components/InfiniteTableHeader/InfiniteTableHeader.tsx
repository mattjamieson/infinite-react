import * as React from 'react';
import { useCallback, useEffect, useRef } from 'react';

import { ICSS } from '../../../../style/utilities';

import { join } from '../../../../utils/join';

import { InfiniteTableHeaderCell } from './InfiniteTableHeaderCell';

import { useInfiniteTable } from '../../hooks/useInfiniteTable';

import { internalProps } from '../../internalProps';

import type { InfiniteTableHeaderProps } from './InfiniteTableHeaderTypes';

import { RawList } from '../../../RawList';

import type { RenderItem } from '../../../RawList/types';
import { ScrollPosition } from '../../../types/ScrollPosition';

import { useHeaderOnResize } from './useHeaderOnResize';

const { rootClassName } = internalProps;

export const TableHeaderClassName = `${rootClassName}Header`;

function InfiniteTableHeaderFn<T>(
  props: InfiniteTableHeaderProps<T> & React.HTMLAttributes<HTMLDivElement>,
) {
  const { repaintId, brain, columns, style, className, onResize } = props;
  const { computed } = useInfiniteTable<T>();

  const { computedVisibleColumnsMap } = computed;

  const renderColumn: RenderItem = useCallback(
    ({ domRef, itemIndex: columnIndex }) => {
      const column = columns[columnIndex];

      if (!column) {
        debugger;
      }
      return (
        <InfiniteTableHeaderCell<T>
          domRef={domRef}
          column={column}
          columns={computedVisibleColumnsMap}
        />
      );
    },
    [computedVisibleColumnsMap, columns, repaintId],
  );

  useEffect(() => {
    const onScroll = (scrollPosition: ScrollPosition) => {
      domRef.current!.style.transform = `translate3d(-${scrollPosition.scrollLeft}px, 0px, 0px)`;
    };

    const removeOnScroll = brain.onScroll(onScroll);

    return removeOnScroll;
  }, [brain]);

  const domRef = useRef<HTMLDivElement | null>(null);

  useHeaderOnResize(domRef, onResize);

  const domProps: React.HTMLProps<HTMLDivElement> = {
    ref: domRef,
    className: join(
      ICSS.flexFlow.row,
      TableHeaderClassName,
      `${TableHeaderClassName}--virtualized`,
      className,
    ),
    style,
  };

  return (
    <div {...domProps}>
      <RawList brain={brain} renderItem={renderColumn} />
    </div>
  );
}

export const InfiniteTableHeader = React.memo(
  InfiniteTableHeaderFn,
) as typeof InfiniteTableHeaderFn;
// export const TableHeader = TableHeaderFn; //React.memo(TableHeaderFn) as typeof TableHeaderFn;