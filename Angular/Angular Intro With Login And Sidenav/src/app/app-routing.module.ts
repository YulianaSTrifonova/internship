import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterLinksEnum } from './router-links.enum';
import { HomeComponent } from './pages/home/home.component';
import { AnimalsComponent } from './pages/animals/animals.component';
import { DataManipulationComponent } from './pages/data-manipulation/data-manipulation.component';
import { DirectivesDemoComponent } from './pages/directives-demo/directives-demo.component';
import { PipesDemoComponent } from './pages/pipes-demo/pipes-demo.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { ChartsComponent } from './pages/charts/charts.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: RouterLinksEnum.login,
        pathMatch: 'full',
    },
    {
        path: RouterLinksEnum.login,
        component: LoginComponent,
    },
    {
        path: RouterLinksEnum.home,
        component: HomeComponent,
        canActivate: [authGuard],
    },
    {
        path: RouterLinksEnum.animals,
        component: AnimalsComponent,
        canActivate: [authGuard],
    },
    {
        path: RouterLinksEnum.dataManipulation,
        component: DataManipulationComponent,
        canActivate: [authGuard],
    },
    {
        path: RouterLinksEnum.directives,
        component: DirectivesDemoComponent,
        canActivate: [authGuard],
    },
    {
        path: RouterLinksEnum.pipes,
        component: PipesDemoComponent,
        canActivate: [authGuard],
    },
    {
        path: RouterLinksEnum.weather,
        component: WeatherComponent,
        canActivate: [authGuard],
    },
    {
        path: RouterLinksEnum.form,
        loadChildren: () => import('./pages/form/form-demo.module').then((m) => m.FormDemoModule),
        canActivate: [authGuard],
    },
    {
        path: RouterLinksEnum.charts,
        component: ChartsComponent,
        canActivate: [authGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class IntroAppRoutingModule {}
