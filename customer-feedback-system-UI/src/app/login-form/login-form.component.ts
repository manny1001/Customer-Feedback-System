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
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.http
        .post(environment.apiUrl + '/auth/login', this.loginForm.value)
        .subscribe(
          (response: any) => {
            console.log(response);
            /* this.cookieService.set('jwt', response.token, 1);   */
            if (response.token) {
              sessionStorage.setItem('jwt', response.token);
              alert(
                'Login successful and token stored in localStorage...Shhh 🤫'
              );
              this.router.navigate(['/admin']);
            }
          },
          (err) => {
            alert(err.error.error);
          }
        );
    }
  }
}
