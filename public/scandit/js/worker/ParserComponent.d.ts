import { ParserInterfaceResultMessage, AugmentedWorker, ParserModule, ParserInterfaceActionMessage } from './proxyableWorkerRelated.js';
import '../sdcParserModule-BpvTEtgQ.js';
import 'scandit-web-datacapture-core';
import '../parser/ParserDataFormat.js';
import '../parser/private/sdcParserInternal.js';
import '../parser/private/sdcParserCommon.js';

interface ModuleHandler<M extends EmscriptenModule> {
    get: () => M;
    set: (v: M) => void;
}
interface ParserWorkerFunctions {
    postMessage: (message: ParserInterfaceResultMessage, transfer?: Transferable[]) => void;
}
declare class ParserComponent {
    private parsers;
    private readonly workerFunctions;
    private workerSelf;
    private onMessageListener;
    private moduleHandler;
    private setupPromise;
    constructor(workerSelf: AugmentedWorker<ParserModule>, moduleHandler: ModuleHandler<ParserModule>);
    private get Module();
    listenToMessages(): void;
    onMessage(event: MessageEvent<ParserInterfaceActionMessage>): boolean;
    performDjinniAction(action: ParserInterfaceActionMessage): Promise<void>;
    private setup;
    private createParser;
    private getWasmParserExpectedHash;
    private getWasmParserFileName;
}

export { ParserComponent, type ParserWorkerFunctions };
