import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ToDoItem } from '../../../shared/models/ToDoItem';

const filters = [
  (item: ToDoItem) => item,
  (item: ToDoItem) => item.isComplete,
  (item: ToDoItem) => !item.isComplete,
];

@Component({
  selector: 'to-do-filter',
  templateUrl: './to-do-filter.component.html',
  styleUrl: './to-do-filter.component.css',
})
export class ToDoFilterComponent implements OnInit {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.updateFilter('0');
  }

  listFilter: any = '0';

  updateFilter(value: any) {
    this.filter = filters[value]
    this.filterChange.emit(this.filter);
  }
}
