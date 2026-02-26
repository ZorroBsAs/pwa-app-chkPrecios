declare class BarcodeFindItem {
    private _searchOptions;
    private _content;
    private uid;
    constructor(searchOptions: BarcodeFindItemSearchOptions, content: BarcodeFindItemContent | null);
    get searchOptions(): BarcodeFindItemSearchOptions;
    get content(): BarcodeFindItemContent | null;
    toJSONObject(): BarcodeFindItemJSON;
}
interface BarcodeFindItemJSON {
    searchOptions: {
        barcodeData: string;
    };
    content: {
        info: string | null;
        additionalInfo: string | null;
        image: string | null;
    } | null;
}
declare class BarcodeFindItemSearchOptions {
    private _barcodeData;
    constructor(barcodeData: string);
    get barcodeData(): string;
}
declare class BarcodeFindItemContent {
    private _info;
    private _additionalInfo;
    private _image;
    constructor(info?: string, additionalInfo?: string, image?: string);
    get image(): string | null;
    get additionalInfo(): string | null;
    get info(): string | null;
}

export { BarcodeFindItem, BarcodeFindItemContent, type BarcodeFindItemJSON, BarcodeFindItemSearchOptions };
