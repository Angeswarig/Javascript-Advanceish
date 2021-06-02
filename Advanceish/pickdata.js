//Destructuring the data in javascript,
var User=["Angeshwari",2,"Admin"];
var [name,courseCount,Role]=User;
console.log(name);

var fruitColor={
    Strawberry:"red",
    Banana:"yellow",
    Kiwi:"green",
}
var{Strawberry,Banana,Kiwi}=fruitColor;
console.log(Kiwi);
