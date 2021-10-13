#!/usr/bin/env bash

function build_protos() {
  declare BASEDIR=$(dirname "$0");
  declare PROTO_DEST="./src/grpc";
  declare PROTO_SRC="./protobuf";

  cd "${BASEDIR}/../";

  mkdir -p "${PROTO_DEST}";

# JavaScript code generation
yarn  -r dotenv/config grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --grpc_out=grpc_js:${PROTO_DEST} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I "${PROTO_SRC}" \
    protobuf/*.proto;

# TypeScript code generation
yarn  -r dotenv/config grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out="grpc_js:${PROTO_DEST}" \
    -I "${PROTO_SRC}" \
    protobuf/*.proto;
}

build_protos;