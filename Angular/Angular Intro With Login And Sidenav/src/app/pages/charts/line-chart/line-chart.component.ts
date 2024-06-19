import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { TranslateService } from '@ngx-translate/core';
import { ChartType, Colors, MONTHS } from '../chart.enums';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrl: './line-chart.component.scss',
})
export class LineChartComponent implements OnInit {
    public chart: any;

    private _labels = MONTHS;
    private _data: any;

    public constructor(private _translate: TranslateService) {}

    public ngOnInit(): void {
        this.createChart();
    }

    public createChart(): void {
        Chart.register(...registerables);

        this._translate.get(['charts.sales', 'charts.profit']).subscribe((translations) => {
            const salesLabel = translations['charts.sales'];
            const profitLabel = translations['charts.profit'];

            this._data = {
                labels: this._labels,
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
                        data: [20, 35, 55, 50, 43, 15, 32, 15, 59, 61, 25, 39],
                        fill: false,
                        backgroundColor: Colors.ORANGE,
                        borderColor: Colors.ORANGE,
                        borderWidth: 1,
                    },
                ],
            };

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
        });
    }
}
