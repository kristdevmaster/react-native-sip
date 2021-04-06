function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * This describes account configuration and registration status
 */
export default class Account {
  constructor() {
    _defineProperty(this, "_data", void 0);

    _defineProperty(this, "_registration", void 0);
  }

}
export {};
//# sourceMappingURL=Account.d.js.map