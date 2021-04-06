import { EventEmitter } from 'react-native';

/**
 * Account registration information. Application can query the registration info
 * by calling account.getRegistration().
 */
interface AccountRegistrationConstructor {
  status: string | null;
  statusText: string | null;
  active: boolean;
  reason: string | null;
}
export class AccountRegistration {
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

/**
 * This describes account configuration and registration status
 */
interface AccountData {
  id: number;
  uri: string;
  name: string;
  username: string;
  domain: string;
  password: string;
  proxy: string;
  transport: string;
  contactParams: string;
  contactUriParams: string;
  regServer: string;
  regTimeout: string;
  regContactParams: string;
  regHeaders: any;
}
interface AccountConstructor extends AccountData {
  registration: any;
}
export class Account {
  _data: AccountData;

  _registration: AccountRegistration;

  constructor(data: AccountConstructor);

  /**
   * The account ID.
   * @returns {int}
   */
  getId(): number;

  /**
   * This is the URL to be put in the request URI for the registration,
   * and will look something like "sip:serviceprovider".
   * @returns {String}
   */
  getURI(): string;

  /**
   * Full name specified in Endpoint.createAccount().
   * @returns {String}
   */
  getName(): string;

  /**
   * Username specified in Endpoint.createAccount().
   * @returns {String}
   */
  getUsername(): string;

  /**
   * Domain specified in Endpoint.createAccount().
   * @returns {int|null}
   */
  getDomain(): string;

  /**
   * Password specified in Endpoint.createAccount().
   * @returns {String}
   */
  getPassword(): string;

  /**
   * Proxy specified in Endpoint.createAccount().
   * @returns {String}
   */
  getProxy(): string;

  /**
   * Transport specified in Endpoint.createAccount().
   * @returns {String}
   */
  getTransport(): string;

  /**
   * Additional parameters that will be appended in the Contact header
   * for this account.
   * @returns {String}
   */
  getContactParams(): string;

  /**
   * Additional URI parameters that will be appended in the Contact URI
   * for this account.
   * @returns {String}
   */
  getContactUriParams(): string;

  /**
   * Port specified in Endpoint.createAccount().
   * @returns {String}
   */
  getRegServer(): string;

  /**
   * Port specified in Endpoint.createAccount().
   * @returns {String}
   */
  getRegTimeout(): string;

  /**
   * @returns {String}
   */
  getRegContactParams(): string;

  /**
   * @returns {Object}
   */
  getRegHeaders(): any;

  /**
   * Account registration status.
   * @returns {AccountRegistration}
   */
  getRegistration(): AccountRegistration;
}

/**
 * This class describes the information and current status of a call.
 */
export declare type CallStates =
  | 'PJSIP_INV_STATE_NULL'
  | 'PJSIP_INV_STATE_CALLING'
  | 'PJSIP_INV_STATE_INCOMING'
  | 'PJSIP_INV_STATE_EARLY'
  | 'PJSIP_INV_STATE_CONNECTING'
  | 'PJSIP_INV_STATE_CONFIRMED'
  | 'PJSIP_INV_STATE_DISCONNECTED';
export declare type CallStateText =
  | 'NULL'
  | 'CALLING'
  | 'INCOMING'
  | 'EARLY'
  | 'CONNECTING'
  | 'CONFIRMED'
  | 'DISCONNECTED';
export interface CallConstructor {
  id: number;
  callId: number;
  accountId: number;
  localContact: string;
  localUri: string;
  remoteContact: string;
  remoteUri: string;
  state: CallStates;
  stateText: CallStateText;
  held: boolean;
  muted: boolean;
  speaker: boolean;
  connectDuration: number;
  totalDuration: number;
  remoteOfferer: boolean;
  remoteAudioCount: number;
  remoteVideoCount: number;
  audioCount: number;
  videoCount: number;
  lastStatusCode: any;
  lastReason: any;
  media: any;
  provisionalMedia: any;
}
export class Call {
  _id: number;

  _callId: number;

  _accountId: number;

  _localContact: string;

  _localUri: string;

  _remoteContact: string;

