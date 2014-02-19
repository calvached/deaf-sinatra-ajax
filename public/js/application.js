$(document).ready(function() {
    // This is called after the document has loaded in its entirety
    // This guarantees that any elements we bind to will exist on the page
    // when we try to bind to them


    $("#target").on('submit', function(event) {
        event.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: '/grandma',
            data: data,
            dataType: 'html',
            success: function(response) {
                var $response = $(response);
                console.log($('p', $response)[0].innerText);
                $('#ajax_response').append($('p', $response)[0].innerText)
            }
        });
    });
});
