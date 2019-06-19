import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { TodoComponent } from './component/todo/todo.component';
import { InputComponent } from './component/todo/input/input.component';
import { ListComponent } from './component/todo/list/list.component';
import { TodoDataService } from './component/todo/todo-data.service';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ShoppingModule } from './features/shopping/shopping.module';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodoComponent,
    InputComponent,
    ListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