  _remoteUri: string;

  _state:
    | 'PJSIP_INV_STATE_NULL'
    | 'PJSIP_INV_STATE_CALLING'
    | 'PJSIP_INV_STATE_INCOMING'
    | 'PJSIP_INV_STATE_EARLY'
    | 'PJSIP_INV_STATE_CONNECTING'
    | 'PJSIP_INV_STATE_CONFIRMED'
    | 'PJSIP_INV_STATE_DISCONNECTED';

  _stateText: string;

  _held: boolean;

  _muted: boolean;

  _speaker: boolean;

  _connectDuration: number;

  _totalDuration: number;

  _remoteOfferer: boolean;

  _remoteAudioCount: number;

  _remoteVideoCount: number;

  _remoteNumber: string | null;

  _remoteName: string | null;

  _audioCount: number;

  _videoCount: number;

  _lastStatusCode:
    | 'PJSIP_SC_TRYING'
    | 100
    | 'PJSIP_SC_RINGING'
    | 180
    | 'PJSIP_SC_CALL_BEING_FORWARDED'
    | 181
    | 'PJSIP_SC_QUEUED'
    | 182
    | 'PJSIP_SC_PROGRESS'
    | 183
    | 'PJSIP_SC_OK'
    | 200
    | 'PJSIP_SC_ACCEPTED'
    | 202
    | 'PJSIP_SC_MULTIPLE_CHOICES'
    | 300
    | 'PJSIP_SC_MOVED_PERMANENTLY'
    | 301
    | 'PJSIP_SC_MOVED_TEMPORARILY'
    | 302
    | 'PJSIP_SC_USE_PROXY'
    | 305
    | 'PJSIP_SC_ALTERNATIVE_SERVICE'
    | 380
    | 'PJSIP_SC_BAD_REQUEST'
    | 400
    | 'PJSIP_SC_UNAUTHORIZED'
    | 401
    | 'PJSIP_SC_PAYMENT_REQUIRED'
    | 402
    | 'PJSIP_SC_FORBIDDEN'
    | 403
    | 'PJSIP_SC_NOT_FOUND'
    | 404
    | 'PJSIP_SC_METHOD_NOT_ALLOWED'
    | 405
    | 'PJSIP_SC_NOT_ACCEPTABLE'
    | 406
    | 'PJSIP_SC_PROXY_AUTHENTICATION_REQUIRED'
    | 407
    | 'PJSIP_SC_REQUEST_TIMEOUT'
    | 408
    | 'PJSIP_SC_GONE'
    | 410
    | 'PJSIP_SC_REQUEST_ENTITY_TOO_LARGE'
    | 413
    | 'PJSIP_SC_REQUEST_URI_TOO_LONG'
    | 414
    | 'PJSIP_SC_UNSUPPORTED_MEDIA_TYPE'
    | 415
    | 'PJSIP_SC_UNSUPPORTED_URI_SCHEME'
    | 416
    | 'PJSIP_SC_BAD_EXTENSION'
    | 420
    | 'PJSIP_SC_EXTENSION_REQUIRED'
    | 421
    | 'PJSIP_SC_SESSION_TIMER_TOO_SMALL'
    | 422
    | 'PJSIP_SC_INTERVAL_TOO_BRIEF'
    | 423
    | 'PJSIP_SC_TEMPORARILY_UNAVAILABLE'
    | 480
    | 'PJSIP_SC_CALL_TSX_DOES_NOT_EXIST'
    | 481
    | 'PJSIP_SC_LOOP_DETECTED'
    | 482
    | 'PJSIP_SC_TOO_MANY_HOPS'
    | 483
    | 'PJSIP_SC_ADDRESS_INCOMPLETE'
    | 484
    | 'PJSIP_AC_AMBIGUOUS'
    | 485
    | 'PJSIP_SC_BUSY_HERE'
    | 486
    | 'PJSIP_SC_REQUEST_TERMINATED'
    | 487
    | 'PJSIP_SC_NOT_ACCEPTABLE_HERE'
    | 488
    | 'PJSIP_SC_BAD_EVENT'
    | 489
    | 'PJSIP_SC_REQUEST_UPDATED'
    | 490
    | 'PJSIP_SC_REQUEST_PENDING'
    | 491
    | 'PJSIP_SC_UNDECIPHERABLE'
    | 493
    | 'PJSIP_SC_INTERNAL_SERVER_ERROR'
    | 500
    | 'PJSIP_SC_NOT_IMPLEMENTED'
    | 501
    | 'PJSIP_SC_BAD_GATEWAY'
    | 502
    | 'PJSIP_SC_SERVICE_UNAVAILABLE'
    | 503
    | 'PJSIP_SC_SERVER_TIMEOUT'
    | 504
    | 'PJSIP_SC_VERSION_NOT_SUPPORTED'
    | 505
    | 'PJSIP_SC_MESSAGE_TOO_LARGE'
    | 513
    | 'PJSIP_SC_PRECONDITION_FAILURE'
    | 580
    | 'PJSIP_SC_BUSY_EVERYWHERE'
    | 600
    | 'PJSIP_SC_DECLINE'
    | 603
    | 'PJSIP_SC_DOES_NOT_EXIST_ANYWHERE'
    | 604
    | 'PJSIP_SC_NOT_ACCEPTABLE_ANYWHERE'
    | 606
    | 'PJSIP_SC_TSX_TIMEOUT'
    | 'PJSIP_SC_REQUEST_TIMEOUT'
    | 'PJSIP_SC_TSX_TRANSPORT_ERROR'
    | 'PJSIP_SC_SERVICE_UNAVAILABLE';

