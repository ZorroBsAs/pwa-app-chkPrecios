import { P as ParserInterface, a as ParserInterface_statics, R as ResultOrError } from '../sdcParserModule-BpvTEtgQ.js';
import { OverrideState } from 'scandit-web-datacapture-core';
import '../parser/ParserDataFormat.js';
import '../parser/private/sdcParserInternal.js';
import '../parser/private/sdcParserCommon.js';

type ValuesOf<T> = T[keyof T];
type Djinni = "djinni";
type DjinniActionMessageKey = `${Djinni}Action`;
type DjinniResultMessageKey = `${Djinni}Result`;
type ClassInfo<T> = {
    [K in keyof T]: T[K] extends (...arguments_: any[]) => any ? {
        method: T[K];
        methodName: K extends string ? K : never;
        className: T extends {
            constructor: {
                name: infer ClassName;
            };
        } ? ClassName : never;
        args: Parameters<T[K]>;
        result: ReturnType<T[K]>;
    } : never;
};
interface BaseAction {
    id: number;
    instanceId?: string;
    command: DjinniActionMessageKey;
}
interface DjinniAction<C> extends BaseAction {
    className: ValuesOf<ClassInfo<C>>["className"];
    methodName: ValuesOf<ClassInfo<C>>["methodName"];
    args: ValuesOf<ClassInfo<C>>["args"];
}
interface DjinniResult<T> {
    type: DjinniResultMessageKey;
    payload: {
        id: number;
        instanceId?: string;
        className: ValuesOf<ClassInfo<T>>["className"];
        methodName: ValuesOf<ClassInfo<T>>["methodName"];
        result: ValuesOf<ClassInfo<T>>["result"];
    };
}
type ParserInterfaceActionMessage = DjinniAction<ParserInterface> | ParserCreateAction;
type ParserInterfaceResultMessage = DjinniResult<ParserInterface> | ParserCreateResult;
interface ParserCreateAction extends BaseAction {
    methodName: "create";
    className: "ParserInterface";
    args: [
        ...Parameters<ParserInterface_statics["create"]>,
        {
            libraryLocation: string;
            overrideSimdSupport: OverrideState;
            overrideThreadsSupport: OverrideState;
            verifyResponseHash: boolean;
            referredOrigin: string;
        }
    ];
}
interface ParserCreateResult {
    type: DjinniResultMessageKey;
    payload: {
        id: number;
        instanceId?: string;
        className: "ParserInterface";
        methodName: "create";
        result: ResultOrError<string, string>;
    };
}
type ProxyableActionMessage = ParserInterfaceActionMessage;
type ProxyableResultMessage = ParserInterfaceResultMessage;
interface SenderParserWorker extends Omit<Worker, "postMessage"> {
    onmessage: ((this: Worker, event_: MessageEvent<ProxyableResultMessage>) => void) | null;
    postMessage: (message: ProxyableActionMessage, transfer?: Transferable[]) => void;
}
interface ReceiverParserWorker extends Omit<Worker, "postMessage"> {
    onmessage: ((this: Worker, event_: MessageEvent) => void) | null;
    postMessage: (message: ProxyableResultMessage, transfer?: Transferable[]) => void;
}
interface ParserModule extends EmscriptenModule {
    ParserInterface: ParserInterface_statics;
}
type AugmentedWorker<M extends EmscriptenModule> = ReceiverParserWorker & {
    Module: M;
};
interface ModuleHandler<M extends ParserModule> {
    get: () => M;
    set: (v: M) => void;
}

export type { AugmentedWorker, ClassInfo, Djinni, DjinniActionMessageKey, ModuleHandler, ParserInterfaceActionMessage, ParserInterfaceResultMessage, ParserModule, ProxyableActionMessage, ProxyableResultMessage, ReceiverParserWorker, SenderParserWorker, ValuesOf };
