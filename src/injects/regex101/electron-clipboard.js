///<reference types="electron"/>

/**
 * Utilities for writing forms of playground regex to clipboard
 */

//#region Imports

const {clipboard} = require('electron');

//#endregion Imports

//#region Initialization

((window) => {

const console = window.console

function entry()
{
    function writeClipboard(/** @type {string} */ string)
    {
        try
        {
            clipboard.writeText(string)
        }
        catch(err)
        {
            console.error(`Error writing text to string.\nSent object: ${typeof string} => ${string}\nError:\n${err.stack}`)
        }
    }

    const regexpSourceSelector = `.CodeMirror .CodeMirror-sizer > div .CodeMirror-code .CodeMirror-line`;
    function getCurrentRegex()
    {
        return ((sourceRegex = '') => {
            if(sourceRegex.length === 0)
                console.warn(`No regex source found with css selector: ${regexpSourceSelector}`);

            return sourceRegex
        })
        (document.querySelector(regexpSourceSelector)?.textContent)
    }

    function escapeCurrentRegex()
    {
        const current = getCurrentRegex() ?? '';

        return JSON.stringify(current).slice(1,-1);
    }

    function copyRegex()
    {
        const escaped = escapeCurrentRegex() ?? ''
        if(!escaped || escaped.length === 0)
            throw new SyntaxError('No content extracted.')

        writeClipboard(escaped)
    }

    function copyEscaped()
    {
        const regex = getCurrentRegex() ?? ''
        if(!regex || regex.length === 0)
            throw new SyntaxError('No content extracted.')

        writeClipboard(regex)
    }

    console.log("%cAdding clipboard functions to window", 'background: #00A;  color: white; padding: 0.2em; font-weight: 500')
    Object.assign(window,
    {
        copyEscaped,
        copyRegex
    })
}

console.log('%c[clipboard]%c Adding EventListener for clipboard utils',
    'color: #905; font-weight: 500;', ''
)

window.addEventListener('load', () => {
    console.log('%c[clipboard]%c %c[load]%c Calling entry function',
        'color: #905; font-weight: 500;', '',
        'color: #80C; font-weight: 500;',  ''
    )

    entry()
})

})(window)

//#endregion Initialization
