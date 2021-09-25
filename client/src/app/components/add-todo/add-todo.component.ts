import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { HomeMembersService } from '../../services/homemembers.service';
import TodoModel from '../../models/Todos.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  public date = new Date();

  public todo: TodoModel = {
    description: '',
    homeMemberId: null,
  };
  constructor(
    public todoService: TodosService,
    public homeMemberService: HomeMembersService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.todoService.addTodo(this.todo);
    this.router.navigateByUrl('');
  }
}
