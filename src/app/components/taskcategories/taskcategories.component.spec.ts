import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskcategoriesComponent } from './taskcategories.component';

describe('TaskcategoriesComponent', () => {
  let component: TaskcategoriesComponent;
  let fixture: ComponentFixture<TaskcategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskcategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
