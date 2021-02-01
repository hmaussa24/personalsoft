// filta el archivo data-1.json y selecciona las ciudades y las agrega al select #selectCiudad
function filtrarCiudades() {
    let ciudades = [];
    $.get('data-1.json', function (data) {
        data.forEach(element => {
            if (!ciudades.includes(element.Ciudad)) {
                ciudades.push(element.Ciudad);
                $('#selectCiudad').append($('<option>', {
                    value: element.Ciudad,
                    text: element.Ciudad
                }));
            }
        });


    })
}

// filta el archivo data-1.json y selecciona los tipos de Vivienda y las agrega al select #selectTipo
function filtrarTiposVivienda() {
    let tiposVivienda = [];
    $.get('data-1.json', function (data) {
        data.forEach(element => {
            if (!tiposVivienda.includes(element.Tipo)) {
                tiposVivienda.push(element.Tipo);
                $('#selectTipo').append($('<option>', {
                    value: element.Tipo,
                    text: element.Tipo
                }));
            }
        });


    })
}

// funcion que lista todos los elementos de archivo data-1.json
function listAll() {
    $('#resultados').html("");
    $.get('data-1.json', function (data) {
        data.forEach(element => {
            $('#resultados').append(
                '<div class="contenedorresultado">' +
                '<img alt="Apartamnento" src="https://1095028145.rsc.cdn77.org/wp-content/uploads/2015/12/comprar-casa-1320x878.jpg" class="imagevivienda">' +
                '<div class="informacionvivienda">' +
                '<p style="font-weight: bold;">Direccion: <span style="font-weight: normal;">' + element.Direccion + '</span></p>' +
                '<p style="font-weight: bold;">Ciudad: <span style="font-weight: normal;">' + element.Ciudad + '</span></p>' +
                '<p style="font-weight: bold;">Telefono: <span style="font-weight: normal;">' + element.Telefono + '</span></p>' +
                '<p style="font-weight: bold;">Codigo Postal: <span style="font-weight: normal;">' + element.Codigo_Postal + '</span></p>' +
                '<p style="font-weight: bold;">Tipo de Vivienda: <span style="font-weight: normal;">' + element.Tipo + '</span></p>' +
                '<p style="font-weight: bold;">Precio: <span style="font-weight: normal;">' + element.Precio + '</span></p>' +
                '</div>' +
                '<a class="waves-effect waves-light btn botonguardar" onClick="setVivienda(' + element.Id + ')">Guardar</a>' +
                '<div class="divider"></div>' +
                '</div>'
            );

        });


    })
}


//Funcion para filtar las viviendas por tipo y por ciudad

