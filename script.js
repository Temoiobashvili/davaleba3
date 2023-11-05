'use strict'


//1


// function sum (...numbers) {
//     let numberSum = 0;
//     for (let item of numbers) {
//         numberSum += item;
//     }
//     return numberSum;
// }

// let sumResult = sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
// console.log(sumResult);






//2



// let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
//   }


//   function printName(user) {
// if (user.isloggedin) {
//    return user.firstname + " " + user.lastname;
//  }
//  return false;
// }

// let printNameResult = printName(user);
// console.log(printNameResult);






//3



// function getmax(...numb) {
// let maxValue = 0;
// for (let item of numb) {
//     if (item > maxValue) {
//     maxValue = item;
//   }
//  }

//  return maxValue;
// }

// let getmaxValueResult = getmax(14,100,2,150,7);
// console.log(getmaxValueResult);





//4


// function testFnc(x) {
//     if (x % 2 == 0) {
//         return "this number is even"
//     }
//     return "this number is odd"
// }

// let testFncResult = testFnc(12);
// console.log(testFncResult);






//5


let array = [1,2,3,4,5];

for (let i = array.length -1; i >= 0; i--) {
   console.log(array[i]);
}





//6



let firstuserage = (age) => (age > 18 ? "სრულწლოვანი" : "არასრულწლოვანი")

let userage = 20 ;
let result4 = firstuserage(userage)
console.log(result4);
