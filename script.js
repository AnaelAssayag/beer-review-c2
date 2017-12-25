
function addBeer(name, category) {
    beers.push({name:name , category:category});
   }

var beers = [];


function renderBeers() {
    $('.beers-list').find('li').remove();

    for(var i=0; i<beers.length; i++) {
        $('.beers-list').append('<li>'+ beers[i].name + (' ') + beers[i].category + '</li>');

    }
}


var clicked = function (beerName, beerCategory) {
    var beerName = $('.beer-input').val();
    var beerCategory = $('.category-input').val(); 
    var noteBeer = $('.note').val()
    addBeer(beerName, beerCategory)
    renderBeers()
}
$('button').on('click', clicked);


