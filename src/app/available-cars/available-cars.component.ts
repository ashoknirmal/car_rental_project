import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { Car } from '../car.model';  // Assuming you have a Car model defined

@Component({
  selector: 'app-available-cars',
  templateUrl: './available-cars.component.html',
  styleUrls: ['./available-cars.component.css']
})
export class AvailableCarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(data => {
      this.cars = data;
    });
  }

  viewCar(car: Car): void {
    this.router.navigate(['/apply-form'], { state: { car: car } });
  }
}
