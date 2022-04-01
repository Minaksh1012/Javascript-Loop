// for(let i = 65; i <= 90; i++){
//     console.log(String.fromCharCode(i));
//   }



// let n=8;
// let s=""
// for(let i=0;i<=n;i++){
//     for(let j=0;j<i;j++){
//         s+=String.fromCharCode(j+65)
//     }
//     s+="\n"
// }
// console.log(s)


// PATTERN
// A
// B B
// C C C
// D D D D


// let n=6
// let s=""
// for(let i=0;i<n;i++){
//     for(let j=0;j<i;j++){
//         s+=String.fromCharCode(i+64)
//     }
//     s+="\n"
// }
// console.log(s)



// pattern
// A 
// B C
// D E F
// G H I J
// K L M N O P


// let n=5
// let s=""
// let c=0
// for(let i=1;i<n;i++){
//     for(let j=0;j<i;j++){
//     s+=String.fromCharCode(c+65)
//     c++
//     }
//     s+="\n"

// }console.log(s)


// ABCDE
// ABCD
// ABC
// AB
// A

// let n = 5; // you can take input using prompt or change the value
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i + 1; j++) {
//     string += String.fromCharCode(j + 65);
//   }
//   string += "\n";
// }
// console.log(string);


// pattern
// EDCBA
// EDCB
// EDC
// ED
// E

// let n = 5; // you can take input using prompt or change the value
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i + 1; j++) {
//     string += String.fromCharCode((n - 1 - j) + 65);
//   }
//   string += "\n";
// }
// console.log(string);


//      A
//     ABC
//    ABCDE
//   ABCDEFG
//  ABCDEFGHI
// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // creating spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // creating alphabets
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// console.log(string);


//     A
//    BCD
//   EFGHI
//  JKLMNOP
// QRSTUVWXY

// let n = 5;
// let string = "";
// let count = 0;
// // External loop
// for (let i = 1; i <= n; i++) {
//   // creating spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // creating alphabets
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += String.fromCharCode(count + 65);
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);


//      A
//     ABC
//    ABCDE
//   ABCDEFG
//  ABCDEFGHI
//   ABCDEFG
//    ABCDE
//     ABC
//      A

let n = 5;
let string = "";
// Pyramid
for (let i = 1; i <= n; i++) {
  for (let j = 1; j < n - i + 1; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    string += String.fromCharCode(k + 65);
  }
  string += "\n";
}
// Reverse Pyramid
for (let i = 1; i <= n - 1; i++) {
  for (let j = 1; j < i + 1; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * (n - i) - 1; k++) {
    string += String.fromCharCode(k + 65);
  }
  string += "\n";
}
console.log(string);