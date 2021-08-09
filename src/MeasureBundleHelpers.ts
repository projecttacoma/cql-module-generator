import { R4 } from '@ahryman40k/ts-fhir-types';
import { MeasureBundleHelpers } from 'fqm-execution';
import { ELM } from '../../fqm-execution/build/types/ELMTypes';

export function checkBundles(measureBundle: R4.IBundle): void {
  const results = MeasureBundleHelpers.extractLibrariesFromBundle(measureBundle);
  const rootLibID = results.rootLibIdentifier.id;
  let rootLibRef: ELM;

  results.elmJSONs.forEach(e => {
    if (e.library.identifier.id === rootLibID) {
      rootLibRef = e;
    }
  });

  // get the retrieves for every statement in the root library
  //   const allRetrieves = rootLibRef.library.statements.def.flatMap(statement => {
  //     if (statement.expression && statement.name != 'Patient') {
  //       const retrieves = RetrievesHelper.findRetrieves(rootLibRef, results.elmJSONs, statement.expression);
  //       return retrieves;
  //     } else {
  //       return [];
  //     }
  //   });

  console.log('Root lib identifier:');
  console.log(results.rootLibIdentifier);
  console.log('ELM JSONS');
  console.log(results.elmJSONs);
  console.log('Root lib ref');
  //console.log(rootLibRef);
}
