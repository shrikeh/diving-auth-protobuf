export namespace AuthenticatorService {
    namespace authenticate {
        export const path: string;
        export const requestStream: boolean;
        export const responseStream: boolean;
        export const requestType: typeof EncryptedCredentials_pb.EncryptedCredentials;
        export const responseType: typeof BearerToken_pb.BearerToken;
        export { serialize_auth_EncryptedCredentials as requestSerialize };
        export { deserialize_auth_EncryptedCredentials as requestDeserialize };
        export { serialize_auth_BearerToken as responseSerialize };
        export { deserialize_auth_BearerToken as responseDeserialize };
    }
}
export var AuthenticatorClient: import("@grpc/grpc-js/build/src/make-client").ServiceClientConstructor;
import EncryptedCredentials_pb = require("./EncryptedCredentials_pb.js");
import BearerToken_pb = require("./BearerToken_pb.js");
declare function serialize_auth_EncryptedCredentials(arg: any): Buffer;
declare function deserialize_auth_EncryptedCredentials(buffer_arg: any): EncryptedCredentials_pb.EncryptedCredentials;
declare function serialize_auth_BearerToken(arg: any): Buffer;
declare function deserialize_auth_BearerToken(buffer_arg: any): BearerToken_pb.BearerToken;
export {};
