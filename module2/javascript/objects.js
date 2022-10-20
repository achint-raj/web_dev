// 
let capAmerica = {
    Name: 'Steve',
    age: 45,
    friends: ['Natasha', 'Thor', 'Bucky'],
    address: {
        city: "Queens",
        state: 'Haryana'
    },
    sayHi: function(){
        console.log("Captain says hii!!!");
    }
}
console.log(capAmerica);

console.log(capAmerica.friends[2]);
console.log(capAmerica.address);
console.log(capAmerica.address.state);
capAmerica.sayHi();
console.log("capAmerica before update:" ,capAmerica);

//update
capAmerica.movies = ['Avenger', 'Endgame', 'Civil war'];
console.log(capAmerica);
console.log(capAmerica['address']['state']);
delete capAmerica.movies;
console.log(capAmerica);