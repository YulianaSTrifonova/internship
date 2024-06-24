import { Component } from '@angular/core';
import { JobEnum } from './job.enum';

@Component({
    selector: 'intro-displaying-data',
    templateUrl: './displaying-data.component.html',
    styleUrl: './displaying-data.component.scss',
})
export class DisplayingDataComponent {
    public listOfPeople: IPerson[] = [
        { name: 'John', age: 21, job: JobEnum.COOK },
        { name: 'Jack', age: 12, job: JobEnum.DOCTOR },
        { name: 'Jina', age: 45, job: JobEnum.PILOT },
        { name: 'Jules', age: 12, job: JobEnum.COOK },
        { name: 'Jenny', age: 36, job: JobEnum.DOCTOR },
        { name: 'Jim', age: 60, job: JobEnum.MECHANIC },
        { name: 'James', age: 4, job: JobEnum.COOK },
        { name: 'Juniper', age: 7, job: JobEnum.COOK },
    ];
}

export interface IPerson {
    name: string;
    age: number;
    job: JobEnum;
}
