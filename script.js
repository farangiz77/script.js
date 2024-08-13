


// let name = prompt("hello")
// let age = +prompt("skolko tebe?")
// let city = prompt("cde ti jivesh?")
// alert("privet "  + name +  " tebe " + age  +  " let "+ " ti jivesh v "+ city)
// alert(`privet ${name},  tebe ${age} let, vi jivyote v gorode ${city}`)




// const sayHello = (name) => {
//   alert("hello " + name)
//   alert(`hello ${name} ` )
// }

// sayHello("kiki")

// let user = {
//   name: "kiki",
//   surname: "kira"
// }

// user.age = 18
// console.log(user);




// let num1 = +prompt("vvedite perbvoe chislo")
// let num2 = +prompt("vvedite vtoroe chislo")

// if (num1 > num2) {
//   alert("pervoe chislo bolshe vtorogo")
// } else if(num1 < num2) {
//   alert("pervoe chislo menshe")
// } else {
//   alert("oni ravni")
// }





// let number = +prompt("vvedite chislo")

// if(number == 0){
//   alert("chislo raven nulyu")
// } else if(number % 2 == 0) {
//   alert("chislo chetnoe")
// }

// else{
//   alert("chislo nechetnoe")
// }



let secretNumber = Math.floor( Math.random() * 11)

let guess = +prompt("ugaday chislo ot 1 do 10")

if(guess == secretNumber) {
  alert("ti ugadal. pozdravlyayu")
} else {
  alert("ne ugadal. poprobuy eshe raz")
}

console.log(secretNumber);
