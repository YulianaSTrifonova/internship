import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsComponent } from './charts.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
    declarations: [BarChartComponent, LineChartComponent, PieChartComponent, ChartsComponent],
    imports: [CommonModule, TranslateModule, MatInputModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule],
})
export class ChartsModule {}
