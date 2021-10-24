/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.auth = (function() {

    /**
     * Namespace auth.
     * @exports auth
     * @namespace
     */
    var auth = {};

    auth.EncryptedCredentials = (function() {

        /**
         * Properties of an EncryptedCredentials.
         * @memberof auth
         * @interface IEncryptedCredentials
         * @property {string|null} [credentials] EncryptedCredentials credentials
         */

        /**
         * Constructs a new EncryptedCredentials.
         * @memberof auth
         * @classdesc Represents an EncryptedCredentials.
         * @implements IEncryptedCredentials
         * @constructor
         * @param {auth.IEncryptedCredentials=} [properties] Properties to set
         */
        function EncryptedCredentials(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EncryptedCredentials credentials.
         * @member {string} credentials
         * @memberof auth.EncryptedCredentials
         * @instance
         */
        EncryptedCredentials.prototype.credentials = "";

        /**
         * Creates a new EncryptedCredentials instance using the specified properties.
         * @function create
         * @memberof auth.EncryptedCredentials
         * @static
         * @param {auth.IEncryptedCredentials=} [properties] Properties to set
         * @returns {auth.EncryptedCredentials} EncryptedCredentials instance
         */
        EncryptedCredentials.create = function create(properties) {
            return new EncryptedCredentials(properties);
        };

        /**
         * Encodes the specified EncryptedCredentials message. Does not implicitly {@link auth.EncryptedCredentials.verify|verify} messages.
         * @function encode
         * @memberof auth.EncryptedCredentials
         * @static
         * @param {auth.IEncryptedCredentials} message EncryptedCredentials message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EncryptedCredentials.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.credentials != null && Object.hasOwnProperty.call(message, "credentials"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.credentials);
            return writer;
        };

        /**
         * Encodes the specified EncryptedCredentials message, length delimited. Does not implicitly {@link auth.EncryptedCredentials.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.EncryptedCredentials
         * @static
         * @param {auth.IEncryptedCredentials} message EncryptedCredentials message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EncryptedCredentials.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EncryptedCredentials message from the specified reader or buffer.
         * @function decode
         * @memberof auth.EncryptedCredentials
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.EncryptedCredentials} EncryptedCredentials
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EncryptedCredentials.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.EncryptedCredentials();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.credentials = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EncryptedCredentials message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.EncryptedCredentials
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.EncryptedCredentials} EncryptedCredentials
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EncryptedCredentials.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EncryptedCredentials message.
         * @function verify
         * @memberof auth.EncryptedCredentials
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EncryptedCredentials.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.credentials != null && message.hasOwnProperty("credentials"))
                if (!$util.isString(message.credentials))
                    return "credentials: string expected";
            return null;
        };

        /**
         * Creates an EncryptedCredentials message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.EncryptedCredentials
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.EncryptedCredentials} EncryptedCredentials
         */
        EncryptedCredentials.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.EncryptedCredentials)
                return object;
            var message = new $root.auth.EncryptedCredentials();
            if (object.credentials != null)
                message.credentials = String(object.credentials);
            return message;
        };

        /**
         * Creates a plain object from an EncryptedCredentials message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.EncryptedCredentials
         * @static
         * @param {auth.EncryptedCredentials} message EncryptedCredentials
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EncryptedCredentials.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.credentials = "";
            if (message.credentials != null && message.hasOwnProperty("credentials"))
                object.credentials = message.credentials;
            return object;
        };

        /**
         * Converts this EncryptedCredentials to JSON.
         * @function toJSON
         * @memberof auth.EncryptedCredentials
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EncryptedCredentials.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EncryptedCredentials;
    })();

    auth.BearerToken = (function() {

        /**
         * Properties of a BearerToken.
         * @memberof auth
         * @interface IBearerToken
         * @property {string|null} [token] BearerToken token
         * @property {google.protobuf.ITimestamp|null} [expiry] BearerToken expiry
         */

        /**
         * Constructs a new BearerToken.
         * @memberof auth
         * @classdesc Represents a BearerToken.
         * @implements IBearerToken
         * @constructor
         * @param {auth.IBearerToken=} [properties] Properties to set
         */
        function BearerToken(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BearerToken token.
         * @member {string} token
         * @memberof auth.BearerToken
         * @instance
         */
        BearerToken.prototype.token = "";

        /**
         * BearerToken expiry.
         * @member {google.protobuf.ITimestamp|null|undefined} expiry
         * @memberof auth.BearerToken
         * @instance
         */
        BearerToken.prototype.expiry = null;

        /**
         * Creates a new BearerToken instance using the specified properties.
         * @function create
         * @memberof auth.BearerToken
         * @static
         * @param {auth.IBearerToken=} [properties] Properties to set
         * @returns {auth.BearerToken} BearerToken instance
         */
        BearerToken.create = function create(properties) {
            return new BearerToken(properties);
        };

        /**
         * Encodes the specified BearerToken message. Does not implicitly {@link auth.BearerToken.verify|verify} messages.
         * @function encode
         * @memberof auth.BearerToken
         * @static
         * @param {auth.IBearerToken} message BearerToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BearerToken.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.expiry != null && Object.hasOwnProperty.call(message, "expiry"))
                $root.google.protobuf.Timestamp.encode(message.expiry, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BearerToken message, length delimited. Does not implicitly {@link auth.BearerToken.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.BearerToken
         * @static
         * @param {auth.IBearerToken} message BearerToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BearerToken.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BearerToken message from the specified reader or buffer.
         * @function decode
         * @memberof auth.BearerToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.BearerToken} BearerToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BearerToken.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.BearerToken();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.expiry = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BearerToken message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.BearerToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.BearerToken} BearerToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BearerToken.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BearerToken message.
         * @function verify
         * @memberof auth.BearerToken
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BearerToken.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.expiry != null && message.hasOwnProperty("expiry")) {
                var error = $root.google.protobuf.Timestamp.verify(message.expiry);
                if (error)
                    return "expiry." + error;
            }
            return null;
        };

        /**
         * Creates a BearerToken message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.BearerToken
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.BearerToken} BearerToken
         */
        BearerToken.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.BearerToken)
                return object;
            var message = new $root.auth.BearerToken();
            if (object.token != null)
                message.token = String(object.token);
            if (object.expiry != null) {
                if (typeof object.expiry !== "object")
                    throw TypeError(".auth.BearerToken.expiry: object expected");
                message.expiry = $root.google.protobuf.Timestamp.fromObject(object.expiry);
            }
            return message;
        };

        /**
         * Creates a plain object from a BearerToken message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.BearerToken
         * @static
         * @param {auth.BearerToken} message BearerToken
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BearerToken.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.token = "";
                object.expiry = null;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.expiry != null && message.hasOwnProperty("expiry"))
                object.expiry = $root.google.protobuf.Timestamp.toObject(message.expiry, options);
            return object;
        };

        /**
         * Converts this BearerToken to JSON.
         * @function toJSON
         * @memberof auth.BearerToken
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BearerToken.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BearerToken;
    })();

    auth.Authenticator = (function() {

        /**
         * Constructs a new Authenticator service.
         * @memberof auth
         * @classdesc Represents an Authenticator
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Authenticator(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Authenticator.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Authenticator;

        /**
         * Creates new Authenticator service using the specified rpc implementation.
         * @function create
         * @memberof auth.Authenticator
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Authenticator} RPC service. Useful where requests and/or responses are streamed.
         */
        Authenticator.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link auth.Authenticator#authenticate}.
         * @memberof auth.Authenticator
         * @typedef AuthenticateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {auth.BearerToken} [response] BearerToken
         */

        /**
         * Calls Authenticate.
         * @function authenticate
         * @memberof auth.Authenticator
         * @instance
         * @param {auth.IEncryptedCredentials} request EncryptedCredentials message or plain object
         * @param {auth.Authenticator.AuthenticateCallback} callback Node-style callback called with the error, if any, and BearerToken
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Authenticator.prototype.authenticate = function authenticate(request, callback) {
            return this.rpcCall(authenticate, $root.auth.EncryptedCredentials, $root.auth.BearerToken, request, callback);
        }, "name", { value: "Authenticate" });

        /**
         * Calls Authenticate.
         * @function authenticate
         * @memberof auth.Authenticator
         * @instance
         * @param {auth.IEncryptedCredentials} request EncryptedCredentials message or plain object
         * @returns {Promise<auth.BearerToken>} Promise
         * @variation 2
         */

        return Authenticator;
    })();

    return auth;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
