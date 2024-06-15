import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-management',
  templateUrl: './car-management.component.html',
  styleUrls: ['./car-management.component.css']
})
export class CarManagementComponent implements OnInit {
  newCar: Car = {
    _id: '',
    vehicleName: '',
    vehicleModel: '',
    address: '',
    phoneNumber: '',
    cnic: '',
    productionYear: new Date().getFullYear(),
    pricePerDay: 0,
    registrationNumber: '',
    chassisNumber: '',
    image: ''
  };
  selectedFile: File | null = null;
  cars: Car[] = [];
  editMode: boolean = false;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  addCar(): void {
    const formData = new FormData();
    Object.keys(this.newCar).forEach(key => {
      formData.append(key, (this.newCar as any)[key]);
    });
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    if (this.editMode) {
      const carId = this.newCar._id ? this.newCar._id : '';
      this.carService.updateCar(carId, formData).subscribe(() => {
        this.loadCars();
        this.resetForm();
        this.editMode = false;
      });
    } else {
      this.carService.addCar(formData).subscribe(() => {
        this.loadCars();
        this.resetForm();
      });
    }
  }

  editCar(car: Car): void {
    this.newCar = { ...car };
    this.editMode = true;
  }

  deleteCar(id: string): void {
    this.carService.deleteCar(id).subscribe(() => {
      this.cars = this.cars.filter(car => car._id !== id);
    });
  }

  resetForm(): void {
    this.newCar = {
      _id: '',
      vehicleName: '',
      vehicleModel: '',
      address: '',
      phoneNumber: '',
      cnic: '',
      productionYear: new Date().getFullYear(),
      pricePerDay: 0,
      registrationNumber: '',
      chassisNumber: '',
      image: ''
    };
    this.selectedFile = null;
    this.editMode = false;
  }
}
