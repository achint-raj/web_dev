//this keyword is for reference purpose to any object
//this keyword's value will depend upon how it is called?
//1. function invocation
//2. method invocation

// console.log(this);//globally call kiya hai  , print karega {}

// function abc(){
//     console.log("this inside a function",this);
// }

//abc();  //function invocation

// let obj = {
//     name: "Achint",
//     age: 21,
//     def:function(){
//         console.log(this);
//     }
// }

// // //console.log("##################");
// obj.def();//method invocation
// // // console.log("$$$$$$$$$$$$$$$4");
//  let ghi = obj.def;
//  ghi();  //function invocation





// let obj = {
//         name: "Achint",
//         age: 21,
//         test:function(){
//             this.def();  //method invocation
//         },
//         def:function(){
//             console.log(this);
//         }
//     }
    
//    obj.test();
    //'use strict';
    let obj = {
        name: "Achint",
        age: 21,
        def:function(){
            console.log(this);
            function klm(){
                console.log(this);
            }
            console.log(this);
            klm();   //function invocation
        }
    }
   console.log("$$$$$$$$$4");
   obj.def();
   let ghi = obj.def;
   ghi();  //function invocation
