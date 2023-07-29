//When the document loads
$(document).ready(function(){

    console.log("Hello");

    //Home Page

    //When the Hero image loads,animate it upwards
    $(".hero-image").animate({top: '-=100px'})

    //Browse Page

    $("#descriptionText").hide();

});

//When the card is clicked

$(".card").click(function(){

    //Toggle price and description text
    $("#pricetext").toggle();
    $("#descriptionText").toggle();

    //Resize the image to fit the additional content
    $(".car-img-top").toggleClass("small");
})