export function escapeForRegex(string: string): string
{
    return string.replace(/([{}$\^\[\]\(\)])/gm, '\\$1');
}

export function compileToRegex(string: string): RegExp | undefined
{
    try
    {
        return RegExp(escapeForRegex(string));
    }
    catch(err)
    {
        return;
    }
}

export function generateMatchList(schemaPatterns: string[]): RegExp[]
{
    return schemaPatterns.map(compileToRegex).filter((_): _ is RegExp => _ instanceof RegExp);
}
