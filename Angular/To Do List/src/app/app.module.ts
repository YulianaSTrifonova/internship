import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { EventService } from '../shared/services/EventService';
import { ToDoModule } from './to-do/to-do.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ToDoModule, ContactModule],
  providers: [EventService],
  bootstrap: [AppComponent],
})
export class AppModule {}
