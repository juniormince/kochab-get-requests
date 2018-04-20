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
    onRandomClick();
    onNewClick();
}

function onRandomClick() { 
    $('#randomButton').on('click', randomClickHandler);
}

function randomClickHandler() {
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

function onNewClick()   {
    $('#newQuoteButton').on('click', newQuote);
}


function newQuote ()    {
    console.log('new free czech');
    const addQuote = {
        title: $('#newQuote').val(),
        author: $('#newAuthor').val()
    }
    console.log('new quote object', addQuote);
    //new quote POST request
    //push to quote array
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