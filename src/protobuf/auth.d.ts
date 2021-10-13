import * as $protobuf from "protobufjs";
/** Namespace auth. */
export namespace auth {

    /** Properties of an EncryptedCredentials. */
    interface IEncryptedCredentials {

        /** EncryptedCredentials credentials */
        credentials?: (string|null);
    }

    /** Represents an EncryptedCredentials. */
    class EncryptedCredentials implements IEncryptedCredentials {

        /**
         * Constructs a new EncryptedCredentials.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IEncryptedCredentials);

        /** EncryptedCredentials credentials. */
        public credentials: string;

        /**
         * Creates a new EncryptedCredentials instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncryptedCredentials instance
         */
        public static create(properties?: auth.IEncryptedCredentials): auth.EncryptedCredentials;

        /**
         * Encodes the specified EncryptedCredentials message. Does not implicitly {@link auth.EncryptedCredentials.verify|verify} messages.
         * @param message EncryptedCredentials message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IEncryptedCredentials, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncryptedCredentials message, length delimited. Does not implicitly {@link auth.EncryptedCredentials.verify|verify} messages.
         * @param message EncryptedCredentials message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IEncryptedCredentials, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncryptedCredentials message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EncryptedCredentials
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.EncryptedCredentials;

        /**
         * Decodes an EncryptedCredentials message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EncryptedCredentials
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.EncryptedCredentials;

        /**
         * Verifies an EncryptedCredentials message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncryptedCredentials message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncryptedCredentials
         */
        public static fromObject(object: { [k: string]: any }): auth.EncryptedCredentials;

        /**
         * Creates a plain object from an EncryptedCredentials message. Also converts values to other types if specified.
         * @param message EncryptedCredentials
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.EncryptedCredentials, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncryptedCredentials to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BearerToken. */
    interface IBearerToken {

        /** BearerToken token */
        token?: (string|null);

        /** BearerToken expiry */
        expiry?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a BearerToken. */
    class BearerToken implements IBearerToken {

        /**
         * Constructs a new BearerToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IBearerToken);

        /** BearerToken token. */
        public token: string;

        /** BearerToken expiry. */
        public expiry?: (google.protobuf.ITimestamp|null);

        /**
         * Creates a new BearerToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BearerToken instance
         */
        public static create(properties?: auth.IBearerToken): auth.BearerToken;

        /**
         * Encodes the specified BearerToken message. Does not implicitly {@link auth.BearerToken.verify|verify} messages.
         * @param message BearerToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IBearerToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BearerToken message, length delimited. Does not implicitly {@link auth.BearerToken.verify|verify} messages.
         * @param message BearerToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IBearerToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BearerToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BearerToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.BearerToken;

        /**
         * Decodes a BearerToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BearerToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.BearerToken;

        /**
         * Verifies a BearerToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BearerToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BearerToken
         */
        public static fromObject(object: { [k: string]: any }): auth.BearerToken;

        /**
         * Creates a plain object from a BearerToken message. Also converts values to other types if specified.
         * @param message BearerToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.BearerToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BearerToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents an Authenticator */
    class Authenticator extends $protobuf.rpc.Service {

        /**
         * Constructs a new Authenticator service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Authenticator service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Authenticator;

        /**
         * Calls Authenticate.
         * @param request EncryptedCredentials message or plain object
         * @param callback Node-style callback called with the error, if any, and BearerToken
         */
        public authenticate(request: auth.IEncryptedCredentials, callback: auth.Authenticator.AuthenticateCallback): void;

        /**
         * Calls Authenticate.
         * @param request EncryptedCredentials message or plain object
         * @returns Promise
         */
        public authenticate(request: auth.IEncryptedCredentials): Promise<auth.BearerToken>;
    }

    namespace Authenticator {

        /**
         * Callback as used by {@link auth.Authenticator#authenticate}.
         * @param error Error, if any
         * @param [response] BearerToken
         */
        type AuthenticateCallback = (error: (Error|null), response?: auth.BearerToken) => void;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
