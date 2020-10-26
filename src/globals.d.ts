///<reference types="template-literal-queryselectors"/>

//#region Imports

type Nativefier = typeof import('nativefier');
type Electron   = typeof import('electron');

//#endregion Imports

//#region Generics

type ItemOrItems<T> = T | T[]

type FirstParameter<T extends (arg: any, ...rest: any[]) => any> 
    = T extends (arg: infer P, ...args: [...any[]]) => any ? P : never;

type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

type PartialWithNewMembers<T, O extends Record<string, any>> = { [P in keyof T]?: T[P]; } & O

//#endregion Generics

//#region Nativefier / Electron

type BuildFunction = Nativefier['buildNativefierApp'];
type BaseNativefierConfiguration = FirstParameter<BuildFunction>;

type PlatformProp = Pick<FirstParameter<BuildFunction>, 'platform'>

interface NativefierConfig extends BaseNativefierConfiguration
{ 
    browserwindowOptions?: Partial<Electron.BrowserWindowConstructorOptions> 
}

type PlatformName = 'win32' | 'linux' | 'darwin';

interface PlatformExtensionConfig extends NativefierConfig
{
    platform?: PlatformName | PlatformName[] | 'all' | string | undefined
}

//#endregion Nativefier / Electron

interface NonZeroString extends String
{
    [0]: string
}