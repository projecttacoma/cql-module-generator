
import type * as BaseState from './src/states/states';

export type Module = {
  name: string,
  gmf_version: number,
  remarks: string[],
  states: BaseState
}
