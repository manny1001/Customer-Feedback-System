import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {path: "", pathMatch : "full",redirectTo : "feedback"},
    {path : "login" , component : LoginFormComponent},
    {path : "feedback" , component : FeedbackFormComponent},
    {path : "admin" , component : AdminComponent},

];
