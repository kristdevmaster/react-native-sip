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
    _status: string | null;
    _statusText: string | null;
    _active: boolean;
    _reason: string | null;
    constructor(props: AccountRegistrationConstructor);
    /**
     * Last registration status code (SIP status codes according to RFC 3261).
     * If status code is empty, the account is currently not registered.
     * Any other value indicates the SIP
     * status code of the registration.
     *
     * @returns {string|null}
     */
    getStatus(): string | null;
    /**
     * String describing the registration status.
     *
     * @returns {string|null}
     */
    getStatusText(): string | null;
    /**
     * Flag to tell whether this account is currently registered
     * (has active registration session).
     *
     * @returns boolean
     */
    isActive(): boolean;
    /**
     * Reason phrase received.
     *
     * @returns {String|null}
     */
    getReason(): string | null;
    toJson(): {
        status: string | null;
        statusText: string | null;
        active: boolean;
        reason: string | null;
    };
}
