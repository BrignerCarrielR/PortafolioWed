function buscarEnPagina() {
    var entrada = document.getElementById('entrada').value;
    var contenido = document.documentElement.innerHTML;
    var expresion = new RegExp(entrada, 'gi');
    var coincidencias = contenido.match(expresion);
    console.log(entrada)
    if (coincidencias) {
        for (var i = 0; i < coincidencias.length; i++) {
            var resultado = document.createElement('p');
            resultado.textContent = coincidencias[i];
            resultados.appendChild(resultado);
        }

        alert('Se encontraron ' + coincidencias.length + ' coincidencias.');
    } else {
        alert('No se encontraron coincidencias.');
    }
}