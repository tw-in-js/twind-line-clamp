import type { Context, CSSRules, ThemeSection, Directive } from 'twind'
import { directive } from 'twind'

declare module 'twind' {
  interface Theme {
    lineClamp?: ThemeSection<string | number>
  }
}

export interface LineClamp {
  (lines: 'none' | number | string): Directive<CSSRules>
  (parts: string[], context: Context): CSSRules
}

const lineClamp$ = (lines: string, { theme }: Context): CSSRules =>
  lines === 'none'
    ? {
        WebkitLineClamp: 'unset',
      }
    : {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: `${theme('lineClamp', lines, lines)}`,
      }

export const lineClamp = ((
  lines: number | 'none' | string[],
  context: Context,
): Directive<CSSRules> | CSSRules =>
  Array.isArray(lines)
    ? lineClamp$(lines[0], context)
    : directive(lineClamp$, `${lines}`)) as LineClamp
