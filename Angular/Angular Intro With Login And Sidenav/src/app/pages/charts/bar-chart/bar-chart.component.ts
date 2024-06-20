import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { TranslateService } from '@ngx-translate/core';
import { ChartType, Colors, DATES, Translations } from '../chart.enums';

type BarChartData = {
    labels: string[];
    datasets: Array<{ label: string; data: number[]; backgroundColor: string }>;
};

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent implements OnInit {
    public chart: Chart;

    private _labels = DATES;
    private _data: BarChartData;

    public constructor(private _translate: TranslateService) {}

    public ngOnInit(): void {
        this.init();
    }

    private init(): void {
        this._translate.stream([Translations.SALES, Translations.PROFIT]).subscribe((translations) => {
            this.handleTranslationChange(translations);
            this.createOrUpdateChart();
        });
    }

    private handleTranslationChange(translations: { [key: string]: string }): void {
        const salesLabel = translations[Translations.SALES];
        const profitLabel = translations[Translations.PROFIT];

        this.setChartData(salesLabel, profitLabel);
    }

    private createOrUpdateChart(): void {
        if (!this.chart) {
            this.createChart();
        } else {
            this.updateChart();
        }
    }
    private setChartData(salesLabel: string, profitLabel: string): void {
        this._data = {
            labels: this._labels,
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

    private createChart(): void {
        this.chart = new Chart('barChart', {
            type: ChartType.BAR,
            data: this._data,
        });
    }

    private updateChart(): void {
        this.chart.data = this._data;
        this.chart.update();
    }
}
