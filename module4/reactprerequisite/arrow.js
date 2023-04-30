//write a function to add teo numbers and print their sum
let regularfuncn = function(a,b){
    console.log(a+b);
 }
 regularfuncn(1,2);

 let add = (a,b)=>{
    console.log(a+b);
 }
 add(1,2);


 let arrowfunction = ()=>{
    console.log(this);
 }
 arrowfunction();   //prints {} object because in arrow function we do not need to think about method invocation or function invocation, because arrow function me jo this hota hai wo apne outer scope function pe depend karta hai
 
 let obj = {
    name:"Achint",
    age:21,
    showDetails:function(){
        console.log(this.name+" "+this.age);
    },
    showDetailsArrow:()=>{
        console.log(this);  //{}will print empty object because there is no outer scope function over this function
        console.log(this.name+" "+this.age);// print undefined
    }
 }
 obj.showDetails(); 
 obj.showDetailsArrow();