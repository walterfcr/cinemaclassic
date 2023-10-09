


//declaracion de clases usando constantes
const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a'); 
const menuHome = document.querySelector('.menuHome');
const menuNosotros = document.querySelector('.menuNosotros');
const menuPeliculas = document.querySelector('.menuPeliculas');
const menuDulceria = document.querySelector('.menuDulceria');
const menuContacto = document.querySelector('.menuContacto');
const menuLunes = document.querySelector('.menuLunes');
const menuMartes = document.querySelector('.menuMartes');
const menuMiercoles = document.querySelector('.menuMiercoles');
const menuJueves = document.querySelector('.menuJueves');
const menuViernes = document.querySelector('.menuViernes');
const menuSabado = document.querySelector('.menuSabado');
const menuDomingo = document.querySelector('.menuDomingo');
const footerHome = document.querySelector('.footerHome');
const detallesMovie22 = document.querySelector('.detallesMovie22');
const detallesMovie23 = document.querySelector('.detallesMovie23');
const detallesMovie24 = document.querySelector('.detallesMovie24');
const comprarMovie22 = document.querySelector('.comprarMovie22');
const comprarMovie23 = document.querySelector('.comprarMovie23');
const comprarMovie24 = document.querySelector('.comprarMovie24');
const tituloSemanal = document.querySelector('.tituloSemanal');
const footerNosotros = document.querySelector('.footerNosotros');
const footerDulceria = document.querySelector('.footerDulceria');
const footerContacto = document.querySelector('.footerContacto');
const footerEncuesta = document.querySelector('.footerEncuesta');
const footerEncuesta2 = document.querySelector('.footerEncuesta2');
const footerSocial = document.querySelector('.footerSocial');
const footerLunes = document.querySelector('.footerLunes');
const footerMartes = document.querySelector('.footerMartes');
const footerMiercoles = document.querySelector('.footerMiercoles');
const footerJueves = document.querySelector('.footerJueves');
const footerViernes = document.querySelector('.footerViernes');
const footerSabado = document.querySelector('.footerSabado');
const footerDomingo = document.querySelector('.footerDomingo');






//recorrido del ciclo for-Each 
//link: es la variable constante del selector 'a' HTML
//r: es una variable declarada para apuntar al evento CLICK y obtener el atributo language
//getAttribute: devuelve el valor del atributo especificado en el elemento language HTML (BOTONES ESPAÑOL-INGLES)
link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
        //textContent es una propiedad JS para obtener el contenido de texto de un determinado elemento o nodo...
        menuHome.textContent = changeLanguage[attr].menuHome;
        menuNosotros.textContent = changeLanguage[attr].menuNosotros;
        menuPeliculas.textContent = changeLanguage[attr].menuPeliculas;
        menuLunes.textContent = changeLanguage[attr].menuLunes;
        menuMartes.textContent = changeLanguage[attr].menuMartes;
        menuMiercoles.textContent = changeLanguage[attr].menuMiercoles;
        menuJueves.textContent = changeLanguage[attr].menuJueves;
        menuViernes.textContent = changeLanguage[attr].menuViernes;
        menuSabado.textContent = changeLanguage[attr].menuSabado;
        menuDomingo.textContent = changeLanguage[attr].menuDomingo;
        menuDulceria.textContent = changeLanguage[attr].menuDulceria;
        menuContacto.textContent = changeLanguage[attr].menuContacto;
        detallesMovie22.textContent = changeLanguage[attr].detallesMovie22;
        detallesMovie23.textContent = changeLanguage[attr].detallesMovie23;
        detallesMovie24.textContent = changeLanguage[attr].detallesMovie24;
        comprarMovie22.textContent = changeLanguage[attr].comprarMovie22;
        comprarMovie23.textContent = changeLanguage[attr].comprarMovie23;
        comprarMovie24.textContent = changeLanguage[attr].comprarMovie24;
        tituloSemanal.textContent = changeLanguage[attr].tituloSemanal;
        footerNosotros.textContent = changeLanguage[attr].footerNosotros;
        footerDulceria.textContent = changeLanguage[attr].footerDulceria;
        footerContacto.textContent = changeLanguage[attr].footerContacto;
        footerEncuesta.textContent = changeLanguage[attr].footerEncuesta;
        footerEncuesta2.textContent = changeLanguage[attr].footerEncuesta2;
        footerSocial.textContent = changeLanguage[attr].footerSocial;
        footerLunes.textContent = changeLanguage[attr].footerLunes;
        footerMartes.textContent = changeLanguage[attr].footerMartes;
        footerMiercoles.textContent = changeLanguage[attr].footerMiercoles;
        footerJueves.textContent = changeLanguage[attr].footerJueves;
        footerViernes.textContent = changeLanguage[attr].footerViernes;
        footerSabado.textContent = changeLanguage[attr].footerSabado;
        footerDomingo.textContent = changeLanguage[attr].footerDomingo;


    });
});


