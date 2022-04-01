// const input=require("readline-sync")
// let num=input.question("enter the number")
// i=1
// sum=0
// while(i<=num){
//     let n=input.questionInt("enter the number")
//     sum+=n
//     // console.log(sum)
//     i+=1
// }
// console.log(sum)

// const input=require("readline-sync")
// let num=input.question("how many numbers you want add ")
// i=1
// sum=0
// do{
//     let n=input.questionInt("enter the number")
//     sum+=n
//     i++
// }while(i<=num)
// console.log(sum)

const input=require("readline-sync")
let num=input.question("how many numbers you want to add")
sum=0
for(i=1;i<=num;i++){
    let n=input.questionInt("enter the number")
    sum+=n
    console.log(sum)
}
