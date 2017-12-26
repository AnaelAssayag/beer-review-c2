debugger

function addBeer(name, category, rate) {
    beers.push({name:name , category:category, rate:rate});
   }

var beers = [];


function renderBeers() {
    $('.beers-list').find('li').remove();
    //$('.beers-list').find('option').remove();

    for(var i=0; i<beers.length; i++) {
        $('.beers-list').append('<li>'+ beers[i].name + (' ') + beers[i].category + (' ')+ beers[i].rate + '</li> ' );
        //$('.beers-list').append( '<option>' + beers[i].rate  + (' stars') + '</option> ')

    }

}
 

var clicked = function (beerName, beerCategory) {
    var beerName = $('.beer-input').val();
    var beerCategory = $('.category-input').val(); 
    var beerRate = $('.rate-select').val();
    addBeer(beerName, beerCategory, beerRate)
    renderBeers()
}
$('button').on('click', clicked);


