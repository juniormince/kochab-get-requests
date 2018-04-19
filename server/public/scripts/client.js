console.log('javascript czech one two');

$(document).ready(onReady);

function onReady() {
    console.log('jquery czechhhh');

    $.ajax({
        type: 'GET',
        url: '/quotes'
    })
        .then(function (response) {
            $('#randomQuote').text(response.quote);
        });
    allQuotes();
    onRandomClick(); //rename randomClick
}

function onRandomClick() { //rename randomClick
    $('#randomButton').on('click', clickHandler); //randomClickHandler
}

function clickHandler() { //rename randomClickHandler
    console.log('free click czech');
    $.ajax({
        type: 'GET',
        url: '/quotes'
    })
        .then(function (response) {
            $('#randomQuote').text(response.quote);
            // console.log(response);
        });
}


function newQuote ()    {
    //new quote on click
    //$('#newQuoteButton').on('click', newQuoteHandler function);
}




function getAllQuotes() {
    //move GET request here (all-quotes)
    console.log('getAllQuotes czech');
}

function allQuotes()    {
    console.log('allquotes czech');
    $.ajax({
        type: 'GET',
        url: '/all-quotes'
    })
        .then(function (response) {
            for (let i=0; i<response.length; i++){
                $('#allQuotes').append(`<li> ${response[i].quote} | ${response[i].author} </li>`);
            }
        });
}