import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';

import { TranslateModule } from '@ngx-translate/core';
import { ColorChangeDirective } from '../directives/color-change/color-change.directive';
import { TooltipDirective } from '../directives/tooltip/tooltip.directive';

import { DataBindingComponent } from './data-bindings/data-bindings.component';
import { DisplayingDataComponent } from './displaying-data/displaying-data.component';
import { UserEventsComponent } from './user-events/user-events.component';
import { CustomInputComponent } from './data-bindings/custom-input/custom-input.component';
import { DataManipulationComponent } from './data-manipulation.component';

@NgModule({
    declarations: [
        DataBindingComponent,
        DisplayingDataComponent,
        UserEventsComponent,
        CustomInputComponent,
        DataManipulationComponent,
        TooltipDirective,
        ColorChangeDirective,
    ],
    imports: [
        TranslateModule,
        FormsModule,
        MatInputModule,
        MatButton,
        MatSelectModule,
        MatFormFieldModule,
        MatListModule,
    ],
    exports: [DataManipulationComponent, TooltipDirective, ColorChangeDirective],
})
export class DataManipulationModule {}
