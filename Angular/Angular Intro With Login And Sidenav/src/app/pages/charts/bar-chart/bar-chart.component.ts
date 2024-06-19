import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { TranslateService } from '@ngx-translate/core';
import { ChartType, Colors, DATES } from '../chart.enums';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent implements OnInit {
    public chart: any;

    private _labels = DATES;
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

            this.chart = new Chart('barChart', {
                type: ChartType.BAR,
                data: this._data,
            });
        });
    }
}
