import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatFormFieldModule } from '@angular/material/form-field'; // Corrected import
import { MatOption, MatSelect } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AnimalsModule } from './animals/animals.module';
import { HomeComponent } from './home/home.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { WeatherComponent } from './weather/weather.component';
import { DataManipulationModule } from './data-manipulation/data-manipulation.module';
import { FormDemoModule } from './form/form-demo.module';
import { LoginComponent } from './login/login.component';
import { ChartsModule } from './charts/charts.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [HomeComponent, DirectivesDemoComponent, WeatherComponent, LoginComponent, DashboardComponent],
    exports: [MatInputModule, MatButtonModule, MatFormFieldModule],
    imports: [
        DataManipulationModule,
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatSelect,
        MatOption,
        AnimalsModule,
        PipesDemoComponent,
        FormDemoModule,
        ChartsModule,
        TranslateModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
    ],
})
export class PagesModule {}
