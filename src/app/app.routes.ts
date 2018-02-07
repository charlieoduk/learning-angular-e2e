import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { AlbumpageComponent } from './pages/albumpage/albumpage.component';

// Route config let's you map routes to components
const routes: Routes = [

    {
        path: 'home',
        component: HomepageComponent,
    },

    {
        path: 'album',
        component: AlbumpageComponent
    },

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {
        path: '*',
        redirectTo: 'home',
        pathMatch: 'full'
    },

];

export const appRouterModule = RouterModule.forRoot(routes);
