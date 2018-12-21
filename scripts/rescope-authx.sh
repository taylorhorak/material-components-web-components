#!/usr/bin/env bash

find ./packages/* -exec sed -i '' -e 's/@material\/mwc/@authentic\/mwc/g' {} \;
find ./packages/*/package.json -exec sed -i '' -e 's/material-components\//AuthX\//g' {} \;