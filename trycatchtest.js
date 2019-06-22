try {

<<<<<<< HEAD
    var emptyArray = [];

    var array = [0,2,2,4,3,2,8,4];
    
function minNum(array) {  
    var min = Math.min(...array);

    for(var i = 0; i < array.length; i++){

        console.log("index is: " + i + " Num is: " + array[i]);
        //if num === num
        // get
        // i of lower num
        for(var j = i + 1; j < array.length; j++){
            //console.log(j);

            if(array[i] === array[j]) {
                console.log()
                console.log("This one matches: " +"i=" + i +"j="+ j);
            }
        }
    }
    //console.log(min);

}
=======


const terminal = window.createTerminal({runInBackground: true});

//terminal.show();


    
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

console.log(fooOne());

console.log(fooTwo());
>>>>>>> 101afc438388f5f088cb39d4bb919577471ad30e

minNum(emptyArray);

} catch (error) {
    console.log(error);
}