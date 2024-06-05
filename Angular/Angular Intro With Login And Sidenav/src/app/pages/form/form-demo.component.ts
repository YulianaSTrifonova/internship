import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-demo',
    templateUrl: './form-demo.component.html',
    styleUrl: './form-demo.component.scss',
})
export class FormDemoComponent implements OnInit {
    /* Template-Driven Form */
    public templateForm: { [key: string]: string } = {
        field1: '',
        field2: '',
        field3: '',
        field4: '',
    };

    public onSubmit(): void {
        console.log(this.templateForm);
    }

    /* Reactive Form */
    public reactiveForm: FormGroup;

    public ngOnInit(): void {
        this.reactiveForm = new FormGroup({
            field1Control: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
            field2Control: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
            field3Control: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
            field4Control: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
        });

        this.reactiveForm.setValidators(this.sumValidator);
    }

    public sumValidator: ValidatorFn = (form: AbstractControl): { [key: string]: any } | null => {
        if (!(form instanceof FormGroup)) {
            return null;
        }

        const sum = Object.values(form.controls).reduce((acc, control) => acc + (parseInt(control.value, 10) || 0), 0);

        return sum === 100 ? null : { sumNot100: true };
    };

    public submitForm() {
        console.log(this.reactiveForm.value);
    }
}
