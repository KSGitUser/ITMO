const { transform } = require('@babel/core');
const { Script } = require('vm');
const { createWriteStream: w } = require('fs');
const f = 'index.js';
(async () => {
  const src = String(await require('fs').promises.readFile(`./src/${f}`));
  const { code } = transform(src, {
    plugins: [
      '@babel/plugin-proposal-function-bind',
      '@babel/plugin-proposal-do-expressions',
    ],
  });
  console.log('VM READY!');
  const script = new Script(code);
  script.runInThisContext();
  w(`./lib/${f}`).write(code);
})();
