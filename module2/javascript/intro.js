//printing any message on the terminal
console.log("swagat hai tera!!");
 //is prime
 let n=21;
 let val=true;
 for(let i=2;i*i <= n;i++){
     if(n%i == 0)
     val=false;
 }
 if(val == true)
 console.log("Number is prime");
 else 
 console.log("Not a prime number");
 
//function concept with parameters
 function divid(nm1,nm2){
     return nm1/nm2;
 }
 console.log(divid(5,2));

 let a=function divide(nm1,nm2){
     return nm1/nm2;
 }
 console.log(a(10,5));

 //IIFE
 (function(){
console.log("Immediately invoked function expression");
 })();

 // IIFE with parameters
 (function(nm1,nm2){
     console.log(nm1/nm2);
 })(10,5);

 //IIFE examples
 (function(n1,n2,n3){
    console.log(n1+n2/n3);
 })(12,21,3);