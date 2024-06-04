import { CanActivate, Router } from '@angular/router';

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  private checkAuth(): boolean {
    const jwt = sessionStorage.getItem('jwt');
    if (jwt) {
      return true;
    } else {
      // Redirect to the feedback page if the user is not authenticated
      this.router.navigate(['/feedback']);
      return false;
    }
  }

  canActivate(): boolean {
    return this.checkAuth();
  }
}
