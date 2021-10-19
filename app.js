let argumento = process.argv[2];
let funciones = require("./FuncionesDeTareas.js")
let leerGuardarEscribir = require("./leerGuardarEscribir.js")
let argumento1 = process.argv[3];



switch (argumento)
 {
    case "listar":
      funciones.listarTareas();
      break;
    case "Filter":
      funciones.listarTareasFiltradas();
      break;
    case "nuevo":
       console.log("ingrese el nombre de su nueva tarea: ");
       process.stdin.on("data",function(data)
           { let stringAGuardar=data.toString()
             let final=stringAGuardar.slice(0,(stringAGuardar.length)-2)
              leerGuardarEscribir.nuevaTarea(final);
              console.log("Has cargado tu nueva tarea exitosamente!");              
              process.exit();
           }); 
      break;
      case "filtrarEstado":
        funciones.listarTareasFiltradasPorEstado(argumento1);
        break;
    default:
      console.log("No entiendo qué querés hacer.");
  }


   

