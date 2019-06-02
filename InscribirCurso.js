/**
 * @author: John Baquero
 * @description: Listar e inscribir cursos
 * @date: 2019-05-19
 */

//Importacion de scripts
const listadoCursos = require ('./ListaCursos.js');
const express = require('express')
const app = express()


//Definicion de parametros de entrada
const opciones = {
  accion:{
    default: 'consultar',
    demand : true,
    alias : 'accion'
  },
  idCurso:{
    demand : true,
    alias : 'idCurso'
  },
  cedula:{
    demand : true,
    alias : 'doc'
  },
  nombre:{
    demand : true,
    alias : 'nombre'
  },
  apellido:{
    demand : true,
    alias : 'apellido'
  }
}

const argv = require('yargs')
            .command('inscribir','Ingrese datos inscripcion: ',opciones)
            .argv

//Funcion que valida la existencia del id curso ingresado por el aspirante
let buscarCurso = listadoCursos.cursos.find(curso => curso.id == argv.idCurso);

//Funcion para crear archivo de texto con la inscripcion
let crearInscripcion = (argv) => {
  inscripcion = '<b> FICHA DE INSCRIPCIÓN CURSO FORMACION CONTINUA </b>';

  app.get('/', function (req, res) {
    res.send(inscripcion + '<br>' + infoAspirante + '<br>' + infoCurso)
  })
   
  app.listen(3000)

}

//Validar la acción a ejecutar por el usuario
if (argv._[0] == 'consultar'){
  //Mostrar lista de cursos
  listadoCursos.mostrarCursos();
}else{
  //Validar la existencia del curso ingresado por el aspirante para la inscripción
  if (buscarCurso) {
    //Inicializacion variables contenido archivo de inscripción
    infoAspirante = '1. Informacion Aspirante: ' +  '\n' +
                    '-Nombre: ' + argv.nombre + ' ' + argv.apellido + '\n' +
                    '-Cedula: ' + argv.cedula; 

    infoCurso = '2. Información Curso: ' + '\n' + 
                '-IdCurso: ' + buscarCurso.id + '\n' +
                '-Nombre: ' + buscarCurso.nombre + '\n' +
                '-Duración(h): ' + buscarCurso.duracion + '\n' +
                '-Costo($): ' + buscarCurso.valor;

    //Invocar funcion para creacion de archivo de inscripcion
    crearInscripcion(argv);
  }
  else{
    console.log('El curso identificado con el Id ' + argv.idCurso + ' no existe!!!');
  };
}