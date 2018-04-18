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
    onClick();
}

function allQuotes()    {
    console.log('allquotes???');
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

function onClick() {
    $('#randomButton').on('click', clickHandler);
}

function clickHandler() {
    console.log('free click czech');
    $.ajax({
        type: 'GET',
        url: '/quotes'
    })
        .then(function (response) {
            $('#randomQuote').text(response.quote);
            // console.log(response);
        });
    // $.ajax({
    //     type: 'GET',
    //     url: '/all-quotes'
    // })
    // .then(function(response)    {
    //     console.log(response);
    // });
}

