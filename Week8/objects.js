//example of JavaScript Object
var car1 = {
    year:1999,
    make:"Dodge",
    model:"Viper",
    consoleCar:function(){console.log(`The car is a ${this.year} ${this.make} ${this.model}`)}
}

var car2 = {
    year:2003,
    make:"BMW",
    model:"M3",
    consoleCar:function(){console.log(`The car is a ${this.year} ${this.make} ${this.model}`)}
}

var car3 = {
    year:2011,
    make:"Volkswagen",
    model:"Jetta",
    consoleCar:function(){console.log(`The car is a ${this.year} ${this.make} ${this.model}`)}
}

car1.consoleCar();
car2.consoleCar();
car3.consoleCar();
console.log(car1.year, car1.make, car1.model);

var cars = [car1, car2, car3];

cars[2].consoleCar();

//basic for loop
for(let i = 0; i<cars.length;i++){
    cars[i].consoleCar();
}

//example of json object
var carJson1 = '{"year":1999, "make":"dodge", "model":"viper"}'
console.log(car1);
console.log(carJson1);
//var carJson1obj = JSON
console.log(JSON.parse(carJson1));
console.log(JSON.stringify(car1));

//example of for in loop
for(let key in car1){
    console.log(key);
    console.log(car1[key]);
}

//example of for of loop
for(let index of cars){
    index.make = "Honda";
    console.log(index);

}

//example of forEach loop
cars.forEach(function(car, item){
    console.log(car);
    console.log(cars[item].model);
})

//Use for loops to output to page
var pageData = `<table>`;

for(let i = 0; i<cars.length;i++){
    pageData += `<tr>`;
    for(let key in cars[i]){
        pageData += `<td>${cars[i][key]}</td>`;
    }
    pageData += `</tr>`;
}
pageData += "</table>"
var page = document.querySelector("body");
page.innerHTML = pageData;
