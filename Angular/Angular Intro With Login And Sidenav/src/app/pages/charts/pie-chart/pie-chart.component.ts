/* eslint-disable import/no-relative-parent-imports */
import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ChartData } from 'chart.js';
import { TranslateService } from '@ngx-translate/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IChartComponent } from '../types';
import { ChartType, Colors, Translations } from '../chart.enums';

@Component({
    selector: 'intro-app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent implements IChartComponent {
    public form: FormGroup;
    public data: ChartData;
    public chart: Chart;

    public constructor(
        protected _translate: TranslateService,
        private _fb: FormBuilder,
    ) {
        this.form = this._fb.group(
            {
                newLabels: ['', Validators.required],
                newData: ['', [Validators.required, this.commaSeparatedNumbers]],
            },
            { validators: this.matchCommaSeparatedCount },
        );
    }

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
            labels: [salesLabel, profitLabel],
            datasets: [
                {
                    data: [100, 250],
                    backgroundColor: [Colors.BLUE, Colors.ORANGE],
                    borderWidth: 0,
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
        this.chart = new Chart('pieChart', {
            type: ChartType.PIE,
            data: this.data,
        });
    }

    public updateChart(): void {
        this.chart.data = this.data;
        this.chart.update('none');
    }

    public updateChartData(): void {
        const newLabelsString = this.form.value.newLabels;
        const newDatasString = this.form.value.newData;

        if (newLabelsString.length !== 0) {
            const newLabelsArray = newLabelsString.split(',');
            this.chart.data.labels = newLabelsArray;
        }

        if (newDatasString.length !== 0) {
            const newDatasArray = newDatasString.split(',').map(Number);
            this.chart.data.datasets[0].data = newDatasArray;
        }

        this.chart.update('default');
    }

    private commaSeparatedNumbers(control: AbstractControl): { [key: string]: boolean } | null {
        const value = control.value;
        if (value.length === 0) return null;
        const isValid = value.split(',').every((item: string) => !isNaN(item.trim() as any));

        return isValid ? null : { commaSeparatedNumbers: true };
    }

    private matchCommaSeparatedCount(group: FormGroup): { [key: string]: boolean } | null {
        const newLabels = group.get('newLabels')!.value;
        const newData = group.get('newData')!.value;

        if (newLabels.length === 0 || newData.length === 0) {
            return null;
        }

        const newLabelsCount = newLabels.split(',').length;
        const newDataCount = newData.split(',').length;

        return newLabelsCount === newDataCount ? null : { matchCommaSeparatedCount: true };
    }
}
