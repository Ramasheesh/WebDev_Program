// empty array
let arr=[];
console.log(arr);
 
// array with element
let elearray = [1,2,3,"hello",false,5.2]
console.log(elearray);
console.log("2nd element\n"+elearray[3]);
console.log(" element\n"+elearray[5]);


console.log("///////////////////////////////////////////")
// push an array
elearray[1] = "nothing";
console.log("array before push\n"+elearray);
elearray.push(4+"\t Add element in last");
console.log("after the push\n"+elearray);

// 2 pop
elearray.pop();
console.log("\nt"+elearray);
elearray.shift();
console.log(" new"+elearray);