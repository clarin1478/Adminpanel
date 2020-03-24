import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // Propiedades del objeto, creamos una con el nombre ajustes donde guardaremos 
  // el tema i la url del tema

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor() { }

  // Creamos una función de guardarAjustes para ponerla en el local storage
  // Hay que tener en cuenta que en el local storage solo podemos guardar strings

  guardarAjustes() {

    console.log('Guardado en el localStorage')
    // Guardamos el objeto ajustes pero antes lo pasamos a String con stringify
    localStorage.saveItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {

    // Si tenemos algo en el local storage
    if ( localStorage.getItem('ajustes')) {
      // Passa el objeto del local storage (que es un string) a objeto "normal",
      // para modificarlo, lo parseamos y lo guaramos en el objeto ajustes
      this.ajustes = JSON.parse( localStorage. getItem('ajustes'));
      console.log( 'Cargando del local storage');

    } else {
      // En caso de no tener ajustes en el local storage, usamos los de por defecto
      console.log('Usando valores por defecto');
    }
  }

}

// Seleccionar tema por defecto y saber que tena está seleccionado
// Creamos una interface (Estructura rígida para los objetos)
interface Ajustes {
  temaUrl: string;
  tema: string;
}
