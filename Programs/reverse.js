function ReverseStr(str){
    debugger;
    return str.split('').reduce((result,character)=> {
      return character + result;
    }, '');
}
console.log(ReverseStr('Karthik'));