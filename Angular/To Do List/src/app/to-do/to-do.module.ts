import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AddToDoFormComponent } from './add-to-do-form/add-to-do-form.component';
import { ToDoFilterComponent } from './to-do-filter/to-do-filter.component';
import { ToDoListItemComponent } from './to-do-list-item/to-do-list-item.component';
import { ToDoComponent } from './to-do.component';

@NgModule({
  declarations: [
    ToDoListComponent,
    AddToDoFormComponent,
    ToDoFilterComponent,
    ToDoListItemComponent,
    ToDoComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [
   ToDoComponent
  ],
})
export class ToDoModule {}
