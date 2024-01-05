// Copyright (c) Tribufu. All Rights Reserved.

import { RawStringMap, StringMap } from "../collections/string_map";

/**
 * Http Cookie Map
 *
 * Helper type to represent HTTP cookies.
 */
export type HttpCookieMap = RawStringMap<string>;

/**
 * Http Cookies
 *
 * Helper class to manage HTTP cookies.
 */
export class HttpCookies extends StringMap<string> {
}
