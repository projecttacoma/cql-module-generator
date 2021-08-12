/* eslint-disable @typescript-eslint/no-explicit-any */
import { Code } from '../types/code';

export class BaseState {
  name: string;
  remarks: any;
  type: string;

  constructor(name: string) {
    this.name = name;
    this.remarks = [];
    this.type = 'Base';
  }

  toJSON(): any {
    return {
      type: this.type,
      direct_transition: this.name
    };
  }
}

export class InitialState extends BaseState {
  constructor(name: string) {
    super(name);
    this.type = 'Initial';
  }
}

export class EncounterState extends BaseState {
  codes: Code[];
  encounterClass: string | null;

  constructor(name: string, encounterClass: string | null, codes: Code[]) {
    super(name);
    this.type = 'Encounter';
    this.encounterClass = encounterClass;
    this.codes = codes;
  }

  toJSON(): any {
    return {
      ...super.toJSON(),
      codes: this.codes,
      encounter_class: this.encounterClass
    };
  }
}

export class EncounterEndState extends BaseState {
  constructor(name: string) {
    super(name);
    this.type = 'EncounterEnd';
  }
}

export class ConditionOnsetState extends BaseState {
  targetEncounter: string | null;
  codes: any;

  constructor(name: string, targetEncounter: string | null, codes: Code[]) {
    super(name);
    this.type = 'ConditionOnset';
    this.targetEncounter = targetEncounter;
    this.codes = codes;
  }

  toJSON(): any {
    return {
      ...super.toJSON(),
      target_encounter: this.targetEncounter,
      codes: this.codes
    };
  }
}

export class ConditionEndState extends BaseState {
  constructor(name: string) {
    super(name);
    this.type = 'ConditionEnd';
  }
}
export class AllergyOnsetState extends BaseState {
  codes: Code[];
  targetEncounter: string | null;

  constructor(name: string, targetEncounter: string | null, codes: Code[]) {
    super(name);
    this.type = 'AllergyOnset';
    this.targetEncounter = targetEncounter;
    this.codes = codes;
  }

  toJSON(): any {
    return {
      ...super.toJSON(),
      target_encounter: this.targetEncounter,
      codes: this.codes
    };
  }
}

export class AllergyEndState extends BaseState {
  constructor(name: string) {
    super(name);
    this.type = 'AllergyEnd';
  }
}

export class MedicationOrderState extends BaseState {
  codes: Code[];
  constructor(name: string, codes: Code[]) {
    super(name);
    this.type = 'MedicationOrder';
    this.codes = codes;
  }

  toJSON(): any {
    return {
      ...super.toJSON(),
      codes: this.codes
    };
  }
}

export class MedicationEndState extends BaseState {
  constructor(name: string) {
    super(name);
    this.type = 'MedicationEnd';
  }
}

export class CarePlanStartState extends BaseState {
  codes: Code[];
  constructor(name: string, codes: Code[]) {
    super(name);
    this.type = 'CarePlanStart';
    this.codes = codes;
  }

  toJSON(): any {
    return {
      ...super.toJSON(),
      codes: this.codes
    };
  }
}

export class CarePlanEndState extends BaseState {
  constructor(name: string) {
    super(name);
    this.type = 'CarePlanEnd';
  }
}

export class ProcedureState extends BaseState {
  codes: Code[];
  duration: any;
  constructor(name: string, codes: Code[], duration = undefined) {
    super(name);
    this.type = 'Procedure';
    this.codes = codes;
    this.duration = duration;
  }

  toJSON(): any {
    return {
      ...super.toJSON(),
      codes: this.codes,
      duration: this.duration
    };
  }
}

export class ImagingStudyState extends BaseState {
  series: any;
  procedureCode: string | null;

  constructor(name: string, procedureCode: string | null, series: any) {
    super(name);
    this.type = 'ImagingStudy';
    this.procedureCode = procedureCode;
    this.series = series;
  }

  toJSON(): any {
    return {
      ...super.toJSON(),
      procedure_code: this.procedureCode,
      series: this.series
    };
  }
}

export class DeviceState extends BaseState {
  code: any;

  constructor(name: string, code: any) {
    super(name);
    this.type = 'Device';
    this.code = code;
  }

