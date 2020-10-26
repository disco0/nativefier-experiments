import { existsSync, readdirSync, Dirent } from 'fs'
    
import chalk from 'chalk'
type ChalkInstance = chalk.Chalk

type ItemOrItems<T> = T | T[]

const { isArray } = Array;

//#region Formatting

const rebindChalk = (color: ChalkInstance): ChalkInstance =>
    color.bind(chalk);

const rebindChalkRecords = <C extends {[key: string]: ChalkInstance}>(chalks: C) =>
    Object.fromEntries(
        Object.entries(chalks).map(([k, c]: [keyof typeof chalks, ChalkInstance]) => [k, rebindChalk(c)] ) );

const bases = 
{
    warn: chalk.ansi256(208),
    debug: chalk.ansi256(249),
}

export const colors = bases // rebindChalkRecords(bases);

// Use short aliases locally
const { warn, debug } = colors;

//#endregion Formatting

export const warningLevel = 'warn'

function logValidationWarning(path: string)
{
    console[warningLevel]([
        warn.bold`WARNING:`,
        warn` failed to find injection content at path "${path}".`
    ].join(''))
}

interface PossibleInjection
{
    inject?: string[]
    browserwindowOptions?: 
    {
        [key: string]: any
    } & { 
        webPreferences?:
        {
            preload?: string
        }
      }
}

function extractInjectionsFromConfig(config: PossibleInjection): string[]
{
    let paths: string[] = []
    if(config.inject) paths.push(...config.inject)
    if(config.browserwindowOptions?.webPreferences?.preload) 
        paths.push(config.browserwindowOptions?.webPreferences?.preload)

    return paths;
}

export function validateInjections(path: string): void;
export function validateInjections(paths: string[]): void;
export function validateInjections(...paths: string[]): void;
export function validateInjections(config: PossibleInjection): void;
export function validateInjections(arg: ItemOrItems<string> | PossibleInjection, ...rest: string[]): void
{
    const paths: string[] =
        (isArray(arg) || typeof arg === 'string')
            ? [...isArray(arg) ? arg : [arg], ...rest]
            : [...extractInjectionsFromConfig(arg)];
            
    paths.forEach((path: string) => 
    {
        console.log(debug`Checking for injection script @ ` + debug.underline(path) + debug`...`)
        
        if(!existsSync(path)) 
            logValidationWarning(path);
    })
}