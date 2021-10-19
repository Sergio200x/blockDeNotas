
let leerGuardarEscribir = require("./leerGuardarEscribir.js")



 function listarTareas()
{   

    let listar = leerGuardarEscribir.tareasJsonParse.forEach(function(tarea)
    
{   
    console.log("==================================================")
    console.log(("<"+leerGuardarEscribir.tareasJsonParse.indexOf(tarea))+">"+" La tarea "+ tarea.titulo +" esta en estado "+tarea.estado)
}

)
console.log("==================================================")
}
//FIN DE FUNCION LISTAR TAREAS


  function listarTareasFiltradas()
{
    let listarFiltradoEnproceso = leerGuardarEscribir.tareasJsonParse.filter(function (tarea)
    {
        return tarea.estado==="En proceso"
    })
    
    let filterEnproceso = listarFiltradoEnproceso.forEach(function(tarea)
    {   
        console.log("===================================================")
        console.log("<"+leerGuardarEscribir.tareasJsonParse.indexOf(tarea)+">"+" La tarea "+ tarea.titulo +" esta en estado "+tarea.estado)
     
    })
    console.log("===================================================")
}
//FIN DE FUNCION LISTA DE TAREAS FILTRADAS

function listarTareasFiltradasPorEstado(estado)
{
    let listarFiltradoEnproceso = leerGuardarEscribir.tareasJsonParse.filter(function (tarea)
    {
        return tarea.estado===estado
    })

    let filterEnproceso = listarFiltradoEnproceso.forEach(function(tarea)
    {   
        console.log("===================================================")
        console.log("<"+leerGuardarEscribir.tareasJsonParse.indexOf(tarea)+">"+" La tarea "+ tarea.titulo +" esta en estado "+tarea.estado)
     
    })
    console.log("===================================================")

}



module.exports = {listarTareas,listarTareasFiltradas,listarTareasFiltradasPorEstado}











