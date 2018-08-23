import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-kontakt-form',
  templateUrl: './kontakt-form.component.html',
  styleUrls: ['./kontakt-form.component.scss']
})
export class KontaktFormComponent implements OnInit {
  name: any;
  email: string;
  phone: string;
  message: string;

  kontaktForm = new FormGroup({
    'name': new FormControl(this.name, [
      Validators.required,
      Validators.minLength(4)
    ]),
    'email': new FormControl(this.email),
    'message': new FormControl(this.message, Validators.required)
  });

  constructor() {}

  ngOnInit() {}

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}, phone: ${this.phone}. My message is ${this.message}`;
    alert(allInfo); 
  }

}
