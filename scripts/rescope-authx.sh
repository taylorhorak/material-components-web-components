#!/usr/bin/env bash

find ./packages/*/package.json -exec sed -i '' -e 's/@material/@authentic/g' {} \;
find ./packages/*/package.json -exec sed -i '' -e 's/material-components\//AuthX\//g' {} \;