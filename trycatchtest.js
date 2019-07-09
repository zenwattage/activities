try {

//     var emptyArray = [];

//     var array = [0,2,2,4,3,2,8,4];
    
// function minNum(array) {  
//     var min = Math.min(...array);

//     for(var i = 0; i < array.length; i++){

//         console.log("index is: " + i + " Num is: " + array[i]);
//         //if num === num
//         // get
//         // i of lower num
//         for(var j = i + 1; j < array.length; j++){
//             //console.log(j);

//             if(array[i] === array[j]) {
//                 console.log()
//                 console.log("This one matches: " +"i=" + i +"j="+ j);
//             }
//         }
//     }
//     //console.log(min);

// }



    
// function fooOne() {
//     return {
//         bar: "hello"
//     };
// }

// function fooTwo() {
//     return 
//     {
//         bar: "hello"
//     };
// }

// console.log(fooOne());

// console.log(fooTwo());

// minNum(emptyArray);




// var charMap = {};

// for (var char of str) {
//     charMap[char] = ++charMap[char] || 1;
// }


// var max = 0;
// var maxChar = "";

// for(var key in charMarp) {
//     if(charMap[key] > max) {
//         max = charMap[key];
//         maxChar = key;
//     }
// }
// return maxChar;



//FACTORIAL USING RECURSION

// var fact = 3;

// function factorial(num){

//     if(num === 1){
//         return num;
//     }
//     return num * factorial( num - 1);
// }

// console.log(factorial(fact));

//FACTORIAL USING RECURSION

function squareDigits(num) {
    var holder;
    var array = [];
    var newNum = num.toString();
    for(var i = 0; i< newNum.length; i++){
        holder = Number(newNum[i]);
        array.push(holder * holder);
    }
    return Number(array.join(""));
}

squareDigits(223);







} catch (error) {
    console.log(error);
}