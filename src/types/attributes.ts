import type { Code } from './code';
export interface Goal {
  observation?: {
    codes: Code[];
    operator: '==' | '!=' | '<' | '<=' | '>' | '>=' | 'is nil' | 'is not nil';
    value: number;
  };
  text?: string;
  addresses: string[];
}

export interface Instance {
  title: string;
  sop_class: Code;
}

export interface Series {
  body_site: Code;
  modality: Code;
  instances: Instance[];
}
export interface Supply {
  quantity: number;
  item: Code;
}
