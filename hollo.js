// let a=5
// let n=""
// for(let i=0;i<a;i++){
//     for(let j=0;j<a;j++){
//         if(i===0||i===a-1){
//             n+="*";
//         }
//         else{
//             if(j===0 || j===a-1){
//                 n+="*"
//             }
//             else{
//                 n+=" ";
//             }
//         }
//     }
//     n+="\n"
// }
// console.log(n)


let a=5
let s=""
for(let i=0;i<a;i++){
    for(let j=0;j<a;j++){
        if(i===0||i===a-1){
            s+="*"
        }else{
            if(j===0 ||j===a-1){
                s+="*"
            }
            else{
                s+=" "
            }

        }
    }
    s+="\n"
}
console.log(s)
