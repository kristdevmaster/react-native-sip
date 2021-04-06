/**
 * Account registration information. Application can query the registration info
 * by calling account.getRegistration().
 */
export interface AccountRegistrationConstructor {
  status: string | null;
  statusText: string | null;
  active: boolean;
  reason: string | null;
}

export default class AccountRegistration {
  _status;

  _statusText;

  _active;

  _reason;

  constructor(props: AccountRegistrationConstructor) {
    const { status, statusText, active, reason } = props;

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
      reason: this._reason,
    };
  }
}
