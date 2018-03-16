/*var numbers = [1, 2, "balls", 4];
for (var i = 0; i < numbers.length; i++){
    var value = numbers[i];
    console.log("number: " + value);
}


numbers.forEach((numb) => {
    console.log(numb);
});

*/

var people = [
  { name: "Dan", age: 31 },
  { name: "Erin", age: 30.4 },
  { name: "Eleanor", age: 0.5 }
];

function log(person) {
  console.log("Hello " + person.name);
}

people.forEach(log);

//people.forEach((numb, index) => {
//    console.log(numb.name + index);
//});

var potato = document.getElementById("message");
potato.innerHTML = "HOT SOUP";