  _lastReason: string;

  _media: any;

  _provisionalMedia: any;

  _constructionTime: number;

  constructor(params: {
    id: number;
    callId: number;
    accountId: number;
    localContact: string;
    localUri: string;
    remoteContact: string;
    remoteUri: string;
    state: any;
    stateText: any;
    held: boolean;
    muted: boolean;
    speaker: boolean;
    connectDuration: number;
    totalDuration: number;
    remoteOfferer: boolean;
    remoteAudioCount: number;
    remoteVideoCount: number;
    audioCount: number;
    videoCount: number;
    lastStatusCode: any;
    lastReason: any;
    media: any;
    provisionalMedia: any;
  });

  /**
   * Call identification.
   * @returns {int}
   */
  getId(): number;

  /**
   * The account ID where this call belongs.
   * @returns {int}
   */
  getAccountId(): number;

  /**
   * Dialog Call-ID string.
   *
   * @returns {String}
   */
  getCallId(): number;

  /**
   * Up-to-date call duration in seconds.
   * Use local time to calculate actual call duration.
   *
   * @public
   * @returns {int}
   */
  getTotalDuration(): number;

  /**
   * Up-to-date call connected duration (zero when call is not established)
   *
   * @returns {int}
   */
  getConnectDuration(): number;

  /**
   * Call duration in "MM:SS" format.
   *
   * @public
   * @returns {string}
   */
  getFormattedTotalDuration(): string;

  /**
   * Call duration in "MM:SS" format.
   *
   * @public
   * @returns {string}
   */
  getFormattedConnectDuration(): string;

  /**
   * Local Contact.
   * TODO: Provide example
   * @returns {String}
   */
  getLocalContact(): string;

  /**
   * Local URI.
   * TODO: Provide example
   * @returns {String}
   */
  getLocalUri(): string;

  /**
   * Remote contact.
   * TODO: Provide example
   * @returns {String}
   */
  getRemoteContact(): string;

  /**
   * Remote URI.
   * TODO: Provide example
   * @returns {String}
   */
  getRemoteUri(): string;

  /**
   * Callee name. Could be null if no name specified in URI.
   * @returns {String}
   */
  getRemoteName(): string | null;

  /**
   * Callee number
   * @returns {String}
   */
  getRemoteNumber(): string | null;

  /**
   * @returns {String}
   */
  getRemoteFormattedNumber(): string;

