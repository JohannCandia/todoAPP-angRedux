import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl,Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { toggle } from '../todo.actions';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit  {

  @Input() todo: Todo = new Todo('');


  chkCompletado: FormControl;
  txtInput: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado = new FormControl(this.todo.completado);
    this.chkCompletado.valueChanges.subscribe( valor => {
      this.store.dispatch( toggle({ id: this.todo.id }) );
    }
    )
  }
}
