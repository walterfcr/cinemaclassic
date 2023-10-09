let outputResultado = document.querySelector('#outnResultado');
let outputResultado2 = document.querySelector('#outnResultado2');
let outputResultado3 = document.querySelector('#outnResultado3');
let outputResultado4 = document.querySelector('#outnResultado4');
let outputResultado5 = document.querySelector('#outnResultado5');
let outputResultado6 = document.querySelector('#outnResultado6');
let outputResultado7 = document.querySelector('#outnResultado7');

function mostrarSeleccionado() {
    let sinSeleccionar = false;
    if(!document.querySelector('input[name="grupo1"]:checked')) {
        Swal.fire({
            imageUrl: 'imagenes/logo.png',
            html: '<p>Debes seleccionar la respuesta de la pregunta:</p>'+
                  '<strong><p>Que te pareció el cine?</p></strong>'  
        })
        sinSeleccionar = true;
        if(sinSeleccionar){ mostrarSeleccionado.preventDefault();
        } 
    }  

    if(document.getElementById('radio1').checked)
    {
        outputResultado.innerHTML = "<br><strong>Que te pareció el cine?</strong> <br>Excelente<br>";
    }
    if(document.getElementById('radio2').checked)
    {
        outputResultado.innerHTML = "<br><strong>Que te pareció el cine?</strong> <br>Muy bueno<br>";
    }
    if(document.getElementById('radio3').checked)
    {
        outputResultado.innerHTML = "<br><strong>Que te pareció el cine?</strong> <br>bueno<br>";
    }
    if(document.getElementById('radio4').checked)
    {
        outputResultado.innerHTML = "<br><strong>Que te pareció el cine?</strong> <br>Regular<br>";
    }
    if(document.getElementById('radio5').checked)
    {
        outputResultado.innerHTML = "<br><strong>Que te pareció el cine?</strong> <br>Malo<br>";
    }

    if(!document.querySelector('input[name="grupo2"]:checked')) {
        Swal.fire({
            imageUrl: 'imagenes/logo.png',
            html: '<p>Debes seleccionar la respuesta de la pregunta:</p>'+
                  '<strong><p>Como ha sido el servicio?</p></strong>'  
        })
        sinSeleccionar = true;
        if(sinSeleccionar){ mostrarSeleccionado.preventDefault();
        } 
    }  

    if(document.getElementById('radio6').checked)
    {
        outputResultado2.innerHTML = "<br><strong>Como ha sido el servicio?</strong> <br>Excelente<br>";
    }
    if(document.getElementById('radio7').checked)
    {
        outputResultado2.innerHTML = "<br><strong>Como ha sido el servicio?</strong> <br>Muy bueno<br>";
    }
    if(document.getElementById('radio8').checked)
    {
        outputResultado2.innerHTML = "<br><strong>Como ha sido el servicio?</strong> <br>bueno<br>";
    }
    if(document.getElementById('radio9').checked)
    {
        outputResultado2.innerHTML = "<br><strong>Como ha sido el servicio?</strong> <br>Regular<br>";
    }
    if(document.getElementById('radio10').checked)
    {
        outputResultado2.innerHTML = "<br><strong>Como ha sido el servicio?</strong> <br>Malo<br>";
    }

    if(!document.querySelector('input[name="grupo3"]:checked')) {
        Swal.fire({
            imageUrl: 'imagenes/logo.png',
            html: '<p>Debes seleccionar la respuesta de la pregunta:</p>'+
                  '<strong><p>Fue fácil la compra en línea?</p></strong>'  
        })
        sinSeleccionar = true;
        if(sinSeleccionar){ mostrarSeleccionado.preventDefault();
        } 
    }  

    if(document.getElementById('radio11').checked)
    {
        outputResultado3.innerHTML = "<br><strong>Fue fácil la compra en línea?</strong> <br>Muy fácil<br>";
    }
    if(document.getElementById('radio12').checked)
    {
        outputResultado3.innerHTML = "<br><strong>Fue fácil la compra en línea?</strong> <br>Fácil<br>";
    }
    if(document.getElementById('radio13').checked)
    {
        outputResultado3.innerHTML = "<br><strong>Fue fácil la compra en línea?</strong> <br>Usable<br>";
    }
    if(document.getElementById('radio14').checked)
    {
        outputResultado3.innerHTML = "<br><strong>Fue fácil la compra en línea?</strong> <br>Difícil<br>";
    }
    if(document.getElementById('radio15').checked)
    {
        outputResultado3.innerHTML = "<br><strong>Fue fácil la compra en línea?</strong> <br>Muy Difícil<br>";
    }

    if(!document.querySelector('input[name="grupo4"]:checked')) {
        Swal.fire({
            imageUrl: 'imagenes/logo.png',
            html: '<p>Debes seleccionar la respuesta de la pregunta:</p>'+
                  '<strong><p>Como te enteraste de nuestro cine?</p></strong>'  
        })
        sinSeleccionar = true;
        if(sinSeleccionar){ mostrarSeleccionado.preventDefault();
        } 
    } 

    if(document.getElementById('radio16').checked)
    {
        outputResultado4.innerHTML = "<br><strong>Como te enteraste de nuestro cine?</strong> <br>La Televisión<br>";
    }
    if(document.getElementById('radio17').checked)
    {
        outputResultado4.innerHTML = "<br><strong>Como te enteraste de nuestro cine?</strong> <br>El Periódico<br>";
    }
    if(document.getElementById('radio18').checked)
    {
        outputResultado4.innerHTML = "<br><strong>Como te enteraste de nuestro cine?</strong> <br>Redes Sociales<br>";
    }
    if(document.getElementById('radio19').checked)
    {
        outputResultado4.innerHTML = "<br><strong>Como te enteraste de nuestro cine?</strong> <br>Amigos<br>";
    }
    if(document.getElementById('radio20').checked)
    {
        outputResultado4.innerHTML = "<br><strong>Como te enteraste de nuestro cine?</strong><br>Otros<br>";
    }

    if(!document.querySelector('input[name="grupo5"]:checked')) {
        Swal.fire({
            imageUrl: 'imagenes/logo.png',
            html: '<p>Debes seleccionar la respuesta de la pregunta:</p>'+
                  '<strong><p>Que te pareció la dulcería?</p></strong>'  
        })
        sinSeleccionar = true;
        if(sinSeleccionar){ mostrarSeleccionado.preventDefault();
        } 
    } 

    if(document.getElementById('radio21').checked)
    {
        outputResultado5.innerHTML = "<br><strong>Que te pareció la dulcería?</strong> <br>Excelente<br>";
    }
    if(document.getElementById('radio22').checked)
    {
        outputResultado5.innerHTML = "<br><strong>Que te pareció la dulcería?</strong> <br>Muy Buena<br>";
    }
    if(document.getElementById('radio23').checked)
    {
        outputResultado5.innerHTML = "<br><strong>Que te pareció la dulcería?</strong> <br>Buena<br>";
    }
    if(document.getElementById('radio24').checked)
    {
        outputResultado5.innerHTML = "<br><strong>Que te pareció la dulcería?</strong> <br>Regular<br>";
    }
    if(document.getElementById('radio25').checked)
    {
        outputResultado5.innerHTML = "<br><strong>Que te pareció la dulcería?</strong><br>Mala<br>";
    }

    if(!document.querySelector('input[name="grupo6"]:checked')) {
        Swal.fire({
            imageUrl: 'imagenes/logo.png',
            html: '<p>Debes seleccionar la respuesta de la pregunta:</p>'+
                  '<strong><p>Dentro de cuanto tiempo volverias?</p></strong>'  
        })
        sinSeleccionar = true;
        if(sinSeleccionar){ mostrarSeleccionado.preventDefault();
        } 
    } 

    if(document.getElementById('radio26').checked)
    {
        outputResultado6.innerHTML = "<br><strong>Dentro de cuanto tiempo volverias?</strong> <br>1 Semana<br>";
    }
    if(document.getElementById('radio27').checked)
    {
        outputResultado6.innerHTML = "<br><strong>Dentro de cuanto tiempo volverias?</strong> <br>2 Semanas<br>";
    }
    if(document.getElementById('radio28').checked)
    {
        outputResultado6.innerHTML = "<br><strong>Dentro de cuanto tiempo volverias?</strong> <br>1 Mes<br>";
    }
    if(document.getElementById('radio29').checked)
    {
        outputResultado6.innerHTML = "<br><strong>Dentro de cuanto tiempo volverias?</strong> <br>Más de 1 mes<br>";
    }
    if(document.getElementById('radio30').checked)
    {
        outputResultado6.innerHTML = "<br><strong>Dentro de cuanto tiempo volverias?</strong><br>Nunca<br>";
    }
    
    Swal.fire({
        imageUrl: 'imagenes/logo.png',
        html:
        outputResultado.innerHTML +
        outputResultado2.innerHTML +
        outputResultado3.innerHTML +
        outputResultado4.innerHTML +
        outputResultado5.innerHTML +
        outputResultado6.innerHTML,
    })

    outputResultado7.innerHTML = "<br><strong>Muchas Gracias!!</strong><br>Tu respuesta ha quedado registrada y será tomada en cuenta para ayudar a mejorar el servicio y hacerles pasar una experiencia inolvidable<br>";
  
}

