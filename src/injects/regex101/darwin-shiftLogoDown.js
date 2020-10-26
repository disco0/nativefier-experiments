// (async function (window) {
(() => {

// const document = window.document;

/**
 * @typedef {(...args: any[]) => any} fn
 */

/**
 * @param {{[key: string]: fn}} fnObj
 *
 */
const wrapFunction = (fnObj) => {
    const fnTuples = Object.entries( fnObj )
    if(fnTuples.length === 0 || fnTuples.length > 1)
        throw new Error('Only one function property can be passed into function.')
    const [[name, def]] = fnTuples;
    return [
        `(() => {`,
            ...[
                `console.log('Calling ${name} wrapper')`,
                def.toString(),
                `${name}()`
            ].map(_ => _.replace(/^/gmi, '    ')),
        `})()`,
    ].join('\n')
}

const console = window.console

function logoFixLoader()
{

    function isDarwin()
    {
        return /Mac OS X/i.test((navigator || window.navigator).userAgent)
    }

    if(!isDarwin())
    {
        console.log('Skipping logo modification, platform detected from user agent is not macOS. (' + window.navigator.userAgent + ')')
        return
    }

    const parentSelector = `#regex-app > div > header > a`;

    console.log(`%c[macOSLogoFix]%c Applying css patch for darwin`,
        'color: #064; font-weight: 600; ', '' )

    const logoAnchor = document.querySelector(parentSelector)
    if(logoAnchor instanceof HTMLAnchorElement)
    {
        logoAnchor.style.paddingTop = '28px'
        console.log(`%c[macOSLogoFix]%c Updated element: %o`,
            `color: #064; font-weight: 600;`, '',
            logoAnchor)
    }
    else
    {
        console.log(
            `%c[macOSLogoFix]%c Failed to get logo parent anchor element with selector %c%s`,
            'color: #064; font-weight: 600; ', 'color: #C00;',
            'color: #C00; text-decoration: box-shadow: 0 0.125em #C00;', parentSelector )
        return
    }
}

function injectLogoFixLoader()
{

    let logoFixLoaderScript = document.createElement("script");
    logoFixLoaderScript.text = wrapFunction({logoFixLoader});
    document.body.appendChild(logoFixLoaderScript);

    console.log('Calling logo fix loader script element:\n%o', logoFixLoaderScript)

    logoFixLoader()
}

injectLogoFixLoader()

})()
// })(window)
