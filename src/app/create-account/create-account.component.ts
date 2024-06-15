import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  constructor(private router: Router) {}

  onSubmit() {
    // Handle create account form submission if needed
    // For now, just navigate to login page
    this.router.navigate(['/login']);
  }
}
