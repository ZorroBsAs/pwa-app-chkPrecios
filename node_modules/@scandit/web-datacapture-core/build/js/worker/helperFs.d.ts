/// <reference types="emscripten" />
interface SetupFSOptions {
    writableDataPath: string;
    indexedDBTimeoutMs: number;
}
/**
 * Initializes the filesystem wrapper with timeout protection and debouncing.
 *
 * Setup flow:
 * 1. Configure timeout from main thread
 * 2. Wrap FS.syncfs with our implementation
 * 3. Create and mount IDBFS
 * 4. Perform initial population sync
 */
declare function setupFS(options: SetupFSOptions): Promise<void>;

export { type SetupFSOptions, setupFS };
