
// todo lo que empiece con '//' se usa para escribir notas y no afecta el codigo

function enviar() {
    //Todo lo que está entre estas llaves va hacerse cuando se toque el botón 'Enviar'

    // de esta forma guardamos en la variable textoQueja el texto escrito por el usuario
    var textoQueja = document.getElementById('input-quejas').value

    // de esta manera modificamos el texto y lo guardamos en la variable 'textoModificado'
    var textoModificado = textoQueja.replace(/a|e|o|u/gi,'i')

    // de esta manera le ponemos el texto que está guardado en 'textoModificado'
    // al elemento que tiene el id 'quejas-titulo'
    document.getElementById('lugar-burla').innerHTML = textoModificado
}


// empecemos a hackear!

// en la línea 11 se le agrega un texto al final de lo que estaba guardado
// en la variable textoQueja . Nosotros no le queremos agregar nada, en cambio queremos que
// reemplace todas las vocales por una 'i'

// que pasa si cambio la linea 11 por esta? prueven a ver que pasa...
// var textoModificado = textoQueja.replace(/a|b|c|e/gi, 'z')
// acuérdense de guardar y refrescar la pagina para probar los cambios

// hace lo que nosotros queremos? mmm creo que no
// pero a lo mejor podemos modificarlo para que convieta todas las vocales en i

// 'replace' significa reemplazar en inglés, pero no sabemos muy bien como hay que usarla
// a veces hay que tratar de adivinar

// si leemos esto:
// var textoModificado = textoQueja.replace(/a|b|c|e/gi, 'z')
// cual les parece que es la letra que va a reemplazar a las otras?
// donde se ponen las letras que queremos que sean reemplazadas?

// la idea de este ejercicio es probar distintas cosas hasta ver
// cómo hacer para que funcione como nosotros queremos

// otra cosa ...
// parece que cuando apretamos enviar, el título de nuestra página se cambia
// por el de la queja. Hay que arreglarlo. Nosotros queremos que la queja
// aparezca en vez de donde dice 'queja de prueva', no en el título.
// hay que cambiar algo en la línea 15 para arreglarlo.
// fíjense en quejas.html para ver cual es el 'id' del elemento que quiero cambiar

