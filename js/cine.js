window.onload = function(){
    document.getElementById("output-img").innerHTML = "<img src='imagenes/logo-cines.webp' class='img-fluid ' alt='logo' />";

    document.getElementById("cines").onchange = function(e){
        n = e.target.value;
        
        let imagen = "<img src='imagenes/combo/" + n + ".webp' class='img-fluid ' alt='cines' />";


    let titulo = [
    "<h2>Cinema Classic - San José</h2>",
    "<h2>Cinema Classic - Heredia</h2>",
    "<h2>Cinema Classic - Cartago</h2>",
    ];

    let text = [
    "<p>Barrio la California</p>",
    "<p>En el Mall Oxygeno, San Francisco de Heredia</p>",
    "<p>Mall Paseo Metrópoli, Provincia de Cartago</p>",
];
    document.getElementById("output-title").innerHTML = titulo[ n - 1 ];
    document.getElementById("output-img").innerHTML = imagen;
    document.getElementById("output-text").innerHTML = text[ n - 1 ];
    
    };
};

document.getElementById("btn-clean").onclick = function(){
    document.getElementById("output-title").innerHTML = "";
    document.getElementById("output-img").innerHTML = "<img src='imagenes/logo-cines.webp' class='img-fluid ' alt='logo' />";
    document.getElementById("output-text").innerHTML = "";
    document.getElementById("cines").value = "";
};