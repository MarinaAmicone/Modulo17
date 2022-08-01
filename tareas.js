            //EJERCICIO 1

const tareas = funcion (
    codigo,
    titulo,
    descripcion,
    fechaDeAlta,
    deathline,
    observaciones,
    estado,
)
{
    return {
        codigo: codigo,
        titulo: titulo,
        descripcion: descripcion,
        fechaDeAlta: fechaDeAlta,
        deathline: deathline,
        observaciones: observaciones,
        estado: estado,
    };
};

let almacenamientoDeTareas = [
    tareas (
        1,
        'Estudiar',
        'Curso Oracle',
        '06/04/2022',
        '06/10/2022',
        'Terminarlo',
        'En curso'
    ),
    tareas (
        2,
        'Casa',
        'Ordenar y limpiar',
        '25/07/2022',
        '25/07/2022',
        'Lustrar los muebles',
        'Terminado'
    ),
]

                //EJERCICIO 2

const agregarTarea = function( tarea ){
    almacenamientoDeTareas.push( tarea );
}

const editarTarea = function( tarea ){
    almacenamientoDeTareas = almacenamientoDeTareas.map( function(item){
        return item.codigo !== tarea.codigo ? tarea : item;
    } );
}

const borrarTarea = function( codigo ){
    almacenamientoDeTareas = almacenamientoDeTareas.filter( function( item ){
        return item.codigo !== codigo;
    });
}

const reporteTodasTareas = function (){
    return almacenamientoDeTareas;
}

const reporteTareasEnCurso = function () {
    return almacenamientoDeTareas.filter(function(item){
        return item.estado == 'en-curso';
    });
}

const reporteTareasPendientes = function (){
    return almacenamientoDeTareas.filter(function(item){
        return item.estado == 'pendiente';
    })
}

const reporteTareasTerminadas = function (){
    return almacenamientoDeTareas.filter(function(item){
        return item.estado == 'terminado'
    })
}