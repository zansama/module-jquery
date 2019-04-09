console.log("exercice 5");


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getComputerChoice(userChoice, computer) {
    var randomInt = getRandomInt(3);
    var computerChoice = $('<h2>');
    console.log(randomInt);
    ;
    if (randomInt === 0) {
        $('#rock').clone().show().appendTo('#image');
        computerChoice.text('l\'ordinateur à  choisi :').appendTo('#choix');
        computer = 'rock';
        determineWinner(userChoice, computer);
        return 'rock';
    } else if (randomInt === 1) {
        $('#paper').clone().show().appendTo('#image');
        computerChoice.text('l\'ordinateur à  choisi :').appendTo('#choix');
        computer = 'paper';
        determineWinner(userChoice, computer);
        return 'paper';
    } else if (randomInt === 2) {
        $('#scissors').clone().show().appendTo('#image');
        computerChoice.text('l\'ordinateur à  choisi :').appendTo('#choix');
        computer = 'scissors';
        determineWinner(userChoice, computer);
        return 'scissors';
    }
}

function determineWinner(userChoice, computer) {

    var blocResultat = $('<div>');
    var resultat = $('<h3>');
    blocResultat.attr('id', 'blocResultat');
    resultat.css('text-align','center');
    blocResultat.insertAfter('.container');


    console.log(userChoice);
    if (computer === userChoice) {
        console.log(computer);
        resultat.text('égalité').appendTo('#blocResultat');
        return 'egalite'
    }
    if (userChoice === 'rock') {
        console.log(computer);
        if (computer === 'scissors') {
            console.log('im here');
            resultat.text('Vous avez gagné').appendTo('#blocResultat');
            return 'won'
        } else {
            console.log('im here');
            resultat.text('Vous avez perdu').appendTo('#blocResultat');
            return 'lost'
        }
    } else if (userChoice === 'paper') {
        console.log(computer);
        if (computer === 'rock') {
            console.log('im here');
            resultat.text('Vous avez gagné').appendTo('#blocResultat');
            return 'won'
        } else {
            console.log('im here');
            resultat.text('Vous avez perdu').appendTo('#blocResultat');
            return 'lost'
        }
    } else if (userChoice === 'scissors') {
        console.log(computer);
        if (computer === 'paper') {
            console.log('im here');
            resultat.text('Vous avez gagné').appendTo('#blocResultat');
            return 'won'
        } else {
            console.log('im here');
            resultat.text('Vous avez perdu').appendTo('#blocResultat');
            return 'lost'
        }
    }


}

$(document).ready(function () {
    var userChoice = '';

    var Choice = $('<h2>');
    $('#rock').click(function () {
        userChoice = 'rock';
        $('#choix > h2').remove();
        Choice.text('vous avez choisi :').first().prependTo('#choix');
        $('#paper').hide();
        $('#scissors').hide();
        getComputerChoice(userChoice);
        return userChoice
    });

    $('#paper').click(function () {
        userChoice = 'paper';
        $('#choix > h2').remove();
        Choice.text('vous avez choisi :').first().prependTo('#choix');
        $('#rock').hide();
        $('#scissors').hide();
        getComputerChoice(userChoice);
        return userChoice
    });
    $('#scissors').click(function () {
        userChoice = 'scissors';
        $('#choix > h2').remove();
        Choice.text('vous avez choisi :').first().prependTo('#choix');
        $('#rock').hide();
        $('#paper').hide();
        getComputerChoice(userChoice);
        return userChoice
    });
});





