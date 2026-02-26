import { ProxyableActionMessage } from '../../worker/proxyableWorkerRelated.js';
import '../../sdcParserModule-BpvTEtgQ.js';
import 'scandit-web-datacapture-core';
import '../../parser/ParserDataFormat.js';
import '../../parser/private/sdcParserInternal.js';
import '../../parser/private/sdcParserCommon.js';

declare abstract class AbstractProxyableClass<ActionMessage extends ProxyableActionMessage = ProxyableActionMessage> {
    abstract command: ActionMessage["command"];
    abstract get worker(): Worker;
    abstract getId(): string;
}

export { AbstractProxyableClass };
