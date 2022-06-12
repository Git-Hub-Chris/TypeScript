Input::
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/a/lib/lib.es2020.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/user/username/projects/myproject/tsconfig.json]
{"references":[{"path":"./shared/tsconfig.json"},{"path":"./webpack/tsconfig.json"}],"files":[]}

//// [/user/username/projects/myproject/shared/tsconfig.json]
{"extends":"./tsconfig.options.json","compilerOptions":{"composite":true}}

//// [/user/username/projects/myproject/shared/tsconfig.options.json]
{"compilerOptions":{"lib":["es2020"],"moduleResolution":"Node12","target":"es2020"}}

//// [/user/username/projects/myproject/shared/package.json]
{"name":"shared","version":"1.0.0","type":"commonjs"}

//// [/user/username/projects/myproject/shared/index.ts]
export function f1() { }
export class c { }
export enum e { }
// leading
export function f2() { } // trailing

//// [/user/username/projects/myproject/webpack/tsconfig.json]
{"compilerOptions":{"composite":true},"references":[{"path":"../shared/tsconfig.json"}]}

//// [/user/username/projects/myproject/webpack/index.ts]
export function f2() { }
export class c2 { }
export enum e2 { }
// leading
export function f22() { } // trailing


/a/lib/tsc.js --b --w
Output::
[[90m12:00:37 AM[0m] Projects in this build: 
    * shared/tsconfig.json
    * webpack/tsconfig.json
    * tsconfig.json

[[90m12:00:38 AM[0m] Project 'shared/tsconfig.json' is out of date because output file 'shared/index.js' does not exist

[[90m12:00:39 AM[0m] Building project '/user/username/projects/myproject/shared/tsconfig.json'...

project=/user/username/projects/myproject/shared/tsconfig.json, file.impliedNodeFormat=CommonJS[[90m12:00:48 AM[0m] Project 'webpack/tsconfig.json' is out of date because output file 'webpack/index.js' does not exist

[[90m12:00:49 AM[0m] Building project '/user/username/projects/myproject/webpack/tsconfig.json'...

project=/user/username/projects/myproject/webpack/tsconfig.json, file.impliedNodeFormat=undefined[[90m12:00:58 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/shared/index.ts"]
Program options: {"lib":["lib.es2020.d.ts"],"moduleResolution":3,"target":7,"composite":true,"configFilePath":"/user/username/projects/myproject/shared/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.es2020.d.ts
/user/username/projects/myproject/shared/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.es2020.d.ts
/user/username/projects/myproject/shared/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.es2020.d.ts (used version)
/user/username/projects/myproject/shared/index.ts (used version)

Program root files: ["/user/username/projects/myproject/webpack/index.ts"]
Program options: {"composite":true,"configFilePath":"/user/username/projects/myproject/webpack/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/webpack/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/webpack/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/webpack/index.ts (used version)

WatchedFiles::
/user/username/projects/myproject/shared/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/shared/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/shared/tsconfig.options.json:
  {"fileName":"/user/username/projects/myproject/shared/tsconfig.options.json","pollingInterval":250}
/user/username/projects/myproject/shared/index.ts:
  {"fileName":"/user/username/projects/myproject/shared/index.ts","pollingInterval":250}
/user/username/projects/myproject/shared/package.json:
  {"fileName":"/user/username/projects/myproject/shared/package.json","pollingInterval":250}
/user/username/projects/myproject/webpack/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/webpack/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/webpack/index.ts:
  {"fileName":"/user/username/projects/myproject/webpack/index.ts","pollingInterval":250}
/user/username/projects/myproject/webpack/package.json:
  {"fileName":"/user/username/projects/myproject/webpack/package.json","pollingInterval":250}
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/shared:
  {"directoryName":"/user/username/projects/myproject/shared","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/webpack:
  {"directoryName":"/user/username/projects/myproject/webpack","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/shared/index.js]
/*@before/user/username/projects/myproject/shared/tsconfig.json*/
export function f1() { }
export class c {
}
//@after/user/username/projects/myproject/shared/tsconfig.json
export var e;
(function (e) {
})(e || (e = {}));
// leading
/*@before/user/username/projects/myproject/shared/tsconfig.json*/
export function f2() { } // trailing


//// [/user/username/projects/myproject/shared/index.d.ts]
export declare function f1(): void;
export declare class c {
}
export declare enum e {
}
export declare function f2(): void;


//// [/user/username/projects/myproject/shared/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.es2020.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"8649344783-export function f1() { }\nexport class c { }\nexport enum e { }\n// leading\nexport function f2() { } // trailing","impliedFormat":1}],"options":{"composite":true,"target":7},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/shared/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.es2020.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.es2020.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "./index.ts": {
        "version": "8649344783-export function f1() { }\nexport class c { }\nexport enum e { }\n// leading\nexport function f2() { } // trailing",
        "signature": "8649344783-export function f1() { }\nexport class c { }\nexport enum e { }\n// leading\nexport function f2() { } // trailing",
        "impliedFormat": 1
      }
    },
    "options": {
      "composite": true,
      "target": 7
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.es2020.d.ts",
      "./index.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 811
}

//// [/user/username/projects/myproject/webpack/index.js]
"use strict";
exports.__esModule = true;
exports.f22 = exports.e2 = exports.c2 = exports.f2 = void 0;
/*@before/user/username/projects/myproject/webpack/tsconfig.json*/
function f2() { }
exports.f2 = f2;
//@after/user/username/projects/myproject/webpack/tsconfig.json
var c2 = /** @class */ (function () {
    function c2() {
    }
    return c2;
}());
exports.c2 = c2;
//@after/user/username/projects/myproject/webpack/tsconfig.json
var e2;
(function (e2) {
})(e2 = exports.e2 || (exports.e2 = {}));
// leading
/*@before/user/username/projects/myproject/webpack/tsconfig.json*/
function f22() { } // trailing
exports.f22 = f22;


//// [/user/username/projects/myproject/webpack/index.d.ts]
export declare function f2(): void;
export declare class c2 {
}
export declare enum e2 {
}
export declare function f22(): void;


//// [/user/username/projects/myproject/webpack/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"20140662566-export function f2() { }\nexport class c2 { }\nexport enum e2 { }\n// leading\nexport function f22() { } // trailing"],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/webpack/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "version": "20140662566-export function f2() { }\nexport class c2 { }\nexport enum e2 { }\n// leading\nexport function f22() { } // trailing",
        "signature": "20140662566-export function f2() { }\nexport class c2 { }\nexport enum e2 { }\n// leading\nexport function f22() { } // trailing"
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./index.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 749
}


Change:: change to shared

Input::
//// [/user/username/projects/myproject/shared/index.ts]
export function fooBar() {}export function f1() { }
export class c { }
export enum e { }
// leading
export function f2() { } // trailing


Output::
>> Screen clear
[[90m12:01:01 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:02 AM[0m] Project 'shared/tsconfig.json' is out of date because oldest output 'shared/index.js' is older than newest input 'shared/index.ts'

[[90m12:01:03 AM[0m] Building project '/user/username/projects/myproject/shared/tsconfig.json'...

project=/user/username/projects/myproject/shared/tsconfig.json, file.impliedNodeFormat=CommonJS[[90m12:01:16 AM[0m] Project 'webpack/tsconfig.json' is out of date because oldest output 'webpack/index.js' is older than newest input 'shared/tsconfig.json'

[[90m12:01:17 AM[0m] Building project '/user/username/projects/myproject/webpack/tsconfig.json'...

[[90m12:01:19 AM[0m] Updating unchanged output timestamps of project '/user/username/projects/myproject/webpack/tsconfig.json'...

[[90m12:01:20 AM[0m] Found 0 errors. Watching for file changes.

fileName:/user/username/projects/myproject/shared/index.ts,impliedNodeFormat:CommonJS
fileName:/user/username/projects/myproject/webpack/index.ts,impliedNodeFormat:undefined
impliedNodeFormat for /user/username/projects/myproject/shared/index.ts is correctly ModuleKind.CommonJS

Program root files: ["/user/username/projects/myproject/shared/index.ts"]
Program options: {"lib":["lib.es2020.d.ts"],"moduleResolution":3,"target":7,"composite":true,"configFilePath":"/user/username/projects/myproject/shared/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.es2020.d.ts
/user/username/projects/myproject/shared/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/shared/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/shared/index.ts (computed .d.ts)

Program root files: ["/user/username/projects/myproject/webpack/index.ts"]
Program options: {"composite":true,"configFilePath":"/user/username/projects/myproject/webpack/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/webpack/index.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

WatchedFiles::
/user/username/projects/myproject/shared/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/shared/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/shared/tsconfig.options.json:
  {"fileName":"/user/username/projects/myproject/shared/tsconfig.options.json","pollingInterval":250}
/user/username/projects/myproject/shared/index.ts:
  {"fileName":"/user/username/projects/myproject/shared/index.ts","pollingInterval":250}
/user/username/projects/myproject/shared/package.json:
  {"fileName":"/user/username/projects/myproject/shared/package.json","pollingInterval":250}
/user/username/projects/myproject/webpack/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/webpack/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/webpack/index.ts:
  {"fileName":"/user/username/projects/myproject/webpack/index.ts","pollingInterval":250}
/user/username/projects/myproject/webpack/package.json:
  {"fileName":"/user/username/projects/myproject/webpack/package.json","pollingInterval":250}
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/shared:
  {"directoryName":"/user/username/projects/myproject/shared","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/webpack:
  {"directoryName":"/user/username/projects/myproject/webpack","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/shared/index.js]
/*@before/user/username/projects/myproject/shared/tsconfig.json*/
export function fooBar() { }
/*@before/user/username/projects/myproject/shared/tsconfig.json*/
export function f1() { }
export class c {
}
//@after/user/username/projects/myproject/shared/tsconfig.json
export var e;
(function (e) {
})(e || (e = {}));
// leading
/*@before/user/username/projects/myproject/shared/tsconfig.json*/
export function f2() { } // trailing


//// [/user/username/projects/myproject/shared/index.d.ts]
export declare function fooBar(): void;
export declare function f1(): void;
export declare class c {
}
export declare enum e {
}
export declare function f2(): void;


//// [/user/username/projects/myproject/shared/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.es2020.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"14127205977-export function fooBar() {}export function f1() { }\nexport class c { }\nexport enum e { }\n// leading\nexport function f2() { } // trailing","signature":"1966424426-export declare function fooBar(): void;\nexport declare function f1(): void;\nexport declare class c {\n}\nexport declare enum e {\n}\nexport declare function f2(): void;\n","impliedFormat":1}],"options":{"composite":true,"target":7},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/shared/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.es2020.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.es2020.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "./index.ts": {
        "version": "14127205977-export function fooBar() {}export function f1() { }\nexport class c { }\nexport enum e { }\n// leading\nexport function f2() { } // trailing",
        "signature": "1966424426-export declare function fooBar(): void;\nexport declare function f1(): void;\nexport declare class c {\n}\nexport declare enum e {\n}\nexport declare function f2(): void;\n",
        "impliedFormat": 1
      }
    },
    "options": {
      "composite": true,
      "target": 7
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.es2020.d.ts",
      "./index.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1037
}

//// [/user/username/projects/myproject/webpack/index.js] file changed its modified time
//// [/user/username/projects/myproject/webpack/index.d.ts] file changed its modified time
//// [/user/username/projects/myproject/webpack/tsconfig.tsbuildinfo] file changed its modified time

Change:: change package.json type to module

Input::
//// [/user/username/projects/myproject/shared/package.json]
{"name":"shared","version":"1.0.0","type":"module"}


Output::
>> Screen clear
[[90m12:01:24 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:25 AM[0m] Project 'shared/tsconfig.json' is out of date because oldest output 'shared/index.js' is older than newest input 'shared/package.json'

[[90m12:01:26 AM[0m] Building project '/user/username/projects/myproject/shared/tsconfig.json'...

project=/user/username/projects/myproject/shared/tsconfig.json, file.impliedNodeFormat=ESNext[[90m12:01:39 AM[0m] Project 'webpack/tsconfig.json' is out of date because oldest output 'webpack/index.js' is older than newest input 'shared/package.json'

[[90m12:01:40 AM[0m] Building project '/user/username/projects/myproject/webpack/tsconfig.json'...

[[90m12:01:42 AM[0m] Updating unchanged output timestamps of project '/user/username/projects/myproject/webpack/tsconfig.json'...

[[90m12:01:43 AM[0m] Found 0 errors. Watching for file changes.

fileName:/user/username/projects/myproject/shared/index.ts,impliedNodeFormat:ESNext
fileName:/user/username/projects/myproject/webpack/index.ts,impliedNodeFormat:undefined
impliedNodeFormat for /user/username/projects/myproject/shared/index.ts is correctly ModuleKind.ESNext

Program root files: ["/user/username/projects/myproject/shared/index.ts"]
Program options: {"lib":["lib.es2020.d.ts"],"moduleResolution":3,"target":7,"composite":true,"configFilePath":"/user/username/projects/myproject/shared/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.es2020.d.ts
/user/username/projects/myproject/shared/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/shared/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/shared/index.ts (computed .d.ts)

Program root files: ["/user/username/projects/myproject/webpack/index.ts"]
Program options: {"composite":true,"configFilePath":"/user/username/projects/myproject/webpack/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/webpack/index.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

WatchedFiles::
/user/username/projects/myproject/shared/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/shared/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/shared/tsconfig.options.json:
  {"fileName":"/user/username/projects/myproject/shared/tsconfig.options.json","pollingInterval":250}
/user/username/projects/myproject/shared/index.ts:
  {"fileName":"/user/username/projects/myproject/shared/index.ts","pollingInterval":250}
/user/username/projects/myproject/shared/package.json:
  {"fileName":"/user/username/projects/myproject/shared/package.json","pollingInterval":250}
/user/username/projects/myproject/webpack/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/webpack/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/webpack/index.ts:
  {"fileName":"/user/username/projects/myproject/webpack/index.ts","pollingInterval":250}
/user/username/projects/myproject/webpack/package.json:
  {"fileName":"/user/username/projects/myproject/webpack/package.json","pollingInterval":250}
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/shared:
  {"directoryName":"/user/username/projects/myproject/shared","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/webpack:
  {"directoryName":"/user/username/projects/myproject/webpack","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/shared/index.js] file written with same contents
//// [/user/username/projects/myproject/shared/index.d.ts] file written with same contents
//// [/user/username/projects/myproject/shared/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.es2020.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"14127205977-export function fooBar() {}export function f1() { }\nexport class c { }\nexport enum e { }\n// leading\nexport function f2() { } // trailing","signature":"1966424426-export declare function fooBar(): void;\nexport declare function f1(): void;\nexport declare class c {\n}\nexport declare enum e {\n}\nexport declare function f2(): void;\n","impliedFormat":99}],"options":{"composite":true,"target":7},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/shared/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.es2020.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.es2020.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "./index.ts": {
        "version": "14127205977-export function fooBar() {}export function f1() { }\nexport class c { }\nexport enum e { }\n// leading\nexport function f2() { } // trailing",
        "signature": "1966424426-export declare function fooBar(): void;\nexport declare function f1(): void;\nexport declare class c {\n}\nexport declare enum e {\n}\nexport declare function f2(): void;\n",
        "impliedFormat": 99
      }
    },
    "options": {
      "composite": true,
      "target": 7
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.es2020.d.ts",
      "./index.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1038
}

//// [/user/username/projects/myproject/webpack/index.js] file changed its modified time
//// [/user/username/projects/myproject/webpack/index.d.ts] file changed its modified time
//// [/user/username/projects/myproject/webpack/tsconfig.tsbuildinfo] file changed its modified time

Change:: date change package.json

Input::
//// [/user/username/projects/myproject/shared/package.json] file written with same contents

Output::
>> Screen clear
[[90m12:01:47 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:48 AM[0m] Project 'shared/tsconfig.json' is out of date because oldest output 'shared/index.js' is older than newest input 'shared/package.json'

[[90m12:01:49 AM[0m] Building project '/user/username/projects/myproject/shared/tsconfig.json'...

[[90m12:01:51 AM[0m] Updating unchanged output timestamps of project '/user/username/projects/myproject/shared/tsconfig.json'...

[[90m12:01:52 AM[0m] Project 'webpack/tsconfig.json' is out of date because oldest output 'webpack/index.js' is older than newest input 'shared/package.json'

[[90m12:01:53 AM[0m] Building project '/user/username/projects/myproject/webpack/tsconfig.json'...

[[90m12:01:55 AM[0m] Updating unchanged output timestamps of project '/user/username/projects/myproject/webpack/tsconfig.json'...

[[90m12:01:56 AM[0m] Found 0 errors. Watching for file changes.

fileName:/user/username/projects/myproject/shared/index.ts,impliedNodeFormat:ESNext
fileName:/user/username/projects/myproject/webpack/index.ts,impliedNodeFormat:undefined
impliedNodeFormat for /user/username/projects/myproject/shared/index.ts is correctly ModuleKind.ESNext

Program root files: ["/user/username/projects/myproject/shared/index.ts"]
Program options: {"lib":["lib.es2020.d.ts"],"moduleResolution":3,"target":7,"composite":true,"configFilePath":"/user/username/projects/myproject/shared/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.es2020.d.ts
/user/username/projects/myproject/shared/index.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

Program root files: ["/user/username/projects/myproject/webpack/index.ts"]
Program options: {"composite":true,"configFilePath":"/user/username/projects/myproject/webpack/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/webpack/index.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

WatchedFiles::
/user/username/projects/myproject/shared/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/shared/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/shared/tsconfig.options.json:
  {"fileName":"/user/username/projects/myproject/shared/tsconfig.options.json","pollingInterval":250}
/user/username/projects/myproject/shared/index.ts:
  {"fileName":"/user/username/projects/myproject/shared/index.ts","pollingInterval":250}
/user/username/projects/myproject/shared/package.json:
  {"fileName":"/user/username/projects/myproject/shared/package.json","pollingInterval":250}
/user/username/projects/myproject/webpack/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/webpack/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/webpack/index.ts:
  {"fileName":"/user/username/projects/myproject/webpack/index.ts","pollingInterval":250}
/user/username/projects/myproject/webpack/package.json:
  {"fileName":"/user/username/projects/myproject/webpack/package.json","pollingInterval":250}
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/shared:
  {"directoryName":"/user/username/projects/myproject/shared","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/webpack:
  {"directoryName":"/user/username/projects/myproject/webpack","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/shared/index.js] file changed its modified time
//// [/user/username/projects/myproject/shared/index.d.ts] file changed its modified time
//// [/user/username/projects/myproject/shared/tsconfig.tsbuildinfo] file changed its modified time
//// [/user/username/projects/myproject/webpack/index.js] file changed its modified time
//// [/user/username/projects/myproject/webpack/index.d.ts] file changed its modified time
//// [/user/username/projects/myproject/webpack/tsconfig.tsbuildinfo] file changed its modified time

Change:: tsconfig  compilerOptions -> module:node12, moduleResolution omitted

Input::
//// [/user/username/projects/myproject/shared/tsconfig.options.json]
{"compilerOptions":{"lib":["es2020"],"target":"es2020","module":"Node12"}}


Output::
>> Screen clear
[[90m12:02:00 AM[0m] File change detected. Starting incremental compilation...

[[90m12:02:01 AM[0m] Project 'shared/tsconfig.json' is out of date because oldest output 'shared/index.js' is older than newest input 'shared/tsconfig.options.json'

[[90m12:02:02 AM[0m] Building project '/user/username/projects/myproject/shared/tsconfig.json'...

project=/user/username/projects/myproject/shared/tsconfig.json, file.impliedNodeFormat=ESNext[[90m12:02:15 AM[0m] Project 'webpack/tsconfig.json' is up to date with .d.ts files from its dependencies

[[90m12:02:17 AM[0m] Updating output timestamps of project '/user/username/projects/myproject/webpack/tsconfig.json'...

[[90m12:02:18 AM[0m] Found 0 errors. Watching for file changes.

fileName:/user/username/projects/myproject/shared/index.ts,impliedNodeFormat:ESNext
fileName:/user/username/projects/myproject/webpack/index.ts,impliedNodeFormat:undefined
impliedNodeFormat for /user/username/projects/myproject/shared/index.ts is correctly ModuleKind.ESNext

Program root files: ["/user/username/projects/myproject/shared/index.ts"]
Program options: {"lib":["lib.es2020.d.ts"],"target":7,"module":100,"composite":true,"configFilePath":"/user/username/projects/myproject/shared/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.es2020.d.ts
/user/username/projects/myproject/shared/index.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

WatchedFiles::
/user/username/projects/myproject/shared/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/shared/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/shared/tsconfig.options.json:
  {"fileName":"/user/username/projects/myproject/shared/tsconfig.options.json","pollingInterval":250}
/user/username/projects/myproject/shared/index.ts:
  {"fileName":"/user/username/projects/myproject/shared/index.ts","pollingInterval":250}
/user/username/projects/myproject/shared/package.json:
  {"fileName":"/user/username/projects/myproject/shared/package.json","pollingInterval":250}
/user/username/projects/myproject/webpack/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/webpack/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/webpack/index.ts:
  {"fileName":"/user/username/projects/myproject/webpack/index.ts","pollingInterval":250}
/user/username/projects/myproject/webpack/package.json:
  {"fileName":"/user/username/projects/myproject/webpack/package.json","pollingInterval":250}
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/shared:
  {"directoryName":"/user/username/projects/myproject/shared","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/webpack:
  {"directoryName":"/user/username/projects/myproject/webpack","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/shared/index.js]
/*@before/user/username/projects/myproject/shared/tsconfig.json*/
export function fooBar() { }
/*@before/user/username/projects/myproject/shared/tsconfig.json*/
export function f1() { }
export class c {
}
//@after/user/username/projects/myproject/shared/tsconfig.json
export var e;
(function (e) {
})(e = e || (e = {}));
// leading
/*@before/user/username/projects/myproject/shared/tsconfig.json*/
export function f2() { } // trailing


//// [/user/username/projects/myproject/shared/index.d.ts] file written with same contents
//// [/user/username/projects/myproject/shared/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.es2020.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"14127205977-export function fooBar() {}export function f1() { }\nexport class c { }\nexport enum e { }\n// leading\nexport function f2() { } // trailing","signature":"1966424426-export declare function fooBar(): void;\nexport declare function f1(): void;\nexport declare class c {\n}\nexport declare enum e {\n}\nexport declare function f2(): void;\n","impliedFormat":99}],"options":{"composite":true,"module":100,"target":7},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/shared/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.es2020.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.es2020.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "./index.ts": {
        "version": "14127205977-export function fooBar() {}export function f1() { }\nexport class c { }\nexport enum e { }\n// leading\nexport function f2() { } // trailing",
        "signature": "1966424426-export declare function fooBar(): void;\nexport declare function f1(): void;\nexport declare class c {\n}\nexport declare enum e {\n}\nexport declare function f2(): void;\n",
        "impliedFormat": 99
      }
    },
    "options": {
      "composite": true,
      "module": 100,
      "target": 7
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.es2020.d.ts",
      "./index.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1051
}

//// [/user/username/projects/myproject/webpack/index.js] file changed its modified time
//// [/user/username/projects/myproject/webpack/index.d.ts] file changed its modified time
//// [/user/username/projects/myproject/webpack/tsconfig.tsbuildinfo] file changed its modified time

Change:: tsconfig  compilerOptions -> module:node12, moduleResolution: node

Input::
//// [/user/username/projects/myproject/shared/tsconfig.options.json]
{"compilerOptions":{"lib":["es2020"],"target":"es2020","module":"Node12","moduleResolution":"Node"}}


Output::
>> Screen clear
[[90m12:02:22 AM[0m] File change detected. Starting incremental compilation...

[[90m12:02:23 AM[0m] Project 'shared/tsconfig.json' is out of date because oldest output 'shared/index.js' is older than newest input 'shared/tsconfig.options.json'

[[90m12:02:24 AM[0m] Building project '/user/username/projects/myproject/shared/tsconfig.json'...

project=/user/username/projects/myproject/shared/tsconfig.json, file.impliedNodeFormat=undefined[[90m12:02:37 AM[0m] Project 'webpack/tsconfig.json' is up to date with .d.ts files from its dependencies

[[90m12:02:39 AM[0m] Updating output timestamps of project '/user/username/projects/myproject/webpack/tsconfig.json'...

[[90m12:02:40 AM[0m] Found 0 errors. Watching for file changes.

fileName:/user/username/projects/myproject/shared/index.ts,impliedNodeFormat:undefined
fileName:/user/username/projects/myproject/webpack/index.ts,impliedNodeFormat:undefined
impliedNodeFormat for /user/username/projects/myproject/shared/index.ts is undefined, as expected

Program root files: ["/user/username/projects/myproject/shared/index.ts"]
Program options: {"lib":["lib.es2020.d.ts"],"target":7,"module":100,"moduleResolution":2,"composite":true,"configFilePath":"/user/username/projects/myproject/shared/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.es2020.d.ts
/user/username/projects/myproject/shared/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.es2020.d.ts
/user/username/projects/myproject/shared/index.ts

Shape signatures in builder refreshed for::
/a/lib/lib.es2020.d.ts (used version)
/user/username/projects/myproject/shared/index.ts (computed .d.ts)

WatchedFiles::
/user/username/projects/myproject/shared/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/shared/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/shared/tsconfig.options.json:
  {"fileName":"/user/username/projects/myproject/shared/tsconfig.options.json","pollingInterval":250}
/user/username/projects/myproject/shared/index.ts:
  {"fileName":"/user/username/projects/myproject/shared/index.ts","pollingInterval":250}
/user/username/projects/myproject/shared/package.json:
  {"fileName":"/user/username/projects/myproject/shared/package.json","pollingInterval":250}
/user/username/projects/myproject/webpack/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/webpack/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/webpack/index.ts:
  {"fileName":"/user/username/projects/myproject/webpack/index.ts","pollingInterval":250}
/user/username/projects/myproject/webpack/package.json:
  {"fileName":"/user/username/projects/myproject/webpack/package.json","pollingInterval":250}
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/shared:
  {"directoryName":"/user/username/projects/myproject/shared","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/webpack:
  {"directoryName":"/user/username/projects/myproject/webpack","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/shared/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.f2 = exports.e = exports.c = exports.f1 = exports.fooBar = void 0;
/*@before/user/username/projects/myproject/shared/tsconfig.json*/
function fooBar() { }
exports.fooBar = fooBar;
/*@before/user/username/projects/myproject/shared/tsconfig.json*/
function f1() { }
exports.f1 = f1;
class c {
}
exports.c = c;
//@after/user/username/projects/myproject/shared/tsconfig.json
var e;
(function (e) {
})(e = exports.e || (exports.e = {}));
// leading
/*@before/user/username/projects/myproject/shared/tsconfig.json*/
function f2() { } // trailing
exports.f2 = f2;


//// [/user/username/projects/myproject/shared/index.d.ts] file written with same contents
//// [/user/username/projects/myproject/shared/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.es2020.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"14127205977-export function fooBar() {}export function f1() { }\nexport class c { }\nexport enum e { }\n// leading\nexport function f2() { } // trailing","signature":"1966424426-export declare function fooBar(): void;\nexport declare function f1(): void;\nexport declare class c {\n}\nexport declare enum e {\n}\nexport declare function f2(): void;\n"}],"options":{"composite":true,"module":100,"target":7},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/shared/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.es2020.d.ts",
      "./index.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.es2020.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "version": "14127205977-export function fooBar() {}export function f1() { }\nexport class c { }\nexport enum e { }\n// leading\nexport function f2() { } // trailing",
        "signature": "1966424426-export declare function fooBar(): void;\nexport declare function f1(): void;\nexport declare class c {\n}\nexport declare enum e {\n}\nexport declare function f2(): void;\n"
      }
    },
    "options": {
      "composite": true,
      "module": 100,
      "target": 7
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.es2020.d.ts",
      "./index.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1014
}

//// [/user/username/projects/myproject/webpack/index.js] file changed its modified time
//// [/user/username/projects/myproject/webpack/index.d.ts] file changed its modified time
//// [/user/username/projects/myproject/webpack/tsconfig.tsbuildinfo] file changed its modified time
