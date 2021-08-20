import { Command } from 'commander';
import fs from 'fs';
import { getRetrieves } from './RetrievesHelper';
import { exportModule } from './ExportModule';

const program = new Command();

program
  .version('0.0.1')
  .requiredOption('-b, --bundle <bundle>', 'path to bundle containing FHIR Libraries')
  .parse(process.argv);

function parseBundle(): fhir4.Bundle {
  const options = program.opts();
  return JSON.parse(fs.readFileSync(options.bundle, 'utf8')) as fhir4.Bundle;
}

const measureBundle = parseBundle();

const { libName, allRetrieves } = getRetrieves(measureBundle);
const moduleJSON = exportModule(libName.id, allRetrieves);
fs.writeFileSync(`${moduleJSON.name}.json`, JSON.stringify(moduleJSON, null, 4));
