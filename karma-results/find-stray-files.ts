//  https://github.com/sindresorhus/globby/issues/129
//  import * as glob from 'glob';
//  import {sync} from 'glob';

import { sync } from 'glob';
import { writeToFile } from './support/file-utils';
import {
  excludedFiles,
  projectPath,
  resultsFile,
} from './support/karma-results.env';

const files = sync(`${projectPath}.spec.ts`, { ignore: excludedFiles });

const fileArray = Array.from(files);
let fileContent: string | null = null;

if (fileArray.length) {
  fileContent = fileArray.join('\n');
}

writeToFile(resultsFile, fileContent);
