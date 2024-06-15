import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AvailableCarsComponent } from './available-cars/available-cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarManagementComponent } from './car-management/car-management.component';
import { PersonalInfoFormComponent } from './personal-info-form/personal-info-form.component';
import { ECartManagementComponent } from './ecart-management/ecart-management.component';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { PaymentComponent } from './payment/payment.component'; // Import PaymentComponent

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'available-cars', component: AvailableCarsComponent },
  { path: 'car-details/:id', component: CarDetailsComponent },
  { path: 'apply-form', component: ApplyFormComponent },
  { path: 'registered-users', component: RegisteredUsersComponent },
  { path: 'car-management', component: CarManagementComponent },
  { path: 'personal-info-form', component: PersonalInfoFormComponent },
  { path: 'ecart-management', component: ECartManagementComponent },
  { path: 'payment', component: PaymentComponent }, // Add Payment route
  { path: '**', redirectTo: '/login', pathMatch: 'full' } // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
