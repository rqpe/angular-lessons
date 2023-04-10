import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  sunday = true;
  statusBtn = false;
  message = 'A trabajar';
  myData = 'No hay nada que decir';
  childName = "Rumpelstiltskin"

  constructor() {
    if(this.sunday) {
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
