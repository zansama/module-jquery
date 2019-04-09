console.log("exercice 6");
$(document).ready(function () {
    $('button[title="se_connecter"]').on('click', event => {
        let email = $('#email');
        let password = $('#passwword');
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!$(email).val()) {
            alert('veuillez renseigner un email');
            $('#email').addClass('alert alert-danger');
            return false
        } else if (!regex.test(email.val())) {
            alert(email.val() + ' n\'est pas un email valide')
            return false
        }
        if (!$(password).val()) {
            alert('veuillez renseigner un mot de passe');
            $('#passwword').addClass('alert alert-danger');
            return false
        } else if (password.val().length < 6) {
            alert('mot de passe trop court');
            return false
        }
        $('#passwword').removeClass('alert alert-danger');
        $('#email').removeClass('alert alert-danger');
        alert('Vous êtes connecté');

    })

    function isEmail(email) {
        return regex.test(email);
    }

});