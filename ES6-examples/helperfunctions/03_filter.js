var cars = [
    { model: 'Nissan', price: 'Cheap', color: 'black'},
    { model: 'Tesla', price: 'Expensive', color: 'red'},
    { model: 'Tesla', price: 'Expensive', color: 'black'}
];

var results = cars.filter(function(car){
    return car.price === 'Expensive' && car.color === 'black'
});

console.log(results);