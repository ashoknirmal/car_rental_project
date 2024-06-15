import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Example authentication logic (replace with actual authentication logic)
    if (username === 'admin' && password === 'password') {
      // Store user details and token in session storage for a real application
      sessionStorage.setItem('currentUser', JSON.stringify({ username: username }));
      return true;
    } else {
      return false;
    }
  }

  logout() {
    // Remove user from session storage on logout
    sessionStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    // Check if user is logged in (example implementation)
    return !!sessionStorage.getItem('currentUser');
  }
}
