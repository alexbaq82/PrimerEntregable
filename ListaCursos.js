/**
 * @author: John Baquero
 * @description: Listar e inscribir cursos
 */

//Definicion arreglo de cursos
let cursos = [{
  id: 111,
  nombre: 'Programación orientada a objetos',
  duracion: 40,
  valor: 620000
  },
  {
  id: 112,
  nombre: 'Diseno web',
  duracion: 30,
  valor: 550000
  },
  {
  id: 113,
  nombre: 'Metodologias agiles',
  duracion: 60,
  valor: 800000
  },
  {
    id: 114,
    nombre: 'Pruebas de integración',
    duracion: 30,
    valor: 435000    
  }];

//Mostrar la lista de cursos
let mostrarCursos = function(){
  console.log('*** LISTA CURSOS FORMACIÓN CONTINUA ***' + '\n');
  for (let i = 0; i < cursos.length; i++) {
    setTimeout(() => {
        console.log('Id Curso: ' + cursos[i].id + 
                    ' - Nombre: ' + cursos[i].nombre + 
                    ' - Duracion (h): ' + cursos[i].duracion +
                    ' - Costo ($): ' + cursos[i].valor
                    );
    }, i * 2000);
  }
};


  module.exports = {
    cursos,
    mostrarCursos
  };