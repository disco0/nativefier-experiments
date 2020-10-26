import {deepMerge} from './deepMerge'

export function mergeConfig<B extends NativefierConfig, E extends NativefierConfig>(base: B, extension: E): NativefierConfig
{
    return deepMerge(base, extension)
}