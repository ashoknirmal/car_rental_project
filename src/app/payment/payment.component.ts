import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.paymentForm = this.fb.group({
      paymentMethod: ['creditCard', Validators.required],
      ccType: ['', Validators.required],
      ccNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expMonth: ['', Validators.required],
      expYear: ['', Validators.required],
      ccSecurityCode: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.paymentForm.valid) {
      this.http.post('/submitPayment', this.paymentForm.value).subscribe(
        response => {
          alert('Payment successful!');
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error:', error);
          alert('Payment failed.');
        }
      );
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
