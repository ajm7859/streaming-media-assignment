const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const page3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const sendHTML = (response, content) => {
    response.writeHead(200, { 'Content-type': 'text/html' });
    response.write(content);
    response.end();
};

const getIndex = (request, response) => sendHTML(response, index);
const getPage2 = (request, response) => sendHTML(response, page2);
const getPage3 = (request, response) => sendHTML(response, page3);

module.exports = {
    getIndex,
    getPage2,
    getPage3,
};