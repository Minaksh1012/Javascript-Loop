//even number two numbers
const input=require("readline-sync")
var num=input.question("Enter the number")
var num2=input.question("enter the 2nd number")
// while(num<=num2){
//     if(num%2==0){
//         console.log(num)
//     }
//     num++
// }


// do{
//     if(num%2==0){
//         console.log(num)
//     }
//     num++
// }while(num<=num2)


for(var num;num<=num2;num++){
    if(num%2==0){
        console.log(num)
    }
}