function filtrar() {
    $.get('data-1.json', function (data) {
        $('#resultados').html("");
        let tipo = $('#selectTipo').val();
        let ciudad = $('#selectCiudad').val();
        data.forEach(element => {
            if (tipo != 0 && ciudad != 0) {
                console.log()
                if (tipo == element.Tipo && ciudad == element.Ciudad) {
                    $('#resultados').append(
                        '<div class="contenedorresultado">' +
                        '<img alt="Apartamnento" src="https://1095028145.rsc.cdn77.org/wp-content/uploads/2015/12/comprar-casa-1320x878.jpg" class="imagevivienda">' +
                        '<div class="informacionvivienda">' +
                        '<p style="font-weight: bold;">Direccion: <span style="font-weight: normal;">' + element.Direccion + '</span></p>' +
                        '<p style="font-weight: bold;">Ciudad: <span style="font-weight: normal;">' + element.Ciudad + '</span></p>' +
                        '<p style="font-weight: bold;">Telefono: <span style="font-weight: normal;">' + element.Telefono + '</span></p>' +
                        '<p style="font-weight: bold;">Codigo Postal: <span style="font-weight: normal;">' + element.Codigo_Postal + '</span></p>' +
                        '<p style="font-weight: bold;">Tipo de Vivienda: <span style="font-weight: normal;">' + element.Tipo + '</span></p>' +
                        '<p style="font-weight: bold;">Precio: <span style="font-weight: normal;">' + element.Precio + '</span></p>' +
                        '</div>' +
                        '<a class="waves-effect waves-light btn botonguardar">Guardar</a>' +
                        '<div class="divider"></div>' +
                        '</div>'
                    );
                }
            }

            if (tipo != 0 && ciudad == 0) {
                console.log()
                if (tipo == element.Tipo) {
                    $('#resultados').append(
                        '<div class="contenedorresultado">' +
                        '<img alt="Apartamnento" src="https://1095028145.rsc.cdn77.org/wp-content/uploads/2015/12/comprar-casa-1320x878.jpg" class="imagevivienda">' +
                        '<div class="informacionvivienda">' +
                        '<p style="font-weight: bold;">Direccion: <span style="font-weight: normal;">' + element.Direccion + '</span></p>' +
                        '<p style="font-weight: bold;">Ciudad: <span style="font-weight: normal;">' + element.Ciudad + '</span></p>' +
                        '<p style="font-weight: bold;">Telefono: <span style="font-weight: normal;">' + element.Telefono + '</span></p>' +
                        '<p style="font-weight: bold;">Codigo Postal: <span style="font-weight: normal;">' + element.Codigo_Postal + '</span></p>' +
                        '<p style="font-weight: bold;">Tipo de Vivienda: <span style="font-weight: normal;">' + element.Tipo + '</span></p>' +
                        '<p style="font-weight: bold;">Precio: <span style="font-weight: normal;">' + element.Precio + '</span></p>' +
                        '</div>' +
                        '<a class="waves-effect waves-light btn botonguardar">Guardar</a>' +
                        '<div class="divider"></div>' +
                        '</div>'
                    );
                }
            }

            if (tipo == 0 && ciudad != 0) {
                console.log()
                if (ciudad == element.Ciudad) {
                    $('#resultados').append(
                        '<div class="contenedorresultado">' +
                        '<img alt="Apartamnento" src="https://1095028145.rsc.cdn77.org/wp-content/uploads/2015/12/comprar-casa-1320x878.jpg" class="imagevivienda">' +
                        '<div class="informacionvivienda">' +
                        '<p style="font-weight: bold;">Direccion: <span style="font-weight: normal;">' + element.Direccion + '</span></p>' +
                        '<p style="font-weight: bold;">Ciudad: <span style="font-weight: normal;">' + element.Ciudad + '</span></p>' +
                        '<p style="font-weight: bold;">Telefono: <span style="font-weight: normal;">' + element.Telefono + '</span></p>' +
                        '<p style="font-weight: bold;">Codigo Postal: <span style="font-weight: normal;">' + element.Codigo_Postal + '</span></p>' +
                        '<p style="font-weight: bold;">Tipo de Vivienda: <span style="font-weight: normal;">' + element.Tipo + '</span></p>' +
                        '<p style="font-weight: bold;">Precio: <span style="font-weight: normal;">' + element.Precio + '</span></p>' +
                        '</div>' +
                        '<a class="waves-effect waves-light btn botonguardar" >Guardar</a>' +
                        '<div class="divider"></div>' +
                        '</div>'
                    );
                }
            }


        });


    })

}


/// lista los bienes que el usaro tenga guardados en la base de datos
async function getViviendasGuardadas() {
    $('#bienesguardados').html("")
    let response = await fetch('http://localhost/PersonalSoft/suplosBackEnd/php/Controladores/BienesControlador.php')
    let data = await response.json()
    //console.log(data)
    data.forEach(element => {
        console.log("aaa",element)
        $('#bienesguardados').append(
            '<div class="contenedorresultado">' +
            '<img alt="Apartamnento" src="https://1095028145.rsc.cdn77.org/wp-content/uploads/2015/12/comprar-casa-1320x878.jpg" class="imagevivienda">' +
            '<div class="informacionvivienda">' +
            '<p style="font-weight: bold;">Direccion: <span style="font-weight: normal;">' + element.Direccion + '</span></p>' +
            '<p style="font-weight: bold;">Ciudad: <span style="font-weight: normal;">' + element.Ciudad + '</span></p>' +
            '<p style="font-weight: bold;">Telefono: <span style="font-weight: normal;">' + element.Telefono + '</span></p>' +
            '<p style="font-weight: bold;">Codigo Postal: <span style="font-weight: normal;">' + element.Codigo_Postal + '</span></p>' +
            '<p style="font-weight: bold;">Tipo de Vivienda: <span style="font-weight: normal;">' + element.Tipo + '</span></p>' +
            '<p style="font-weight: bold;">Precio: <span style="font-weight: normal;">' + element.Precio + '</span></p>' +
            '</div>' +
            '<a class="waves-effect waves-light btn botonguardar" onClick="eliminar('+ element.id +')">eliminar</a>' +
            '<div class="divider"></div>' +
            '</div>'
        );
    })


}

