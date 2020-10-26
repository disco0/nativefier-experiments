/**
 * Personal typescript playground userscript, with a few tweaks
 *  - /unsafeWindow/window/g
 */
"use strict";
// ==UserScript==
// @name        MonacoConfigTS
// @namespace   www.github.com/disk0/monacoConfig
// @version     0.0.6
// @description Customize monaco editors - Typescript rewrite
// @author      disk0
// @include     https://microsoft.github.io/monaco-editor/*
// @include     https://www.typescriptlang.org/v2/en/play*
// @include     https://www.staging-typescript.org/play*
// @include     https://www.typescriptlang.org/play*
// @grant       GM_info
// @grant       unsafeWindow
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_getResourceText
// @grant       GM_registerMenuCommand
// ==/UserScript==
// Object.defineProperty(exports, "__esModule", { value: true });
//#endregion Environment
//#region Bootstrap
//#region Bootstrap - Environment Patching
//#endregion Bootstrap - Environment Patching
//#endregion Bootstrap
(async function (window) {
    //#region Theme
    var _a;
    const fontSize = 13, lineHeightMultiplier = 1.45;
    const winclassic = {
        name: "winclassic",
        theme: {
            base: "vs",
            inherit: true,
            rules: [
                { token: "", foreground: "222222" },
                { token: "invalid", foreground: "cd3131" },
                { token: "emphasis", fontStyle: "italic" },
                { token: "strong", fontStyle: "bold" },
                { token: "variable", foreground: "318495" },
                { token: "variable.predefined", foreground: "D51015" },
                { token: "constant", foreground: "44ee11" },
                { token: "number", foreground: "D51015" },
                { token: "number.hex", foreground: "AA1044" },
                { token: "regexp", foreground: "E18AC7" },
                { token: "regexp.escape", foreground: "AA1044" },
                { token: "regexp.escape.control", foreground: "E18AC7" },
                { token: "annotation", foreground: "808080" },
                { token: "type", foreground: "CF0E00", fontStyle: "bold underline" },
                { token: "comment.doc", foreground: "408CFF", fontStyle: "italic" },
                { token: "comment", foreground: "408CFF" },
                { token: "delimiter", foreground: "222222" },
                { token: "delimiter.html", foreground: "383838" },
                { token: "delimiter.xml", foreground: "0000FF" },
                { token: "tag", foreground: "800000" },
                { token: "tag.id.pug", foreground: "4F76AC" },
                { token: "tag.class.pug", foreground: "4F76AC" },
                { token: "meta.scss", foreground: "800000" },
                { token: "metatag", foreground: "e00000" },
                { token: "metatag.content.html", foreground: "FF0000" },
                { token: "metatag.html", foreground: "808080" },
                { token: "metatag.xml", foreground: "808080" },
                { token: "metatag.php", fontStyle: "bold" },
                // { token: "identifier",  foreground: "D51015" },
                { token: "key", foreground: "863B00" },
                { token: "string.key.json", foreground: "A31515" },
                { token: "string.value.json", foreground: "0451A5" },
                { token: "attribute.name", foreground: "FFFF00" },
                { token: "attribute.value", foreground: "0451A5" },
                { token: "attribute.value.number", foreground: "09885A" },
                { token: "attribute.value.unit", foreground: "09885A" },
                { token: "attribute.value.html", foreground: "0000FF" },
                { token: "attribute.value.xml", foreground: "0000FF" },
                { token: "string", foreground: "036A07" },
                { token: "keyword", foreground: "0000FF", fontStyle: "bold" },
                { token: "keyword.json", foreground: "0451A5" },
            ],
            colors: {
                editorBackground: "EFEFEF",
                editorForeground: "222",
                editorInactiveSelection: "E5EBF1",
                editorIndentGuides: "EEE",
                editorActiveIndentGuides: "939393",
                editorSelectionHighlight: "ADD6FF4D",
            },
        }
    };
    //#endregion Theme 
    //#region Playground Helpers
    const SidebarPanes = {};
    class SidebarPane {
        constructor(pane, option) {
            this.button = {
                click() {
                    if (this.id) {
                        document.getElementById(this.id)?.click();
                    }
                    else if (this.selector) {
                        document.querySelector(this.selector)?.click();
                    }
                }
            };
            this.pane = pane;
            if (typeof option === 'string')
                Object.assign(this.button, { id: option });
            else {
                if (option?.button && (option.button.id ?? option.button.selector)) {
                    Object.assign(this, option);
                }
            }
            if (typeof SidebarPane.collection !== 'object')
                return;
            // Add to collection object if defined
            if (typeof SidebarPane.collection[pane] !== 'undefined')
                throw new Error('Sidebar pane for "' + pane + '" already created.');
            Object.assign(SidebarPane.collection, this);
        }
    }
    SidebarPane.collection = SidebarPanes;
    new SidebarPane('js', `playground-plugin-tab-js`);
    let Playground = new (_a = class Playground {
        },
        _a.sidebar = SidebarPanes,
        _a);
    //#endregion Playground Helpers
    //#region Main
    function applyMonacoUserConf() {
        console.log('%c[MonacoUserConfig]%c Initializing', 'padding: 0.1em 0.3em 0.25em 0.3em; border-radius: 0.2em; background: #0088CC; color: white; ', '');
        console.log('%c[MonacoUserConfig]%c window.monaco:', 'padding: 0.1em 0.3em 0.25em 0.3em; border-radius: 0.2em; background: #0088CC; color: white; ', '');
        console.dir(window.sandbox ?? ['[ERROR]']);
        let editorAPI = window.monaco.editor;
        if (typeof (editorAPI) === "undefined") {
            console.info('%cFailed to access Typescript playground editor object. Exiting...', 'padding: 0.4em; background: #F339; border-radius: 0.5em;');
            return;
        }
        let sandbox = window.sandbox;
        if (typeof (sandbox) === "undefined") {
            console.info('%cFailed to access Typescript playground editor object. Exiting...', 'padding: 0.4em; background: #F339; border-radius: 0.5em;');
            return;
        }
        let editorInstances = editorAPI.getModels();
        console.info(`%c${editorInstances.length} editor instances found.`, 'padding: 0.2em; background: #0C4; color: white; border-radius: 0.2em;');
        if (editorInstances.length < 1) {
            console.info('%cNo editor instances found with getModels()', 'padding: 0.4em; background: #F339; border-radius: 0.5em;');
        }
        console.info('%cCalling editor options update function for instances.', 'padding: 0.2em; background: #0C49; border-radius: 0.5em;');
        editorInstances.forEach(instance => {
            console.info('Updating instance: %o', instance);
            try {
                // Config
                instance.updateOptions({
                    // fontSize:            fontSize,
                    tabSize: 2,
                });
            }
            catch (e) {
                console.info('%cError calling editor API updateOptions for editor:.%c\n%o', 'padding: 0.4em; background: #F339; border-radius: 0.2em;', '', instance);
                console.error(e);
            }
        });
        console.info('%cCalling editor options update function for sandbox editor object.', 'padding: 0.2em; background: #0C49; border-radius: 0.5em;');
        try {
            // Config
            sandbox.editor.updateOptions({
                fontSize: fontSize,
                tabSize: 2,
                fontFamily: 'Iosevka Extended, Iosevka Expanded, SemanticHaskell, SemanticCode, Hasklig, monospace',
                cursorStyle: 'block',
                cursorBlinking: 'blink',
                showFoldingControls: 'always',
                lineHeight: fontSize * lineHeightMultiplier
            });
        }
        catch (e) {
            console.info('%cError calling editor API updateOptions for editorAPI:.%c\n%o', 'padding: 0.4em; background: #F339; border-radius: 0.2em;', '', sandbox);
            console.error(e);
        }
        console.info('%cLoading theme.', 'padding: 0.2em; background: #0C49; border-radius: 0.5em;');
        try {
            // Theme
            editorAPI.defineTheme(winclassic.name, winclassic.theme);
        }
        catch (e) {
            console.info('%cError loading theme: %c\n%o', 'padding: 0.2em; background: #F339; border-radius: 0.2em;', '', e);
            console.error(e);
        }
        console.info('%cSetting theme.', 'padding: 0.2em; background: #0C49; border-radius: 0.5em;');
        try {
            editorAPI.setTheme(winclassic.name);
        }
        catch (e) {
            console.info('%cError Setting theme: %c\n%o', 'padding: 0.2em; background: #F339; border-radius: 0.2em;', '', e);
            console.error(e);
        }
    }
    //#endregion Main 
    console.info('%cIntializing MonacoConfig.', 'padding: 0.2em; background: #03A9; color: white; border-radius: 0.2em;');
    // Wait until playground initialized
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    do {
        console.log('%cWaiting for playground load...', 'color: #888; font-weight: 500;');
        await sleep(2000);
    } while (Object.keys(window).filter(_ => /(ts|sandbox|monaco)/.test(_)).length <= 0);
    applyMonacoUserConf();
    
console.log('%c[MonacoUserStyle]%c Entry', 'padding: 0.1em 0.3em 0.25em 0.3em; border-radius: 0.2em; background: #0088CC; color: white; ', '');

/**
 * Personal typescript playground userstyle. Loaded into page at gunpoint 
 * to simulate Stylus extension
 */
(() => {

console.log('%c[MonacoUserStyle]%c Injecting', 'padding: 0.1em 0.3em 0.25em 0.3em; border-radius: 0.2em; background: #0088CC; color: white; ', '')
window.document.body.outerHTML = window.document.body.outerHTML  + 
`<style id="stylus-75" type="text/css" class="stylus">@font-face {
    font-family: "Iosevka Extended";
    font-feature-settings: "ss08" on;
    src: local("Iosevka Extended");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Iosevka Extended";
    src: local("Iosevka Thin Extended");
    font-weight: 100;
    font-feature-settings: "ss08" on;
  }
  @font-face {
    font-family: "Iosevka Extended";
    src: local("Iosevka ExtraLight Extended");
    font-weight: 200;
    font-feature-settings: "ss08" on;
  }
  @font-face {
    font-family: "Iosevka Extended";
    src: local("Iosevka Light Extended");
    font-weight: 300;
    font-feature-settings: "ss08" on;
  }
  @font-face {
    font-family: "Iosevka Extended";
    src: local("Iosevka Regular Extended");
    font-weight: 400;
    font-feature-settings: "ss08" on;
  }
  @font-face {
    font-family: "Iosevka Extended";
    src: local("Iosevka Medium Extended");
    font-weight: 500;
    font-feature-settings: "ss08" on;
  }
  @font-face {
    font-family: "Iosevka Extended";
    src: local("Iosevka SemiBold Extended");
    font-weight: 600;
    font-feature-settings: "ss08" on;
  }
  @font-face {
    font-family: "Iosevka Extended";
    src: local("Iosevka Bold Extended");
    font-weight: 700;
    font-feature-settings: "ss08" on;
  }
  @font-face {
    font-family: "Iosevka Extended";
    src: local("Iosevka ExtraBold Extended");
    font-weight: 800;
    font-feature-settings: "ss08" on;
  }
  @font-face {
    font-family: "Iosevka Extended";
    src: local("Iosevka Heavy Extended");
    font-weight: 900;
    font-feature-settings: "ss08" on;
  }
  #top-menu {
    height: 2.275em !important;
  }
  #top-menu li a {
    height: 2.275em !important;
    padding-top: 0.455em !important;
  }
  #top-menu #home-page-logo {
    padding-top: 0.15em;
    max-width: 30px !important;
    width: unset !important;
  }
  #top-menu #home-page-logo a {
    display: block;
  }
  #top-menu #home-page-logo svg {
    height: 35% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
    padding-bottom: 0.1em !important;
    margin-right: 0em !important;
    margin-left: 0.05em !important;
    height: 85% !important;
    margin: auto !important;
    display: block !important;
    padding-top: 0em !important;
    padding-left: 0.15em !important;
  }
  #top-menu #home-page-logo span.hide-small {
    visibility: collapse !important;
  }
  #top-menu .right.above-small .search-section .nav-item form {
    height: 2.275em !important;
  }
  #top-menu .right.above-small .search-section .nav-item form input {
    height: 2.275em !important;
  }
  main > .navbar-sub {
    height: 30px !important;
  }
  main > .navbar-sub li#restart-required {
    min-width: 200px !important;
  }
  main > .navbar-sub li#restart-required a {
    background: #c63131 !important;
    color: #fff !important;
    font-size: 0.95em !important;
    padding: 0.25rem 0.75rem 0.5rem 0.7rem !important;
  }
  main > .navbar-sub .navbar-right #playground-settings {
    max-height: 33.5px !important;
    font-size: 0.95em !important;
    padding: 0.25rem 0.75rem 0.5rem 0.7rem !important;
  }
  main > .navbar-sub li:nth-child(1).name {
    width: 6em !important;
  }
  main > .navbar-sub li:nth-child(1).name span {
    font-size: 16px !important;
    padding-top: 0.2em !important;
    padding-left: 0.5em !important;
    width: 6em !important;
  }
  main > .navbar-sub li span {
    padding-top: 1px !important;
  }
  main > .navbar-sub > ul.nav:not(.navbar-right) > li.dropdown > a {
    font-size: 0.95em !important;
    padding: 0.25rem 0.75rem 0.5rem 0.7rem !important;
  }
  #editor-toolbar.navbar-sub {
    height: 1.8125em !important;
  }
  #editor-toolbar.navbar-sub > ul > li > a {
    padding-top: 0px !important;
    line-height: 1.903125em !important;
  }
  #editor-toolbar.navbar-sub > ul {
    padding-top: 0px !important;
    height: 1.8125em;
  }
  #playground-container .playground-plugin-container .custom-modules li {
    height: 1.2em !important;
    width: -webkit-fill-available !important;
    max-width: 300px !important;
    line-height: 1.2em !important;
  }
  #playground-container .playground-plugin-container .custom-modules li > a {
    border: unset !important;
    margin-top: 0.1em;
    float: right;
    line-height: 1.2em !important;
    margin-left: 0.5em;
    margin-right: 2em;
    font-family: Iosevka Expanded, monospace !important;
    font-weight: 400 !important;
    letter-spacing: CodeLetterSpacing !important;
    font-size: 1.2em !important;
  }
  #playground-container .playground-plugin-container .custom-modules li > a:hover,
  #playground-container .playground-plugin-container .custom-modules li > a {
    visibility: hidden !important;
  }
  #playground-container .playground-plugin-container .custom-modules li > a::after {
    content: "🆇" !important;
    visibility: visible !important;
  }
  #playground-container .playground-plugin-container .custom-modules li > a::after:hover {
    content: "❌" !important;
    color: #00a !important;
  }
  #playground-container .playground-sidebar {
    margin-top: 0.3em !important;
  }
  #playground-container .playground-sidebar .playground-plugin-tabview button {
    font-size: 13.75px !important;
    margin-top: 8.2px !important;
    margin-bottom: 1.708333333333333px !important;
    margin-left: 0em !important;
    margin-right: 0em !important;
    padding-top: 0.15em !important;
    padding-left: 0.15em !important;
    padding-right: 0.85em !important;
  }
  #playground-container .playground-sidebar .playground-plugin-tabview button div.plugin-tab-notification {
    top: -6.875px;
    left: 34.375px;
    font-family: Iosevka Expanded, monospace !important;
    font-weight: 400 !important;
    letter-spacing: CodeLetterSpacing !important;
    font-size: 9.625px !important;
    font-weight: 500 !important;
    color: #fff;
    text-align: center !important;
    text-indent: 0px;
    text-rendering: auto;
    text-shadow: none;
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
    height: fit-content !important;
    width: fit-content !important;
    padding: 2px 2px 0.4px 2.3px !important;
    margin: 0px !important;
    border-radius: 0.285714285714286em;
  }
  #playground-plugin-tabbar {
    padding-bottom: 2px !important;
    margin-bottom: 2px !important;
  }
  div#log {
    font-family: Iosevka Expanded, monospace !important;
    font-weight: 400 !important;
    letter-spacing: CodeLetterSpacing !important;
    font-size: 14px !important;
  }
  .playground-plugin-container pre {
    line-height: 19.599999999999998px !important;
  }
  .playground-plugin-container pre code {
    font-family: Iosevka Expanded, monospace !important;
    font-weight: 400 !important;
    letter-spacing: CodeLetterSpacing !important;
    font-size: 14px !important;
  }
  .playground-plugin-container pre code * {
    font-family: Iosevka Expanded, monospace !important;
    font-weight: 400 !important;
    letter-spacing: CodeLetterSpacing !important;
    font-size: 14px !important;
    font-weight: 400 !important;
  }
  .playground-plugin-container pre code * .mtkb {
    font-weight: 600 !important;
  }
  .compiler-diagnostics {
    font-family: Iosevka Expanded, monospace !important;
    font-weight: 400 !important;
    letter-spacing: CodeLetterSpacing !important;
    font-size: 13px !important;
  }
  .compiler-diagnostics .diagnostic.error {
    padding-top: 0em !important;
    padding-bottom: 0em !important;
    padding-left: 0.5em !important;
  }
  #editor-container > #editor-toolbar {
    margin-bottom: 2px !important;
  }
  #editor-container .monaco-editor-hover-content > .markdown-hover > .hover-contents > div > p > em:nth-child(1) {
    font-family: Iosevka Expanded, monospace !important;
    font-weight: 400 !important;
    letter-spacing: CodeLetterSpacing !important;
    font-size: 13.4px !important;
    color: #063fda;
    border-radius: 0.25em;
    padding: 0.166666666666667em 0.25em 0.125em 0.25em;
  }
  #editor-container span.inline-folded:after {
    color: #888;
    opacity: 0.5;
  }</style>`
})()
})(window);
