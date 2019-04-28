#!/usr/bin/env bash
set -ex

cd packages/frontend
yarn build
cd ../..
