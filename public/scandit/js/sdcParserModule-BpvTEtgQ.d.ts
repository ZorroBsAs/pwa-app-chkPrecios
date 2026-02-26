import { DataCaptureComponent } from 'scandit-web-datacapture-core';
import { ParserDataFormat } from './parser/ParserDataFormat.js';
import { ParsedDataInterface, ParserIssueInterface } from './parser/private/sdcParserInternal.js';

/**
  * Copyright 2021 Snap, Inc.
  * Copyright 2024 Scandit AG
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
interface ResultOutcome<T> {
    type: "result";
    result: T;
}
interface ErrorOutcome<E> {
    type: "error";
    error: E;
}
type ResultOrError<T, E> = ResultOutcome<T> | ErrorOutcome<E>;

interface ParserInterface {
    getIdentifier(): ResultOrError<string, string>;
    parseString(data: string): ResultOrError<ParsedDataInterface, ParserIssueInterface>;
    parseRawData(data: Uint8Array): ResultOrError<ParsedDataInterface, ParserIssueInterface>;
    parseStringToJson(data: string): ResultOrError<string, string>;
    parseRawDataToJson(data: Uint8Array): ResultOrError<string, string>;
    setOptions(options: string): ResultOrError<boolean, string>;
    asDataCaptureComponent(): ResultOrError<DataCaptureComponent, string>;
}
interface ParserInterface_statics {
    create(dataFormat: ParserDataFormat): ResultOrError<ParserInterface, string>;
}
interface SdcParserModule_statics {
    ParserInterface: ParserInterface_statics;
}

export type { ParserInterface as P, ResultOrError as R, SdcParserModule_statics as S, ParserInterface_statics as a };
