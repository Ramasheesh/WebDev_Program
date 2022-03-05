// console.log("Hi welcome back");
// console.log("Pepcoders");
// let num=10;
// console.log(num);
// let str="Ramasheesh";
// let str2="Chauhan";
// console.log(str + " \n"+str2);
// let bool = true;
// console.log(bool);
// for(let i =1;i<=5;i++){
//    console.log(i);
// }
// let count = 10;
// while(count>0){
//     console.log(count);
//     count--;
// }
let n =1764;
let count = 0;
for(let div =2 ; div*div <=n;div++){
    if(n%div==0){
    count++;
    }
}
if(count == 0){
    console.log("prime");
}else{
    console.log("not prime")
}