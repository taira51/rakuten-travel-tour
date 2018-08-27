import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { ToDoListPageComponent } from './todo-list-page/todo-list-page.component';
import { UnderlineDirective } from './common/directive/underline.directive';
import { OverseasTourPageComponent } from './overseas-tour-page/overseas-tour-page.component';
import { OverseasTourPageService } from './overseas-tour-page/overseas-tour-page.service';
import { JsonpModule } from '../../node_modules/@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListPageComponent,
    UnderlineDirective,
    OverseasTourPageComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    AgGridModule.withComponents([]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JsonpModule,
  ],
  providers: [OverseasTourPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
