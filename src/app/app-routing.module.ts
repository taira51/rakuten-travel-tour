import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListPageComponent } from './todo-list-page/todo-list-page.component';

const routes: Routes = [
	{ path: 'todo-list', component: ToDoListPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
