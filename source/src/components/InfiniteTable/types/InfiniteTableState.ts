import type { ScrollPosition } from '../../types/ScrollPosition';
import type {
  InfiniteTablePropColumnOrder,
  InfiniteTablePropColumnPinning,
  InfiniteTablePropColumnVisibility,
} from './InfiniteTableProps';
import { Size } from '../../types/Size';

export interface InfiniteTableState<T> {
  columnShifts: null | number[];
  draggingColumnId: null | string;
  // viewportSize: Size;
  bodySize: Size;
  scrollPosition: ScrollPosition;
  columnOrder: InfiniteTablePropColumnOrder;
  columnVisibility: InfiniteTablePropColumnVisibility;
  columnPinning: InfiniteTablePropColumnPinning;

  x?: T;
}