Fs::
//// [/apath/a.ts]


//// [/apath/b.js]


//// [/apath/tsconfig.json]
{
 "compilerOptions": {
  "modu": "commonjs"
 }
}


configFileName:: tsconfig.json
CompilerOptions::
{
 "configFilePath": "tsconfig.json"
}
Errors::
[91m● [0m [91mError[0m TS5023Unknown compiler option 'modu'.

