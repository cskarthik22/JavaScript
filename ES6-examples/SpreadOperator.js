const list01 = [1,2,3];
const list02 = [4,5,6];

const list = list01.concat(list02);

console.log(list);

// Using Spread Operator

console.log([...list01, ...list02]);