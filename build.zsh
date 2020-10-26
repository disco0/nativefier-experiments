#!/usr/bin/env zsh
rm -rfv {build/,}Regex101-darwin-x64/Regex101.app(N[1]) 2>/dev/null
rm -rfv {build/,}darwin-x64-template(N[1]) 2>/dev/null
(( success = 1 ))

pushd src/injects/regex101/ && {
    tsc webpack.config.ts && webpack && (( success = $? ))
} always { popd }

(( success == 0 )) && 
DEBUG="multi-nativefier*,nativefier" yarn build --schemas regex --max 1 && open {build/,}Regex101-darwin-x64/Regex101.app(N[1])