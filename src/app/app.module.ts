import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AvailableCarsComponent } from './available-cars/available-cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarManagementComponent } from './car-management/car-management.component';
import { PersonalInfoFormComponent } from './personal-info-form/personal-info-form.component';
import { ECartManagementComponent } from './ecart-management/ecart-management.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    AvailableCarsComponent,
    CarDetailsComponent,
    CarManagementComponent,
    PersonalInfoFormComponent,
    ECartManagementComponent,
    ApplyFormComponent,
    RegisteredUsersComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
