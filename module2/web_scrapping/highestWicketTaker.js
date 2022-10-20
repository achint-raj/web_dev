const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
//const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/live-cricket-score"
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
        // let alltables = document.querySelectorAll("ds-w-full ds-table ds-table-xs ds-table-fixed");
        // let bowlerstable1=alltables[1];
        // let bowlerstable2=alltables[3];
        // let row1=bowlerstable1.querySelectorAll("tbody tr");
        // console.log(row1.length);


        //mera nahi hua khud se
        // ye sir ca code hai niche se
        let mostWicket = 0;
        let nameOfHighestWicketTaker = "";
        let bowlerstable = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed");
        console.log(bowlerstable.length);
        for(let i=1;i<bowlerstable.length;i+=2){
            let rows = bowlerstable[i].querySelectorAll("tbody tr");
            for(let j=0;j<rows.length;j++){
                let tds = rows[j].querySelectorAll("td");
                if(tds.length > 1){
                    let name = tds[0].textContent;
                    let wickets = tds[4].textContent;
                   console.log("Name of Bowler --> ", name, "  Wickets-->",wickets);
                    if(wickets > mostWicket){
                        mostWicket=wickets;
                        nameOfHighestWicketTaker=name;
                    }
                }
            }
        } 
        console.log("Name of highest Wicket taker : ", nameOfHighestWicketTaker);
        console.log("Number of Wickets taken : ", mostWicket);
    }
};



