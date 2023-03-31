import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  message = '';
  domingo: boolean = true

  constructor() {
    if(this.domingo) {
      this.message = 'No me molestes';
    }
    else {
      this.message = 'A trabajar';
    }
  }
}
