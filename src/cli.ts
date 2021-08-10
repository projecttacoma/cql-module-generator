import { Command } from 'commander';
import fs from 'fs';
import { R4 } from '@ahryman40k/ts-fhir-types';
import { getRetrieves } from './RetrievesHelper';

const program = new Command();

program
  .version('0.0.1')
  .requiredOption('-b, --bundle <bundle>', 'path to bundle containing FHIR Libraries')
  .parse(process.argv);

function parseBundle(): R4.IBundle {
  const options = program.opts();
  return JSON.parse(fs.readFileSync(options.bundle, 'utf8')) as R4.IBundle;
}

const measureBundle = parseBundle();

getRetrieves(measureBundle);
