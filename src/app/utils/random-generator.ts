export class RandomGenerator {
  /**
   * Handle clone value.
   * 
   * @example
   * In Angular:
   * ```
   *  import { RandomGenerator } from './utils/random-generator';
   *  ...
   *  RandomGenerator.uuid4(...);
   *  ...
   * ```
   */
  public static uuid4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}