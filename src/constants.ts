import { resolve } from 'path'
import { debugLog } from './log'

export let DEBUG = false

export let allPlatforms: [ 'darwin', 'win32'  ] = [ 'darwin', 'win32' ];

export const outputDir = resolve(__dirname, '../build/');

debugLog('Build directory: %s', outputDir)