# Contador de Videos de Dragon Ball vistos en Clase
![goku mirando la tele](goku_mirando_videos.jpg "goku mirando la tele")

## antes que nada
`git checkout master`

`git pull `

## Desde Index, hacer click en un botón 'contador' y que vaya a la página 'contador'
Cómo se hace esto?
Nosotros, ya tenemos algo parecido en la sección 'quejas': tocamos el botón 'quejas' y
vamos a una página que se llama quejas

### Crear una página llamada 'contador.html'
Vamos a seguir el modelo de 'quejas'.
![carpeta quejas](carpeta_quejas.png "carpeta quejas")

Si ustedes se fijan, quejas.html está
adentro de una carpeta que se llama 'quejas'.
Hay que crear una carpeta que se llame 'contador' y adentro un archivo que se llame 'contador.html'

Por ahora 'contador.html' puede estar vacío

### Vincular la página contador.html con el botón contador que está en index
Si yo toco el botón 'Quejas' voy a una página quejas.
Si yo vuelvo a la página index y toco el botón 'Contador', ¿que pasa?

Naranja

Hay que vincular el botón 'Contador' con la página contador.html

Cómo está hecho en 'Quejas' ?
![carpeta quejas](menu_index.png "carpeta quejas")
Que tiene la línea donde está 'Quejas' que no tiene 'Contador'?

Prueben, y cuando hagan click en 'Contador' y vayan a una página en blanco lo lograron.

## Ponerle contenido a la página contador
Así como está la página contador está en blanco. Vamos a meterle algo. Para eso, lo más fácil es copiar todo lo que está en la página 'quejas.html' y pegárselo a 'contador.html'

Cuando hagan esto van a ver que la página 'contador.html' se ve igual a 'quejas.html'. Vamos a cambiar varias cosas

### Sacar la foto del bebé
No queremos bebés llorones en esta página.
Para esto hay que borrarle una línea a contador.html

Una sola línea

Cual línea? tiene la palabra 'image' (imagen en inglés). También tiene la palabra 'bebe'.
Está arriba del titulo

### Cambiar el título
Hay que encontrar cual es el título y cambiarlo a 'Contador de videos de Dragon Ball vistos en clase'

Pistas: No confundir con el menú. El liugar indicado tiene la palabra titulo en la misma línea..........

### Volar un par de cosas y modificar lo que sirve
Hay que eliminar el texto que dice: 'Su opinión, para nosotros, es tan vital como el rocío de la mañana que cae.'

Hay que eliminar esa 'area de texto' gigante que estaba ahí para escribir la queja.

Nosotros necesitamos un botón que diga 'Agregar Uno'. Para eso vamos a cambiarle el texto al botón que dice 'Enviar'

En vez de 'Su queja' vamos a necesitar que diga 'Cantidad de videos de dragon ball vistos en clase:'

En vez de 'Queja de prueba' vamos a hacer que diga '0' (el número 0)

Lo último: si se fijan en el menú, el botón 'Quejas' va a estar en rojo. Eso es por que en la línea 27 el botón tiene esta clase `class="current" `. Nosotros queremos que en rojo esté el botón 'Contador' entonces tenemos que *cortar* ese fragmento y pegárselo a la línea siguiente.

Miren cómo quedó. Ya está todo listo para hacerlo andar. Si no les salió lo último no se preocupen

## Uniendo el html con el js
![fusión](fusion.jpg "fusión")
### Crear el archivo 'contador.js'
Fíjense en la carpeta quejas. Hay un archivo más, que se llama 'quejas.js'.

Nosotros vamos a seguir ese modelo y vamos a crear un archivo que se llame 'contador.js' adentro de la carpeta contador
Por ahora puede quedar el archivo vacío.

Fíjense en el archivo 'contador.html'
Abajo de todo hay una línea que 'incluye' al archivo 'quejas.js'.
![referencia al js](referencia_al_js.png "referencia al js")
En vez de esto nosotros queremos que incluya al archivo que recién creamos: 'contador.js'


# Fin de la primera parte, Comienzo de la segunda
Si hacemos click en 'Agregar Uno' no pasa nada.

Tenemos que hacer algo parecido a lo que hicimos en 'quejas'.

Vamos a investigar como está hacho en la página quejas
Quejas tiene esta línea:

```html
    <button onclick="enviar()">Enviar</button>
```

`onclick="enviar()"` significa que 'cuando se haga click' se va a ejecutar la función 'enviar'
Donde está la función enviar? en el archivo 'quejas.js'

esta es ( le borré todos los comentarios para que se lea mas fácil):
```js
function enviar() {
    var textoQueja = document.getElementById('input-quejas').value
    var textoModificado = textoQueja.replace(/a|e|o|u/gi, 'i');
    document.getElementById('lugar-burla').innerHTML = textoModificado

}
```

Cuando se toca el botón 'Enviar' todo lo que está entre `{ ` y `}` se va a ejecutar

Nosotros, en contador.js tenemos que crear una función que se llame 'agregar'
 ```js
function agregar() {

}
```
y en contador.html en el botón 'Agregar uno' tenemos que hacer que ejecute la función 'agregar'.

Pista: `onclick="agregar()"`

pruébenlo.

### y???

todavía no pasa nada por que entre `{` y  `}` no hay nada.
vamos a meterle algo adentro a ver que pasa

Entre `{` y  `}` vamos a agregarle
```js
    alert('hola amigo')
```

Anda? No anda?? para ver que está pasando no se olviden de abrir la consola del Chrome
hacer click derecho en la página y poner inspeccionar
![inspeccionar](inspeccionar.png "inspeccionar")

y click en la pestaña 'Console'
![consola](consola.png "consola")

en este caso el error es por que en vez de `alert` puse `alertalalala`

## Una Variable
![caja](caja.jpg "caja")
Vamos a crear una variable. Una variable es como una caja que puede guardar diferentes cosas adentro. Por ejemplo puede tener un número y después lo podemos cambiar por otro.

Nosotros vamos a usar esta variable para guardar la cantidad de videos de Dragon Ball que se vieron en la clase.

La creamos así:
```js
    var cantidadDeVideos = 0
```

`var cantidadDeVideos` crea una variable

`cantidadDeVideos = 0` guarda adentro de esa variable el número 0