/// funcion para guardar una vivienda en la base de datos
function setVivienda(id) {
    $.get('data-1.json', function (data) {
        data.forEach(async element => {
            if (element.Id === id) {
                console.log("pastel =>", element)
                await fetch('http://localhost/PersonalSoft/suplosBackEnd/php/Controladores/GuardarBienes.php', {
                    method: 'POST',
                    body: JSON.stringify(element)
                })
                    .then(async data => {
                        let respuesta = await data.json();
                        if (respuesta.response === 'ok') {
                            alert("Datos Guardados");
                            $('#bienesguardados').append(
                                '<div class="contenedorresultado">' +
                                '<img alt="Apartamnento" src="https://1095028145.rsc.cdn77.org/wp-content/uploads/2015/12/comprar-casa-1320x878.jpg" class="imagevivienda">' +
                                '<div class="informacionvivienda">' +
                                '<p style="font-weight: bold;">Direccion: <span style="font-weight: normal;">' + element.Direccion + '</span></p>' +
                                '<p style="font-weight: bold;">Ciudad: <span style="font-weight: normal;">' + element.Ciudad + '</span></p>' +
                                '<p style="font-weight: bold;">Telefono: <span style="font-weight: normal;">' + element.Telefono + '</span></p>' +
                                '<p style="font-weight: bold;">Codigo Postal: <span style="font-weight: normal;">' + element.Codigo_Postal + '</span></p>' +
                                '<p style="font-weight: bold;">Tipo de Vivienda: <span style="font-weight: normal;">' + element.Tipo + '</span></p>' +
                                '<p style="font-weight: bold;">Precio: <span style="font-weight: normal;">' + element.Precio + '</span></p>' +
                                '</div>' +
                                '<a class="waves-effect waves-light btn botonguardar">eliminar</a>' +
                                '<div class="divider"></div>' +
                                '</div>'
                            );
                        }
                    })
            }

        });
    })

}

//funcion para que envia el id de la vivienda a eliminar
async function eliminar(id) {
    await fetch('http://localhost/PersonalSoft/suplosBackEnd/php/Controladores/EliminarVivienda.php', {
        method: 'POST',
        body: JSON.stringify({id: id})
    })
        .then(async data => {
          getViviendasGuardadas()
        })
}

// filta el archivo data-1.json y selecciona las ciudades y las agrega al select #selectCiudad
function filtrarCiudadesReporte() {
    let ciudades = [];
    $.get('data-1.json', function (data) {
        data.forEach(element => {
            if (!ciudades.includes(element.Ciudad)) {
                ciudades.push(element.Ciudad);
                $('#selectCiudadReporte').append($('<option>', {
                    value: element.Ciudad,
                    text: element.Ciudad
                }));
            }
        });


    })
}

// filta el archivo data-1.json y selecciona los tipos de Vivienda y las agrega al select #selectTipo
function filtrarTiposViviendaReporte() {
    let tiposVivienda = [];
    $.get('data-1.json', function (data) {
        data.forEach(element => {
            if (!tiposVivienda.includes(element.Tipo)) {
                tiposVivienda.push(element.Tipo);
                $('#selectTipoReporte').append($('<option>', {
                    value: element.Tipo,
                    text: element.Tipo
                }));
            }
        });


    })
}

