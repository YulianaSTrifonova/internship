import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDoItem } from '../../../shared/models/ToDoItem';
import {EventService} from './../../../shared/services/EventService'

@Component({
  selector: 'to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrl: './to-do-list-item.component.css',
})
export class ToDoListItemComponent {
  @Input() todo!: ToDoItem;

  get cssClasses() {
    //return this.done ? 'strikeout text-muted' : '';
    //return this.done ? ['strikeout', 'text-muted'] : [];

    return { 'strikeout text-muted': this.todo.isComplete };
  }

  constructor(private events: EventService) {}

  toggleDone() {
    this.todo.isComplete = !this.todo.isComplete
  }

  removeToDo() {
    this.events.emit('removeToDo', this.todo)
  }
}
