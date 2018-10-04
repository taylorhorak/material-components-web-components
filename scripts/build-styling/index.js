/**
# Copyright 2018 Google Inc. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
*/

const {sassRender} = require('../sass-render/index.js');
const glob = require('glob');
const path = require('path');

function globPromise(pattern, options) {
  return new Promise((resolve, reject) => {
    glob(pattern, options, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

const template = 'sass-template.tmpl';

async function compileSassFiles() {
  const files = await globPromise('{packages/*/src/*.scss, !_*.scss}');
  for (const file of files) {
    const dirname = path.dirname(file);
    const name = path.basename(file, '.scss') + '-css.ts';
    const cssts = path.join(dirname, name);
    console.log('Generating ' + cssts);
    await sassRender(file, template, cssts);
  }
}

exports.compileSassFiles = compileSassFiles;
