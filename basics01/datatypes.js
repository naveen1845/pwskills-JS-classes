//Primitive -> STACK
/*
strings 
number 
boolean 
null 
undefined 
symbol 
BigInt 
*/

let username = "naveen"
const age = 18
const score = 20.5
let permission = true
let projects = null
let salary = undefined
let flag = Symbol("redFlag")
let big_number = 649876168461631249849846n


//Reference (Non primitive) -> HEAP   -   Objects
/*
arrays
ojects
function
*/

// array
let numbers = [1,2,3,4,5,6,7]
let heroes = [
    "superman", 
    "batman", 
    "spiderman"
]

// object
let userObject = {
    name : "naveen",
    age : 20,
    score : 100,
    email : "naveenpattihal08@gmail.com"

}

// function
let sayHello = function(){
    console.log("Hello darling");
}

const userLogin = function(){}
const userData = function(){}

