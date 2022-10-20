//.ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table td.ds-min-w-max span.ds-inline-flex.ds-items-center.ds-leading-none a 

const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard"
request(link,cb);
function cb(error, response, html) {
    if(error){
        console.log(error);
    }
    else {
       // console.log(html);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsman = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table td.ds-min-w-max span.ds-inline-flex.ds-items-center.ds-leading-none a");
        
        //console.log(batsman.length); --=22
    for(let i=0;i<batsman.length;i++){
        let batsmanlink = batsman[i].href;
        let completelink = "https://www.espncricinfo.com"+batsmanlink;
        //console.log(completelink);
        request(completelink,cb2);
    }
    }
}

function cb2(error, response, html) { 
    if(error) {
        console.log(error);
    }
    else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let playerdetail = document.querySelector(".ds-p-4");
        let playerh5 = playerdetail.querySelectorAll("span h5");
        let fullname = playerh5[0].textContent;
        let DOB = playerh5[1].textContent;
        console.log("Player Fullname--:", fullname, " Date of birth:", DOB);
    }
}