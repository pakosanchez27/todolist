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

function nuevatarea(e) {
  e.preventDefault();

  // obtener los datos
  const tarea = document.querySelector("#tarea").value;
  const id = Date.now();
 
  const obj = {
    id: id,
    tarea: tarea
  }

  
  



  // Validar campo vacio
   if(tarea === ''){
     mostraralerta("Necesitas agregar una tarea");
     return
  }else{
    //agregar al areglo
    mostrarHtml(obj);

    formulario.reset();

    
}

}



function mostrarHtml(obj) {
  tareas.push(obj);

  
  // mostrar
  
  limpiarHTML(contenedor);
  tareas.forEach((tarea, id) => {
    const divTarea = document.createElement("div");
    divTarea.classList.add("tarea");
    divTarea.innerHTML = `
          <button class="check seleccionado" id="check" data-id="${tarea.id}"><img src="src/img/icon-check.svg"></button>
          <p class="tachado">${tarea.tarea}</p>
          `;

    container.appendChild(divTarea);
    numeroItems();
     check();
  });
}
function check() {
  const check = document.querySelector('.check');
  console.log(check);
}

function limpiarPanel() {
  tareas.splice(0, tareas.length);
 
  limpiarHTML(container);
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
