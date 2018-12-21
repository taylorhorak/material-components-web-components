#!/usr/bin/env bash

find ./packages/*/package.json -exec sed -i '' -e 's/@authentic\/mwc/@material\/mwc/g' {} \;
find ./packages/*/package.json -exec sed -i '' -e 's/AuthX\//material-components\//g' {} \;