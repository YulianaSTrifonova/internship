/* eslint-disable import/no-relative-parent-imports */
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Chart } from 'chart.js/auto';
import { ChartData } from 'chart.js';
import { ChartType, Colors, DATES, Translations } from '../chart.enums';
import { IChartComponent } from '../types';

@Component({
    selector: 'intro-app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent implements IChartComponent {
    public data: ChartData;
    public chart: Chart;

    public constructor(protected _translate: TranslateService) {}

    public ngOnInit(): void {
        this.init();
    }

    public init(): void {
        this._translate.stream([Translations.SALES, Translations.PROFIT]).subscribe((translations) => {
            this.handleTranslationChange(translations);
            this.createOrUpdateChart();
        });
    }

    public handleTranslationChange(translations: { [key: string]: string }): void {
        const salesLabel = translations[Translations.SALES];
        const profitLabel = translations[Translations.PROFIT];
        this.setChartData([salesLabel, profitLabel]);
    }

    public setChartData(translations: string[]): void {
        const [salesLabel, profitLabel] = translations;

        this.data = {
            labels: DATES,
            datasets: [
                {
                    label: salesLabel,
                    data: [467, 576, 572, 79, 92, 574, 573, 576],
                    backgroundColor: Colors.BLUE,
                },
                {
                    label: profitLabel,
                    data: [542, 542, 536, 327, 17, 0.0, 538, 541],
                    backgroundColor: Colors.ORANGE,
                },
            ],
        };
    }

    public createOrUpdateChart(): void {
        if (!this.chart) {
            this.createChart();
        } else {
            this.updateChart();
        }
    }

    public createChart(): void {
        this.chart = new Chart('barChart', {
            type: ChartType.BAR,
            data: this.data,
        });
    }

    public updateChart(): void {
        this.chart.data = this.data;
        this.chart.update('none');
    }
}
