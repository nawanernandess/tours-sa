import { DeleteRegistrationComponent } from './../delete-registration/delete-registration.component';
import { UpdateRegistrationComponent } from './../update-registration/update-registration.component';
import { MatDialog } from '@angular/material/dialog';
import { Cadastro } from '../../model/cadastro.model';
import { ContactService } from '../../service/contact.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-registration',
  templateUrl: './read-registration.component.html',
  styleUrls: ['./read-registration.component.css']
})
export class ReadRegistrationComponent implements OnInit {

  cadastros: Cadastro []
  displayColumns = ['id', 'nome', 'sobrenome', 'email', 'telefone', 'valor', 'desconto', 'acao']

  constructor(private contactService: ContactService, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.contactService.read().subscribe(cadastro => {
      this.cadastros = cadastro
      console.log(cadastro)
    })
  }

  openModUp(){
    const dialogRef = this.dialog.open(UpdateRegistrationComponent, {
      width: '1000px'
    })

    dialogRef.afterClosed().subscribe();
  }

  openModDel(){
    const dialogRef = this.dialog.open(DeleteRegistrationComponent, {
      width: '1000px'
    })

    dialogRef.afterClosed().subscribe();
  }
}
