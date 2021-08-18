import { MeasureBundleHelpers, CalculatorTypes, ELMTypes, RetrievesFinder } from 'fqm-execution';

/**
 * Get all retrieves used in the library
 *
 * @param measureBundle Bundle with a MeasureResource and all necessary data for execution.
 * @returns an object consisting of a DataTypeQuery array of all retrieves output and a library Name of the passed in measure bundle
 */
export function getRetrieves(measureBundle: fhir4.Bundle): {
  libName: ELMTypes.ELMIdentifier;
  allRetrieves: CalculatorTypes.DataTypeQuery[];
} {
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
  return { libName: rootLibIdentifier, allRetrieves };
}
