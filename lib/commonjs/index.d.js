"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Endpoint = exports.Call = exports.Account = exports.AccountRegistration = void 0;

var _reactNative = require("react-native");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class AccountRegistration {
  constructor() {
    _defineProperty(this, "_status", void 0);

    _defineProperty(this, "_statusText", void 0);

    _defineProperty(this, "_active", void 0);

    _defineProperty(this, "_reason", void 0);
  }

}
/**
 * This describes account configuration and registration status
 */


exports.AccountRegistration = AccountRegistration;

class Account {
  constructor() {
    _defineProperty(this, "_data", void 0);

    _defineProperty(this, "_registration", void 0);
  }

}
/**
 * This class describes the information and current status of a call.
 */


exports.Account = Account;

class Call {
  constructor() {
    _defineProperty(this, "_id", void 0);

    _defineProperty(this, "_callId", void 0);

    _defineProperty(this, "_accountId", void 0);

    _defineProperty(this, "_localContact", void 0);

    _defineProperty(this, "_localUri", void 0);

    _defineProperty(this, "_remoteContact", void 0);

    _defineProperty(this, "_remoteUri", void 0);

    _defineProperty(this, "_state", void 0);

    _defineProperty(this, "_stateText", void 0);

    _defineProperty(this, "_held", void 0);

    _defineProperty(this, "_muted", void 0);

    _defineProperty(this, "_speaker", void 0);

    _defineProperty(this, "_connectDuration", void 0);

    _defineProperty(this, "_totalDuration", void 0);

    _defineProperty(this, "_remoteOfferer", void 0);

    _defineProperty(this, "_remoteAudioCount", void 0);

    _defineProperty(this, "_remoteVideoCount", void 0);

    _defineProperty(this, "_remoteNumber", void 0);

    _defineProperty(this, "_remoteName", void 0);

    _defineProperty(this, "_audioCount", void 0);

    _defineProperty(this, "_videoCount", void 0);

    _defineProperty(this, "_lastStatusCode", void 0);

    _defineProperty(this, "_lastReason", void 0);

    _defineProperty(this, "_media", void 0);

    _defineProperty(this, "_provisionalMedia", void 0);

    _defineProperty(this, "_constructionTime", void 0);
  }

}

exports.Call = Call;

class Endpoint extends _reactNative.EventEmitter {}

exports.Endpoint = Endpoint;
//# sourceMappingURL=index.d.js.map