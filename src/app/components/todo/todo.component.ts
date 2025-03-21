import { Component, OnInit } from '@angular/core';
import { TodoService, Todo} from '../../services/todo.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { StatusPipe } from '../../pipes/status.pipe';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, StatusPipe, TaskFormComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})

addTask(task: TaskForm) { 
  const newTodo = { id: Date.now(), ...task };
  this.todos.push(newTodo);
  this.todoService.addTodo(newTodo).subscribe();
}

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
