import { options } from './yargs'
import { allPlatforms, outputDir } from './constants';
import { isWSL } from './util';
import { debugLog } from './log';

let verboseBuild = false;
if(options.verbose)
    verboseBuild = true;

//#region Global Config

// TODO: Bind to build functions before iterating through builds
export const globalOptions: PlatformExtensionConfig =
{
    verbose:          verboseBuild,
    out:              outputDir,
    arch:             "x64",
    // asar:             true,
    // prune:            true,
    appCategoryType: "app-category-type=public.app-category.developer-tools",
    // platform: 'windows' as "windows" | "macOS",.
    ... options.all
      ? { platform: (allPlatforms as unknown) as string }
      : isWSL() ? { platform: 'win32' } 
                : { platform: process.platform.match('darwin') ? 'macOS' : 'win32'},
    titleBarStyle:    "customButtonsOnHover"
}

debugLog('Output path: %s', outputDir)

//#endregion Global Config
