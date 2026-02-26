import { QuadrilateralJSON, Quadrilateral } from '@scandit/web-datacapture-core';
import { Serializable } from '@scandit/web-datacapture-core/build/js/private/Serializable';
import { EncodingRangeJSON, EncodingRange } from './EncodingRange.js';
import { StructuredAppendDataJSON, StructuredAppendData } from './StructuredAppendData.js';

declare enum Symbology {
    EAN13UPCA = "ean13Upca",
    UPCE = "upce",
    EAN8 = "ean8",
    Code39 = "code39",
    Code93 = "code93",
    Code128 = "code128",
    Code11 = "code11",
    Code25 = "code25",
    Codabar = "codabar",
    InterleavedTwoOfFive = "interleavedTwoOfFive",
    MSIPlessey = "msiPlessey",
    QR = "qr",
    DataMatrix = "dataMatrix",
    Aztec = "aztec",
    MaxiCode = "maxicode",
    DotCode = "dotcode",
    KIX = "kix",
    RoyalMail4state = "royal-mail-4state",
    GS1Databar = "databar",
    GS1DatabarExpanded = "databarExpanded",
    GS1DatabarLimited = "databarLimited",
    PDF417 = "pdf417",
    MicroPDF417 = "microPdf417",
    MicroQR = "microQr",
    Code32 = "code32",
    Lapa4SC = "lapa4sc",
    IATATwoOfFive = "iata2of5",
    MatrixTwoOfFive = "matrix2of5",
    USPSIntelligentMail = "uspsIntelligentMail",
    ArUco = "aruco"
}
declare enum CompositeType {
    A = "A",
    B = "B",
    C = "C"
}
interface PrivateCompositeTypeDescription {
    symbologies: Symbology[];
    types: CompositeType[];
}
declare enum Checksum {
    Mod10 = "mod10",
    Mod11 = "mod11",
    Mod16 = "mod16",
    Mod43 = "mod43",
    Mod47 = "mod47",
    Mod103 = "mod103",
    Mod10AndMod11 = "mod1110",
    Mod10AndMod10 = "mod1010"
}
declare enum CompositeFlag {
    None = "none",
    Unknown = "unknown",
    Linked = "linked",
    GS1TypeA = "gs1TypeA",
    GS1TypeB = "gs1TypeB",
    GS1TypeC = "gs1TypeC"
}
declare class Barcode implements Serializable<BarcodeJSON> {
    private _structuredAppendData;
    private _addOnData;
    private _compositeData;
    private _compositeFlag;
    private _compositeRawData;
    private _data;
    private _encodingRanges;
    private _frameID;
    private _isColorInverted;
    private _isGS1DataCarrier;
    private _location;
    private _rawData;
    private _symbolCount;
    private _symbology;
    get isStructuredAppend(): boolean;
    get structuredAppendData(): StructuredAppendData | null;
    get addOnData(): string | null;
    get compositeData(): string | null;
    get compositeFlag(): CompositeFlag;
    get compositeRawData(): string;
    get data(): string | null;
    get encodingRanges(): EncodingRange[];
    get frameID(): number;
    get isColorInverted(): boolean;
    get isGS1DataCarrier(): boolean;
    get location(): Quadrilateral;
    get rawData(): string;
    get symbolCount(): number;
    get symbology(): Symbology;
    private static fromJSON;
    toJSONObject(): BarcodeJSON;
}
interface BarcodeJSON {
    addOnData: string | null;
    compositeData: string | null;
    compositeFlag: string;
    compositeRawData: string;
    data: string | null;
    encodingRanges: EncodingRangeJSON[];
    frameId: number;
    isColorInverted: boolean;
    isGS1DataCarrier: boolean;
    location: QuadrilateralJSON;
    rawData: string;
    symbolCount: number;
    symbology: string;
    structuredAppendData: StructuredAppendDataJSON | null;
}

export { Barcode, type BarcodeJSON, Checksum, CompositeFlag, CompositeType, type PrivateCompositeTypeDescription, Symbology };
