import { TSGuard } from './tsGuard';

export class Clone {
  /**
   * Handle clone value.
   * 
   * @example
   * In Angular:
   * ```
   *  private _clone: Clone = new Clone();
   *  ...
   *  this._clone.clone(...);
   *  ...
   * ```
   */
  constructor() { }
  private _cloneRegExp(pattern: RegExp): RegExp {
    return new RegExp(
      pattern.source,
      (pattern.global ? 'g' : '') +
      (pattern.ignoreCase ? 'i' : '') +
      (pattern.multiline ? 'm' : '') +
      (pattern.sticky ? 'y' : '') +
      (pattern.unicode ? 'u' : '')
    );
  }

  private _clone(value: any, refFrom: any[], refTo: any[], deep: boolean): any {
    const copy: (copiedValue: any) => any = (copiedValue: any): any => {
      const len = refFrom.length;
      let idx = 0;

      while (idx < len) {
        if (value === refFrom[idx]) {
          return refTo[idx];
        }
        idx += 1;
      }

      refFrom[idx + 1] = value;
      refTo[idx + 1] = copiedValue;

      for (const key in value) {
        copiedValue[key] = deep
          ? this._clone(value[key], refFrom, refTo, true)
          : value[key];
      }

      return copiedValue;
    }

    switch (new TSGuard().checkType(value)) {
      case 'Object':
        return copy({});
      case 'Array':
        return copy([]);
      case 'Date':
        return new Date(value.valueOf());
      case 'RegExp':
        return this._cloneRegExp(value);
      default:
        return value;
    }
  }

  clone<T extends any>(value: T): T {
    return (
      value != null && typeof value === 'function'
        ? value
        : this._clone(value, [], [], true)
    );
  }
}
