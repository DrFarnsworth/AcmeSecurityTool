const scanner = require('./scanner');
const utils = require('./utils');

function main() {
  console.log("Initializing Acme Security Scanner...");
  scanner.scan();
}

main();
