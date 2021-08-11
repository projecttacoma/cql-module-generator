import { CalculatorTypes } from 'fqm-execution';
import * as states from './states/states';
import { factory } from './states/factory';
import { ELMIdentifier } from 'fqm-execution/build/types/ELMTypes';

interface moduleJSONType {
  name: string;
  remarks: string[];
  states: {
    Initial: any;
    Terminal: any;
    [key: string]: any;
  };
}

export function exportModule(libName: string, dataTypes: CalculatorTypes.DataTypeQuery[]): any {
  //const dataTypes = loadData(ELMFiles);
  //const valueSets = loadValueSet(ELMFiles);
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
      //console.log(`adding state of type: ${object.dataType}`);
      const StateClass = factory(object.dataType, stateName);

      StateClass && (moduleJSON.states[stateName] = StateClass.toJSON());
    }
  });

  return moduleJSON;
}
