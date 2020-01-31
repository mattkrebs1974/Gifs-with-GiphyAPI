$(document).ready(function () {





$("button").on("click", function () {
    // Grabbing and storing the data-sports property value from the button
    var sports = $(this).attr("data-a");

    // Constructing a queryURL using the sports name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        sports + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=4";

    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {
            console.log("queryURL " + queryURL);

            console.log("response " + response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;

            console.log("response.data " + response.data)

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {

                // Creating and storing a div tag
                var sportsDiv = $("<br>"+"<div>");

                // Creating a paragraph tag with the result item's rating
               
                // var pp = $("<p>").text("import_datetime" + results[i].import_datetime);

                // Creating and storing an image tag
                var sportsImage = $("<img>");
                // Setting the src attribute of the image to a property pulled off the result item
                sportsImage.attr("id", sports+results[i]);
                sportsImage.attr("src", results[i].images.original.url);

                // Appending the paragraph and image tag to the sportsDiv
              console.log(sportsImage);


                // sportsDiv.append(pp);


                sportsDiv.append(sportsImage);
              

                

                // Prependng the sportsDiv to the HTML page in the "#gifs-appear-here" div

              
               
                

          
                   
                            // $('#photoModal').modal('show');
                   
    
            

                



                $("#gifs-appear-here").prepend(sportsDiv);
            }
        });
});

});