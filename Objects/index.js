
// listing={
//     isavailable: true,
//     name: "Castles",
//     tariff: 120,
//     type: ["premium","budget"]
// }

// console.log(listing.name);
// console.log(listing.type);

// person={
//     name: "Manideep",
//     age: 42,
//     country: "India"
// }

// function logData(){
//     let log=person.name+" is "+person.age+" years old and lives in "+person.country
//     return log
// }

// console.log(logData())

let fruit=["🍎","🍊","🍊","🍎","🍎","🍊","🍊","🍎","🍎"]
let appleshelf=document.getElementById("appleshelf")
let orangeshelf=document.getElementById("orangeshelf")

let apple=""
let orange=""

for(let i=0;i<fruit.length;i++){
    if(fruit[i]==="🍎"){
        apple=apple+" "+fruit[i]
    }else{
        orange=orange+" "+fruit[i]
    }
}
appleshelf.textContent=apple
orangeshelf.textContent=orange