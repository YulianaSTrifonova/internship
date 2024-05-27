import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
    templateUrl: './pipes-demo.component.html',
    imports: [UpperCasePipe, DatePipe],
    standalone: true,
})
export class PipesDemoComponent {
    public textToCapitalize: string = 'iM a RealLy Weird TexT anD i neEd CapItaliZATion';
    public date = Date.now();
}
