import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {
  users: any[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getRegisteredUsers().subscribe(data => {
      this.users = data;
    });
  }
}
