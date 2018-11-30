const add = (a,b) => {
    return a + b;
}

// For single javascript statements we can do like below

const add_new = (a,b) => a+b;

console.log(add(2,3));

console.log(add_new(2,3));

// RULE #2 : Single Argument function

const double = (num) => {
    return num * 2;
}

const double_new = num => num * 2;

console.log(double(5));
console.log(double_new(5));