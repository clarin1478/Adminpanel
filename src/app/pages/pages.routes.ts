import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';




const pagesRoutes: Routes = [
    {
        // Si el path es blanco redirecciona al dashboard
        path: '',
        component: PagesComponent,
        children: [
            // Rutas hijas del comonente Pages (Dashboard)
            { path: 'dashboard', component: DashboardComponent},
            { path: 'progress', component: ProgressComponent},
            { path: 'graficas1', component: Graficas1Component},
            { path: 'account-settings', component: AccountSettingsComponent},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
