// Este modulo une todos los componentes que tenemos en la carpeta Pages
// De esta manera no tenemos todos los componetes juntos en app.modulo.ts
// Podemos ordenarlos para trabajar mejor.
import { NgModule } from '@angular/core';

// Importamos el modulo Shared para tener solo una importación en app.module.ts
import { SharedModule } from '../shared/shared.module';

// Importamos las diferentes páginas de la carpeta Pages
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Importamos las rutas del page routes
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    // Declaramos los componentes a importar
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],

    // Tenemos que exportar estos componente, ya que serán
    // usados en otras páginas que no están en este modulo como app.module.ts
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    // Importamos las páginas que tenemos en la carpeta Shared
    // Para ello importamos el modulo Shared
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

// Exportamos este modulo para poder importarlo en el principarl: app.module.ts
export class PagesModule { }

