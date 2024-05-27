import { Component } from '@angular/core';
import { ToDoItem } from '../../shared/models/ToDoItem';
import { EventService } from '../../shared/services/EventService';
import { ToDoService } from './to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css',
})
export class ToDoComponent {
  items: ToDoItem[] = [];
  /*
  [
    new ToDoItem('Learn Angular'),
    new ToDoItem('Get Coffee', true),
    new ToDoItem('Something'),
  ];
  */

  constructor(events: EventService, private toDoService: ToDoService) {
    events.listen('removeToDo', (todo: any) => {
      let index = this.items.indexOf(todo);
      this.items.splice(index, 1);
    });
  }

  ngOnInit(): void {
    this.toDoService.getToDos().subscribe((data: any) => {
      this.items = data;
    });
  }

  filter: any;
}
