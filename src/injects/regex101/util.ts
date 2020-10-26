interface Callable
{
    (...args: any[]): any;
}

const wrapFunction = (fnObj: {[key: string]: Callable}) => 
{
    const fnTuples = Object.entries( fnObj )
    if(fnTuples.length === 0 || fnTuples.length > 1)
        throw new Error('Only one function property can be passed into function.')
    const [[name, def]] = fnTuples;
    return [
        `(() => {`,
            ...[
                def.toString(),
                `${name}()`
            ].map(_ => _.replace(/^/gmi, '    ')),
        `})()`,
    ].join('\n')
}
