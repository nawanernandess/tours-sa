import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from '../model/cadastro.model';
import { ContactService } from '../service/contact.service';
import { UpdateRegistrationModalComponent } from './update-registration-modal/update-registration-modal.component';

@Component({
  selector: 'app-lista-guia-component',
  templateUrl: './lista-guia-component.component.html',
  styleUrls: ['./lista-guia-component.component.css']
})
export class ListaGuiaComponentComponent implements OnInit {

  cadastros: Cadastro[]
  displayColumns = ['id', 'nome', 'sobrenome', 'email', 'telefone', 'valor', 'desconto', 'acao']
  
    constructor(
      private contactService: ContactService, 
      private router: Router, 
      private route: ActivatedRoute,
      public dialog: MatDialog,

      @Inject(MAT_DIALOG_DATA) public data: {id: number}
      ) { }

  ngOnInit() {
    this.contactService.read().subscribe(cadastro => {
      this.cadastros = cadastro
      console.log(cadastro)
    })
  }

  
  openModUp(){
    const id = this.route.snapshot.paramMap.get('id')
    const dialogRef = this.dialog.open(UpdateRegistrationModalComponent, {
      width: '1000px',
      data: {id: this.contactService.readById(Number(id))}
    })

    dialogRef.afterClosed().subscribe();
  }

  // openModDel(){
  //   const dialogRef = this.dialog.open(DeleteRegistrationComponent, {
  //     width: '1000px'
  //   })

  //   dialogRef.afterClosed().subscribe();
  // }
}
