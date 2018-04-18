console.log('javascript czech one two');

$(document).ready(onReady);

function onReady()   {
    console.log('jquery czechhhh');
    $.ajax({
        type: 'GET',
        url: '/all-quotes'
    })
    .then(function(response)    {
        console.log(response);
    });
}

