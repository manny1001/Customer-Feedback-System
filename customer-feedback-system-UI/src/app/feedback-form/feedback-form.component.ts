import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../enviroment/envoriment';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule, ReactiveFormsModule, CommonModule],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.css',
})
export class FeedbackFormComponent {
  fullname: any = '';
  message: any = '';
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.feedbackForm = this.fb.group({
      fullname: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      console.log(environment.apiUrl + '/feedback/create');
      this.http
        .post(environment.apiUrl + '/feedback/create', this.feedbackForm.value)
        .subscribe((data) => {
          console.log('Feedback submitted', data);
          alert('Successfully submitted form');
        });
    }
  }
}
