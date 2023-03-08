//Clase Auto
export default class Auto {
  marca: string;
  anioFabricacion: number;
  fabricante: string;
  modelo: string;
  categoria: string;
  patente: string;
  numeroChasis: number;
  numeroMotor: number;

  constructor(
    marca,
    anioFabricacion,
    fabricante,
    modelo,
    categoria,
    patente,
    numeroChasis,
    numeroMotor
  ) {
    this.marca = marca;
    this.anioFabricacion = anioFabricacion;
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.categoria = categoria;
    this.patente = patente;
    this.numeroChasis = numeroChasis;
    this.numeroMotor = numeroMotor;
  }

  getAuto(): any[] {
    // Funcion para obtener los datos del auto en un array

    let autoArray: any[] = [
      this.marca,
      this.anioFabricacion,
      this.fabricante,
      this.modelo,
      this.categoria,
      this.patente,
      this.numeroChasis,
      this.numeroMotor
    ];

    return autoArray;
  }
}

//Clase RegistroAutomotor con métodos para consultar por un auto en un listado

class RegistroAutomotor {
  listaAutos: Auto[]; // Lista de autos a consultar

  constructor(listaAutos: Auto[]) {
    this.listaAutos = listaAutos;
  }

  buscarAutoPorMarca(marca: string): Auto[] {
    // Funcion para buscar un auto por su marca y devolver la informacion del mismo en un array de Autos

    let autosEncontrados: Auto[] = []; // Array donde se guardaran los autos encontrados con la marca especificada

    for (let i = 0; i < this.listaAutos.length; i++) {
      // Recorremos la lista de autos buscando aquellas que coincidan con la marca especificada y las guardamos en el array de Autos encontrados

      if (this.listaAutos[i].marca == marca) {
        autosEncontrados.push(this.listaAutos[i]);
      }
    }
    return autosEncontrados;
  }
} //Funcion para leer archivos de Autos y poder borrar , actualizar y dar de alta un auto en el registro      function leerArchivo(archivo : File ){          let reader = new FileReader();          reader .onloadend= function(){              let contenidoArchivo :string= reader .result as string ;              let lineasArchivo :string[]= contenidoArchivo .split("\n");              let listaAutostemp :Auto[]=[];              for (let i=0 ; i<lineasArchivo .length ; i++){                  let lineasPartidas :string[]= lineasArchivo [i].split("|");                  if (lineasPartidas .length == 8){                      let nuevoAutoTemp = new Auto(lineasPartidas[0],parseInt(lineasPartidas[1]),lineasPartidas[2],lineasPartidas[3],lineasPartidas[4],lineasPartidas[5],parseInt(lineasPartidas[6]),parseInt(lineasPartidas[7]));                      listaAutostemp .push(nuevoAutoTemp );                  }              }              return listaAutostemp ;          };          reader .readAsText(archivo );      };       //Funcion para borrar un auto del registro      function borrarAutoRegistro (registroAutomotor : RegistroAutomotor ,autoBorrar : Auto ){          for (let i=0 ; i<registroAutomotor .listaAutos .length ; i++){              if (registroAutomotor .listaAut
