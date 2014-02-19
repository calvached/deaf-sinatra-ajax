$(document).ready(function() {
    // This is called after the document has loaded in its entirety
    // This guarantees that any elements we bind to will exist on the page
    // when we try to bind to them

    // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
    $("#target").on('submit', function(event) {
        event.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: '/grandma',
            data: data,
            success: function(response) {
                // console.log($('p').html());
                console.log(response);
            }
        });


        // $.post("/grandma", function() {
        //     alert("success");
        // });
    });
});
