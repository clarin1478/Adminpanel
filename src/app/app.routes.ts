import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';



const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'graficas1', component: Graficas1Component},
    // Si el path no existe redirecciona al 404
    { path: '**', component: NopagefoundComponent}
];

// Exportamos nuestras Rutas, en este caso con forRoot,
// ya que són rutas principales

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
