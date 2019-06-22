try {

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

minNum(emptyArray);

} catch (error) {
    console.log(error);
}