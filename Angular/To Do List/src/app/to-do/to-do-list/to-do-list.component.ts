import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from '../../../shared/models/ToDoItem';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent implements OnInit{
  @Input() todos: ToDoItem[] = []

  constructor() {}

  ngOnInit(): void {
    
  }

}
