import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { invalidEmailDomain } from './invalidEmailDomain';
import { createInvalidEmailDomain } from './invalidEmailDomain';

const invalidEmailDomain = createInvalidEmailDomain(['gmail.com', 'yahoo.com']);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor() {}

  contactForm = new FormGroup({
    senderNameControl: new FormControl('', Validators.required),
    senderEmailControl: new FormControl('', [
      Validators.required,
      Validators.email,
      invalidEmailDomain,
    ]),
    senderMessageControl: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  submitForm() {
    console.log(this.contactForm.valid);
  }
}
