import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent implements OnInit {
    private data = {
        labels: [
            '2022-05-10',
            '2022-05-11',
            '2022-05-12',
            '2022-05-13',
            '2022-05-14',
            '2022-05-15',
            '2022-05-16',
            '2022-05-17',
        ],
        datasets: [
            {
                label: 'Sales',
                data: ['467', '576', '572', '79', '92', '574', '573', '576'],
                backgroundColor: '#0e1834',
            },
            {
                label: 'Profit',
                data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
                backgroundColor: '#fed098',
            },
        ],
    };
    options: {
        aspectRatio: 2.5;
    };

    public chart: any;

    public ngOnInit(): void {
        this.createChart();
    }

    public createChart(): void {
        Chart.register(...registerables);

        this.chart = new Chart('BarChart', {
            type: 'bar',
            data: this.data,
        });
    }
}
