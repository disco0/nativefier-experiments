//#region Test Functions

export function stringLength(string: string): number
{
    return string.length;
}

export function isString(obj: unknown): obj is string
{
    return typeof obj === 'string';
}

export function isNonZeroString(obj: unknown): obj is NonZeroString
{
    return (isString(obj) && stringLength(obj) > 0);
}
//#endregion Test Functions

//#region Assertion

export function condition<T extends any>(assertion: T, message?: string): asserts assertion;
export function condition<T extends any>(assertion: T, message?: string, errorType?: ErrorConstructor): asserts assertion;
export function condition<T extends any>(assertion: T, message: string | undefined, errorType?: ErrorConstructor): asserts assertion
{
    errorType ??= Error;
    if(!assertion)
        throw new errorType(message || 'Assertion error:\n\tCondition Value: ' + String(assertion));
}

export function syntaxCondition<T extends any>(assertion: T, messsage?: string): asserts assertion
{
    condition<T>(assertion, messsage, SyntaxError);
}

export function assertString<T extends unknown>(obj: unknown): asserts obj is string
{
    syntaxCondition<boolean>(isString(obj), `Variable is not of type string.\n\tValue: "${ obj }"`);
}

export function assertNonZeroString(obj: unknown): asserts obj is NonZeroString
{
    assertString(obj);
    syntaxCondition(isNonZeroString(obj), `Variable is zero length string.\n\tValue: "${ obj }"`);
}
