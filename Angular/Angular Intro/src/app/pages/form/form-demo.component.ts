import { Component } from '@angular/core';

@Component({
    selector: 'app-form-demo',
    templateUrl: './form-demo.component.html',
    styleUrl: './form-demo.component.scss',
})
export class FormDemoComponent {
    public templateFormModel = {
        field1: '',
        field2: '',
        field3: '',
        field4: '',
    };

    public onSubmit(): void {
        console.log(this.templateFormModel);
    }
}