  /**
   * Invite session state.
   *
   * PJSIP_INV_STATE_NULL           Before INVITE is sent or received
   * PJSIP_INV_STATE_CALLING        After INVITE is sent
   * PJSIP_INV_STATE_INCOMING       After INVITE is received.
   * PJSIP_INV_STATE_EARLY          After response with To tag.
   * PJSIP_INV_STATE_CONNECTING     After 2xx is sent/received.
   * PJSIP_INV_STATE_CONFIRMED      After ACK is sent/received.
   * PJSIP_INV_STATE_DISCONNECTED   Session is terminated.
   *
   * @returns {String}
   */
  getState():
    | 'PJSIP_INV_STATE_NULL'
    | 'PJSIP_INV_STATE_CALLING'
    | 'PJSIP_INV_STATE_INCOMING'
    | 'PJSIP_INV_STATE_EARLY'
    | 'PJSIP_INV_STATE_CONNECTING'
    | 'PJSIP_INV_STATE_CONFIRMED'
    | 'PJSIP_INV_STATE_DISCONNECTED';

  /**
   * Text describing the state.
   *
   * @returns {String}
   */
  getStateText(): string;

  isHeld(): boolean;

  isMuted(): boolean;

  isSpeaker(): boolean;

  isTerminated(): boolean;

  /**
   * Flag if remote was SDP offerer
   * @returns {boolean}
   */
  getRemoteOfferer(): boolean;

  /**
   * Number of audio streams offered by remote.
   * @returns {int}
   */
  getRemoteAudioCount(): number;

  /**
   * Number of video streams offered by remote.
   * @returns {int}
   */
  getRemoteVideoCount(): number;

  /**
   * Number of simultaneous active audio streams for this call.
   * If zero - audio is disabled in this call.
   * @returns {int}
   */
  getAudioCount(): number;

  /**
   * Number of simultaneous active video streams for this call.
   * If zero - video is disabled in this call.
   * @returns {*}
   */
  getVideoCount(): number;

