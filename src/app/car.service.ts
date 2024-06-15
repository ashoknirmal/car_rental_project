import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './car.model';  // Assuming you have a Car model defined

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://localhost:3000/api/cars';
  private applyUrl = 'http://localhost:3000/api/apply';
  private usersUrl = 'http://localhost:3000/api/registered-users';

  constructor(private http: HttpClient) { }

  // Car Management
  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  getCar(id: string): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }

  addCar(formData: FormData): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, formData);
  }

  updateCar(id: string, formData: FormData): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/${id}`, formData);
  }

  deleteCar(id: string): Observable<Car> {
    return this.http.delete<Car>(`${this.apiUrl}/${id}`);
  }

  // Application Management
  applyForCar(applicationData: any): Observable<any> {
    return this.http.post<any>(this.applyUrl, applicationData);
  }

  getRegisteredUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }
}
