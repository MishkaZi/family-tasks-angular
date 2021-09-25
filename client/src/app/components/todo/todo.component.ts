import { Component, Input, OnInit } from '@angular/core';
import TodoModel from 'src/app/models/Todos.model';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: TodoModel;
  constructor(public todosService: TodosService) {}

  ngOnInit(): void {}

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }
}
