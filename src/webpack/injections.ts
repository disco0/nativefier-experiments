import type { 
    Configuration as WebpackConfiguration 
} from 'webpack';
import { existsSync, readdirSync, Dirent } from 'fs'
import { resolve, parse } from 'path'

import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';

import { 
    syntaxCondition as assertSyntax,
    condition as assert,
    isString,

} from '../util'

interface DirectoryEnt extends Dirent
{
    isDirectory(): true;
}

function isDirectory(obj: Dirent): obj is DirectoryEnt
{
    return obj.isDirectory()
}

interface WebpackDirEntryConfig
{
    (dir: Dirent): WebpackConfiguration
}

const configs = new Map<string, WebpackConfiguration | WebpackDirEntryConfig>();

//#region Injection Scripts

configs.set('injection', (dir: Dirent) => {

    return {
        target: 'electron-preload',
        entry: dir.name
    } as WebpackConfiguration
})

export function buildInjections(dir: string)
{
    assertSyntax(
        isString(dir), 'Parameter dir is not of type string or instance of Dirent.' );
    assert(
        existsSync(resolve(dir)), `Resolved directory "${resolve(dir)}" from argument "${dir}" does not exist.`);

    
    
}

//#endregion Injection Scripts
