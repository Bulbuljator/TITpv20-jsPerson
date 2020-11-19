console.log("Hello, World!");
//задать перемееные / declare a variable 
let name = "Georg Samolaynen";
let age = 15;
let survive = false;
let city = "Tallinn";
let commentary = "";
let drivingLicense = ""
//console.log("Character: ", name, "age: ", age, ". City: ", city);
console.log(`Character: ${name}. age: ${age}. City: ${city}.`)

if(survive){
  commentary = "Любит играть с друзьями";
} else {
  commentary = "Ненавидет ананасы";
}
console.log(`character ${name} ${commentary}`);

if(age < 15) {
  drivingLicense = `${name} слишком молод для некоторых игр.`;
} else {
  drivingLicense = `${name} слишком стар для современной музыки.`;
}

console.log(drivingLicense);

const html = `
   <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>City: ${city}</li> 
        <li>He: ${commentary}</li>
        <li>${drivingLicense}</li>
  </ul>
`;

document.body.innerHTML = html;