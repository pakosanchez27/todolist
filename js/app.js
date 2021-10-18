// Variables

const formulario = document.querySelector("#formulario");
const contenedor = document.querySelector("#container");
const items = document.querySelector("#items");
const clean = document.querySelector("#clean");
const darkMode = document.querySelector("#darkMode");
const mensajeAlerta = document.querySelector('.contenido-crear');

const tareas = [];

//  Eventos

document.addEventListener("DOMContentLoaded", () => {
  formulario.addEventListener("submit", nuevatarea);
  clean.addEventListener("click", limpiarPanel);
  darkMode.addEventListener("click", activarDarkMde);
});

// Funciones

function limpiarPanel() {
  tareas.splice(0, tareas.length);
  console.log(tareas);
  limpiarHTML(container);
}

function nuevatarea(e) {
  e.preventDefault();

  // obtener los datos
  const tarea = document.querySelector("#tarea").value;

  // Validar campo vacio
   if(tarea === ''){
     mostraralerta("Necesitas agregar una tarea");
     return
  }else{
    //agregar al areglo
    mostrarHtml(tarea);

    formulario.reset();
}
 
}
function mostrarHtml(tarea) {
  tareas.push(tarea);
  // mostrar
  console.log(tareas);
  limpiarHTML(contenedor);
  tareas.forEach((to) => {
    const divTarea = document.createElement("div");
    divTarea.classList.add("tarea");
    divTarea.innerHTML = `
          <button class="check"><img src="src/img/icon-check.svg"></button>
          <p>${to}</p>
          `;

    container.appendChild(divTarea);
    numeroItems();
  });
}

function limpiarHTML(elemento) {
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}
function mostraralerta(mensaje) {

  const alerta = document.querySelector('.alerta'); 
  if(!alerta) {
    const alerta = document.createElement('div'); 
    alerta.classList.add('alerta'); 
    alerta.innerHTML= `
      <p>${mensaje}</p>
    `; 

    mensajeAlerta.appendChild(alerta);

    setTimeout(() => {
      alerta.remove(); 
    }, 1000);
  }
  
}

function numeroItems() {
  limpiarHTML(items);
  const numitems = tareas.length;
  const divItems = document.createElement("div");
  divItems.innerHTML = `
     <p>${numitems} items left</p>
    `;

  items.appendChild(divItems);
}

function activarDarkMde() {
  const body = document.querySelector("#body");
  const icono = document.querySelector("#darkMode");

  if (body.classList.contains("darkMode")) {
    body.classList.remove("darkMode");
    icono.classList.remove("icono");
  } else {
    body.classList.add("darkMode");
    icono.classList.add("icono");
  }
}
