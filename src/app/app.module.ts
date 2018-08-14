import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ToDoListPageComponent } from './todo-list-page/todo-list-page.component';
import { UnderlineDirective } from './common/directive/underline.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListPageComponent,
    UnderlineDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
