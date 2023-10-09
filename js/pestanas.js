let dia1 = document.querySelector('#dia1');
let dia2 = document.querySelector('#dia2');
let dia3 = document.querySelector('#dia3');
let dia4 = document.querySelector('#dia4');
let dia5 = document.querySelector('#dia5');
let dia6 = document.querySelector('#dia6');
let dia7 = document.querySelector('#dia7');


function lunes() {
    document.getElementById("lunes").style.display = 'block';
    dia1.classList.add("activo");
    document.getElementById("martes").style.display = 'none';
    dia2.classList.remove("activo");
    document.getElementById("miercoles").style.display = 'none';
    dia3.classList.remove("activo");
    document.getElementById("jueves").style.display = 'none';
    dia4.classList.remove("activo");
    document.getElementById("viernes").style.display = 'none';
    dia5.classList.remove("activo");
    document.getElementById("sabado").style.display = 'none';
    dia6.classList.remove("activo");
    document.getElementById("domingo").style.display = 'none';
    dia7.classList.remove("activo");
}

function martes(){
    document.getElementById("lunes").style.display = 'none';
    dia1.classList.remove("activo");
    document.getElementById("martes").style.display = 'block';
    dia2.classList.add("activo");
    document.getElementById("miercoles").style.display = 'none';
    dia3.classList.remove("activo");
    document.getElementById("jueves").style.display = 'none';
    dia4.classList.remove("activo");
    document.getElementById("viernes").style.display = 'none';
    dia5.classList.remove("activo");
    document.getElementById("sabado").style.display = 'none';
    dia6.classList.remove("activo");
    document.getElementById("domingo").style.display = 'none';
    dia7.classList.remove("activo");
  
}

function miercoles(){
    document.getElementById("lunes").style.display = 'none';
    dia1.classList.remove("activo");
    document.getElementById("martes").style.display = 'none';
    dia2.classList.remove("activo");
    document.getElementById("miercoles").style.display = 'block';
    dia3.classList.add("activo");
    document.getElementById("jueves").style.display = 'none';
    dia4.classList.remove("activo");
    document.getElementById("viernes").style.display = 'none';
    dia5.classList.remove("activo");
    document.getElementById("sabado").style.display = 'none';
    dia6.classList.remove("activo");
    document.getElementById("domingo").style.display = 'none';
    dia7.classList.remove("activo");
}

function jueves(){
    document.getElementById("lunes").style.display = 'none';
    dia1.classList.remove("activo");
    document.getElementById("martes").style.display = 'none';
    dia2.classList.remove("activo");
    document.getElementById("miercoles").style.display = 'none';
    dia3.classList.remove("activo");
    document.getElementById("jueves").style.display = 'block';
    dia4.classList.add("activo");
    document.getElementById("viernes").style.display = 'none';
    dia5.classList.remove("activo");
    document.getElementById("sabado").style.display = 'none';
    dia6.classList.remove("activo");
    document.getElementById("domingo").style.display = 'none';
    dia7.classList.remove("activo");
}

function viernes(){
    document.getElementById("lunes").style.display = 'none';
    dia1.classList.remove("activo");
    document.getElementById("martes").style.display = 'none';
    dia2.classList.remove("activo");
    document.getElementById("miercoles").style.display = 'none';
    dia3.classList.remove("activo");
    document.getElementById("jueves").style.display = 'none';
    dia4.classList.remove("activo");
    document.getElementById("viernes").style.display = 'block';
    dia5.classList.add("activo");
    document.getElementById("sabado").style.display = 'none';
    dia6.classList.remove("activo");
    document.getElementById("domingo").style.display = 'none';
    dia7.classList.remove("activo");
}

function sabado(){
    document.getElementById("lunes").style.display = 'none';
    dia1.classList.remove("activo");
    document.getElementById("martes").style.display = 'none';
    dia2.classList.remove("activo");
    document.getElementById("miercoles").style.display = 'none';
    dia3.classList.remove("activo");
    document.getElementById("jueves").style.display = 'none';
    dia4.classList.remove("activo");
    document.getElementById("viernes").style.display = 'none';
    dia5.classList.remove("activo");
    document.getElementById("sabado").style.display = 'block';
    dia6.classList.add("activo");
    document.getElementById("domingo").style.display = 'none';
    dia7.classList.remove("activo");
}

function domingo(){
    document.getElementById("lunes").style.display = 'none';
    dia1.classList.remove("activo");
    document.getElementById("martes").style.display = 'none';
    dia2.classList.remove("activo");
    document.getElementById("miercoles").style.display = 'none';
    dia3.classList.remove("activo");
    document.getElementById("jueves").style.display = 'none';
    dia4.classList.remove("activo");
    document.getElementById("viernes").style.display = 'none';
    dia5.classList.remove("activo");
    document.getElementById("sabado").style.display = 'none';
    dia6.classList.remove("activo");
    document.getElementById("domingo").style.display = 'block';
    dia7.classList.add("activo");
}




