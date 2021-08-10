export class BaseState {
  name: string;
  remarks: any;
  type: string;

  constructor(name: string) {
    this.name = name;
    this.remarks = [];
    this.type = 'Base';
  }

  toJSON() {
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
  codes: any;
  encounterClass: string | null;

  constructor(name: string, encounterClass: string | null, codes: any) {
    super(name);
    this.type = 'Encounter';
    this.encounterClass = encounterClass;
    this.codes = codes;
  }

  toJSON() {
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

  constructor(name: string, targetEncounter: string | null, codes: any) {
    super(name);
    this.type = 'ConditionOnset';
    this.targetEncounter = targetEncounter;
    this.codes = codes;
  }

  toJSON() {
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
  codes: any;
  targetEncounter: string | null;

  constructor(name: string, targetEncounter: string | null, codes: any) {
    super(name);
    this.type = 'AllergyOnset';
    this.targetEncounter = targetEncounter;
    this.codes = codes;
  }

  toJSON() {
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
  codes: any;
  constructor(name: string, codes: any) {
    super(name);
    this.type = 'MedicationOrder';
    this.codes = codes;
  }

  toJSON() {
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
  codes: any;
  constructor(name: string, codes: any) {
    super(name);
    this.type = 'CarePlanStart';
    this.codes = codes;
  }

  toJSON() {
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
  codes: any;
  duration: any;
  constructor(name: string, codes: any, duration = undefined) {
    super(name);
    this.type = 'Procedure';
    this.codes = codes;
    this.duration = duration;
  }

  toJSON() {
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

  toJSON() {
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

  toJSON() {
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

  toJSON() {
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

  toJSON() {
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
  codes: any;

  constructor(name: string, category: string | null, unit: string | null, codes: any) {
    super(name);
    this.type = 'Observation';
    this.category = category;
    this.unit = unit;
    this.codes = codes;
  }

  toJSON() {
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
  codes: any;

  constructor(name: string, category: string | null, numberOfObservations: number | null, codes: any) {
    super(name);
    this.type = 'MultiObservation';
    this.category = category;
    this.numberOfObservations = numberOfObservations;
    this.codes = codes;
  }

  toJSON() {
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
  codes: any;

  constructor(name: string, numberOfObservations: number | null, codes: any) {
    super(name);
    this.type = 'DiagnosticReport';
    this.numberOfObservations = numberOfObservations;
    this.codes = codes;
  }

  toJSON() {
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

  toJSON() {
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
