/// <reference types="node" />
import { EventEmitter } from "events";
import Account, { AccountConstructor } from "./Account";
import Call, { CallConstructor } from "./Call";
interface createAccountConfiguration {
    name: string;
    username: string;
    domain: string;
    password: string;
    proxy: string;
    transport: string;
    regServer: string;
    regTimeout: number;
}
interface PjSipCallSetttings {
    /**
     *
     * Bitmask of #pjsua_call_flag constants.
     * @type {number}
     * @memberof PjSipCallSetttings
     */
    flag: number;
    /**
     *
     * This flag controls what methods to request keyframe are allowed on the call.
     * @type {number}
     * @memberof PjSipCallSetttings
     */
    req_keyfram_method: number;
    /**
     *
     * Number of simultaneous active audio streams for this call. Setting this to zero will disable audio in this call.
     * @type {number}
     * @memberof PjSipCallSetttings
     */
    aud_cnt: number;
    /**
     *
     * Number of simultaneous active video streams for this call. Setting this to zero will disable video in this call.
     * @type {number}
     * @memberof PjSipCallSetttings
     */
    vid_cnt: number;
}
interface PjSipMsgData {
    /**
     *
     * Indicates whether the Courage component is present.
     * @type {string}
     * @memberof PjSipMsgData
     */
    target_uri: string;
    /**
     *
     * Additional message headers as linked list.
     * @type {*}
     * @memberof PjSipMsgData
     */
    hdr_list: {
        [key: string]: string | number;
    };
    /**
     *
     * MIME type of optional message body.
     * @type {string}
     * @memberof PjSipMsgData
     */
    content_type: string;
    /**
     *
     * MIME type of optional message body.
     * @type {string}
     * @memberof PjSipMsgData
     */
    msg_body: string;
}
declare type OrientationType = "PJMEDIA_ORIENT_UNKNOWN" | "PJMEDIA_ORIENT_ROTATE_90DEG" | "PJMEDIA_ORIENT_ROTATE_270DEG" | "PJMEDIA_ORIENT_ROTATE_180DEG" | "PJMEDIA_ORIENT_NATURAL";
export default class Endpoint extends EventEmitter {
    constructor();
    /**
     * Returns a Promise that will be resolved once PjSip module is initialized.
     * Do not call any function while library is not initialized.
     *
     * @returns {Promise}
     */
    start(configuration: any): Promise<unknown>;
    stop(): Promise<unknown>;
    updateStunServers(accountId: number, stunServerList: any): Promise<unknown>;
    /**
     * @param configuration
     * @returns {Promise}
     */
    changeNetworkConfiguration(configuration: any): Promise<unknown>;
    /**
     * @param configuration
     * @returns {Promise}
     */
    changeServiceConfiguration(configuration: any): Promise<unknown>;
    /**
     * Add a new account. If registration is configured for this account, this function would also start the
     * SIP registration session with the SIP registrar server. This SIP registration session will be maintained
     * internally by the library, and application doesn't need to do anything to maintain the registration session.
     *
     * An example configuration:
     * {
     *   name: "John Doe",
     *   username: "100",
     *   domain: "pbx.com",
     *   password: "XXXXXX",
     *
     *   proxy: "192.168.100.1:5060", // default disabled.
     *   transport: "TCP", // default TCP
     *   regServer: "pbx.com", // default taken from domain
     *   regTimeout: 300, // default 300
     * }
     *
     * @param {Object} configuration
     * @returns {Promise}
     */
    createAccount(configuration: createAccountConfiguration): Promise<unknown>;
    /**
     * Update registration or perform unregistration.
     * If registration is configured for this account, then initial SIP REGISTER will be sent when the account is added.
     * Application normally only need to call this function if it wants to manually update the registration or to unregister from the server.
     *
     * @param {Account} account
     * @param bool renew If renew argument is zero, this will start unregistration process.
     * @returns {Promise}
     */
    registerAccount(account: Account, renew?: boolean): Promise<unknown>;
    /**
     * Delete an account. This will unregister the account from the SIP server, if necessary, and terminate server side presence subscriptions associated with this account.
     *
     * @param {Account} account
     * @returns {Promise}
     */
    deleteAccount(account: Account): Promise<unknown>;
    /**
     * Make an outgoing call to the specified URI.
     * Available call settings:
     * - audioCount - Number of simultaneous active audio streams for this call. Setting this to zero will disable audio in this call.
     * - videoCount - Number of simultaneous active video streams for this call. Setting this to zero will disable video in this call.
     * -
     *
     * @param account {Account}
     * @param destination {String} Destination SIP URI.
     * @param callSettings {PjSipCallSetttings} Outgoing call settings.
     * @param msgSettings {PjSipMsgData} Outgoing call additional information to be sent with outgoing SIP message.
     */
    makeCall(account: Account, destination: string, callSettings: PjSipCallSetttings, msgData: PjSipMsgData): Promise<unknown>;
    /**
     * Send message to the specified URI.
     * -
     *
     * @param account {Account}
     * @param destination {String} Destination SIP URI.
     * @param msg {String} Message.
     */
    sendMessage(account: Account, destination: string, msg: string): Promise<unknown>;
    imTyping(account: Account, destination: string, isTyping: boolean): Promise<unknown>;
    /**
     * Send response to incoming INVITE request.
     *
     * @param call {Call} Call instance
     * @returns {Promise}
     */
    answerCall(call: Call): Promise<unknown>;
    /**
     * Hangup call by using method that is appropriate according to the call state.
     *
     * @param call {Call} Call instance
     * @returns {Promise}
     */
    hangupCall(call: Call): Promise<unknown>;
    /**
     * Hangup call by using Decline (603) method.
     *
     * @param call {Call} Call instance
     * @returns {Promise}
     */
    declineCall(call: Call): Promise<unknown>;
    /**
     * Put the specified call on hold. This will send re-INVITE with the appropriate SDP to inform remote that the call is being put on hold.
     *
     * @param call {Call} Call instance
     * @returns {Promise}
     */
    holdCall(call: Call): Promise<unknown>;
    /**
     * Release the specified call from hold. This will send re-INVITE with the appropriate SDP to inform remote that the call is resumed.
     *
     * @param call {Call} Call instance
     * @returns {Promise}
     */
    unholdCall(call: Call): Promise<unknown>;
    /**
     * @param call {Call} Call instance
     * @returns {Promise}
     */
    muteCall(call: Call): Promise<unknown>;
    /**
     * @param call {Call} Call instance
     * @returns {Promise}
     */
    unMuteCall(call: Call): Promise<unknown>;
    /**
     * @param call {Call} Call instance
     * @returns {Promise}
     */
    useSpeaker(call: Call): Promise<unknown>;
    /**
     * @param call {Call} Call instance
     * @returns {Promise}
     */
    useEarpiece(call: Call): Promise<unknown>;
    /**
     * Initiate call transfer to the specified address.
     * This function will send REFER request to instruct remote call party to initiate a new INVITE session to the specified destination/target.
     *
     * @param account {Account} Account associated with call.
     * @param call {Call} The call to be transferred.
     * @param destination URI of new target to be contacted. The URI may be in name address or addr-spec format.
     * @returns {Promise}
     */
    xferCall(account: Account, call: Call, destination: string): Promise<unknown>;
    /**
     * Initiate attended call transfer.
     * This function will send REFER request to instruct remote call party to initiate new INVITE session to the URL of destCall.
     * The party at destCall then should "replace" the call with us with the new call from the REFER recipient.
     *
     * @param call {Call} The call to be transferred.
     * @param destCall {Call} The call to be transferred.
     * @returns {Promise}
     */
    xferReplacesCall(call: Call, destCall: Call): Promise<unknown>;
    /**
     * Redirect (forward) specified call to destination.
     * This function will send response to INVITE to instruct remote call party to redirect incoming call to the specified destination/target.
     *
     * @param account {Account} Account associated with call.
     * @param call {Call} The call to be transferred.
     * @param destination URI of new target to be contacted. The URI may be in name address or addr-spec format.
     * @returns {Promise}
     */
    redirectCall(account: Account, call: Call, destination: string): Promise<unknown>;
    /**
     * Send DTMF digits to remote using RFC 2833 payload formats.
     *
     * @param call {Call} Call instance
     * @param digits {String} DTMF string digits to be sent as described on RFC 2833 section 3.10.
     * @returns {Promise}
     */
    dtmfCall(call: Call, digits: string): Promise<unknown>;
    activateAudioSession(): Promise<unknown>;
    deactivateAudioSession(): Promise<unknown>;
    changeOrientation(orientation: OrientationType): void;
    changeCodecSettings(codecSettings: any): Promise<unknown>;
    /**
     * @fires Endpoint#connectivity_changed
     * @private
     * @param data {Object}
     */
    _onConnectivityChanged(data: AccountConstructor): void;
    /**
     * @fires Endpoint#gsm_changed
     * @private
     * @param data {Boolean}
     */
    _onGSMChanged(data: any): void;
    /**
     * @fires Endpoint#registration_changed
     * @private
     * @param data {Object}
     */
    _onRegistrationChanged(data: any): void;
    /**
     * @fires Endpoint#call_received
     * @private
     * @param data {Object}
     */
    _onCallReceived(data: CallConstructor): void;
    /**
     * @fires Endpoint#call_changed
     * @private
     * @param data {Object}
     */
    _onCallChanged(data: CallConstructor): void;
    /**
     * @fires Endpoint#call_terminated
     * @private
     * @param data {Object}
     */
    _onCallTerminated(data: CallConstructor): void;
    /**
     * @fires Endpoint#call_screen_locked
     * @private
     * @param lock bool
     */
    _onCallScreenLocked(lock: boolean): void;
    /**
     * @fires Endpoint#message_received
     * @private
     * @param data {Object}
     */
    _onMessageReceived(data: any): void;
    /**
     * Normalize Destination URI
     *
     * @param account
     * @param destination {string}
     * @returns {string}
     * @private
     */
    _normalize(account: Account, destination: string): string | null;
}
export {};
