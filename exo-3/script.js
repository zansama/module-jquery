console.log("exercice 3");
$(document).ready(function () {
    $('h1').text('Clément Mortas');
    $('#tagline').text('Je suis un jeune développeur en formation dans le Campus Numerique in the Alps');
    $("#myNavbar").find('ul').first().remove();
    $('.glyphicon-log-in').addClass('glyphicon-home').removeClass('glyphicon-log-in');
    var txt3 = document.createElement("strong");
    $('footer > p').html('<strong>Copyright 2017</strong>');

    var number = 0;
    $('div.col-sm-3 > p').each(function () {
        number++;
        var text = $(this).text();
        $(this).text(text.replace('Some text..', 'Mon projet ' + number));
    });

    var imgSet = [
        "img/assa.jpg", // 1 ere image
        "img/dragon.jpg", // 2 eme image ...
        "img/image.jpg",
        "img/image2.jpg",
        "img/mb.jpg",
        "img/one_piece.jpg",
        "img/ps4.jpg",
        "img/street.jpg"
    ];
    $(".img-responsive").each(function (i) {

        $(this).attr("src", imgSet[i]);

    });

    $('#clone').clone().addClass('premier').appendTo('#work1');
    $('div.premier:first').prependTo('#work1');
    $('.premier > img').attr('src', 'img/fantasy-dragon.jpg').attr('style', 'width:600px').removeClass('img-responsive');
    $('.premier > p').text('Mon Dernier Projet');
    $('.premier').removeClass('col-sm-3');


});

$('footer').addClass('intro');





