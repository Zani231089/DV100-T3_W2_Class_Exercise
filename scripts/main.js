//Plants array

const arrPlants = [
    {
        name: "Fikus Tree",
        price: 250,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "plant1.png"
    },

    {
        name: "White Sprite Succulent",
        price: 200,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "plant2.png"
    },

    {
        name: "Snake plant",
        price: 400,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "plant3.png"
    },

    {
        name: "Parlour Palm",
        price: 350,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "plant4.png"
    },

    {
        name: "Japanese Maple",
        price: 1200,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "plant5.png"
    },
];


//When the document loads
$(document).ready(function(){

    console.log("Hello");

    //Home Page

    //When the Hero image loads,animate it upwards
    $(".hero-image").animate({top: '-=100px'})

    //Browse Page
    $("#descriptionText").hide();

    loadPlants();


});

//Load all plants

function loadPlants(){

    //Run loop through the list of parts
    for (let i = 0; i < arrPlants.length; i++) {
        const plant = arrPlants[i];

        console.log(plant);

        //1:Select the plants container and the add the current array plant to it
        $("#plantsContainer").append($("#plantCardTemplate").html());

        //2: Create a variable that contains the most recently added plant card
        let currentChild = $("#plantsContainer").children().eq(i+1);

        //3: Set the content for the current card from the plants list array
        $(currentChild).find("#descriptionText").attr('src', 'assets/'+ plant.image);
        $(currentChild).find("#nameText").text(plant.name);
        $(currentChild).find("#priceText").text(plant.price);
        $(currentChild).find("#descriptionText").text(plant.description);

        //4: Hide the description text from the current card item
        $(currentChild).find("descriptionText").hide();

        
    }
}

//When the card is clicked

$("#plantsContainer").on('click', '.card', function() {

    //Toggle price and description text
    $(this).find("#priceText").toggle();
    $(this).find("#descriptionText").toggle();
    

    //Resize the image to fit the additional content
    $(this).find(".car-img-top").toggleClass("small");
});

//When the remove button is clicked

$("#removeButton").click(function(){

    //When the remove button is clicked is clicked
    $(".wholeRowOne").remove()
})