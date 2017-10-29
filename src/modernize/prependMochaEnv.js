import runWithProgressBar from '../runner/runWithProgressBar';
import prependToFile from '../util/prependToFile';

export default async function prependMochaEnv(config, jsFiles, mochaEnvFilePattern) {
  let regex = new RegExp(mochaEnvFilePattern);
  let testFiles = jsFiles.filter(f => regex.test(f));
  await runWithProgressBar(
    config,
    'Adding /* eslint-env mocha */ to test files...', testFiles, async function(path) {
      await prependToFile(path, '/* eslint-env mocha */\n');
      return {error: null};
    });
}
