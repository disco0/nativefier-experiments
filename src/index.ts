//#region Imports

// Node
import process from 'process'

// Packages
import c = require('chalk');

// Local
import options from './yargs'
import { schema, schemas } from './schemas';
import { generateMatchList, isWSL } from './util'
import debugLog from './log';
import {
    buildAllSchemas,
    buildNativefierApp,
    buildSchema,
} from './build'
import { globalOptions } from './globalBuildOptions'
import { allPlatforms } from './constants'

//#endregion Imports

//#region Options

if(options.all)
{
    console.log(`\n\n` + c.ansi256(32)`Building for multiple platforms: (${allPlatforms.join(', ')})`)
}
else if(options.schemas)
{
    console.log(`\n\n` + c.ansi256(32)`Schema arg: ${c.magenta(options.schemas.join(', '))}`)
}
//#endregion Options

//#region Definitions

let targetSchemas: NativefierConfig[] = []

//#endregion Definitions

//#region Prepare Targets

if(Array.isArray(options.schemas) && options.schemas.length > 0)
{
    const max: number | boolean = options.max ?? Number.MAX_SAFE_INTEGER; 
    console.log(`\n\n`+ c.ansi256(23)`Matching schema keys from args.`);

    // TODO: Compile into single giant regex
    let patterns = generateMatchList(options.schemas);

    // Break out of anonymous function if max allowed targets reached
    (() => {
        for(const [schemaName, config] of Object.entries(schema))
        {
            for(let pattern of patterns)
            {
                debugLog(c.blackBright`Checking Pattern: ${c.bold.blackBright`${pattern.source}`}`)
                if(pattern.test(schemaName))
                {
                    console.log(`  - Matched: ${c.bold.green`${schemaName}`}`)
                    targetSchemas.push(config)
                    // Continue if max is reached
                    if(max < targetSchemas.length) break 
                    return;
                };
            }
        }
    })();
    if(targetSchemas.length === 0)
    {
        console.error(
          c.red.bold` - No schemas matched supplied patterns: ${
              patterns.join(', ')
          }\n - Available Schemas: ${
              Object.keys(schema).join(', ')
          }`)

          process.exit(1)
    }
}
else 
    targetSchemas.push(...schemas);

//#endregion Prepare Targets

//#region Main

if(options.schemas)
{
    targetSchemas.forEach((config) => buildSchema(config, globalOptions));
}
else
{
    buildAllSchemas(targetSchemas)
}

//#endregion Main