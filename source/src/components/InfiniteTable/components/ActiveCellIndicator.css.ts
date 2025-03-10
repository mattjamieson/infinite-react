import { fallbackVar, style, styleVariants } from '@vanilla-extract/css';

import { ThemeVars } from '../theme.css';
import {
  left,
  top,
  pointerEvents,
  position,
  height,
  zIndex,
} from '../utilities.css';

export const ActiveIndicatorWrapperCls = style([
  pointerEvents.none,
  position.sticky,
  left['0'],
  top['0'],
  height['0'],
  zIndex[1_000_000],
]);
export const ActiveCellIndicatorBaseCls = style(
  [
    pointerEvents.none,
    position.sticky,
    left['0'],
    top['0'],
    {
      border: fallbackVar(
        ThemeVars.components.Cell.activeBorder,

        `${ThemeVars.components.Cell.activeBorderWidth} ${
          ThemeVars.components.Cell.activeBorderStyle
        } ${fallbackVar(
          ThemeVars.components.Cell.activeBorderColor,
          ThemeVars.color.accent,
        )}`,
      ),

      background: fallbackVar(
        ThemeVars.components.Cell.activeBackground,
        `color-mix(in srgb, ${fallbackVar(
          ThemeVars.components.Cell.activeBorderColor,
          ThemeVars.color.accent,
        )}, transparent calc(100% - ${
          ThemeVars.components.Cell.activeBackgroundAlpha
        } * 100%))`,
      ),
    },
  ],
  'ActiveCellIndicator',
);

export const ActiveCellIndicatorCls = styleVariants({
  visible: [ActiveCellIndicatorBaseCls, { display: 'block' }],
  hidden: [ActiveCellIndicatorBaseCls, { display: 'none' }],
});
