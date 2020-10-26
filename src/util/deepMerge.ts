interface IIsObject
{
    (item: any): boolean;
}

interface IObject
{
    [key: string]: any;
}

interface IDeepMerge
{
    (target: IObject, ...sources: Array<IObject>): IObject;
}

/**
 * @description Method to check if an item is an object. Date and Function are considered
 * an object, so if you need to exclude those, please update the method accordingly.
 * @param item - The item that needs to be checked
 * @return {Boolean} Whether or not @item is an object
 */
export const isObject: IIsObject = (item: any): boolean =>
{
    return (item === Object(item) && !Array.isArray(item));
};

/**
 * @description Method to perform a deep merge of objects
 * @param {Object} target - The targeted object that needs to be merged with the supplied @sources
 * @param {Array<Object>} sources - The source(s) that will be used to update the @target object
 * @return {Object} The final merged object
 */
export const deepMerge: IDeepMerge = (target: IObject, ...sources: Array<IObject>): IObject =>
{
    // return the target if no sources passed
    if(!sources.length)
    {
        return target;
    }

    const result: IObject = target;

    if(isObject(result))
    {
        const len: number = sources.length;

        for(let i = 0; i < len; i += 1)
        {
            const elm: any = sources[i];

            if(isObject(elm))
            {
                for(const key in elm)
                {
                    if(elm.hasOwnProperty(key))
                    {
                        if(isObject(elm[key]))
                        {
                            if(!result[key] || !isObject(result[key]))
                            {
                                result[key] = {};
                            }
                            deepMerge(result[key], elm[key]);
                        } else
                        {
                            if(Array.isArray(result[key]) && Array.isArray(elm[key]))
                            {
                                // concatenate the two arrays and remove any duplicate primitive values
                                result[key] = Array.from(new Set(result[key].concat(elm[key])));
                            } else
                            {
                                result[key] = elm[key];
                            }
                        }
                    }
                }
            }
        }
    }

    return result;
};