//objeto de json que asigna los valores a cada clase en español
let changeLanguage = {

    "spanish":
    {

        "menuHome": "Inicio",
        "menuNosotros": "Nosotros",
        "menuPeliculas": "Películas",
        "menuDulceria": "Dulcería",
        "menuContacto": "Contáctenos",
        "menuLunes": "Lunes",
        "menuMartes": "Martes",
        "menuMiercoles": "Miércoles",
        "menuJueves": "Jueves",
        "menuViernes": "Viernes",
        "menuSabado": "Sábado",
        "menuDomingo": "Domingo",
        "tituloSemanal": "Jueves de cine Animado",
        "detallesMovie22": "Detalles",
        "detallesMovie23": "Detalles",
        "detallesMovie24": "Detalles",
        "comprarMovie22": "Comprar",
        "comprarMovie23": "Comprar",
        "comprarMovie24": "Comprar",
        "footerHome": "Inicio",
        "footerNosotros": "Nosotros",
        "footerDulceria": "Dulcería",
        "footerContacto": "Contáctenos",
        "footerEncuesta": "Si has visitado el cine, ayúdanos con esta encuesta para mejorar el servicio",
        "footerEncuesta2": "Ver Encuesta",
        "footerSocial": "Síguenos en",
        "footerLunes": "Lunes de cine Latino",
        "footerMartes": "Martes de cine Europeo",
        "footerMiercoles": "Miércoles de cine Asiático",
        "footerJueves": "Jueves de cine Animado",
        "footerViernes": "Viernes de cine de culto #1",
        "footerSabado": "Sábado de cine de culto #2",
        "footerDomingo": "Domingo director del mes",

    },

  //objeto de json que asigna los valores a cada clase en ingles  
    "english":
    {

        "menuHome": "Home",
        "menuNosotros": "About_Us",
        "menuPeliculas": "Movies",
        "menuDulceria": "Candy_Shop",
        "menuContacto": "Contact",
        "menuLunes": "Monday",
        "menuMartes": "Tuesday",
        "menuMiercoles": "Wednesday",
        "menuJueves": "Thursday",
        "menuViernes": "Friday",
        "menuSabado": "Saturday",
        "menuDomingo": "Sunday",
        "tituloSemanal": "Thursday's Animated Cinema",
        "detallesMovie22": "Details",
        "detallesMovie23": "Details",
        "detallesMovie24": "Details",
        "comprarMovie22": "Buy Tiquets",
        "comprarMovie23": "Buy Tiquets",
        "comprarMovie24": "Buy Tiquets",
        "footerHome": "Home",
        "footerNosotros": "About_Us",
        "footerDulceria": "Candy_Shop",
        "footerContacto": "Contact",
        "footerEncuesta": "If you have visited the cinema, help us with this survey to improve the service",
        "footerEncuesta2": "Go to Survey",
        "footerSocial": "Follow Us",
        "footerLunes": "Monday's Latin Cinema",
        "footerMartes": "Tuesday's European Cinema",
        "footerMiercoles": "Wednesday's Asian Cinema",
        "footerJueves": "Thursday's Animated Cinema",
        "footerViernes": "Friday's Cult Classics #1",
        "footerSabado": "Saturday's Cult Classics #2",
        "footerDomingo": "Sunday's Montly Director",

    }
}