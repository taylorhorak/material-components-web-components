#!/usr/bin/env bash

find ./demos/* -exec sed -i '' -e 's/@authentic\/mwc/@material\/mwc/g' {} \;
find ./packages/* -exec sed -i '' -e 's/@authentic\/mwc/@material\/mwc/g' {} \;
find ./packages/*/package.json -exec sed -i '' -e 's/AuthX\//material-components\//g' {} \;
