import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Todo } from '../models/Todos';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain title first todo', () => {
    expect(component.todos[0].content).toContain("first todo");
  });

  it('there should not be first', () => {
    expect(component.todos[1].content).not.toContain("first todo");
  });

  it('should test the addTask function', () => {
    const spy = spyOn(component, 'addTask').and.callThrough();
    expect(spy).not.toHaveBeenCalled();
  
    component.addTask();
  
    expect(spy).toHaveBeenCalledTimes(1);
  
    expect(component.todos.length).toBe(3);

  });

  it('should delete item from todo list', () => {
    const spy = spyOn(component, 'deleteTodo').and.callThrough();
    expect(spy).not.toHaveBeenCalled();
  
    component.deleteTodo(2);
  
    expect(spy).toHaveBeenCalledTimes(1);
  
    expect(component.todos.length).toBe(2);

  });

  it('should mark that item is done', () => {
    const spy = spyOn(component, 'toggleDone').and.callThrough();
    expect(spy).not.toHaveBeenCalled();
  
    component.toggleDone(1);
  
    expect(spy).toHaveBeenCalledTimes(1);

  });

});
