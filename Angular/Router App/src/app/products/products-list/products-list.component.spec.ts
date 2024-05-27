import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoductslistComponent } from './products-list.component';

describe('PeoductslistComponent', () => {
  let component: PeoductslistComponent;
  let fixture: ComponentFixture<PeoductslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeoductslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeoductslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
