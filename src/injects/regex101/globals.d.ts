///<reference lib="dom"/>
///<reference lib="dom.iterable"/>
///<reference types="template-literal-queryselectors"/>

import 'template-literal-queryselectors';

type DevToolCopyFunction = (...args: any[]) => void;

declare const copy: DevToolCopyFunction

global 
{
    interface Window
    {
        copy: DevToolCopyFunction
    }

}

declare module "*.css"
{
    
}