import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  @Input()
    parentData!:string;

  @Input()
  nameData!:string;


  ngOnInit(): void {
  }

  myfincton(a: any, b: any) {
    return a + b;
  }

  parentToChild(parentName:any){
    this.xyz = parentName
  }


}
