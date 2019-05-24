//user choice 
function userChoice(caseData, functionData) {
    switch (caseData) {
        case "concert-this":
            getThisBand(functionData);
            break;
        case "spotify-this-song":
            spotifyThisSong(functionData);
            break;
        case "movie-this":
            movieThis(functionData);
            break;
        case "do-what-it-says":
            doWhatItSays();
            break;
        default:
            console.log("\n  No Command entered: ".red);
            console.log("  ¯\\_(ツ)_/¯ ".yellow);
            console.log("  Your options are: ".cyan);
            console.log("  concert-this BANDNAME, spotify-this-song SONGNAME, movie-this MOVIE, do-what-it-says ".bgBlue);
    }
};// end userChoice

//get choice to pass to userChoice
function getChoice(argOne, argTwo) {
    userChoice(argOne, argTwo);
};

//get user input from terminal
getChoice(process.argv[2], process.argv.slice(3).join(" "));