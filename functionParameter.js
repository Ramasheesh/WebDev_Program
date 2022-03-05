// function with parameter
function sum(num1,num2){
    let addi = num1 + num2;
    console.log("Addition of n1 and n2 is:--"+ addi);

}
sum(10,20);

// fun with return type
function multiply(n1,n2)
{
    return n1*n2;
}
let ans = multiply(5,78);
console.log(ans);


// 2
let a = function sub(num1,num2){
    return num1-num2; 
}


console.log(a(10,5));

// IIFE immediately invoked fun expressin
(function(n1,n2){
    console.log("Hello iife\n"+n1/n2);
})(1000,25);