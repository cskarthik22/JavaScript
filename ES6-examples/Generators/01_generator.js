function* numbers(){
const outsideval = yield 'comingout01' ;
const outsideval2= yield 'comingout02' ;

return [outsideval, outsideval2];
}

const  gen = numbers();
console.log(gen.next());
console.log(gen.next('01Result')); // This is for first yield
console.log(gen.next('02Result')); // This is for second yield