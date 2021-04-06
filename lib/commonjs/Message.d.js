"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * This class describes the information and current status of a call.
 */
class Message {
  constructor() {
    _defineProperty(this, "_accountId", void 0);

    _defineProperty(this, "_contactUri", void 0);

    _defineProperty(this, "_fromUri", void 0);

    _defineProperty(this, "_fromName", void 0);

    _defineProperty(this, "_fromNumber", void 0);

    _defineProperty(this, "_toUri", void 0);

    _defineProperty(this, "_body", void 0);

    _defineProperty(this, "_contentType", void 0);
  }

}

exports.default = Message;
//# sourceMappingURL=Message.d.js.map