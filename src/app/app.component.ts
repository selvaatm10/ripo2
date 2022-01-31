import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'demo3';


    parentData=""

    sendData(name:any) {
        this.parentData = name;
    }

    nameData = ""
    send(myname:any){
        this.nameData = myname;
    }

  @Output() xyz!:string;


}


