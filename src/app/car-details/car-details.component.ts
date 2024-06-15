import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car.service';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car: Car | undefined;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carService.getCar(id).subscribe((car: Car) => this.car = car);
    }
  }

  goBack(): void {
    this.router.navigate(['/available-cars']);
  }
}
