import { platform, env } from 'process';

/**
 * First check for matching process platform, and then check environment variables for WSL
 * associated variables (`WSLENV`, for example, is used on Windows 10 systems to manage shared
 * environment variables between the host and WSL instance).
 */

export function isWSL(): boolean
{
    if(!/linux/.test(platform))
        return false;

    for(const varName in env)
    {
        if(/wsl/i.test(varName))
            return true;
    }
    return false;
}
