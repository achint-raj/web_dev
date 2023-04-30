//Array

let arr = [1,2,4];
//let a = arr[0];
//let b = arr[1];
//let c = arr[2];
let [a,b,c] = arr;
console.log(a);
console.log(b);
console.log(c);

//object
// let obj = {
//     name:"Adam",
//     state:"New York",
//     pincode:12345
// }
// // let {state,name} = obj;
// // console.log(name);
// // console.log(state);
// let {state,name:firstName} = obj;
// console.log(state);
// console.log(firstName);

//nesed object
let obj = {
    name:"Adam",
    address:{
        country:"USA",
        state:{
            stateName:"New York",
            pincode:12345
        }
    }
}

let {name} = obj;
console.log(name);
let {address:{country:cd}} = obj;
console.log(cd);
let {address:{state:{pincode}}} = obj;
console.log(pincode);

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#debugging

//Functional ProgrammingBasic Data Structures

//these are the two resources for practicing questions regarding this current concept