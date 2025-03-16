import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true, 
  imports: [NgIf, ReactiveFormsModule, CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
    registerForm: FormGroup; 
    

    constructor(private fb: FormBuilder) {
      this.registerForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]]
   }, { validators: this.passwordMatchValidator});
    }

    passwordMatchValidator(form: FormGroup) {
      const password = form.get('password')?.value;
      const confirmPassword = form.get('confirmPassword')?.value;
      return password === confirmPassword ? null : {mismatch: true};
    }

    submitForm() {
      if (this.registerForm.valid) {
        console.log('Форма отправлена!', this.registerForm.value);
      } else {
        console.log('Форма содержит ошибки');
      }
    }
}
