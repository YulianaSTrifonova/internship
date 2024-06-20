import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { TranslateService } from '@ngx-translate/core';
import { ChartType, Colors, Translations } from '../chart.enums';

type LineChartData = {
    labels: string[];
    datasets: Array<{
        label: string;
        data: number[];
        fill: boolean;
        backgroundColor: string;
        borderColor: string;
        borderWidth: number;
    }>;
};

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrl: './line-chart.component.scss',
})
export class LineChartComponent implements OnInit {
    public chart: Chart;

    private _data: LineChartData;

    public constructor(private _translate: TranslateService) {}

    public ngOnInit(): void {
        this.init();
    }

    private init(): void {
        this._translate
            .stream([
                Translations.SALES,
                Translations.PROFIT,
                Translations.JANUARY,
                Translations.FEBRUARY,
                Translations.MARCH,
                Translations.APRIL,
                Translations.MAY,
                Translations.JUNE,
                Translations.JULY,
                Translations.AUGUST,
                Translations.SEPTEMBER,
                Translations.OCTOBER,
                Translations.NOVEMBER,
                Translations.DECEMBER,
            ])
            .subscribe((translations) => {
                this.handleTranslationChange(translations);
                this.createOrUpdateChart();
            });
    }

    private setChartData(salesLabel: string, profitLabel: string, translatedMonths: string[]): void {
        this._data = {
            labels: translatedMonths,
            datasets: [
                {
                    label: salesLabel,
                    data: [65, 59, 80, 81, 56, 55, 40, 35, 59, 73, 84, 39],
                    fill: false,
                    backgroundColor: Colors.BLUE,
                    borderColor: Colors.BLUE,
                    borderWidth: 1,
                },
                {
                    label: profitLabel,
                    data: [20, 5, 35, 50, 43, 15, 32, 15, 59, 61, 25, 39],
                    fill: false,
                    backgroundColor: Colors.ORANGE,
                    borderColor: Colors.ORANGE,
                    borderWidth: 1,
                },
            ],
        };
    }

    private handleTranslationChange(translations: { [key: string]: string }): void {
        const salesLabel = translations[Translations.SALES];
        const profitLabel = translations[Translations.PROFIT];

        const translatedMonths = [
            translations[Translations.JANUARY],
            translations[Translations.FEBRUARY],
            translations[Translations.MARCH],
            translations[Translations.APRIL],
            translations[Translations.MAY],
            translations[Translations.JUNE],
            translations[Translations.JULY],
            translations[Translations.AUGUST],
            translations[Translations.SEPTEMBER],
            translations[Translations.OCTOBER],
            translations[Translations.NOVEMBER],
            translations[Translations.DECEMBER],
        ];

        this.setChartData(salesLabel, profitLabel, translatedMonths);
    }

    private createChart(): void {
        this.chart = new Chart('lineChart', {
            type: ChartType.LINE,
            data: this._data,
            options: {
                scales: {
                    y: {
                        stacked: true,
                    },
                },
            },
        });
    }

    private updateChart(): void {
        this.chart.data = this._data;
        this.chart.update();
    }

    private createOrUpdateChart(): void {
        if (!this.chart) {
            this.createChart();
        } else {
            this.updateChart();
        }
    }
}
