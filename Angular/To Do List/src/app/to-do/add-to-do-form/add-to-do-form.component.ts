import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ToDoItem } from '../../../shared/models/ToDoItem';

@Component({
  selector: 'add-to-do-form',
  templateUrl: './add-to-do-form.component.html',
  styleUrl: './add-to-do-form.component.css',
})
export class AddToDoFormComponent implements OnInit {
  @Output() addToDo = new EventEmitter<ToDoItem>();
  constructor() {}

  ngOnInit(): void {}

  newToDoText = '';

  addNewToDo() {
    //this.items.push(new ToDoItem(this.newToDoText));
    this.addToDo.emit(new ToDoItem(this.newToDoText));
    this.newToDoText = '';
  }
}
