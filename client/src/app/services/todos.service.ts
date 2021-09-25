import { Injectable } from '@angular/core';
import TodoModel from '../models/Todos.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  public todos: TodoModel[] = [];

  constructor(public http: HttpClient) {
    this.getTodos();
  }

  getTodos() {
    this.http.get<TodoModel[]>('http://localhost:3001/todos').subscribe(
      (todos) => (this.todos = todos),
      (error) =>
        alert(
          'HTTP error: ' +
            +' Status: ' +
            error.status +
            ' Message: ' +
            error.error.error
        )
    );
  }

  addTodo(newTodo: TodoModel) {
    this.http
      .post<TodoModel[]>('http://localhost:3001/todos', newTodo)
      .subscribe(
        (todos) => (this.todos = todos),
        (error) =>
          alert(
            'HTTP error: ' +
              ' Status: ' +
              error.status +
              ' Message: ' +
              error.error.error
          ),
        () => alert('Added new Todo' + newTodo.description)
      );
  }

  deleteTodo(id: number) {
    this.http
      .delete<TodoModel[]>(`http://localhost:3001/todos/${id}`)
      .subscribe(
        (todos) => (this.todos = todos),
        (error) =>
          alert(
            'HTTP error: ' +
              ' Status: ' +
              error.status +
              ' Message: ' +
              error.error.error
          ),
        () => alert(`Todo number: ${id} has been deleted`)
      );
  }
}
