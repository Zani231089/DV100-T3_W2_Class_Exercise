//Plants array

const arrPlants = [
    {
        name: "Fikus Tree",
        price: 250,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "plant1.png",
        lightAmount: "low",
        addedDate: "2023-03-25"
    },

    {
        name: "White Sprite Succulent",
        price: 200,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "plant2.png",
        lightAmount: "bright",
        addedDate: "2023-03-13"
    },

    {
        name: "Snake plant",
        price: 400,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "plant3.png",
        lightAmount: "low",
        addedDate: "2023-05-25"
    },

    {
        name: "Parlour Palm",
        price: 350,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "plant4.png",
        lightAmount: "low",
        addedDate: "2023-03-03"

    },

    {
        name: "Japanese Maple",
        price: 1200,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "plant5.png",
        lightAmount: "bright",
        addedDate: "2023-04-25"

    },
];

let appliedFilter = "";
let appliedSort = "date added"


//When the document loads
$(document).ready(function(){

    console.log("Hello");

    //Home Page

    //When the Hero image loads,animate it upwards
    $(".hero-image").animate({top: '-=100px'})

    //Browse Page
    $("#descriptionText").hide();

    filterSortPlants();


});

//Load all plants

function loadPlants(plantsToShow){

    //Empty plants container
    $("#plantsContainer").empty

    //Run loop through the list of parts
    for (let i = 0; i < plantsToShow.length; i++) {
        const plant = plantsToShow[i];

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

//When a filter or sort option is clicked

$("input[name='filterRadio']").click(function(){
    appliedFilter = $(this).attr('value');

    console.log(appliedFilter);
    filterSortPlants();
});

$("input[name='sortRadio']").click(function(){
    appliedSort = $(this).attr('value');

    console.log(appliedSort);
    filterSortPlants();
});

function filterSortPlants(){

    let filteredSortedArrPlants = [];

    //Filter plants
    if(appliedFilter){
        filteredSortedArrPlants = arrPlants.filter(plant => plant.lightAmount == appliedFilter)
    } else{
        filteredSortedArrPlants = arrPlants;
    }

    //Sort plants
    if(appliedSort== "low to high"){
        //Sort the plants from the lowest to highest
        filteredSortedArrPlants = filteredSortedArrPlants.sort((a,b) => {
            return a.price - b.price;
        });
    }else if ( appliedSort== "date added"){

        filteredSortedArrPlants = filteredSortedArrPlants.sort((a,b) => {
            let da = new Date(a.addedDate);
            let db = new Date(b.addedDate);

            return db - da;
        });
    }

    console.log(filteredSortedArrPlants)
    loadPlants(filteredSortedArrPlants)
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