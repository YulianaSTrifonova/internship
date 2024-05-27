import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoFilterComponent } from './to-do-filter.component';

describe('ToDoFilterComponent', () => {
  let component: ToDoFilterComponent;
  let fixture: ComponentFixture<ToDoFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToDoFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToDoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
