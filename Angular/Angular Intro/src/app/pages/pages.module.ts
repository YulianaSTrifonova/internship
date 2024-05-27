import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AnimalsModule } from './animals/animals.module';
import { HomeComponent } from './home/home.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { WeatherComponent } from './weather/weather.component';
import { DataManipulationModule } from './data-manipulation/data-manipulation.module';
import { FormDemoModule } from './form/form-demo.module';

@NgModule({
    declarations: [HomeComponent, DirectivesDemoComponent, WeatherComponent],
    imports: [
        DataManipulationModule,
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatTooltipModule,
        AnimalsModule,
        PipesDemoComponent,
        FormDemoModule,
    ],
    exports: [],
})
export class PagesModule {}
