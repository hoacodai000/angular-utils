
/**
 * “The Memory Leak”
 * @example
 * https://medium.com/angular-in-depth/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0
 * origin: https://github.com/wardbell/subsink/blob/master/src/subsink.ts
 */
const isFunction = (fn: any) => typeof fn === 'function';

export interface SubscriptionLike {
  unsubscribe(): void;
}

/**
 * Subscription sink that holds Observable subscriptions
 * until you call unsubscribe on it in ngOnDestroy.
 */
export class SubSink {
  protected _subs: SubscriptionLike[] = [];

  /**
   * Subscription sink that holds Observable subscriptions
   * until you call unsubscribe on it in ngOnDestroy.
   *
   * @example
   * In Angular:
   * ```
   *  private subs: SubSink = new SubSink();
   *  ...
   *  this.subs.sink = observable$.subscribe(
   *  this.subs.add(observable$.subscribe(...));
   *  ...
   *  ngOnDestroy() {
   *    this.subs.unsubscribe();
   *  }
   * ```
   */
  constructor() { }

  /**
   * Add subscriptions to the tracked subscriptions
   * @example
   *  this.subs.add(observable$.subscribe(...));
   */
  public add(...subscriptions: SubscriptionLike[]): void {
    this._subs = this._subs.concat(subscriptions);
  }

  /**
   * Assign subscription to this sink to add it to the tracked subscriptions
   * @example
   *  this.subs.sink = observable$.subscribe(...);
   */
  set sink(subscription: SubscriptionLike) {
    this._subs.push(subscription);
  }

  /**
   * Unsubscribe to all subscriptions in ngOnDestroy()
   * @example
   *  ngOnDestroy() {
   *    this.subs.unsubscribe();
   *  }
   */
  public unsubscribe(): void {
    this._subs.forEach(sub => sub && isFunction(sub.unsubscribe) && sub.unsubscribe());
    this._subs = [];
  }
}