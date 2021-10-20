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
  const dia = 'icon-sun.svg'
  const noche = 'icon-moon.svg'

  

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
    const divTarea = document.createElement("a");
    divTarea.classList.add('tarea');
    divTarea.setAttribute("data-id", `${tarea.id}`);

    divTarea.innerHTML = `
          <button class="check ${tarea.id}" id="select" data="${tarea.id}" ><img src="src/img/icon-check.svg"></button>
          <p  id="tachado" tach="${tarea.id}">${tarea.tarea}</p>
          `;

    container.appendChild(divTarea);
    numeroItems();
     check();
     function check() {
  
      const check = document.querySelector(`[data-id="${tarea.id}"] `);
      check.addEventListener('click', () => {
        const seleccion = document.querySelector(`[data="${tarea.id}"]`);
        const tachado = document.querySelector(`[tach="${tarea.id}"]`);
 
        if(seleccion.classList.contains('seleccionado')){
          seleccion.classList.remove('seleccionado');
        }else{
          seleccion.classList.add('seleccionado');
         
        }

        if(tachado.classList.contains('tachado')){
          tachado.classList.remove('tachado');
        }else{
          tachado.classList.add('tachado');
        }
      
      })
    }
  });
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
  const lunsol = document.querySelector('.icono')




  if (body.classList.contains("darkMode")) {
    body.classList.remove("darkMode");
    lunsol.src="src/img/icon-moon.svg";
  
  } else {
    body.classList.add("darkMode");
    lunsol.src="src/img/icon-sun.svg";
    
  }
}

