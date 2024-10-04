import { ContactService } from '../../service/contact.service';
import { Contact } from '../../model/contact.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contact: Contact;

  constructor(private contactService: ContactService) {}

  ngOnInit() {}

  sendContact() {
    this.contactService.send(this.contact).subscribe(() => {
      this.contactService.showMessage('Cadastro realizado com sucesso!');
    });
  }
}
