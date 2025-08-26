type FileDropAccept = 'drop' | 'paste' | 'click';
interface FileDropEventInit extends EventInit {
    action: FileDropAccept;
    files: File[];
}
export declare class FileDropEvent extends Event {
    private _action;
    private _files;
    constructor(typeArg: string, eventInitDict: FileDropEventInit);
    get action(): FileDropAccept;
    get files(): File[];
}
export declare class FilesDropElement extends HTMLElement {
    static register(tag?: string): void;
    private _dragEnterCount;
    constructor();
    get accept(): string;
    set accept(val: string);
    get multiple(): boolean;
    get clickable(): boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onDragEnter;
    private _onDragLeave;
    private _onDrop;
    private _onPaste;
    private _reset;
    _onClick(): Promise<File[] | []>;
}
declare global {
    interface HTMLElementEventMap {
        filedrop: FileDropEvent;
    }
}
export {};
