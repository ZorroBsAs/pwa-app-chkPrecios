/// <reference types="emscripten" />
import { App } from 'electron';

declare namespace node_path {
  export {  };
}

declare namespace node_crypto {
  export {  };
}

declare namespace node_fs_promises {
  export {  };
}

interface Deps {
    app: App;
    fs: typeof node_fs_promises;
    crypto: typeof node_crypto;
    path: typeof node_path;
    ipcMain: Electron.IpcMain;
}
declare function register(deps: Deps, publicKey: string): void;
declare function unregister(): void;

export { register, unregister };
