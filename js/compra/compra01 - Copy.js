/** 
@param {date} date
@param {number} period 
*/

const addDays = (date, period) => {
    date.setDate(date.getDate() + period);
};

const addDays2 = (date2, period) => {
    date2.setDate(date2.getDate() + period);
};

const addDays3 = (date3, period) => {
    date3.setDate(date3.getDate() + period);
};

const addDays4 = (date4, period) => {
    date4.setDate(date4.getDate() + period);
};


//array para los meses
let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

//array para los dias
let dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

//variable para la fecha
let date = new Date();

//crear otra variable para mostrar formato a español
let fechaActual = dias_semana[date.getDay()] + ', ' + date.getDate() + ' de ' + meses[date.getMonth()] + ' de ' + date.getUTCFullYear();

//despues mostrar la variable fechaActual a como lo necesiten



let outputResultadoFecha = document.querySelector('#outputResultadoFecha');
document.getElementById("outputResultadoFecha").innerHTML = "<option>" + fechaActual + "</option>" ;

let date2 = new Date();
addDays2(date2, +1);
let fechaActual2 = dias_semana[date2.getDay()] + ', ' + date2.getDate() + ' de ' + meses[date2.getMonth()] + ' de ' + date2.getUTCFullYear();
document.getElementById("outputResultadoFecha2").innerHTML = "<option>" + fechaActual2 + "</option>" ;

let date3 = new Date();
addDays3(date3, +2);
let fechaActual3 = dias_semana[date3.getDay()] + ', ' + date3.getDate() + ' de ' + meses[date3.getMonth()] + ' de ' + date3.getUTCFullYear();
document.getElementById("outputResultadoFecha3").innerHTML = "<option>" + fechaActual3 + "</option>" ;

let date4 = new Date();
addDays4(date4, +3);
let fechaActual4 = dias_semana[date4.getDay()] + ', ' + date4.getDate() + ' de ' + meses[date4.getMonth()] + ' de ' + date4.getUTCFullYear();
document.getElementById("outputResultadoFecha4").innerHTML = "<option>" + fechaActual4 + "</option>" ;



// funcion para efectuar la compra
function compra(){
    
    let outputResultado2 = document.querySelector('#outnResultado2');
    let outputResultado3 = document.querySelector('#outnResultado3');
    let outputResultado4 = document.querySelector('#outnResultado4');   
    let outputResultado5 = document.querySelector('#outnResultado5');
    let outputResultado6 = document.querySelector('#outnResultado6');  
    let outputResultado7 = document.querySelector('#outnResultado7');  
    let outputResultado8 = document.querySelector('#outnResultado8');
    let outputResultado9 = document.querySelector('#outnResultado9');
    let nombre = document.getElementById("nombre").value;
    let form = document.getElementById('cinema');
    let outputResultado = document.querySelector('#outnResultado');
    let values = [];
    let checkSeleccionados = document.querySelectorAll('input[name="butacas"]:checked');
    let precio = checkSeleccionados.length * 3000;
    let checkSeleccionadosVip = document.querySelectorAll('input[name="butacas2"]:checked');
    let precioVip = checkSeleccionadosVip.length * 5000;
    let totalEntradas = precio + precioVip;
    let impuesto = totalEntradas / 100 * 5;
    let totalPagar = impuesto + totalEntradas;

    //validar campos nombre
    const input = document.getElementById('nombre');
    if(!input.checkValidity()) {
        Swal.fire({
            title: 'Atención Amigo!',
            text: 'No ingrese números ni símbolos en el nombre',
            icon: 'info',
            timer: 5000,
            onOpen: function() {
                swal.showLoading()
            }
        }).then(
            function() {},
            function(dismiss) {
                if (dismiss === 'timer') {
                    console.log('Desplegable cerrada')
                }
            }
        ) 
    }

    else
    if (nombre == ""){
        Swal.fire({
            title: 'Atención',
            icon:'error',
            iconColor:'#3a7aa5',
            text: 'Campos vacios. Intentar de nuevo por favor.',
            onOpen: function() {
                swal.showLoading()
            }
        }).then(
            function() {},
            function(dismiss) {
                if (dismiss === 'timer') {
                    console.log('Desplegable cerrada')
                }
            }
        ) 

    
    } else 
    // validar selects cine y tanda
    if(document.getElementById("fecha").value == "") {
        swal.fire({
            icon: "info",
            title: "Atención",
            html: '<p class="formatos1"> Debes elegir una fecha </p> '
        })
    } else if(document.getElementById("cine").value == "") {
        swal.fire({
            icon: "info",
            title: "Atención",
            html: '<p class="formatos1"> Debes elegir un cine </p> '
        })
    }else if(document.getElementById("tanda").value == "") {
        swal.fire({
            icon: "info",
            title: "Atención",
            html: '<p class="formatos1"> Debes elegir la Tanda </p> '
        })
    }



    
    selectElement = document.querySelector('#fecha');
    output = selectElement.value;
    if (selectElement.value == 1) {
        outputResultadoFecha.innerHTML = fechaActual;
        document.querySelector('.output3').textContent = fechaActual;
    }else if (selectElement.value == 2){
        outputResultadoFecha2.innerHTML = fechaActual2;
        document.querySelector('.output3').textContent = fechaActual2;
    }else if (selectElement.value == 3){
        outputResultadoFecha3.innerHTML = fechaActual3;
        document.querySelector('.output3').textContent = fechaActual3;
    } else if (selectElement.value == 4){
        outputResultadoFecha4.innerHTML = fechaActual4;
        document.querySelector('.output3').textContent = fechaActual4;
    }     

    selectElement = document.querySelector('#cine');
    output = selectElement.value;
    document.querySelector('.output1').textContent = output;

    selectElement = document.querySelector('#tanda');
    output = selectElement.value;
    document.querySelector('.output2').textContent = output;



    form.addEventListener('submit', function(e)
    {
        e.preventDefault();
        let checkboxes = document.getElementsByName('butacas');   
        let checkboxes2 = document.getElementsByName('butacas2');  

        // para validar la cantidad de checkbox limite y asientos vacíos
        let contador = 0;
        for (var i=0;i < document.forms["limitarCheckbox"].elements.length;i++) {
        inpt = document.forms[0].elements[i]; 
        if (inpt.checked) { 
        contador++;
        } 
        } if(contador > 10) {
        
            swal.fire({
                icon: "info",
                title: "Has alcanzado el limite de asientos",
            })    

        contador = 0;
        return false;
        }

        for(let i = 0 ; i < checkboxes.length; i++)
    {
            if(checkboxes[i].checked == true){
                values.push(checkboxes[i].value);{                 
            }
            
        }
  
    }

    for(let i = 0; i < checkboxes2.length; i++)
    {
            if(checkboxes2[i].checked == true){
                values.push(checkboxes2[i].value);{                 
            }
            
        }
  
    }

        outputResultado2.innerHTML = "Nombre: " + nombre; 
        outputResultado.innerHTML = "seleccionaste los asientos: " + values;  
        outputResultado3.innerHTML = "La cantidad de entradas regulares son: " + checkSeleccionados.length; 
        outputResultado4.innerHTML = "precio unitario: ¢3000" + "<br>" + "Total: " + "¢" + precio;
        outputResultado5.innerHTML = "La cantidad de entradas VIP son: " + checkSeleccionadosVip.length; 
        outputResultado6.innerHTML = "precio unitario: ¢5000" + "<br>" + "Total: " + "¢" + precioVip;
        outputResultado7.innerHTML = "el Total es: " + "¢" + totalEntradas;
        outputResultado8.innerHTML = "Cargo de Servicio 5%: " + "¢" + impuesto;
        outputResultado9.innerHTML = "Total a Pagar: " + "¢" + totalPagar;
       

    })

}


