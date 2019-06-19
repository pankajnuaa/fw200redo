import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './component/todo/todo.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ShoppingComponent } from './features/shopping/shopping.component';

const routes: Routes = [
  {
    path: 'todo-list',
    component: TodoComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'shoppinglist',
    component: ShoppingComponent
  }, {
    path: '**',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
