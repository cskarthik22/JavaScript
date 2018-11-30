function addNumbers(a,b,c,d,e) {
    var numbers = [a,b,c,d,e];
   return numbers.reduce((sum,number) => {
       return sum + number;
   },0)
}

console.log(addNumbers(1,2,3,4,5));

// Using Rest Operator

function addNumbers_new(...numbers) {
   return numbers.reduce((sum,number) => {
       return sum + number;
   },0)
}

console.log(addNumbers_new(1,2,3,4,5));