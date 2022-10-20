const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");
const xlsx = require("json-as-xlsx")

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

let leaderboard = [];
let counter = 0;

request(link, cb);

function cb(error, response, html) {
  if (error) {
    console.log(error);
  } else {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    let allScorecardTags = document.querySelectorAll('[class="ds-flex ds-mx-4 ds-pt-2 ds-pb-3 ds-space-x-4 ds-border-t ds-border-line-default-translucent"] span:nth-child(3) a');
    // console.log(allScorecardTags.length);
    for (let i = 0; i < allScorecardTags.length; i++) {
      let link = allScorecardTags[i].href;
      let completelink = "https://www.espncricinfo.com" + link;

      // console.log(completeLink);
      request(completelink, cb2);
      counter++;
    }
    // console.log("Line 24: ",leaderboard);
  }
};


function cb2(error, response, html) {
  if (error) {
    console.log(error);
  }
  else {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    //let batsman = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table td.ds-min-w-max span.ds-inline-flex.ds-items-center.ds-leading-none a");
    // for(let i = 0;i<batsman.length;i++){
    //   let cells = batsman[i].querySelectorAll("td");
    //   console.log(cells.length);
    //   if(cells.length==6){
    //     let runs = cells[0].textContent;
    //     let balls = cells[1].textContent;
    //     let fours = cells[3].textContent;
    //     let sixs = cells[4].textContent;
    //     console.log("Runs --",runs, "Balls--",balls, "Fours--",fours, "Sixes--",sixs);
    // }
    // }
    //    let batsman = document.querySelectorAll("tbody tr.ds-border-b.ds-border-line.ds-text-tight-s");
    //    console.log(batsman.length);


    let batsman = document.querySelectorAll("tbody tr.ds-border-b.ds-border-line.ds-text-tight-s");
    for (let i = 0; i < batsman.length; i++) {
      let cells = batsman[i].querySelectorAll("td");
      if (cells.length == 8) {
        let name = cells[0].textContent;
        let runs = cells[2].textContent;
        let balls = cells[3].textContent;
        let fours = cells[5].textContent;
        let sixes = cells[6].textContent;
        //console.log("NAME :",name, "RUNS :",runs, "BALLS :",balls, "FOURS :",fours, "SIXES :",sixes);
        processPlayer(name, runs, balls, fours, sixes);
      }
    }
    counter--;
    if (counter == 0) {
      console.log("Line 65", leaderboard);
      let data = JSON.stringify(leaderboard);
      fs.writeFileSync('BatsmenStats.json', data);
     

      let dataExcel = [
        {
          sheet: "IPL Stats",
          columns: [
            { label: "Name", value: "Name" }, // Top level data
            { label: "Innings", value: "Innings" }, // Custom format
            { label: "Runs", value: "Runs" }, // Run functions
            { label: "Balls", value: "Balls" }, // Run functions
            { label: "Fours", value: "Fours" }, // Run functions
            { label: "Sixes", value: "Sixes" }, // Run functions
          ],
          content: leaderboard
           
        },
      ]
        

      let settings = {
        fileName: "BatsmenDetail", // Name of the resulting spreadsheet
        extraLength: 3, // A bigger number means that columns will be wider
        writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
      }

      xlsx(dataExcel, settings) // Will download the excel file

    }
    //console.log("Bye");
  }
};
// processPlayer('Rohit','10','4','2','4');
// processPlayer('Virat','50','20','4','3');
// processPlayer('Rohit','40','20','1','2');
// console.log(leaderboard);

function processPlayer(name, runs, balls, fours, sixes) {
  runs = Number(runs);
  balls = Number(balls);
  fours = Number(fours);
  sixes = Number(sixes);

  for (let i = 0; i < leaderboard.length; i++) {
    let playerObj = leaderboard[i];
    if (playerObj.Name == name) {
      //will do some work here
      playerObj.Runs += runs;
      playerObj.Innings += 1;
      playerObj.Balls += balls;
      playerObj.Fours += fours;
      playerObj.Sixes += sixes;
      return;
    }
  }

  //code coming here means we did not find our player inside leaderboard
  let obj = {
    Name: name,
    Innings: 1,
    Runs: runs,
    Balls: balls,
    Fours: fours,
    Sixes: sixes
  }
  leaderboard.push(obj);
  //console.log("hi");
}





















