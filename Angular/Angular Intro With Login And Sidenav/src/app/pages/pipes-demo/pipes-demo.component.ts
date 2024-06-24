import { Component } from '@angular/core';
import { UpperCasePipe, CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    templateUrl: './pipes-demo.component.html',
    imports: [UpperCasePipe, DatePipe, TranslateModule, CommonModule],

    standalone: true,
})
export class PipesDemoComponent {
    public textToCapitalize: string = $localize`:@@text-for-capitalization: iM a RealLy Weird TexT anD i neEd CapItaliZATion`;
    public date = Date.now();
}
