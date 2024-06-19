import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsComponent } from './charts.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
    declarations: [BarChartComponent, LineChartComponent, ChartsComponent],
    imports: [CommonModule, TranslateModule],
})
export class ChartsModule {}
