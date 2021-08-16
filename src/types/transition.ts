import type { Conditional } from './conditional';

export type DirectTransition = {
  to: string;
  type: 'Direct';
};

export type DistributedTransition = {
  type: 'Distributed';
  transition: [
    {
      distribution:
        | {
            attribute: string;
            default: number;
          }
        | number;
      to: string;
    }
  ];
};

export type ConditionalTransition = {
  type: 'Conditional';
  transition: [
    {
      condition?: Conditional;
      to: string;
    }
  ];
};

export type ComplexTransition = {
  type: 'Complex';
  transition: [
    {
      condition?: Conditional;
      distributions?: DistributedTransition;
      transition?: DirectTransition;
    }
  ];
};

export type TableTransition = {
  type: 'Table';
  lookup_table_name_ModuleBuilder: string;
  viewTable: boolean;
  lookuptable: string;
  transition: [
    {
      default_probability: number;
      transition: string;
      lookup_table_name: string;
    }
  ];
};

export type Transition =
  | DirectTransition
  | DistributedTransition
  | ConditionalTransition
  | ComplexTransition
  | TableTransition;