  /**
   * Last status code heard, which can be used as cause code.
   * Possible values:
   * - PJSIP_SC_TRYING / 100
   * - PJSIP_SC_RINGING / 180
   * - PJSIP_SC_CALL_BEING_FORWARDED / 181
   * - PJSIP_SC_QUEUED / 182
   * - PJSIP_SC_PROGRESS / 183
   * - PJSIP_SC_OK / 200
   * - PJSIP_SC_ACCEPTED / 202
   * - PJSIP_SC_MULTIPLE_CHOICES / 300
   * - PJSIP_SC_MOVED_PERMANENTLY / 301
   * - PJSIP_SC_MOVED_TEMPORARILY / 302
   * - PJSIP_SC_USE_PROXY / 305
   * - PJSIP_SC_ALTERNATIVE_SERVICE / 380
   * - PJSIP_SC_BAD_REQUEST / 400
   * - PJSIP_SC_UNAUTHORIZED / 401
   * - PJSIP_SC_PAYMENT_REQUIRED / 402
   * - PJSIP_SC_FORBIDDEN / 403
   * - PJSIP_SC_NOT_FOUND / 404
   * - PJSIP_SC_METHOD_NOT_ALLOWED / 405
   * - PJSIP_SC_NOT_ACCEPTABLE / 406
   * - PJSIP_SC_PROXY_AUTHENTICATION_REQUIRED / 407
   * - PJSIP_SC_REQUEST_TIMEOUT / 408
   * - PJSIP_SC_GONE / 410
   * - PJSIP_SC_REQUEST_ENTITY_TOO_LARGE / 413
   * - PJSIP_SC_REQUEST_URI_TOO_LONG / 414
   * - PJSIP_SC_UNSUPPORTED_MEDIA_TYPE / 415
   * - PJSIP_SC_UNSUPPORTED_URI_SCHEME / 416
   * - PJSIP_SC_BAD_EXTENSION / 420
   * - PJSIP_SC_EXTENSION_REQUIRED / 421
   * - PJSIP_SC_SESSION_TIMER_TOO_SMALL / 422
   * - PJSIP_SC_INTERVAL_TOO_BRIEF / 423
   * - PJSIP_SC_TEMPORARILY_UNAVAILABLE / 480
   * - PJSIP_SC_CALL_TSX_DOES_NOT_EXIST / 481
   * - PJSIP_SC_LOOP_DETECTED / 482
   * - PJSIP_SC_TOO_MANY_HOPS / 483
   * - PJSIP_SC_ADDRESS_INCOMPLETE / 484
   * - PJSIP_AC_AMBIGUOUS / 485
   * - PJSIP_SC_BUSY_HERE / 486
   * - PJSIP_SC_REQUEST_TERMINATED / 487
   * - PJSIP_SC_NOT_ACCEPTABLE_HERE / 488
   * - PJSIP_SC_BAD_EVENT / 489
   * - PJSIP_SC_REQUEST_UPDATED / 490
   * - PJSIP_SC_REQUEST_PENDING / 491
   * - PJSIP_SC_UNDECIPHERABLE / 493
   * - PJSIP_SC_INTERNAL_SERVER_ERROR / 500
   * - PJSIP_SC_NOT_IMPLEMENTED / 501
   * - PJSIP_SC_BAD_GATEWAY / 502
   * - PJSIP_SC_SERVICE_UNAVAILABLE / 503
   * - PJSIP_SC_SERVER_TIMEOUT / 504
   * - PJSIP_SC_VERSION_NOT_SUPPORTED / 505
   * - PJSIP_SC_MESSAGE_TOO_LARGE / 513
   * - PJSIP_SC_PRECONDITION_FAILURE / 580
   * - PJSIP_SC_BUSY_EVERYWHERE / 600
   * - PJSIP_SC_DECLINE / 603
   * - PJSIP_SC_DOES_NOT_EXIST_ANYWHERE / 604
   * - PJSIP_SC_NOT_ACCEPTABLE_ANYWHERE / 606
   * - PJSIP_SC_TSX_TIMEOUT / PJSIP_SC_REQUEST_TIMEOUT
   * - PJSIP_SC_TSX_TRANSPORT_ERROR / PJSIP_SC_SERVICE_UNAVAILABLE
   *
   * @returns {string}
   */
  getLastStatusCode():
    | 'PJSIP_SC_TRYING'
    | 100
    | 'PJSIP_SC_RINGING'
    | 180
    | 'PJSIP_SC_CALL_BEING_FORWARDED'
    | 181
    | 'PJSIP_SC_QUEUED'
    | 182
    | 'PJSIP_SC_PROGRESS'
    | 183
    | 'PJSIP_SC_OK'
    | 200
    | 'PJSIP_SC_ACCEPTED'
    | 202
    | 'PJSIP_SC_MULTIPLE_CHOICES'
    | 300
    | 'PJSIP_SC_MOVED_PERMANENTLY'
    | 301
    | 'PJSIP_SC_MOVED_TEMPORARILY'
    | 302
    | 'PJSIP_SC_USE_PROXY'
    | 305
    | 'PJSIP_SC_ALTERNATIVE_SERVICE'
    | 380
    | 'PJSIP_SC_BAD_REQUEST'
    | 400
    | 'PJSIP_SC_UNAUTHORIZED'
    | 401
    | 'PJSIP_SC_PAYMENT_REQUIRED'
    | 402
    | 'PJSIP_SC_FORBIDDEN'
    | 403
    | 'PJSIP_SC_NOT_FOUND'
    | 404
    | 'PJSIP_SC_METHOD_NOT_ALLOWED'
    | 405
    | 'PJSIP_SC_NOT_ACCEPTABLE'
    | 406
    | 'PJSIP_SC_PROXY_AUTHENTICATION_REQUIRED'
    | 407
    | 'PJSIP_SC_REQUEST_TIMEOUT'
    | 408
    | 'PJSIP_SC_GONE'
    | 410
    | 'PJSIP_SC_REQUEST_ENTITY_TOO_LARGE'
    | 413
    | 'PJSIP_SC_REQUEST_URI_TOO_LONG'
    | 414
    | 'PJSIP_SC_UNSUPPORTED_MEDIA_TYPE'
    | 415
    | 'PJSIP_SC_UNSUPPORTED_URI_SCHEME'
    | 416
    | 'PJSIP_SC_BAD_EXTENSION'
    | 420
    | 'PJSIP_SC_EXTENSION_REQUIRED'
    | 421
    | 'PJSIP_SC_SESSION_TIMER_TOO_SMALL'
    | 422
    | 'PJSIP_SC_INTERVAL_TOO_BRIEF'
    | 423
    | 'PJSIP_SC_TEMPORARILY_UNAVAILABLE'
    | 480
    | 'PJSIP_SC_CALL_TSX_DOES_NOT_EXIST'
    | 481
    | 'PJSIP_SC_LOOP_DETECTED'
    | 482
    | 'PJSIP_SC_TOO_MANY_HOPS'
    | 483
    | 'PJSIP_SC_ADDRESS_INCOMPLETE'
    | 484
    | 'PJSIP_AC_AMBIGUOUS'
    | 485
    | 'PJSIP_SC_BUSY_HERE'
    | 486
    | 'PJSIP_SC_REQUEST_TERMINATED'
    | 487
    | 'PJSIP_SC_NOT_ACCEPTABLE_HERE'
    | 488
    | 'PJSIP_SC_BAD_EVENT'
    | 489
    | 'PJSIP_SC_REQUEST_UPDATED'
    | 490
    | 'PJSIP_SC_REQUEST_PENDING'
    | 491
    | 'PJSIP_SC_UNDECIPHERABLE'
    | 493
    | 'PJSIP_SC_INTERNAL_SERVER_ERROR'
    | 500
    | 'PJSIP_SC_NOT_IMPLEMENTED'
    | 501
    | 'PJSIP_SC_BAD_GATEWAY'
    | 502
    | 'PJSIP_SC_SERVICE_UNAVAILABLE'
    | 503
    | 'PJSIP_SC_SERVER_TIMEOUT'
    | 504
    | 'PJSIP_SC_VERSION_NOT_SUPPORTED'
    | 505
    | 'PJSIP_SC_MESSAGE_TOO_LARGE'
    | 513
    | 'PJSIP_SC_PRECONDITION_FAILURE'
    | 580
    | 'PJSIP_SC_BUSY_EVERYWHERE'
    | 600
    | 'PJSIP_SC_DECLINE'
    | 603
    | 'PJSIP_SC_DOES_NOT_EXIST_ANYWHERE'
    | 604
    | 'PJSIP_SC_NOT_ACCEPTABLE_ANYWHERE'
    | 606
    | 'PJSIP_SC_TSX_TIMEOUT'
    | 'PJSIP_SC_TSX_TRANSPORT_ERROR';

