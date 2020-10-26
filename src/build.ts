//#region Imports

import nativefier = require('nativefier');
import c = require('chalk');

import { validateInjections } from './injects/validate'
import { 
    deepMerge,
    isWSL, 
} from './util'
import { globalOptions } from './globalBuildOptions'
import { allPlatforms } from './constants'
import { debugLog } from './log'

//#endregion Imports

export function fixIconProperty<T extends BaseNativefierConfiguration>(config: BaseNativefierConfiguration): BaseNativefierConfiguration
{
    let newConfig = config as T & {icon: string};
    if(typeof config.icon !== 'string') return newConfig;

    let platform = newConfig.platform ?? process.platform;
    if(!platform)
    {
        return newConfig
    }
    else if(platform.match(/darwin/))
    {
        return newConfig
    }
    else if(platform.match(/linux/))
    {
        newConfig.icon = newConfig.icon.replace(/ico$/, 'png')
    }
    else
    {
        newConfig.icon = newConfig.icon.replace(/png$/, 'ico')
    }
    console.log(c.green`    Applied replace to icon path: ${config.icon} => ${newConfig.icon}`)
    return newConfig
}

export function buildNativefierApp(...args: Parameters<typeof nativefier.buildNativefierApp>): void
{
    const [schema] = args;
    debugLog(c.hex('#03C')`Building Schema: ${
        c.bold`${schema.name}\n => ${schema.targetUrl} \n => ${
            schema.platform ? JSON.stringify(schema.platform) : '[No Platform]'
        }`
    }`);
    debugLog(` => ${schema.out ?? c.red`[No Output Directory]`}`);
    let buildPath: string = '';
    (async () => {
        buildPath = await nativefier.buildNativefierApp(schema);
        if(buildPath.length > 0)
        {
            debugLog('Built to path %s', buildPath)
        }
        else
        {
            console.log(c.bgHex('#A03').white`[!] Error building ${c.bold(schema.name)}.`)
        }
        return buildPath
    })()
}

export function buildSchema(config: NativefierConfig, baseOptions?: PlatformExtensionConfig): string;
export function buildSchema(config: NativefierConfig, baseOptions: PlatformExtensionConfig = globalOptions): string
{
    const composedConfig = deepMerge(config, baseOptions)

    // Check injection paths
    validateInjections(composedConfig);

    if(typeof composedConfig.platform === 'undefined' && !allPlatforms || allPlatforms.length < 1)
    {
        console.log(c.ansi256(23).bold` - No Platform`)
        buildNativefierApp(fixIconProperty({...composedConfig, platform: undefined}))
    }
    else if(composedConfig.platform === 'all')
    {
        console.log(c.ansi256(23).bold` - All Platforms`)
        buildNativefierApp(fixIconProperty({...composedConfig, platform: undefined, all: true}))
    }
    else if(typeof composedConfig.platform === 'string')
    {
        // lol ok type checker
        console.log(c.ansi256(23).bold` - Platform: ${composedConfig.platform}`)
        const appliedIconPatch = fixIconProperty(composedConfig);

        //#region Temp
        let forceVerbose = false;
        const shouldInspect = forceVerbose = (/typescript/i.test(appliedIconPatch.name ?? ''))
        if(shouldInspect)
        {
            console.log(c.ansi256(22)`[DEBUG] Inspecting final processed schema for ${c.bold(appliedIconPatch.name)}:`)
            console.dir(appliedIconPatch);
        }
        //#endregion Temp
        buildNativefierApp({...appliedIconPatch, verbose: forceVerbose});
    }
    else if(Array.isArray(composedConfig.platform) || composedConfig.all)
    {
        let config = composedConfig;
        if(config.all)
        {
            delete config.all
            config.platform = allPlatforms as [PlatformName, ...PlatformName[]];
            config.all      = undefined;
        }

        console.log(c.ansi256(28)`Iterating through ${config.platform!.length} build platforms.`)

        if(Array.isArray(config.platform))
        {
            config.platform.forEach((platform) => 
            {
                console.log(c.ansi256(23).bold`\n\nPlatform: ${platform}`)
                buildNativefierApp(fixIconProperty({...composedConfig, platform}))
            })
            if(config.platform.length < 1)
            {
                console.log(c.ansi256(1)`Error:PLATFORM_ARR_ZERO_LEN: Check platform object:`)
                console.dir(config.platform)
            }
            return ''
        }
        else
        {
            console.log(c.ansi256(1)`Error:PLATFORM_NOT_ARR: Check platform object:`)
            console.dir(config.platform)
            return ''
        }
        return ''
    }
    return ''
}

export function buildAllSchemas(schemas: NativefierConfig[], globalConfig = globalOptions)
{
    console.log(c.ansi256(32)`Nativefying ${schemas.length} sites.`)
    schemas.forEach((schema) => buildSchema(schema, globalConfig))
        //    .filter(({length = -1}: string) => length > 0)
        //    .forEach((buildPath) => 
        //         console.log(c.bgHex('#0A4').white`Success - Output Path: ${
        //                                                     c.underline.hex('#00C')`buildPath`}`))
}