function limpiar(){
    document.getElementById('radio1').checked = false;
    document.getElementById('radio2').checked = false;
    document.getElementById('radio3').checked = false;
    document.getElementById('radio4').checked = false;
    document.getElementById('radio5').checked = false;
    document.getElementById('radio6').checked = false;
    document.getElementById('radio7').checked = false;
    document.getElementById('radio8').checked = false;
    document.getElementById('radio9').checked = false;
    document.getElementById('radio10').checked = false;
    document.getElementById('radio11').checked = false;
    document.getElementById('radio12').checked = false;
    document.getElementById('radio13').checked = false;
    document.getElementById('radio14').checked = false;
    document.getElementById('radio15').checked = false;
    document.getElementById('radio16').checked = false;
    document.getElementById('radio17').checked = false;
    document.getElementById('radio18').checked = false;
    document.getElementById('radio19').checked = false;
    document.getElementById('radio20').checked = false;
    document.getElementById('radio21').checked = false;
    document.getElementById('radio22').checked = false;
    document.getElementById('radio23').checked = false;
    document.getElementById('radio24').checked = false;
    document.getElementById('radio25').checked = false;
    document.getElementById('radio26').checked = false;
    document.getElementById('radio27').checked = false;
    document.getElementById('radio28').checked = false;
    document.getElementById('radio29').checked = false;
    document.getElementById('radio30').checked = false;

}