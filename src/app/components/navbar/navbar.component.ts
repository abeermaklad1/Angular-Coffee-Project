import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public myServices: TestService) { }

  users:any;
  ngOnInit(): void {
    this.myServices.getAllUsers().subscribe(
      (response) => {
        this.users = response;
      },
      () => {}
    );
  }

}
