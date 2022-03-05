import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftSideComponent } from './dashboard/left-side/left-side.component';
import { RightSideComponent } from './dashboard/right-side/right-side.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DashboardComponent,
    LeftSideComponent,
    RightSideComponent 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
