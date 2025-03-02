import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { TodoListComponent } from './components/pages/todo-list/todo-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'todos', component: TodoListComponent},
    { path: '**', component: NotFoundComponent}
];
