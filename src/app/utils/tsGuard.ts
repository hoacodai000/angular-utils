export class TSGuard {
  /**
   * Handle type of a value.
   * 
   * @example
   * In Angular:
   * ```
   *  import { TSGuard } from './utils/tsGuard';
   *  ...
   *  TSGuard.isNumber(...);
   *  TSGuard.isString(...);
   *  TSGuard.isObject(...);
   *  TSGuard.isStructure(...);
   *  TSGuard.checkType(...);
   *  TSGuard.isEmpty(...);
   *  ...
   * ```
   */

  public static isNumber(vals: number | any): vals is number {
    return (typeof vals === 'number');
  }

  public static isString(vals: string | any): vals is string {
    return (typeof vals === 'string');
  }

  public static isObject(vals: object | any): vals is object {
    return (typeof vals === 'object');
  }

  public static isStructure<T>(vals: any | { [key: string]: any }, matcher: T): vals is T {
    for (let key in matcher) {
      if (typeof vals[key] !== typeof matcher[key]) {
        return false;
      }
    }
    return true;
  }

  // return type: "Null", "Undefined", "Object", "Array", "Number", "Boolean", "String", "Function", "RegExp"
  public static checkType(vals: any): string {
    return (
      vals === null
        ? 'Null'
        : vals === undefined
          ? 'Undefined'
          : Object.prototype.toString.call(vals).slice(8, -1)
    );
  }

  public static isEmpty(value: any): boolean {
    // (value == null) check null or undefined.
    return (
      // Null
      (value === null) ||
      // Undefined
      (value === undefined) ||
      // Check if a Set() or Map() is empty.
      (value.size === 0) ||
      // NaN - The only JavaScript value that is unequal to itself.
      (value !== value) ||
      // Length is zero && it's not a function.
      (value.length === 0 && typeof value !== 'function') ||
      // Is an Object && has no keys.
      (value.constructor === Object && Object.keys(value).length === 0)
    );
  }
}