import { Optional } from '@scandit/web-datacapture-core';

declare function createSandBoxedFunctionFromString<T>(functionString: Optional<string>): Optional<T>;

export { createSandBoxedFunctionFromString };
