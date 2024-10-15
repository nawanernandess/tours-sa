import { ContactService } from '../../shared/services/contact.service';
import { Contact } from '../../core/models/contact.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contact: Contact;
  contactForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    question: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    note: new FormControl('', [Validators.required]),
  });

  constructor(private contactService: ContactService) {}

  ngOnInit() {}

  get name() {
    return this.contactForm.get('name');
  }

  submit() {
    console.log('enviar formulario! ');
    this.contact = this.contactForm.value;
    console.log('this.contact :>> ', this.contact);
  }

  sendContact() {
    this.contactService.send(this.contact).subscribe(() => {
      this.contactService.showMessage('Cadastro realizado com sucesso!');
    });
  }
}
