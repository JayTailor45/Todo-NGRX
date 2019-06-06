import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, UPDATE_TODO } from "./actionTypes";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.todos$ = this.store.select("todoReducer");
  }
  constructor(private store: Store<any>) {}

  todos$: Observable<any>;

  todo: string;
  editing = false;
  indexToEdit: number | null;

  addTodo(value) {
    this.store.dispatch({
      type: ADD_TODO,
      payload: {
        value,
        done: false
      }
    });
    this.todo = "";
  }

  removeTodo(index) {
    this.store.dispatch({
      type: REMOVE_TODO,
      payload: { index }
    });
  }

  editTodo(todo, index) {
    this.editing = true;
    this.todo = todo.value;
    this.indexToEdit = index;
  }

  cancelEdit() {
    this.editing = false;
    this.todo = "";
    this.indexToEdit = null;
  }

  updateTodo(updatedTodo) {
    this.store.dispatch({
      type: UPDATE_TODO,
      payload: {
        index: this.indexToEdit,
        newValue: updatedTodo
      }
    });
    this.todo = "";
    this.editing = false;
    this.indexToEdit = null;
  }

  toggleTodo(todo, index) {
    this.store.dispatch({
      type: TOGGLE_TODO,
      payload: {
        index,
        done: todo.done
      }
    });
  }
}
