declare enum ParserIssueCode {
    NONE = 0,
    UNSPECIFIED = 2,
    MANDATORY_EPD_MISSING = 1000,
    INVALID_DATE = 1001,
    STRING_TOO_SHORT = 1002,
    WRONG_STARTING_CHARACTERS = 1003,
    INVALID_SEPARATION_BETWEEN_ELEMENTS = 1004,
    UNSUPPORTED_VERSION = 1005,
    INCOMPLETE_CODE = 1006,
    EMPTY_ELEMENT_CONTENT = 1007,
    INVALID_ELEMENT_LENGTH = 1008,
    TOO_LONG_ELEMENT = 1009,
    NON_EMPTY_ELEMENT_CONTENT = 1010,
    INVALID_CHARSET_IN_ELEMENT = 1011,
    TOO_MANY_ALT_PMT_FIELDS = 1012,
    CANNOT_CONTAIN_SPACES = 1013
}
interface ParserIssue {
    code: ParserIssueCode;
    message: string;
    additionalInfo: Record<ParserIssueCode, string>;
}
interface ParsedField {
    name: string;
    parsed?: any;
    rawString: string;
    warnings?: ParserIssue[];
}

export { type ParsedField, type ParserIssue, ParserIssueCode };
