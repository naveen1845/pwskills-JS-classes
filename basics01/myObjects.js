
const myObject = {
    name : 'naveen',
    age : 20,
    'user email': 'naveenpattihal@google.com',
    address : {
        city: "margao",
        state: "goa",
        country: "India"
    }
}

console.log(myObject);
console.log(myObject.email);
console.log(Object.values(myObject));
console.log(myObject['user email']);
console.log(myObject.hasOwnProperty('address'));