import { factory } from '../../src/states/factory';
import { STATE_LOOKUP } from './stateMap';

Object.entries(STATE_LOOKUP).forEach(([dataType, stateClass]) => {
  test(`factory returns an instance of the correct class when the ${dataType.substring(
    21
  )} data type is inputted`, () => {
    expect(factory(dataType, '')).toBeInstanceOf(stateClass);
  });
});
