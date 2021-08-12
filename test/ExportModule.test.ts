import { CalculatorTypes } from 'fqm-execution';
import { exportModule } from '../src/ExportModule';

const EMPTY_DATA_TYPE = [] as CalculatorTypes.DataTypeQuery[];

const SINGULAR_DATA_TYPE = [
  {
    dataType: 'Encounter',
    valueSet: 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.101.12.1025',
    queryLocalId: '33',
    retrieveLocalId: '17',
    retrieveLibraryName: 'AdultOutpatientEncounters',
    queryLibraryName: 'AdultOutpatientEncounters',
    expressionStack: [],
    path: 'type'
  }
];

const MULTIPLE_DATA_TYPES = [
  {
    dataType: 'Encounter',
    valueSet: 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.101.12.1025',
    queryLocalId: '33',
    retrieveLocalId: '17',
    retrieveLibraryName: 'AdultOutpatientEncounters',
    queryLibraryName: 'AdultOutpatientEncounters',
    expressionStack: [],
    path: 'type'
  },
  {
    dataType: 'Procedure',
    valueSet: 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.101.12.1025',
    queryLocalId: '33',
    retrieveLocalId: '17',
    retrieveLibraryName: 'AdultOutpatientEncounters',
    queryLibraryName: 'AdultOutpatientEncounters',
    expressionStack: [],
    path: 'type'
  }
];

const EXPECTED_EMPTY_DATA_TYPE = {
  name: 'Empty',
  remarks: [],
  states: {
    Initial: {
      direct_transition: 'Initial',
      type: 'Initial'
    },
    Terminal: {
      direct_transition: 'Terminal',
      type: 'Terminal'
    }
  }
};

const EXPECTED_SINGULAR_DATA_TYPE = {
  name: 'Test',
  remarks: [],
  states: {
    Initial: {
      direct_transition: 'Initial',
      type: 'Initial'
    },
    Terminal: {
      direct_transition: 'Terminal',
      type: 'Terminal'
    },
    Encounter_0: {
      codes: [],
      encounter_class: null,
      type: 'Encounter',
      direct_transition: 'Encounter_0'
    }
  }
};

const EXPECTED_MULTIPLE_DATA_TYPES = {
  name: 'Test',
  remarks: [],
  states: {
    Initial: {
      direct_transition: 'Initial',
      type: 'Initial'
    },
    Terminal: {
      direct_transition: 'Terminal',
      type: 'Terminal'
    },
    Encounter_0: {
      codes: [],
      encounter_class: null,
      type: 'Encounter',
      direct_transition: 'Encounter_0'
    },
    Procedure_1: {
      codes: [],
      duration: undefined,
      type: 'Procedure',
      direct_transition: 'Procedure_1'
    }
  }
};

describe('Export Module Tests', () => {
  test('Emtpy Data Type', () => {
    expect(exportModule('Empty', EMPTY_DATA_TYPE)).toEqual(EXPECTED_EMPTY_DATA_TYPE);
  });
  test('Singular Data Type', () => {
    expect(exportModule('Test', SINGULAR_DATA_TYPE)).toEqual(EXPECTED_SINGULAR_DATA_TYPE);
  });
  test('Multiple Data Types', () => {
    expect(exportModule('Test', MULTIPLE_DATA_TYPES)).toEqual(EXPECTED_MULTIPLE_DATA_TYPES);
  });
});
