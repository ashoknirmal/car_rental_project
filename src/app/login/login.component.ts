import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; // Define username property
  password: string = ''; // Define password property

  constructor(private router: Router) {}

  onLogin() {
    // Perform login logic using this.username and this.password
    // For example, validate credentials and navigate to available-cars page
    if (this.username === 'ashok' && this.password === '1') {
      this.router.navigate(['/available-cars']);
    } else {
      // Handle invalid credentials scenario
      alert('Invalid username or password');
    }
  }

  navigateToCreateAccount() {
    // Navigate to create-account page
    this.router.navigate(['/create-account']);
  }
}
