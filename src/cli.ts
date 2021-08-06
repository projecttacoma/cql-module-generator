import { Command } from 'commander';
import fs from 'fs';

const program = new Command();

program
  .version('0.0.1')
  .requiredOption('-b, --bundle <bundle>', 'path to bundle containing FHIR Libraries')
  .parse(process.argv);

const options = program.opts();
const bundle = JSON.parse(fs.readFileSync(options.bundle, 'utf8'));