function pagar() {
    let numeroTarjeta = document.getElementById("numeroTarjeta").value;
    let codigoTarjeta = document.getElementById("codigoTarjeta").value;
    let fechaExpiracion = document.getElementById("fechaExpiracion").value;
    if (numeroTarjeta.length != 16 ){

        Swal.fire({
            title: 'Por favor ingrese los 16 digitos de el número de tarjeta.',
            iconColor:'#3a7aa5',
            html:'<iframe src="https://embed.lottiefiles.com/animation/80029"></iframe>',
            onOpen: function() {
                swal.showLoading()
            }
        }).then(
            function() {},
            function(dismiss) {
                if (dismiss === 'timer') {
                    console.log('Desplegable cerrada')
                }
            }
        ) 

}else if(fechaExpiracion == '' || new Date(fechaExpiracion) <= new Date()){

    Swal.fire({
        title: 'Por favor ingrese una fecha mayor al día de hoy.',
        iconColor:'#3a7aa5',
        html:'<iframe src="https://embed.lottiefiles.com/animation/80029"></iframe>',
        onOpen: function() {
            swal.showLoading()
        }
    }).then(
        function() {},
        function(dismiss) {
            if (dismiss === 'timer') {
                console.log('Desplegable cerrada')
            }
        }
    ) 

}else if (codigoTarjeta.length != 3 ){

    Swal.fire({
        title: 'Por favor ingrese el código de seguridad de 3 digitos.',
        iconColor:'#3a7aa5',
        html:'<iframe src="https://embed.lottiefiles.com/animation/80029"></iframe>',

        onOpen: function() {
            swal.showLoading()
        }
    }).then(
        function() {},
        function(dismiss) {
            if (dismiss === 'timer') {
                console.log('Desplegable cerrada')
            }
        }
    ) 

}else {
    Swal.fire({
        title: 'Compra Realizada',
        iconColor:'#3a7aa5',
        html:'<iframe src="https://embed.lottiefiles.com/animation/9912"></iframe>',
        onOpen: function() {
            swal.showLoading()
        }
    }).then(
        function() {},
        function(dismiss) {
            if (dismiss === 'timer') {
                console.log('Desplegable cerrada')
            }
        }
    ) 
}
}


function limpiar(){
    location.reload();
    document.getElementsByClassName("output1").value = "";
    document.getElementsByClassName("output2").value = "";
    document.getElementsByClassName("output3").value = "";
    outputResultado.innerHTML = "";   
    outputResultado2.innerHTML = "";  
    outputResultado3.innerHTML = "";
    outputResultado4.innerHTML = "";
    outputResultado5.innerHTML = "";
    outputResultado6.innerHTML = "";
    outputResultado7.innerHTML = "";
    outputResultado8.innerHTML = "";
    outputResultado9.innerHTML = "";
   
};