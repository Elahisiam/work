var p1=4;
var p2=3;
function myFunction() {
   console.log( p1 * p2);
  }
  document.getElementById("demo").innerHTML = myFunction();
myFunction();

var x=myFunction(4,3);
function myFunction(a,b) {
    return a*b;
}
document.getElementById("demo").innerHTML=x;

function toCelsius(f) {
    return (5/9) * (f-32);
}
document.getElementById("demo").innerHTML = toCelsius(77);

var f;

function y(f) {
    return (5/9)*(f-32);
   
}
document.getElementById("demo").innerHTML = y(77);

var person= {
    firstName: "John",
    lastName: "Doe",
    id      : 5566,
    fullName : function(){
        return this.firstName +" "+this.lastName;
    }
};
document.getElementById("demo").innerHTML= person.fullName();

