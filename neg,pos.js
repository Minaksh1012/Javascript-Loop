const input=require("readline-sync")
let num=input.questionInt("enter the number")
var str=""
 var i=1


// while(i<=num){
//     if(i%2==0){
//         str+=(-i)+',';
//         // console.log(str)
//     }else{
//         str+=(i)+","
//         // console.log(str)
//     }
//     // str+=i+',';
//     i+=1;
// }
// console.log(str)


// for (i=1;i<=num;i++){
//     if(i%2==0){
//         str+=(-i)+','
//     }else{
//         str+=i+","
//     }
// }console.log(str)


do{
    if(i%2==0){
        str+=(-i)+","
    }else{
        str+=i+","
    }
    i++
}while(i<=num)
console.log(str)