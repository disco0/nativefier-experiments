/**
 * Removes `regular expressions101` text that awkwardly hides behind the traffic
 * lights on macOS
 */
// (function (window)
// {
(() => {

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
                def.toString(),
                `${name}()`
            ].map(_ => _.replace(/^/gmi, '    ')),
        `})()`,
    ].join('\n')
}

function logoFixLoader()
{
    const document = window.document

    function isDarwin()
    {
        return /Mac OS X/i.test((navigator || window.navigator).userAgent)
    }

    if(!isDarwin())
    {
        console.log('Skipping logo modification, platform detected from user agent is not macOS. (' + window.navigator.userAgent + ')')
        return
    }

    // Ok actually do it now
    const logoAnchor = document.querySelector(`#regex-app > div > header > a`)

    if(logoAnchor instanceof HTMLAnchorElement)
    {
        logoAnchor.classList.add('logo-parent')
        logoAnchor.style.paddingTop = "25px !important"
    }
    else if(logoAnchor)
    {
        console.error('Matched element is not instance of HTMLAnchorElement.')
        return
    }
    else
    {
        console.error('Failed to match any element with logo parent selector.')
        return
    }

}

function injectLogoFixLoader()
{
    window.addEventListener('DOMContentLoaded', () => {

        let logoFixLoaderScript = document.createElement("script");
        logoFixLoaderScript.text = logoFixLoader.toString() + "\nlogoFixLoader()";
        document.body.appendChild(logoFixLoaderScript);

        console.log('Calling logo fix loader script element:\n%o', logoFixLoaderScript)
    })
}

injectLogoFixLoader()

})()
// })(window)
