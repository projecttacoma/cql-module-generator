import * as classes from '../../src/states/states';

export const STATE_LOOKUP = {
  Encounter: classes.EncounterState,
  Condition: classes.ConditionOnsetState,
  AllergyIntolerance: classes.AllergyOnsetState,
  Medication: classes.MedicationOrderState,
  CarePlan: classes.CarePlanStartState,
  Procedure: classes.ProcedureState,
  ImagingStudy: classes.ImagingStudyState,
  Device: classes.DeviceState,
  SupplyDelivery: classes.SupplyListState,
  Observation: classes.ObservationState,
  DiagnosticReport: classes.DiagnosticReportState
};
