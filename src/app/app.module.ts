import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ToDoListPageComponent } from './todo-list-page/todo-list-page.component';
import { UnderlineDirective } from './common/directive/underline.directive';
import { OverseasTourPageComponent } from './overseas-tour-page/overseas-tour-page.component';
import { OverseasTourPageService } from './overseas-tour-page/overseas-tour-page.service';
import { OverseasTourImageComponent } from './overseas-tour-page/overseas-tour-image/overseas-tour-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListPageComponent,
    UnderlineDirective,
    OverseasTourPageComponent,
    OverseasTourImageComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    JsonpModule,
  ],
  providers: [OverseasTourPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
