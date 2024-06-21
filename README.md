#Pagina web que consume API de Harry Potter - 2024 - Segundo Proyecto

##Creador La Web fue creada por Cristian Biancalana como segundo Trabajo Practico para la Diplomatura Web Full Stack de la UTN.

#Descripción de la web 
En esta página se pueden visualizar pesonajes y casas de la saga de Harry potter. Para lograr esto se consume la API de https://hp-api.onrender.com/.
Mediante la función fetch se trae el total de los personajes de la saga y se muestran de forma dinamica a traves de JS en personajes.html
Se genero una logica con funciones Async para poder realizar consultas segun la casa con la funcion fetch de forma dinamica, una vez que se trae la información mediante una función de renderización que se llama dentro de la función Async se renderizan los personajes de la casa seleccionada de forma dinamica en personajes.html
También se agregaron funciones que retornan un codigo html con caracteriscticas de cada casa y que son llamadas dentro de las funciones Async.

#Se agregaron ilustraciones sin fondo buscadas en internet y segun se solicita en TP.
#Se realizo un .js y .css por cada page, para poder diferenciar la lógica de cada sección de la página principal como así también no repetir estilos en cada página.
