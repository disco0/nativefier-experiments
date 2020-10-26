import debug from 'debug';
import chalk = require('chalk')

export const c = chalk;
export const debugLog = debug(`multi-nativefier`)
export default debugLog;