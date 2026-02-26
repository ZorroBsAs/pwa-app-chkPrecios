/// <reference types="emscripten" />
interface JSONType {
    [key: string]: JSONType | JSONType[] | boolean | number | string | null;
}

export type { JSONType };
