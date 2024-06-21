import { OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ChartData } from 'chart.js';

export interface IChartComponent extends OnInit {
    //fields
    chart: Chart;
    data: ChartData;
    //methods
    init: () => void;
    handleTranslationChange: (translations: { [key: string]: string }) => void;
    setChartData: (translations: string[]) => void;
    createOrUpdateChart: () => void;
    createChart: () => void;
    updateChart: () => void;
}
