import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UndefinedComponent } from './components/undefined/undefined.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TodosListComponent },
  {
    path: 'add-todo',
    pathMatch: 'full',
    component: AddTodoComponent,
  },
  { path: '**', component: UndefinedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
