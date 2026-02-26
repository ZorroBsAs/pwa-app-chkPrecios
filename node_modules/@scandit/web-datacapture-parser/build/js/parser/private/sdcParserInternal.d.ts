import { ParserIssueAdditionalInfoKeyDjinni } from './sdcParserCommon.js';

interface ParsedFieldInterface {
    getName(): string;
    getJsonData(): string;
    getStringValue(): string;
    getIssues(): string[];
    getWarnings(): ParserIssueInterface[];
}
interface ParsedDataInterface {
    getJsonData(): string;
    getFields(): ParsedFieldInterface[];
}
interface ParserIssueRecord {
    message: string;
    code?: number;
    additionalInfo?: Map<ParserIssueAdditionalInfoKeyDjinni, string>;
}
interface ParserIssueInterface {
    getMessage(): string;
    getCode(): number;
    getAdditionalInfo(): Map<ParserIssueAdditionalInfoKeyDjinni, string>;
    toRecord(): ParserIssueRecord;
}
interface SdcParserInternal_statics {
}

export type { ParsedDataInterface, ParsedFieldInterface, ParserIssueInterface, ParserIssueRecord, SdcParserInternal_statics };
