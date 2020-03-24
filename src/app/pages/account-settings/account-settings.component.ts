import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  // importamos el DOM para poder encontrar los atributos del archivo index.html

  constructor( @Inject(DOCUMENT) private _document,
               // Importamos nuestro servicio de local storage Setting service
               public _ajustes: SettingsService ) { }

  ngOnInit() {
  }

  cambiarColor( xTema: string, xLink: any ) {

    console.log(xTema);

    this.aplicarCheck(xLink);

    // Creamos la variable url para cambiar la url del archivo index.html
    let url = `assets/css/colors/${ xTema }.css`;
    // Insertamos la url en el atributo href en el elemento con id tema
    this._document.getElementById('tema').setAttribute('href', url );

  }

  aplicarCheck( xLink: any ) {
      // Creamos un array con los elementos que tengan la clase selector en el html

      let selectores: any = document.getElementsByClassName('selector');

      for (let i of selectores) {
        // De cada selector removemos la classe working (la que pone el tick)
        // La borramos, ya que no puede tener dos temas selecionados a la vez
        i.classList.remove('working');
      }
      // Añadimos la clase working (la que pone el tick) al xLink que ha passado como
      // parámetro en cambiar color (al que hemos dado click)
      xLink.classList.add('working');
  }

}
