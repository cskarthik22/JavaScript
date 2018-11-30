function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const gen = colors();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// Instead of using gen.next we can use for_of loop

for (let color of colors()){
    console.log(color);
}
