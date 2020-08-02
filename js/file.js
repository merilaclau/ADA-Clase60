/* Imprimir en consola el texto de cada <li> */

const li = document.querySelectorAll("li");

li.forEach(element => {console.log(element.innerText)})
