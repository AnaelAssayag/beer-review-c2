debugger
var beers = [];
var order = true


function addBeer(name, category, rate) {
    beers.push({ name: name, category: category, rate: rate });
}



function renderBeers() {
    $('.beers-list').find('li').remove();


    for (var i = 0; i < beers.length; i++) {
        $('.beers-list').append('<li>' + beers[i].name + (' ') + beers[i].category + (' ') + beers[i].rate + ' stars' + '</li> ');

    }

}

//button to display beers and their notation;

var addNwBeer = function (beerName, beerCategory) {
    var beerName = $('.beer-input').val();
    var beerCategory = $('.category-input').val();
    var beerRate = $('.rate-select').val();
    addBeer(beerName, beerCategory, beerRate)
    renderBeers()
    $('.form-group').find('form-control').remove();


}
$('#btn1').on('click', addNwBeer);

//button to sort beers;
var clickedRate = function () {
    if (order) {
        beers.sort(function (a, b) {
            return a.rate - b.rate;
        })
        order = false
    }
    if (order == false) {
        beers.sort(function (a, b) {
            return a.rate + b.rate;
        })
        order == true
    }
    renderBeers()
}

$('#btn2').on('click', clickedRate);







