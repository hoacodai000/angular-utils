import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Util {
  constructor() { }

  /**
   * getAllStringValueOfEnum(...)
   * @param enum
   * @returns {string[]}
   */
  public static getAllStringValueOfEnum<T>(t: T): string[] {
    return Object.keys(t).map((key) => t[key]).filter((value: string | number) => typeof value === 'string');
  }

  /**
   * valueToBoolean(...)
   * @param value
   * @returns {boolean | undefined}
   */
  public static valueToBoolean(value: any): boolean | undefined {
    const collection: { [k: string]: boolean } = {
      'true': true,
      'yes': true,
      '1': true,
      'false': false,
      'no': false,
      '0': false
    };
    return collection[value];
  }

  /**
   * titleCase(...)
   * @param str
   * @returns {string}
   */
  public static titleCase(str: string): string {
    if (!str) return '';
    return str.replace(/\w\S*/g, (txt: string) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }

  /**
   * abbreviate(...)
   * @param str
   * @returns {string}
   */
  public static abbreviate(str: string, abbrLettersCount: number = 1): string {
    if (!str) return '';
    const words: string[] = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2').split(' ');
    return words.reduce((res, word) => {
      res += word.substr(0, abbrLettersCount);
      return res;
    }, '');
  }
}