  toJSON(): any {
    return {
      ...super.toJSON(),
      code: this.code
    };
  }
}

export class DeviceEndState extends BaseState {
  constructor(name: string) {
    super(name);
    this.type = 'DeviceEnd';
  }
}

export class SupplyListState extends BaseState {
  supplies: any;

  constructor(name: string, supplies: any) {
    super(name);
    this.type = 'SupplyList';
    this.supplies = supplies;
  }

  toJSON(): any {
    return {
      ...super.toJSON(),
      supplies: this.supplies
    };
  }
}

export class VitalSignState extends BaseState {
  vitalSign: any;
  unit: string | null;

  constructor(name: string, vitalSign: any, unit: string | null) {
    super(name);
    this.type = 'VitalSign';
    this.vitalSign = vitalSign;
    this.unit = unit;
  }

  toJSON(): any {
    return {
      ...super.toJSON(),
      vital_sign: this.vitalSign,
      unit: this.unit
    };
  }
}

export class ObservationState extends BaseState {
  category: string | null;
  unit: string | null;
  codes: Code[];

  constructor(name: string, category: string | null, unit: string | null, codes: Code[]) {
    super(name);
    this.type = 'Observation';
    this.category = category;
    this.unit = unit;
    this.codes = codes;
  }

  toJSON(): any {
    return {
      ...super.toJSON(),
      category: this.category,
      unit: this.unit,
      codes: this.codes,
      exact: {
        quantity: 1
      }
    };
  }
}

export class MultiObservationState extends BaseState {
  category: string | null;
  numberOfObservations: number | null;
  codes: Code[];

  constructor(name: string, category: string | null, numberOfObservations: number | null, codes: Code[]) {
    super(name);
    this.type = 'MultiObservation';
    this.category = category;
    this.numberOfObservations = numberOfObservations;
    this.codes = codes;
  }

  toJSON(): any {
    return {
      ...super.toJSON(),
      category: this.category,
      number_of_observations: this.numberOfObservations,
      codes: this.codes
    };
  }
}

export class DiagnosticReportState extends BaseState {
  numberOfObservations: number | null;
  codes: Code[];

  constructor(name: string, numberOfObservations: number | null, codes: Code[]) {
    super(name);
    this.type = 'DiagnosticReport';
    this.numberOfObservations = numberOfObservations;
    this.codes = codes;
  }

  toJSON(): any {
    return {
      ...super.toJSON(),
      number_of_observations: this.numberOfObservations,
      codes: this.codes
    };
  }
}

export class SymptomState extends BaseState {
  symptom: any;
  cause: any;
  probability: any;

  constructor(name: string, symptom: any, cause: any, probability: any) {
    super(name);
    this.type = 'Symptom';
    this.symptom = symptom;
    this.cause = cause;
    this.probability = probability;
  }

  toJSON(): any {
    return {
      ...super.toJSON(),
      symptom: this.symptom,
      cause: this.cause,
      probability: this.probability
    };
  }
}
export class DeathState extends BaseState {
  constructor(name: string) {
    super(name);
    this.type = 'Death';
  }
}
export class TerminalState extends BaseState {
  constructor(name: string) {
    super(name);
    this.type = 'Terminal';
  }
}

export type AnyState =
  | DeathState
  | SymptomState
  | DiagnosticReportState
  | MultiObservationState
  | ObservationState
  | VitalSignState
  | SupplyListState
  | BaseState
  | EncounterEndState
  | EncounterState
  | ConditionEndState
  | ConditionOnsetState
  | AllergyEndState
  | AllergyOnsetState
  | MedicationEndState
  | MedicationOrderState
  | CarePlanEndState
  | CarePlanStartState
  | ProcedureState
  | ImagingStudyState
  | DeviceEndState
  | DeviceState
  | TerminalState
  | InitialState;

export type hasCodes =
  | EncounterState
  | ConditionOnsetState
  | AllergyOnsetState
  | MedicationOrderState
  | CarePlanStartState
  | ProcedureState
  | ObservationState
  | MultiObservationState
  | DiagnosticReportState;

export const doesHaveCodes = (tbd: AnyState): tbd is hasCodes => {
  if ((tbd as hasCodes).codes) {
    return true;
  }
  return false;
};
