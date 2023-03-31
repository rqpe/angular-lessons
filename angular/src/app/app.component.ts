import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  message = '';
  domingo: boolean = true;
  myData = '';

  statusBtn = false;

  constructor() {
    if(this.domingo) {
      this.message = 'No me molestes';
    }
    else {
      this.message = 'A trabajar';
    }
  }

  showData() {
    if(this.statusBtn === true) {

      this.myData = 'Que tengáis muy buen finde';
      this.statusBtn = false;
    }
    else {
      this.myData = 'No hay nada que decir';
      this.statusBtn = true;
    }
  }
}