// /**
//  * @desc [thank u](https://gist.github.com/aasili-shoprunner/07bbed95f43bac83807f781a8032e05e)
//  */
// 
// type PlainObject = Record<PropertyKey, unknown>;
// 
// type Merged<A, B> = (
//     B extends PlainObject ? A extends PlainObject ?
//         { [key in Exclude<keyof A, keyof B>]: A[key] } &
//         { [key in Exclude<keyof B, keyof A>]: B[key] } &
//         { [key in keyof A & keyof B]: Merged<A[key], B[key]> } : B : B
// );
// 
// function isNil(x: null | undefined): true;
// function isNil(x: unknown): boolean;
// function isNil(x: unknown): boolean {
//     return x === null || x === undefined;
// }
// 
// /**
//  * Finds the root Object prototype by traversing up the prototype chain until reaching
//  * the root prototype. This allows us to compare a particular object's prototype against
//  * the root Object prototype from the same realm (iframe, context, etc.).
//  * Otherwise, checking `Object.prototype` directly will result in incorrect behavior
//  * in cross-realm environments.
//  *
//  * @param proto
//  */
// function getRootObjectPrototype(proto: object): object {
//     const parentProto = Object.getPrototypeOf(proto);
//     return parentProto === null
//         ? proto
//         : getRootObjectPrototype(parentProto);
// }
// 
// /**
//  * Check if a value is a plain object, i.e. an object created by means of:
//  *  - global `Object` constructor
//  *  - object literal syntax, i.e. `{ foo: 'bar' }`
//  *  - `Object.create(null)`, i.e. an object with no prototype (beware! this object has no methods!)
//  *  - `Object.create(Object.prototype)`, i.e. explicitly create object with default Object prototype
//  *
//  * Examples of objects that are _not_ considered plain include:
//  *  - instances of custom classes, e.g. `new Foo()`
//  *  - instances of `Array`, `Set`, etc.
//  *  - objects with custom prototypes, e.g. `Object.create({})`
//  *
//  * The above aligns with the implementations of both Lodash and jQuery 3.
//  * Other libraries do differ, though; e.g. npm 'is-plain-object' lib considers `Object.create(null)`
//  * not to be a plain object, and it and jQuery 1 consider `Object.create({})` to be a plain object.
//  *
//  * By virtue of not checking reference equality of `Object.prototype`, this function should
//  * be able to correctly identify plain objects when executed in a cross-realm environment
//  * (iframe, context, etc).
//  *
//  * @param x
//  */
// function isPlainObject(x: unknown): x is PlainObject {
//     if (!x || Object.prototype.toString.call(x) !== '[object Object]') return false;
// 
//     const prototype = Object.getPrototypeOf(x);
// 
//     return prototype === null || prototype === getRootObjectPrototype(prototype);
// }
// 
// /**
//  * @param prop Property to look up in object
//  * @param obj Object to look property up in
//  * @return Whether `prop` is a property of `obj`, using `hasOwnProperty`
//  *
//  * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
//  */
// function hasProperty(prop: PropertyKey, obj: object): boolean {
//     return Object.prototype.hasOwnProperty.call(obj, prop);
// }
// 
// /* eslint-disable no-use-before-define */
// /* eslint-disable @typescript-eslint/no-use-before-define */
// function clone<V>(value: V): V {
//     return (isPlainObject(value) ? deepMergeObjects({}, value) as V : value);
// }
// /* eslint-enable */
// 
// function resolveValue<
//     A extends PlainObject,
//     B extends PlainObject,
// >(key: string, a: A, b: B): unknown {
//     const aHasProp = hasProperty(key, a);
//     const bHasProp = hasProperty(key, b);
// 
//     if (aHasProp && bHasProp) {
//         const aVal = a[key];
//         const bVal = b[key];
// 
//         if (isPlainObject(aVal) && isPlainObject(bVal)) {
//             /* eslint-disable no-use-before-define */
//             /* eslint-disable @typescript-eslint/no-use-before-define */
//             return deepMergeObjects(aVal, bVal);
//             /* eslint-enable */
//         }
// 
//         return clone(bVal);
//     }
// 
//     return clone(aHasProp ? a[key] : b[key]);
// }
// 
// function deepMergeObjects<
//     A extends PlainObject,
//     B extends PlainObject,
// >(a: A, b: B): Merged<A, B> {
//     return [...Object.keys(a), ...Object.keys(b)]
//         .reduce((merged, key) => (
//             hasProperty(key, merged)
//                 ? merged
//                 : Object.assign(merged, { [key]: resolveValue(key, a, b) })
//         /* eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion */
//         ), {} as Merged<A, B>);
// }
// 
// /**
//  * Given two plain objects, returns an object with the merged results of the two argument objects'
//  * enumerable properties. Unlike `Object.assign`, when both objects have the same property
//  * key, and both property values are plain objects, this function will recursively merge the
//  * properties of the two nested plain objects and include the resulting object in the merged result.
//  * When a property key is only in one argument object, and the value is a plain object, this
//  * function will still guarantee a deep copy of that object in the merged result.
//  *
//  * **NOTE**: This function does not attempt to clone or merge objects that are not plain objects,
//  * including arrays!
//  *
//  * **WARNING**: Does not handle circular property references! Beware of stack overflow!
//  *
//  * ``` ts
//  * deepMerge(
//  *     { a: { b: 'b' },
//  *       b: [1, 2, 3],
//  *       c: 'c',
//  *     },
//  *     { a: { c: 'c' },
//  *       b: [4, 5, 6],
//  *       c: 'C',
//  *       d: 'D'
//  *     },
//  * );
//  * 
//  * // {
//  * //   a: { b: 'b', c: 'c' },
//  * //   b: [4, 5, 6],
//  * //   c: 'C',
//  * //   d: 'D',
//  * // }
//  * 
//  * ```
//  * @param a
//  * @param b
//  *
//  * @param [options]
//  * @param [options.handleConflict]
//  *     If object `a` and object `b` both contain the same key, but one or both of the values
//  *     are _not_ POJOs, then we need a mechanism to determine which object's property value
//  *     is retained in the merged object.
//  *     By default, the value from object `b` is used in the merged output, just like with
//  *     `Object.assign`. This behavior can be overridden, though, including the ability to
//  *     throw an error if conflict resolution is not desired.
//  */
// export default function deepMerge<
//     A extends PlainObject,
//     B extends PlainObject,
// >(a: A, b: B): Merged<A, B> {
//     if (isNil(a) || isNil(b)) throw new TypeError(`Expected 2 non-nil arguments, but got a=${a}, b=${b}`);
//     if (!isPlainObject(a) || !isPlainObject(b)) throw new TypeError(`Expected 2 POJO arguments, but got a=${a}, b=${b}`);
// 
//     return deepMergeObjects(a, b);
// }