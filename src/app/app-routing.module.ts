import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListPageComponent } from './todo-list-page/todo-list-page.component';
import { OverseasTourPageComponent } from './overseas-tour-page/overseas-tour-page.component';

const routes: Routes = [
  { path: 'todo-list-page', component: ToDoListPageComponent },
  { path: 'overseas-tour-page', component: OverseasTourPageComponent },
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
