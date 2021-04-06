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
  constructor(props) {
    _defineProperty(this, "_status", void 0);

    _defineProperty(this, "_statusText", void 0);

    _defineProperty(this, "_active", void 0);

    _defineProperty(this, "_reason", void 0);

    const {
      status,
      statusText,
      active,
      reason
    } = props;
    this._status = status;
    this._statusText = statusText;
    this._active = active;
    this._reason = reason;
  }
  /**
   * Last registration status code (SIP status codes according to RFC 3261).
   * If status code is empty, the account is currently not registered.
   * Any other value indicates the SIP
   * status code of the registration.
   *
   * @returns {string|null}
   */


  getStatus() {
    return this._status;
  }
  /**
   * String describing the registration status.
   *
   * @returns {string|null}
   */


  getStatusText() {
    return this._statusText;
  }
  /**
   * Flag to tell whether this account is currently registered
   * (has active registration session).
   *
   * @returns boolean
   */


  isActive() {
    return this._active;
  }
  /**
   * Reason phrase received.
   *
   * @returns {String|null}
   */


  getReason() {
    return this._reason;
  }

  toJson() {
    return {
      status: this._status,
      statusText: this._statusText,
      active: this._active,
      reason: this._reason
    };
  }

}

exports.default = AccountRegistration;
//# sourceMappingURL=AccountRegistration.js.map