import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{
    myName:string = 'Abeer'
}