  /**
   * The reason phrase describing the last status.
   *
   * @returns {string}
   */
  getLastReason(): string;

  getMedia(): any;

  getProvisionalMedia(): any;

  /**
   * Format seconds to "MM:SS" format.
   *
   * @public
   * @returns {string}
   */
  _formatTime(seconds: number): string;
}

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
declare type OrientationType =
  | 'PJMEDIA_ORIENT_UNKNOWN'
  | 'PJMEDIA_ORIENT_ROTATE_90DEG'
  | 'PJMEDIA_ORIENT_ROTATE_270DEG'
  | 'PJMEDIA_ORIENT_ROTATE_180DEG'
  | 'PJMEDIA_ORIENT_NATURAL';
export class Endpoint extends EventEmitter {
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
  makeCall(
    account: Account,
    destination: string,
    callSettings: PjSipCallSetttings,
    msgData: PjSipMsgData
  ): Promise<unknown>;
  /**
   * Send message to the specified URI.
   * -
   *
   * @param account {Account}
   * @param destination {String} Destination SIP URI.
   * @param msg {String} Message.
   */
  sendMessage(
    account: Account,
    destination: string,
    msg: string
  ): Promise<unknown>;
  imTyping(
    account: Account,
    destination: string,
    isTyping: boolean
  ): Promise<unknown>;
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
  redirectCall(
    account: Account,
    call: Call,
    destination: string
  ): Promise<unknown>;
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
