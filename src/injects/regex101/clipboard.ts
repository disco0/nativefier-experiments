(() => {

function loadClipboardFunctions(): void
{
    function getCurrentRegex(): string | undefined | null
    {
        return (document.querySelector(`.CodeMirror .CodeMirror-sizer > div .CodeMirror-code .CodeMirror-line`) as HTMLElement)?.textContent
    }

    function escapeCurrentRegex(): string
    {
        return JSON.stringify(getCurrentRegex()).slice(1, -1)
    }

    function saveCurrentRegexToClipboardEscaped(): void
    {
        const escaped = escapeCurrentRegex() ?? ''
        if(!escaped || escaped.length === 0)
            throw new SyntaxError('No content extracted.')

        copy(escaped)
    }

    function saveCurrentRegexToClipboard(): void
    {
        const regex = getCurrentRegex() ?? ''
        if(!regex || regex.length === 0)
            throw new SyntaxError('No content extracted.')

        copy(regex)
    }

    Object.entries({window, globalThis}).forEach(([name, globalObj]) =>
    {
        console.log('Loading clipboard functions on object %o', name)
        Object.assign(globalObj, {
            getCurrentRegex,
            escapeCurrentRegex,
            saveCurrentRegexToClipboardEscaped,
            saveCurrentRegexToClipboard
        })
    })
}

function injectClipboardFunctions(): void
{

    let clipboardScriptEl = document.createElement("script");
    clipboardScriptEl.text = loadClipboardFunctions.toString();
    document.body.appendChild(clipboardScriptEl);

    console.log('Clipboard function loader script element:\n%o', clipboardScriptEl)
    console.log('Calling loadClipboardFunctions');

    loadClipboardFunctions()    

    const functionNameChecked = 'saveCurrentRegexToClipboard'
    if(!(functionNameChecked in window))
    {
        console.warn('saveCurrentRegexToClipboard not found on window object.')
    }
}

injectClipboardFunctions()

})()
