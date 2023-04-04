import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})

export class HelloWorldComponent {
  title = "Hola mundo"

  myImage = "https://imageio.forbes.com/specials-images/imageserve/09zFfq433L08b/960x960.jpg?format=jpg&width=960"
  
  myList = ["Almenara", "Burricalvo", "cEnuTrio", "diablillo"]

  visible = true
  textBtn = "Mostrar lista"
  disabledBtn = 3
  titleColor = "green"
  listClass = "blue-bg"

  showList() {
    if(this.visible === false) {
      this.textBtn = "Ocultar lista"
    }
    else {
      this.textBtn = "Mostrar lista"
    }
    
    this.visible = !this.visible
  }

  enableBtn() {
    this.disabledBtn--
  }





}
