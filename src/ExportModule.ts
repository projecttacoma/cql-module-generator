/* eslint-disable @typescript-eslint/no-explicit-any */

import { CalculatorTypes } from 'fqm-execution';
import * as states from './states/states';
import { factory } from './states/factory';

interface moduleJSONType {
  name: string;
  remarks: string[];
  states: {
    Initial: states.InitialState;
    Terminal: states.TerminalState;
    [key: string]: states.AnyState;
  };
}
/**
 * Converts an array of DataTypeQueries into a JSON object which can be copied into
 * the Synthea Module Builder to create a set of corresponding states
 * @param libName A string signifying the library used to create the dataType array
 * @param dataTypes An array of DataTypeQueries which will be converted into Synthea states
 * @returns moduleJSONType object consisting of the toJSON functions from the states created using the dataTypes arg.
 */
export function exportModule(libName: string, dataTypes: CalculatorTypes.DataTypeQuery[]): moduleJSONType {
  const moduleJSON: moduleJSONType = {
    name: libName,
    remarks: [],
    states: {
      Initial: new states.InitialState('Initial').toJSON(),
      Terminal: new states.TerminalState('Terminal').toJSON()
    }
  };

  dataTypes.forEach((object, i) => {
    const stateName = `${object.dataType}_${i}`;

    if (object.dataType !== null && factory(object.dataType, stateName) !== null) {
      const stateClass = factory(object.dataType, stateName);
      if (object.valueSet !== undefined && stateClass && states.doesHaveCodes(stateClass)) {
        stateClass.codes.push({
          system: '',
          code: '',
          display: '',
          value_set: object.valueSet
        });
      }

      stateClass && (moduleJSON.states[stateName] = stateClass.toJSON());
    }
  });

  return moduleJSON;
}
