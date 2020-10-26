import { debugLog, c } from '../log'
const log = debugLog.extend('ts-playground');
let config = 
{
    name:           'TypeScript Playground',

    staging:        true,
    configQuery:    '', //     'target=7&jsx=0&module=0&useJavaScript=true',

    injectBasePath: './src/injects/',
};

let injections = 
[
    `${config.injectBasePath}/style.js`,
    `${config.injectBasePath}/script.js`
];

const targetUrl = 
`https://${
    config.staging 
        ? 'www.staging-typescript' 
        : 'typescript-lang'
}.org/play?${
    config.configQuery && config.configQuery.length > 0 
        ? config.configQuery 
        : ""
}`

log(`${c.ansi256(32).bold`[${config.name}]`} Using url ${c.hex('#00D').underline(targetUrl)}`);

let nativefierConfig : NativefierConfig =
{ 
    name:          config.name,

    versionString: '0.1.0',

    targetUrl,

    blockExternalUrls:  false,
    showMenuBar:        false,
    hideWindowFrame:    false,
    disableContextMenu: false, 
    disableDevTools:    false,
    inject:             injections,

    overwrite: true,
    bounce: false,
    fastQuit: true,
    internalUrls: '.*',

    win32metadata: 
    {
        ProductName: config.name,
        "requested-execution-level": "asInvoker",
        FileDescription: config.name
    },
}

export { nativefierConfig  as typescriptPlaygroundConfig };
export default nativefierConfig;