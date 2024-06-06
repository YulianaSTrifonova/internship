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
//import { FormDemoComponent } from './pages/form/form-demo.component';

const routes: Routes = [
    {
        path: RouterLinksEnum.login,
        component: LoginComponent,
    },
    {
        path: '',
        redirectTo: RouterLinksEnum.home,
        pathMatch: 'full',
    },
    {
        path: RouterLinksEnum.home,
        component: HomeComponent,
    },
    {
        path: RouterLinksEnum.animals,
        component: AnimalsComponent,
    },
    {
        path: RouterLinksEnum.dataManipulation,
        component: DataManipulationComponent,
    },
    {
        path: RouterLinksEnum.directives,
        component: DirectivesDemoComponent,
    },
    {
        path: RouterLinksEnum.pipes,
        component: PipesDemoComponent,
    },
    {
        path: RouterLinksEnum.weather,
        component: WeatherComponent,
    },
    {
        path: RouterLinksEnum.form,
        loadChildren: () => import('./pages/form/form-demo.module').then((m) => m.FormDemoModule),
        //component: FormDemoComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class IntroAppRoutingModule {}
