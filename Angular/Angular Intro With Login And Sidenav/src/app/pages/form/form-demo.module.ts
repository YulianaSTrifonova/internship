import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { FormDemoRoutingModule } from './form-demo-routing.module';
import { FormDemoComponent } from './form-demo.component';

@NgModule({
    declarations: [FormDemoComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        FormDemoRoutingModule,
        ReactiveFormsModule,
        TranslateModule,
    ],
})
export class FormDemoModule {}
