/// <reference types="emscripten" />
interface StateTransition<TState extends string> {
    from: TState;
    to: TState;
    guard?: () => boolean;
}
interface StateTransitionAction<TState extends string, TResult = any> {
    targetState: TState;
    action: () => Promise<TResult>;
    onSuccess?: TState;
    onError?: TState;
}
/**
 * Generic async state machine that can be used to manage state transitions
 * with support for async operations, event listeners, and validation.
 * All state transitions are queued and processed sequentially to prevent race conditions.
 */
declare class AsyncStateMachine<TState extends string> {
    private _currentState;
    private _initialState;
    private _listeners;
    private _pendingTransitions;
    private _validTransitions;
    private _taskQueue;
    private _isProcessingQueue;
    constructor(initialState: TState, validTransitions: StateTransition<TState>[]);
    get currentState(): TState;
    get isInitializing(): boolean;
    addListener(listener: (currentState: TState, previousState: TState, context?: any) => void): void;
    removeListener(listener: (currentState: TState, previousState: TState, context?: any) => void): void;
    canTransitionTo(targetState: TState): boolean;
    transitionTo(targetState: TState, context?: any): void;
    /**
     * Enqueues a task to be executed sequentially.
     * This ensures that all tasks are processed one at a time, preventing race conditions.
     */
    private enqueueTask;
    /**
     * Processes the task queue sequentially.
     * Only one task is processed at a time to prevent race conditions.
     */
    private processQueue;
    executeAsyncTransition<TResult>(config: StateTransitionAction<TState, TResult>): Promise<TResult>;
    waitForState(targetState: TState, timeoutMs?: number): Promise<void>;
    reset(initialState: TState): Promise<void>;
    private notifyListeners;
}

export { AsyncStateMachine, type StateTransition, type StateTransitionAction };
