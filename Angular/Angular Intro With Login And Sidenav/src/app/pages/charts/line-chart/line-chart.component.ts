import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrl: './line-chart.component.scss',
})
export class LineChartComponent {
    private labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    private data = {
        labels: this.labels,
        datasets: [
            {
                axis: 'y',
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40, 35, 59, 73, 84, 39],
                fill: false,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)',
                ],
                borderWidth: 1,
            },
        ],
    };

    public chart: any;

    public ngOnInit(): void {
        this.createChart();
    }

    public createChart(): void {
        Chart.register(...registerables);

        this.chart = new Chart('LineChart', {
            type: 'line',
            data: this.data,
            options: {
                scales: {
                    y: {
                        stacked: true,
                    },
                },
            },
        });
    }
}
