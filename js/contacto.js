'use extrict';

window.addEventListener('load', init, false);

function init() {
    let nombre = document.getElementById('nombreTxt');
    let apellido = document.getElementById('apellidoTxt');
    let email = document.getElementById('emailTxt');
    let numero = document.getElementById('numberTxt');
    let mensaje = document.getElementById('mensajeTxt');
    let alerta = document.getElementById('mensajeAlert');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


    btnEnviar.onclick = function() {
        nombre = nombreTxt.value;
        apellido = apellidoTxt.value;
        email = emailTxt.value;
        numero = numberTxt.value;
        mensaje = mensajeTxt.value;

        if (nombre === '' && apellido === '' && email === '' && numero === '' && mensaje === '') {
            alerta.textContent = 'Debe llenar todos los campos';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (nombre === '') {
            alerta.textContent = 'El campo nombre esta vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (apellido === '') {
            alerta.textContent = 'El campo apellido esta vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (email === '') {
            alerta.textContent = 'El campo email esta vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (expressionEmail.test(email) === false) {
            alerta.textContent = 'Email invalido';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (numero === '') {
            alerta.textContent = 'El campo teléfono esta vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (mensaje === '') {
            alerta.textContent = 'El campo mensaje esta vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else {
            alerta.textContent = 'Mensaje enviado';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');
            //el id del formulario es #form2
            emailjs.sendForm('service_yhfvc45c54v', 'template_21pm6xn', '#form2', 'qN-p7-a_B_nYK6lhm');
            //limpia campos
            cleanInputs();
        }
    }

    function cleanInputs() {
        nombreTxt.value = '';
        apellidoTxt.value = '';
        emailTxt.value = '';
        numberTxt.value = '';
        mensajeTxt.value = '';
    }
}