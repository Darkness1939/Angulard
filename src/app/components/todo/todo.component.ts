import { Component, OnInit } from '@angular/core';
import { TodoService, Todo} from '../../services/todo.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit{
  todos: Todo[] = [];
  loading = true;
  error = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe({

      next: (data) => {
        this.todos = data.slice(0, 10);
        this.loading = false;
      },

      error: (err) => {
        this.error = 'Ошибка загрузки данных';
        this.loading = false;
      },
    });
  }
}
