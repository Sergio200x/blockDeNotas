const fs =require('fs');
const { stringify } = require('querystring');
let tareasJson = fs.readFileSync('./tareas.json','utf-8');
let tareasJsonParse = JSON.parse(tareasJson)

function nuevaTarea(tarea)
{
    tareasJsonParse.push({titulo:tarea,
                          descripcion:"--",
                          estado:"En proceso"})
    nuevaTareaAjson()
}
//FIN FUNCION NUEVA TAREA


function nuevaTareaAjson ()
{
    
   let tareasJsonstringify = JSON.stringify(tareasJsonParse)
   fs.writeFileSync("tareas.json",tareasJsonstringify)

}
//FIN FUNCION NUEVA TAREA a JSON



module.exports ={tareasJsonParse,nuevaTarea}