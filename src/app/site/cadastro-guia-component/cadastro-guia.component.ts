import { ContactService } from '../../service/contact.service';
import { Contact } from '../../model/contact.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-guia',
  templateUrl: './cadastro-guia.component.html',
  styleUrls: ['./cadastro-guia.component.css'],
})
export class CadastroGuiaComponent implements OnInit {
  cadastro: Contact = {
    id: 0,
    name: '',
    email: '',
    question: '',
    phone: '',
    note: '',
  };

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    console.log(this.cadastro);
  }

  cadastroGuia() {
    this.contactService.create(this.cadastro).subscribe(() => {
      this.contactService.showMessage('Cadastro realizado com sucesso!');
    });
  }

  sendContact() {}
}
