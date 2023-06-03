const argv = require("process").argv;
const funcionesDeTareas = require('./funcionesDeTareas');

const comando = argv[2];
const argumento = argv[3];

switch (comando) {
  case "listar":
    funcionesDeTareas.listar();
    break;

    case 'crear':
      if (argumento) {
        const nuevaTarea = {
          titulo: argumento,
          estado: 'pendiente'
        };
        funcionesDeTareas.guardarTarea(nuevaTarea); 
        console.log('****Nueva tarea almacenada***');
      } else {
        console.log('//Falta título de la tarea.//');
      }
      break;


    case 'filtrar':
      if (argumento) {
        console.log(`Tareas en ${argumento}`);
          
          const tareasFiltradas = funcionesDeTareas.filtrarPorEstado(argumento);  
          console.log(tareasFiltradas),
          
          tareasFiltradas.forEach((tarea, indice) => {
         
            console.log(`${indice + 1}. ${tarea.titulo} ===> ${tarea.estado}`); 
          });
        } else {
          console.log('Falta especificar el estado para filtrar las tareas.');
        }
        break;
    
      default:
        console.log('Comando inválido.');
        break;
    }


 