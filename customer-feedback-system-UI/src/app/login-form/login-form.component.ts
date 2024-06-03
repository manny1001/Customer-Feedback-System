import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../enviroment/envoriment';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.http
        .post(environment.apiUrl + '/auth/login', this.loginForm.value)
        .subscribe(
          (response) => {
            console.log(response);
            alert('Successfully submitted form');
            /* if (response.token) {
              this.cookieService.set('jwt', response.token, 1);  
              console.log('Login successful and token stored in cookie');
              
            } */
          },
          (err) => {
            alert(err.error.error);
          }
        );
    }
  }
}
