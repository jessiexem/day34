import { Component } from '@angular/core';
import { RegistrationService } from 'src/services/registration.service';
import { Register } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private registerSvc: RegistrationService) { }
  
  processNewRegistration(newRegistration: Register) {
    console.info("new registraion:", newRegistration)

    this.registerSvc.newRegistration(newRegistration)
    .then(result => {
      console.info('>>>> result:', result)
      alert(`Your registration id is ${result.message}`)
      //this.registerSvc.onNewRegistration(result)
    })
    .catch (error => {
      console.error("error",error)
      alert(`Your registration id is ${JSON.stringify(error)}`)
    })
  }
  
}
