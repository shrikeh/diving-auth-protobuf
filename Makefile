.ONESHELL:
SHELL:=/usr/bin/env sh
ROOT_DIR:="$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))"
.DEFAULT: help
.PHONY: help
ifndef VERBOSE
.SILENT:
endif

proto:
	echo "Generating protobuf modules...";
	mkdir -p ./src/protobuf;
	yarn protobuf:generate;

grpc:
	mkdir -p ./src/grpc;
	./scripts/build-protos.sh;

generate: proto grpc