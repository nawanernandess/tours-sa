import { Cadastro } from './../../model/cadastro.model';
import { ContactService } from './../../service/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cadastros: Cadastro []
  displayColumns = ['id', 'nome', 'sobrenome', 'email', 'telefone', 'valor', 'desconto', 'acao']

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.read().subscribe(cadastro => {
      this.cadastros = cadastro
      console.log(cadastro)
    })
  }

}
