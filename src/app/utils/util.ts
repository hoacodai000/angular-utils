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
    return Object.keys(t).map((key) => t[key]).filter((val: string | number) => typeof val === 'string');
  }
}