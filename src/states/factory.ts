// need updated ts states file from other task
import * as states from './states';

/**
 * creates an instance of a specified class with default values
 *
 * @param dataType The dataType from the object returned by getDataType.ts
 * @param name The name from the object returned by getDataType.ts
 * @returns Instance of the state class from the data type with corresponding name
 */
export function factory(dataType: string, name: string): states.BaseState | null {
  // don't worry about codes right now because the way we assemble the codes arg is going to change
  // all code args currently set to [] in each state class
  switch (dataType) {
    case 'Encounter':
      return new states.EncounterState(name, null, []);
    case 'Condition':
      return new states.ConditionOnsetState(name, null, []);
    case 'AllergyIntolerance':
      return new states.AllergyOnsetState(name, null, []);
    case 'Medication':
      return new states.MedicationOrderState(name, []);
    case 'CarePlan':
      return new states.CarePlanStartState(name, []);
    case 'Procedure':
      return new states.ProcedureState(name, []);
    case 'ImagingStudy':
      return new states.ImagingStudyState(name, null, []);
    case 'Device':
      return new states.DeviceState(name, null);
    case 'SupplyDelivery':
      return new states.SupplyListState(name, null);
    case 'Observation':
      return new states.ObservationState(name, null, null, []);
    case 'DiagnosticReport':
      return new states.DiagnosticReportState(name, null, []);
    default:
      return null;
  }
}
