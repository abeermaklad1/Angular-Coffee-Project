import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // userId:string;
  // constructor(public myActivated: ActivatedRoute, public myServices: TestService) { 
  //   this.userId = this.myActivated.snapshot.params['id'];
  //   console.log(this.userId);
  // }

  ngOnInit(): void {
    // this.myServices.getUsersById(this.userId).subscribe(
    //   (response) => {
    //     console.log(response)
    //   },
    //   () => {}
    // )
  }

}
