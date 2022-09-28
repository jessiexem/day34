import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { RegistrationService } from 'src/services/registration.service';
import { Register, Response } from '../models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm!: FormGroup

  @Output()
  onNewRegistration = new Subject<Register>()


  constructor(private fb: FormBuilder, private registerSvc: RegistrationService) { }

  ngOnInit(): void {
    this.regForm = this.createRegistrationForm()
  }

  private createRegistrationForm (response?: Response): FormGroup {
    return this.fb.group ({
      id: this.fb.control<string>(''),
      name: this.fb.control<string>('', [Validators.required]),
      email: this.fb.control<string>('', [Validators.email, Validators.required])
    })
  }

  processRegister() {
    const data: Register = this.regForm.value as Register
    console.info(">>> regForm", this.regForm.value)

    this.onNewRegistration.next(data)
    this.regForm = this.createRegistrationForm()

  } 

}
