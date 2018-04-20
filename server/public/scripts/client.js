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
    getAllQuotes();
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

function onNewClick() {
    $('#newQuoteButton').on('click', newQuote);
}

function getAllQuotes() {
    //move GET request here (all-quotes)
    console.log('getAllQuotes czech');
    $.ajax({
        type: 'GET',
        url: '/all-quotes'
    })
        .then(function (response) {
            console.log(response);
            $('#allQuotes').empty();
            for (let i = 0; i < response.length; i++) {
                $('#allQuotes').append(`<li> ${response[i].quote} | ${response[i].author} </li>`);
            }
        });

}

function newQuote() {
    console.log('new free czech');
    const addQuote = {
        quote: $('#newQuote').val(),
        author: $('#newAuthor').val()
    }
    console.log('new quote object', addQuote);

    $.ajax({
        method: 'POST',
        url: '/add-quote',
        data: addQuote
    })
        .then(function (response) {
            console.log(response);
            getAllQuotes();
        });
}