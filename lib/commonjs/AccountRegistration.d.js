"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Account registration information. Application can query the registration info
 * by calling account.getRegistration().
 */
class AccountRegistration {
  constructor() {
    _defineProperty(this, "_status", void 0);

    _defineProperty(this, "_statusText", void 0);

    _defineProperty(this, "_active", void 0);

    _defineProperty(this, "_reason", void 0);
  }

}

exports.default = AccountRegistration;
//# sourceMappingURL=AccountRegistration.d.js.map