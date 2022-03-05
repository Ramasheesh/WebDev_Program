let str ="- I am A String";
console.log(str);
// lenth of string
let len = str.length;
console.log(len);

// slice method
let sclisedStr = str.slice(2,10);
console.log(sclisedStr);
// 
let replacedStr  = str.replace("am","was");
console.log(replacedStr);
// 
let captilestr = str.toUpperCase();
console.log(captilestr);
// 
let lovercase = str.toLocaleLowerCase();
console.log(lovercase);

let firstName = 'Ramasheesh';
let lastName = '\nChauhan';
let fullname = firstName.concat(lastName);
console.log(fullname);
console.log(firstName + lastName);

let splitted  = str.split(" ");
console.log(splitted);