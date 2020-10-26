// import type { NativefierConfig } from '../global'
import { resolve } from 'path'
import { mergeConfig } from '../util/config'
import { unique } from '../util'
import { debugLog, c } from '../log'
import { outputDir } from '../constants'
const log = debugLog.extend('regex101')
log.enabled = true;

/**
 * @TODO
 *   Configuration of traffic lights is now broken after moving to webpack - update to read config
 * from build file or modify webpack config dynamically, possibly set a window variable and 
 * modify conditionally at runtime
 */

enum Regex101TrafficLightsMode 
{
    DEFAULT,
    SHIFTLOGO,
    REMOVELOGO,
    SHIFTLIGHTS_SIDE,
    SHIFTLIGHTS_DOWN,
    WEBPACK
}

const enum ScriptConfig
{
    WEBPACK
}

const config = {
    name:           'Regex101',
    injectBasePath: 'src/injects/regex101/',
    trafficLights:  Regex101TrafficLightsMode.WEBPACK as Regex101TrafficLightsMode
}

const injection = 
{
    lowerRegex101LogoDarwin: resolve(config.injectBasePath, 'darwin-titleLogo.js'),
    shiftLogoDown: resolve(config.injectBasePath, 'darwin-shiftLogoDown.js'),
    clipboard: resolve(config.injectBasePath, 'clipboard.js'),
    webpack: resolve(config.injectBasePath, 'webpack/regex101.js')
}

const injections = 
[
    injection.clipboard
] as const;

let base: NativefierConfig =
{ 
    name:               config.name,
    targetUrl:          "https://regex101.com",
    versionString:      '0.5.0',
    
    internalUrls:       '.*?',
    blockExternalUrls:  false,
    ignoreCertificate:  true,
    counter:            false,
    bounce:             false,
    hideWindowFrame:    false,
    disableContextMenu: false,
    disableDevTools:    false,
    singleInstance:     false,
    overwrite:          true,
    fastQuit:           true,
    showMenuBar:        true,

    // inject:             [...injections],

    browserwindowOptions:  
    {
        thickFrame:         true,
        autoHideMenuBar:    true,
        titleBarStyle:      'hidden',
        frame:              false
    },

    win32metadata: 
    {
        ProductName: config.name,
        "requested-execution-level": "asInvoker",
        FileDescription: config.name
    }
}

let regex101Config: NativefierConfig = base;

switch(config.trafficLights)
{   
    case Regex101TrafficLightsMode.SHIFTLOGO:
        log(`Case: ${c.ansi256(1).bold`SHIFTLOGO`}`)
        regex101Config = mergeConfig(regex101Config, {
            inject: unique([ 
                ...injections,
                injection.shiftLogoDown 
            ])
        })
        break;;
    case Regex101TrafficLightsMode.WEBPACK:
        log(`Case: ${c.ansi256(1).bold`WEBPACK`}`)
        regex101Config = mergeConfig(regex101Config, {
            inject: unique([ injection.webpack ])
        })
        break;;
    case Regex101TrafficLightsMode.SHIFTLIGHTS_SIDE:
        log(`Case: ${c.ansi256(1).bold`SHIFTLIGHTS_SIDE`}`)
        regex101Config = mergeConfig(regex101Config, {
            browserwindowOptions: 
            {
                trafficLightPosition: 
                {
                    x: 150,
                    y: 25
                }
            }
        })
        break
        ;;
    case Regex101TrafficLightsMode.SHIFTLIGHTS_DOWN:
        log(`Case: ${c.ansi256(1).bold`SHIFTLIGHTS_DOWN`}`)
        regex101Config = mergeConfig(regex101Config, {
            browserwindowOptions: 
            {
                trafficLightPosition: 
                {
                    x: 0,
                    y: 45
                }
            }
        })
        break
        ;;
    case Regex101TrafficLightsMode.REMOVELOGO:
        log(`Case: ${c.ansi256(1).bold`REMOVELOGO`}`)
        ;;
    case Regex101TrafficLightsMode.DEFAULT:
    default:
        log(`Case: ${c.ansi256(1).bold`DEFAULT`}`)
        ;;

}

export { regex101Config };
export default regex101Config;