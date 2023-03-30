import { Component } from '@angular/core';

@Component ({
  selector: 'toggle-example',
  templateUrl: './toggle-example.component.html',
  styleUrls: ['./toggle-example.component.css']
})

export class ToggleExampleComponent {
  myId = "text1"
  fontColor = "blue"

  message = "Empieza el show"
  disabledBtn = true

  statusBtn = false
  btnMessage = "OFF"

  start() {
    this.disabledBtn = false

    alert(this.message)
  }

  onToggleClick() {
    if (!this.statusBtn) {
      this.btnMessage = 'ON'
    } else {
      this.btnMessage = 'OFF'
    }

    this.statusBtn = !this.statusBtn
  }
}