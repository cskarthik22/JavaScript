var cars = [
    { model: 'Nissan', price: 'Cheap', color: 'black'},
    { model: 'Tesla', price: 'Expensive', color: 'red'},
    { model: 'Tesla', price: 'Expensive', color: 'black'}
];

var results = cars.find(function(car){
    return car.model = 'Tesla';
});

// FILTER iternates whole list, FIND will iterate till it matches with the first one & exits.
console.log(results);
