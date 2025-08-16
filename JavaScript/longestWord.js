
const string = "Watcasdasdasdh Thapa TechnicaL JavaSCript courese on youtube";

console.log(string);

const arr = string.split(" ");
console.log(arr);

let Max = 0;
let word = "";

arr.forEach(element => {
    let count = element.length;
    if(count>Max){
        Max = count;
        word=element;
    }
});
console.log(word);
 