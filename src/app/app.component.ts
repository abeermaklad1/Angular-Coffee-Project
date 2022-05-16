import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  parentData:string = 'Data from Parent';
  message:string = '';

  receivedChildData(data:string){
    this.message = data;
  }
}
