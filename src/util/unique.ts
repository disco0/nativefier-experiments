/**
 * Return only first instance of each value.
 * @param reversePriority
 *    If set to `true` array will be reverse before and after processing so that the last instance
 * of each repeated value will be saved. Ex.:
 * ``` ts
 * const test           =  [ "a", "b", "a", "c", "d" ];
 * unique(test)         => [ "a", "b", "c", "d" ]
 * unique(test, false)  => [ "a", "b", "c", "d" ]
 * unique(test, true)   => [ "d", "c", "b", "a" ]
 * ``` 
 */
export function unique<T>(array: [T, ...T[]], reversePriority?: boolean): T[];
export function unique<T>(array: [T, ...T[]], reversePriority: boolean = false): T[]
{
    return !reversePriority 
        ? [...new Set(array)]
        : [...new Set(array.reverse())].reverse()
}