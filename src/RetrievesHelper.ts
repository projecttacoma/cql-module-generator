import { R4 } from '@ahryman40k/ts-fhir-types';
import { MeasureBundleHelpers, CalculatorTypes, RetrievesFinder } from 'fqm-execution';

/**
 * Get all retrieves used in the library
 *
 * @param measureBundle Bundle with a MeasureResource and all necessary data for execution.
 * @returns DataTypeQuery array of all retrieves output
 */
export function getRetrieves(measureBundle: R4.IBundle): CalculatorTypes.DataTypeQuery[] {
  // Extract the library ELM, and the id of the root library, from the measure bundle
  const { rootLibIdentifier, elmJSONs } = MeasureBundleHelpers.extractLibrariesFromBundle(measureBundle);
  // Get reference to root library
  const rootLib = elmJSONs.find(ej => ej.library.identifier === rootLibIdentifier);

  // Throw error if there is no root library
  if (!rootLib?.library) {
    throw new Error('root library does not contain a library object');
  }

  // Get the retrieves for every statement in the root library
  const allRetrieves = rootLib.library.statements.def.flatMap(statement => {
    if (statement.expression && statement.name !== 'Patient') {
      const retrieves = RetrievesFinder.findRetrieves(rootLib, elmJSONs, statement.expression);
      return retrieves.results;
    } else {
      return [];
    }
  });
  return allRetrieves;
}