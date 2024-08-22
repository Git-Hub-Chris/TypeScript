import type { CompilerOptions } from "./types.js";

/** @internal */
export type Entrypoint = "tsc" | "typescript" | "tsserver" | "testRunner";

let currentEntrypoint: Entrypoint | undefined;
let currentTsNamespace: any;

/** @internal */
export function setTypeScriptNamespace(entrypoint: Entrypoint, ts: any) {
    if (currentEntrypoint !== undefined) throw new Error("ts namespace already set");
    currentEntrypoint = entrypoint;
    currentTsNamespace = ts;
}

/** @internal */
export function getTypeScriptNamespace(): any {
    if (currentTsNamespace === undefined) throw new Error("ts namespace unset");
    return currentTsNamespace;
}

/** @internal */
export function shouldAllowPlugins(options: CompilerOptions): boolean {
    switch (currentEntrypoint) {
        case "tsserver":
        case "typescript":
            return true;
    }
    return options.allowPlugins ?? false;
}
