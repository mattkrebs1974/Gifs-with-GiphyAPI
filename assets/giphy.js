$(document).ready(function () {

    var interests = ["funny", "crying", "falling", "dancing"];

function renderButtons() {

    $("#buttons").empty();


    // for (var i=0; i<interests.length; i++) {

    //in place of for loop "$.each (function) -- idea given to me by "Aja" 

$.each(interests, function(index,value) {

        var a =$("<button>");
        a.addClass("buttons");
        a.attr("data-a", value);
        a.text(value);
        $("#buttons").append(a);



    });
}


























  

    $(document).on("click","#submit", function (event) {

        event.preventDefault();

        var newInterest = $("#topic").val().trim();

        interests.push(newInterest);
        interests.splice(0,1);
        renderButtons();

      

     

    });

   

   












$(document).on("click", ".buttons", function () {
    

    var sports = $(this).attr("data-a").trim();

    // Constructing a queryURL using the sports name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        sports + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {
          
            // storing the data from the AJAX request in the results variable
            var results = response.data;

           

            $("#gifs-appear-here").empty();


            // Looping through each result item
            $.each(results, function (index, value)  {

                var getDiv = $("#gifs-appear-here");

                // Creating and storing a div tag
                var sportsDiv = $("<div>");

                // Creating a paragraph tag with the result item's rating

                var p = $("<p>").text("Gif Rating: " + results[index].rating);

                var pp =$("<p>").text("Title: " + results[index].title);
               
            sportsDiv.addClass("carousel-item");

            sportsDiv.addClass("active");


                p.addClass("gifdirections");
                pp.addClass("gifdirections");


            
            
            
            sportsDiv.attr("number",index);
               

// function makeActive () {
//     var title = $(".carousel-item").attr("number",0);

//     if 




//                 var PPPP = ppp.getAttribute("number");

//                 console.log(PPPP);

// }
   
         

            // console.log("number"+number);

            // function newCarousel() {
            //     if (index=0){

            //         sportsDiv.addClass("active");
            //     }
            //     else{


            //     }


            // }
            // newCarousel();
            //     console.log(index);
          

          


            // sportsDiv.attr("slide",i);


//             var numberOfSlide=sportsDiv.slide.val();

// console.log("numberOfSlide"+numberOfSlide);

           // why won't this work?


                



          
                

                
            

            // var indexShown
            // based on indexSHown add active class and remove active class from everything else. 
            

            // if (i=0) {
            //     sportsDiv.addClass("active");

            // }

// store the index of the image as a data attribute - when you are showing the image grab the value add class (if else)
           
         
            //    sportsDiv.addClass("d-block");
           


                // var pp = $("<p>").text("import_datetime" + results[i].import_datetime);

                // Creating and storing an image tag
                var sportsImage = $("<img>");
                
                sportsImage.addClass("d-block");
                sportsImage.addClass("img-fluid");

                sportsImage.addClass("changeImage");
                


                // Setting the src attribute of the image to a property pulled off the result item
                // sportsImage.attr("id", sports+results[i]);

                sportsImage.attr("src", results[index].images.original_still.url);



                sportsImage.attr("data-animate", results[index].images.fixed_height.url);

                sportsImage.attr("data-still", results[index].images.fixed_height_still.url);

               
                sportsImage.attr("data-state", "still");

                sportsImage.addClass("gif");

                sportsDiv.append(pp);
                sportsDiv.append(p);
               






                // Appending the paragraph and image tag to the sportsDiv
              




                // sportsDiv.append(pp);


                sportsDiv.append(sportsImage);

                getDiv.prepend(sportsDiv);

                getDiv.prepend("<br>");
              

                

                // Prependng the sportsDiv to the HTML page in the "#gifs-appear-here" div

              
               
                

          
                   
                            // $('#photoModal').modal('show');
                   
    
            


                // $("#gifs-appear-here").find("carousel-item").first().addClass("active");





               

                $("#photoModal").modal("show");

                $("#mycarousel").carousel();
            });
        });

    });
renderButtons();
    // function nextSlide() {

    //     if (slide > -1) {

    //         $("#mycarousel").carousel({ interval: 1000 });
    //     } else {
    //         $("#mycarousel").carousel({ interval: 5 });

    //     }

    // }




    $(document).on("click", ".gif", function () {
        var state = $(this).attr("data-state");

        if (state === "animate") {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        } else {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
    });




});


// $(document).ready(function () {
//     var state2 = $(".carousel-item").attr("number");

//     if (state2 === "0") {
     
        

//     }
//         class{


//     }

    


// });
