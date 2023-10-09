


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
const acercaCinema = document.querySelector('.acercaCinema');
const acercaCinema1 = document.querySelector('.acercaCinema1');
const acercaCinema2 = document.querySelector('.acercaCinema2');
const acercaCinema3 = document.querySelector('.acercaCinema3');
const acercaCinema4 = document.querySelector('.acercaCinema4');
const conozcaCinema = document.querySelector('.conozcaCinema');
const conozcaCinema1 = document.querySelector('.conozcaCinema1');
const conozcaCinema2 = document.querySelector('.conozcaCinema2');
const footerHome = document.querySelector('.footerHome');
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
        acercaCinema.textContent = changeLanguage[attr].acercaCinema;
        acercaCinema1.textContent = changeLanguage[attr].acercaCinema1
        acercaCinema2.textContent = changeLanguage[attr].acercaCinema2;
        acercaCinema3.textContent = changeLanguage[attr].acercaCinema3;
        acercaCinema4.textContent = changeLanguage[attr].acercaCinema4;
        conozcaCinema.textContent = changeLanguage[attr].conozcaCinema;
        conozcaCinema1.textContent = changeLanguage[attr].conozcaCinema1;
        conozcaCinema2.textContent = changeLanguage[attr].conozcaCinema2;
        footerHome.textContent = changeLanguage[attr].footerHome;
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
        "acercaCinema": "Acerca de Cinema Classic",
        "acercaCinema1": "Cinema Classic es una nueva iniciativa de disfrutar el cine, ya sea películas en estreno o películas clásicas o como a los cinéfilos nos gusta referirnos, películas de culto. Si alguna vez has visto una película pero nunca pudiste verla en el cine, esta es tu oportunidad. Contamos con una temática diferente por cada día de la semana para que haya más variedad.",
        "acercaCinema2": "Brindamos también la posibilidad de que nuestros clientes elijan o nos recomienden alguna película, tenemos un amplio catálogo internacional.",
        "acercaCinema3": "Todas nuestras salas de cine cuentan con tecnología 100% digital.",
        "acercaCinema4": "Si eres amante del cine, comercial o independiente, clásicos, extranjeras o simplemente quieres pasar un buen rato, Cinema Classic es el mejor lugar.",
        "conozcaCinema": "Conozca Nuestros Cines",
        "conozcaCinema1": "Nuestros 3 cines están ubicadas en los lugares más céntricos del Valle Central. Con buena ubicación y seguridad, amplio parqueo y fácil acceso. Contamos con lo más moderno en proyeción con butacas cómodas y de buena cálidad. Nuestra dulcería es famosa por su variedad en golosinas y palomitas así como el buen servicio que brindamos. Compruebe la calidad de nuestro cine y déjanos tu comentario en nuestras redes sociales.",
        "conozcaCinema2": "es mostramos nuestros cines y su ubicación",
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
        "acercaCinema": "About Cinema Classic",
        "acercaCinema1": "Cinema Classic is a new initiative to enjoy movies, whether it's premier movies or classic movies or, as moviegoers like to refer to, cult movies. If you've ever seen a movie but never got to see it in the theater, here's your chance. We have a different theme for each day of the week so that there is more variety.",
        "acercaCinema2": "We also offer the possibility for our customers to choose or recommend a film to us, we have a wide international catalogue.",
        "acercaCinema3": "All our movie theaters have 100% digital technology.",
        "acercaCinema4": "If you are a movie lover, commercial or independent films, classics, foreign or just want to have a good time, Cinema Classic is the best place.",
        "conozcaCinema": "Know our Movie Theaters",
        "conozcaCinema1": "Our 3 Movie Theaters are located in the most central places in the Central Valley. With good location and security, ample parking and easy access. We have the most modern projection with comfortable seats and good quality. Our candy store is famous for its variety of candies and popcorn as well as the good service we provide. Check the quality of our cinema and leave us your comment on our social networks.",
        "conozcaCinema2": "We show you our movie theaters and their location",
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