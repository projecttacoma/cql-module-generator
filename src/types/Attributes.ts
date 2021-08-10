import type { code } from './code';
export interface Goal  {
  observation?: {
    codes: code[],
    operator: '==' | '!=' | "<" | "<=" | ">" | ">=" | "is nil" | "is not nil",
    value: number
  },
  text?: string,
  addresses: string[]
}

export interface Instance {
    title: string,
    sop_class: code
  }
  
  export interface Series  {
    body_site: code,
    modality: code,
    instances: Instance[]
  
  }export interface Supply  {
    quantity: number,
    item: code
  }