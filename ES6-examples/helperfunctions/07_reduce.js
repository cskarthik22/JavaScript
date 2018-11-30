var numbers = [1,2,3,4,5]

var sum = 0;

console.log("++++++++++ Code in ES5 +++++++++++");

for ( i=0; i<numbers.length; i++)
    {
        sum = sum + numbers[i];
    }
console.log(sum);

console.log("++++++++++ Code in ES6 +++++++++++");


var results = numbers.reduce(function(sum,number){
    return sum + number;
}, 0);

console.log(results);