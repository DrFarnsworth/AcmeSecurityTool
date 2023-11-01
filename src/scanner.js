const utils = require('./utils');

function scan() {
  console.log("Scanning for vulnerabilities...");
  utils.log("Scan complete.");
}

module.exports = { scan };
