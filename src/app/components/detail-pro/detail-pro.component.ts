import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-detail-pro',
  templateUrl: './detail-pro.component.html',
  styleUrls: ['./detail-pro.component.css']
})
export class DetailProComponent implements OnInit {

  userId:string;
  constructor(public myActivated: ActivatedRoute, public myServices: TestService) { 
    this.userId = this.myActivated.snapshot.params['id'];
    console.log(this.userId);
  }
  

  user:any;
  ngOnInit(): void {
    this.myServices.getUsersById(this.userId).subscribe(
      (response) => {
        this.user = response
        console.log(response)
      },
      () => {}
    )
  }

}
