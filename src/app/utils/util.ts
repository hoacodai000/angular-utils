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
}