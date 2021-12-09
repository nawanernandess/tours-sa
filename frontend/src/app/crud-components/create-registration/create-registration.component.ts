import { ContactService } from './../../service/contact.service';
import { Cadastro } from './../../model/cadastro.model';
import {  MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.css']
})
export class CreateRegistrationComponent implements OnInit {

  cadastro: Cadastro;
  
  constructor(private contactService: ContactService, 
    public dialogRef: MatDialogRef<CreateRegistrationComponent>) { }

  ngOnInit() {
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
