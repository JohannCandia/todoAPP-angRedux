import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFootertComponent } from './todo-footert.component';

describe('TodoFootertComponent', () => {
  let component: TodoFootertComponent;
  let fixture: ComponentFixture<TodoFootertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFootertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFootertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
