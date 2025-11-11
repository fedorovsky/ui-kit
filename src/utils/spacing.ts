import { tokens } from '@mstyle/theme';

export function spacing(value: number) {
  return `calc(${tokens.spacing} * ${value})`;
}
