import { BaseState } from '../states/states';

export type Module = {
  name: string;
  gmf_version: number;
  remarks: string[];
  states: BaseState;
};
