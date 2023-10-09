window.onload = function() {
    document.getElementById("palomita").onchange = function(e) {
            a = e.target.value;
            if (a == "Palomitas con Caramelo") {
                var imagen = "imagenes/palomita1.webp";
            } else if (a == "Palomitas Cheetos") {
                var imagen = "imagenes/palomita2.webp";
            } else if (a == "Palomitas Doritos") {
                var imagen = "imagenes/palomita3.webp";
            } else if (a == "Palomitas Takis") {
                var imagen = "imagenes/palomita4.webp";
            }
    document.getElementById("imagen").src = imagen;
}
document.getElementById("cotizacion").onchange = function(es){
    n = es.target.value;
}
}

function calcular() {
    if (document.getElementById("palomita").value == "Seleccione el sabor:") {
        swal.fire({
            icon: "info",
            title: "Atención",
            html: '<p class="formatos1"> Seleccione el sabor... </p> '
        })
    } else {
        if (document.getElementById("cotizacion").value == "Cotización:") {
            swal.fire({
                icon: "info",
                title: "Atención",
                html: '<p class="formatos1"> Seleccione el combo... </p> '
            })
        } else {
            var montoCuota = 0;
            if (a == "Palomitas con Caramelo") {
                if (n == "Unidad") {
                    montoCuota = 3000;
                    swal.fire({
                        imageUrl: "imagenes/palomita1.webp",
                        html: "<p> Palomitas con Caramelo <br><br> <strong>Precio por unidad:</strong></p> " + "¢" + montoCuota,
                        imageWidth: 500,
                        imageHeight: 373,
                        imageAlt: "Palomitas con Caramelo",
                    })
                } else {
                    montoCuota = 4200;
                    swal.fire({
                        imageUrl: "imagenes/palomita1.webp",
                        html: "<p>Palomitas con Caramelo <br><br> <strong>Precio en combo:</strong></p> " + "¢" + montoCuota,
                        imageWidth: 500,
                        imageHeight: 373,
                        imageAlt: "Palomitas con Caramelo",
                    })
                }
            } else if (a == "Palomitas Cheetos") {
                if (n == "Unidad") {
                    montoCuota = 3500;
                    swal.fire({
                        html: "<p> Palomitas Cheetos<br><br> <strong>Precio por unidad:</strong></p> " + "¢" + montoCuota,
                        imageUrl: "imagenes/palomita2.webp",
                        imageWidth: 500,
                        imageHeight: 373,
                        imageAlt: "Palomitas Cheetos",
                    })
                } else {
                    montoCuota = 4600;
                    swal.fire({
                        html: "<p>Palomitas Cheetos<br><br> <strong>Precio en combo:</strong></p> " + "¢" + montoCuota,
                        imageUrl: "imagenes/palomita2.webp",
                        imageWidth: 500,
                        imageHeight: 373,
                        imageAlt: "Palomitas Cheetos",
                    })
                }
            } else if (a == "Palomitas Doritos") {
                if (n == "Unidad") {
                    montoCuota = 3500;
                    swal.fire({
                        html: "<p> Palomitas Doritos<br><br> <strong>Precio por unidad:</strong></p> " + "¢" + montoCuota,
                        imageUrl: "imagenes/palomita3.webp",
                        imageWidth: 500,
                        imageHeight: 373,
                        imageAlt: "Palomitas Doritos",
                    })
                } else {
                    montoCuota = 4600;
                    swal.fire({
                        html: "<p>Palomitas Doritos<br><br> <strong>Precio en combo:</strong></p> " + "¢" + montoCuota,
                        imageUrl: "imagenes/palomita3.webp",
                        imageWidth: 500,
                        imageHeight: 373,
                        imageAlt: "Palomitas Doritos",
                    })
                }
            } else if (a == "Palomitas Takis") {
                if (n == "Unidad") {
                    montoCuota = 3600;
                    swal.fire({
                        html: "<p>Palomitas Takis<br><br> <strong>Precio por unidad:</strong></p> " + "¢" + montoCuota,
                        imageUrl: "imagenes/palomita4.webp",
                        imageWidth: 500,
                        imageHeight: 373,
                        imageAlt: "Palomitas Takis",
                    })
                } else {
                    montoCuota = 4700;
                    swal.fire({
                        html: "<p>Palomitas Takis<br><br> <strong>Precio en combo:</strong></p> " + "¢" + montoCuota,
                        imageUrl: "imagenes/palomita4.webp",
                        imageWidth: 500,
                        imageHeight: 373,
                        imageAlt: "Palomitas Takis",
                    })
                }
            }
        }
    }
}