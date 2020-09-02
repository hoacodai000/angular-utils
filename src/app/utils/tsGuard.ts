export class TSGuard {
  /**
   * Handle type of a value.
   * 
   * @example
   * In Angular:
   * ```
   *  private tsGuard: TSGuard = new TSGuard();
   *  ...
   *  this.tsGuard.isNumber(...);
   *  this.tsGuard.isString(...);
   *  this.tsGuard.isObject(...);
   *  this.tsGuard.isStructure(...);
   *  this.tsGuard.checkType(...);
   *  this.tsGuard.isEmpty(...);
   *  ...
   * ```
   */
  constructor() { }

  isNumber(vals: number | any): vals is number {
    return (typeof vals === 'number');
  }

  isString(vals: string | any): vals is string {
    return (typeof vals === 'string');
  }

  isObject(vals: object | any): vals is object {
    return (typeof vals === 'object');
  }

  isStructure<T>(vals: any | { [key: string]: any }, matcher: T): vals is T {
    for (let key in matcher) {
      if (typeof vals[key] !== typeof matcher[key]) {
        return false;
      }
    }
    return true;
  }

  // return type: "Null", "Undefined", "Object", "Array", "Number", "Boolean", "String", "Function", "RegExp"
  checkType(vals: any): string {
    return (
      vals === null
        ? 'Null'
        : vals === undefined
          ? 'Undefined'
          : Object.prototype.toString.call(vals).slice(8, -1)
    );
  }

  isEmpty(value: any): boolean {
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