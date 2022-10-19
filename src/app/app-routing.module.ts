import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home-page/home-page.component').then(mod => mod.HomePageComponent)
    },
    {
        path: 'pokemon',
        loadComponent: () => import('./pages/pokemon-page/pokemon-page.component').then(mod => mod.PokemonPageComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about-page/about-page.component').then(mod => mod.AboutPageComponent)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
