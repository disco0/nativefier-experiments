import * as yargs from 'yargs'
import { allPlatforms, DEBUG } from './constants';

export const options = yargs
    .option('all', { 
        type: 'boolean',
        alias:        "a",
        description:  `Build for all target platforms (${allPlatforms.join(', ')})`,
        describe:     'Build for all target platforms',
        default:      false,
        // boolean: true
    })
    .option('schemas', {
        type: "array",
        alias:        "s",
        description:  "Build only schemas with keys matching supplied arguments",
        describe:     "Build only matching",
        requiresArg:  true
    })
    .option('max', {
        type:         "number",
        alias:        "m",
        description:  "Limit total number of apps to nativefy in one invocation",
        requiresArg:  true,
    })
    // .option('help', {
    //     alias: 'h',
    //     description: 'display help message',
    // })
    .option('verbose', {
        alias: 'v',
        description: 'Set "verbose" property to true in nativefier configuration objects.'
    })
    // .help('help')
    .string(['schemas'])
    .parse()

export default options;

if(DEBUG)
{
    console.log(`Parsed args:`)
    console.dir(yargs)
}