import { iroConfig } from './iro'
export { iroConfig } from './iro'
import { regex101Config } from './regex101'
export { regex101Config } from './regex101'
import { typescriptPlaygroundConfig } from './typescript-playground'
export { typescriptPlaygroundConfig } from './typescript-playground'

export const schema =
{
    regex101Config,
    typescriptPlaygroundConfig
}

export const schemas = 
[
    typescriptPlaygroundConfig,
    regex101Config
];

export default schemas;