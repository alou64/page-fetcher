const fs = require('fs');
const request = require('request');

request(process.argv[2], (error, response, body) => {
  const content = `${body}`;
  fs.writeFile(process.argv[3], content, () => {
    console.log(`Downloaded and saved ${body.length} bytes to ${process.argv[3]}`);
  });
});
