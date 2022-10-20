const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link="https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/live-cricket-score"
request(link,cb);
function cb(error, response, html) {
    if(error)
    console.error('error:', error); // Print the error if one occurred
    else {
       // console.log('body:', html); // Print the HTML for the link page.
        const dom = new JSDOM(html);
const document = dom.window.document;// "Hello world
//console.log(document.textContent);
let teamsName = document.querySelectorAll("span .ds-text-tight-l.ds-font-bold");
console.log(teamsName[0].textContent);
console.log(teamsName[1].textContent);
    }
    
};
