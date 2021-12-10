import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cadastro } from './../model/cadastro.model';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ContactService } from '../service/contact.service';
import { UpdateRegistrationModalComponent } from './update-registration-modal/update-registration-modal.component';

@Component({
  selector: 'app-lista-guia-component',
  templateUrl: './lista-guia-component.component.html',
  styleUrls: ['./lista-guia-component.component.css']
})
export class ListaGuiaComponentComponent implements OnInit {

  cadastros: Cadastro[]

  // Modal Update
  cadastro: Cadastro;
  dialogRef: any;

  // Modal Delete
  modalRef: BsModalRef;

  displayColumns = ['id', 'nome', 'sobrenome', 'email', 'telefone', 'valor', 'desconto', 'acao']
  
    constructor(
      private contactService: ContactService, 
      private modalService: BsModalService,
      public dialog: MatDialog,
      ) { }

  ngOnInit() {
    this.contactService.read().subscribe(cadastro => {
      this.cadastros = cadastro
      console.log(cadastro)
    })
  }

  
  openModUp(id: any): Promise<void> {

    let promise = new Promise<void>((resolve, reject) => {

      this.contactService.readById(parseInt(id)).subscribe(result => {
        this.cadastro = result;
        resolve();
        },
        reason => {
          reject(reason);
        }
      );
    }).finally(
      () =>       this.dialogRef = this.dialog.open(UpdateRegistrationModalComponent, {
      width: '1000px',
      data: {cadastro: this.cadastro}
      }),
    );
    // this.dialogRef.afterClosed().subscribe();
    return promise;

  }

   openModDel(template: TemplateRef<any>){
    this.modalService.show(template);
  }

  closedModelDel(){
    this.modalService.hide();
  }
}
