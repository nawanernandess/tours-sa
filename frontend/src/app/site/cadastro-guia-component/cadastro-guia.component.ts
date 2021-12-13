import { ContactService } from '../../service/contact.service';
import { Cadastro } from '../../model/cadastro.model';
import {  MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-guia',
  templateUrl: './cadastro-guia.component.html',
  styleUrls: ['./cadastro-guia.component.css']
})
export class CadastroGuiaComponent implements OnInit {

  cadastro: Cadastro = {
    id: 0,
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    valor: 0,
    desconto: 0
  }
  
  constructor(private contactService: ContactService, 
    public dialogRef: MatDialogRef<CadastroGuiaComponent>) { }

  ngOnInit() {
    console.log(this.cadastro)
  }

  cadastroGuia(){
    this.contactService.create(this.cadastro).subscribe(() => {
      this.contactService.showMessage('Cadastro realizado com sucesso!')
      this.dialogRef.close()
    })
  }

  cancel(){
    this.dialogRef.close()
  }

}
