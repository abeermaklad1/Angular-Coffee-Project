import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

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
