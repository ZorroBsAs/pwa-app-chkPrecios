import { AbstractProxyableClass } from './AbstractProxyableClass.js';
import '../../worker/proxyableWorkerRelated.js';
import '../../sdcParserModule-BpvTEtgQ.js';
import 'scandit-web-datacapture-core';
import '../../parser/ParserDataFormat.js';
import '../../parser/private/sdcParserInternal.js';
import '../../parser/private/sdcParserCommon.js';

interface ProxyOptions<M extends (...arguments_: any[]) => any> {
    argumentsSerializer?: (arguments_: Parameters<M>) => [any];
}
declare function proxy<M extends (...arguments_: any[]) => any>(options?: ProxyOptions<M>): (_target: unknown, _propertyKey: string, descriptor: TypedPropertyDescriptor<M>) => TypedPropertyDescriptor<M>;
type Constructable<T> = new (...arguments_: any[]) => T;
declare function MirrorToWorkerClass(workerClassName: string): <T extends Constructable<AbstractProxyableClass>>(Constructor: T) => T;

export { MirrorToWorkerClass, proxy };
