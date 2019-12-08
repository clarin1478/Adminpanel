// Este modulo une todos los componentes que tenemos en la carpeta Shared
// De esta manera no tenemos todos los componetes juntos en app.modulo.ts
// Podemos ordenarlos para trabajar mejor.

import { NgModule } from '@angular/core';

// Importamos las diferentes páginas de la carpeta Shared
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';





@NgModule({
    // Declaramos los componentes a importar
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ],

    // Tenemos que exportar los componentes para que sean usados
    // en otros modulos como Pages
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ]
})

export class SharedModule { }






