var numbers = [1,2,3,4,5]

var doubled = numbers.map(function(num){
    return num*2
});

console.log(doubled)

console.log(numbers.map(num=>num*5)); // refer Arrow functions

var cars = [
    { model: 'Nissan', price: 'Cheap'},
    { model: 'Tesla', price: 'Expensive'}
];

var priceList = cars.map(function(car){
    return car.price;
})

console.log(priceList);