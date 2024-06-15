import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})
export class ApplyFormComponent implements OnInit {
  applyForm: FormGroup;
  car: any;

  constructor(private fb: FormBuilder, private carService: CarService, private router: Router) {
    this.car = this.router.getCurrentNavigation()?.extras.state?.['car'];
    this.applyForm = this.fb.group({
      customerName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      pickupDate: ['', Validators.required],
      dropoffDate: ['', Validators.required],
      pickupPlace: ['', Validators.required],
      dropoffPlace: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.applyForm.valid) {
      const formData = { ...this.applyForm.value, car: this.car };
      this.carService.applyForCar(formData).subscribe(
        () => {
          alert('Application submitted successfully!');
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error submitting application:', error); // Log error if submission fails
          alert('Failed to submit application. Please try again later.'); // Alert user about the error
        }
      );
    }
  }

  navigateToRegisteredUsers(): void {
    this.router.navigate(['/registered-users']);
  }

  navigateToPayment(): void {
    this.router.navigate(['/payment']);
  }
}
