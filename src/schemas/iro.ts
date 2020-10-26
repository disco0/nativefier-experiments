import { resolve } from 'path'
import { mergeConfig } from '../util/config'
import { unique } from '../util'

const config = {
    name:           'Iro'
}

const injection = 
{
    // lowerRegex101LogoDarwin: resolve(config.injectBasePath, 'darwin-titleLogo.js'),
    // shiftLogoDown: resolve(config.injectBasePath, 'darwin-shiftLogoDown.js'),
    // clipboard: resolve(config.injectBasePath, 'clipboard.js'),
}

const injections = 
[
    // injection.clipboard
] as const;

let base: NativefierConfig =
{ 
    name:               config.name,
    targetUrl:          "https://eeyo.io/iro/",
    versionString:      '0.0.1',
    
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
        frame:              false,
    },

    win32metadata: 
    {
        ProductName: config.name,
        "requested-execution-level": "asInvoker",
        FileDescription: config.name
    }
}

let regex101Config: NativefierConfig = base;

// switch(config.trafficLights)
// {   
//     case Regex101TrafficLightsMode.SHIFTLOGO:
//         regex101Config = mergeConfig(regex101Config, {
//             inject: unique([ 
//                 ...injections,
//                 // src/injects/regex101/darwin-shiftLogoDown.js
//                 injection.shiftLogoDown 
//             ])
//         })
//         break;;
//     case Regex101TrafficLightsMode.SHIFTLIGHTS_SIDE:
//         regex101Config = mergeConfig(regex101Config, {
//             browserwindowOptions: 
//             {
//                 trafficLightPosition: 
//                 {
//                     x: 150,
//                     y: 25
//                 }
//             }
//         })
//         break
//         ;;
//     case Regex101TrafficLightsMode.SHIFTLIGHTS_DOWN:
//         regex101Config = mergeConfig(regex101Config, {
//             browserwindowOptions: 
//             {
//                 trafficLightPosition: 
//                 {
//                     x: 0,
//                     y: 45
//                 }
//             }
//         })
//         break
//         ;;
//     case Regex101TrafficLightsMode.REMOVELOGO:
//         console.log('[case Regex101TrafficLightsMode.REMOVELOGO] TODO')
//         ;;
//     case Regex101TrafficLightsMode.DEFAULT:
//     default:
//         ;;
// }

const iroConfig = mergeConfig(base, {});

export { iroConfig };
export default iroConfig;