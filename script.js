// function tax(number){
//     return number *1.08;
// }

// const tax = function(number){
//     return number *1.08;
// }

// const tax = (number) => {
//     return number *1.08;
// }

const tax = number => number *1.08;

document.getElementById("test").textContent = tax(100);