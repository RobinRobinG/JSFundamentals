function fib() {

  var first = 0;
  var second = 1;
  function nacci() {
    //console.log(second);
    var third = first + second;
    //console.log(third);
    first = second;
    second = third;
    console.log(first);
  }
  return nacci
}
var fibCounter = fib();

for (var i = 0; i < 20; i ++){
 fibCounter(); 
}
