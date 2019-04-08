console.log("exercice 4");
$(document).ready(function () {

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    $('#signup').click(function () {

        if (isEmail($('#email').val())) {
            var respMail = $('#email').val();
            console.log(respMail);
            alert("Merci " + respMail + " nous vous tiendrons informé des différentes offres");
        } else {
            alert("adresse mail invalide");
        }

    });
    $('#product').dblclick(function () {
        $(this).hide();
    });

    var counter = 0;
    var myAfter = $('<p>');
    myAfter.attr('id', 'count');
    $('.glyphicon-shopping-cart').after(myAfter);
    $('#count').text(counter);
    $('.img1').click(function () {
        counter++;
        $('#count').text(counter);

    })


});