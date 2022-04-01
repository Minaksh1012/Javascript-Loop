// const input=require("readline-sync")
// let n=input.question("enter the number")
// i=1
// while(i<n){
//     if(i%7==0){
//         console.log(i)
//     }
//     i++
// }


// const input=require("readline-sync")
// let n=input.question("enter the number")
// i=1
// do{
//     if(i%7==0){
//         console.log(i)
//     }
//     i++
// }while(i<=n)


const input=require("readline-sync")
let n=input.question("enter the number")
for (let i=1;i<=n;i++){
    if (i%7==0){
        console.log(i);
    }
}