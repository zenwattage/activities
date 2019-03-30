//$(document).on('ready', function() {
try {

var queryURL = "https://api.giphy.com/v1/gifs/random?q=fail&api_key=dc6zaTOxFJmzC&limit=1";

//$("#add-gif").on('click', function() { 


// ajax calls to the URL to GET the gifs
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

    //getting source url for gif
    var respData = response.data.image_original_url;
    //console.log(respData);

    //putting url into dynamically created image tag
    var imageTag = $("<img>");
    //injecting the course url into the 'src' attribute of the above created img tag
    imageTag.attr('src',respData);
    //injecting 'alt' attribute info
    imageTag.attr('alt', 'gif');
    //appending to the DOM
    $("#gif-view").append(imageTag);

})

//});

//});

}

catch(err) {
  console.log(err);
}