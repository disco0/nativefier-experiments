"use strict";
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