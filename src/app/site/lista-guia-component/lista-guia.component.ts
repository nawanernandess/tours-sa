import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Contact } from '../../model/contact.model';
import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactService } from '../../service/contact.service';
import { UpdateRegistrationModalComponent } from './update-registration-modal/update-registration-modal.component';

@Component({
  selector: 'app-lista-guia',
  templateUrl: './lista-guia.component.html',
  styleUrls: ['./lista-guia.component.css'],
})
export class ListaGuiaComponent implements OnInit {
  cadastros: Contact[];

  // Modal - Update // Delete
  cadastro: Contact;
  dialogRef: any;
  modalRef: BsModalRef;

  displayColumns = [
    'id',
    'nome',
    'sobrenome',
    'email',
    'telefone',
    'valor',
    'desconto',
    'acao',
  ];

  constructor(
    private contactService: ContactService,
    private modalService: BsModalService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    this.contactService.read().subscribe((cadastro) => {
      this.cadastros = cadastro;
      console.log(cadastro);
    });
  }

  openModUp(id: any): Promise<void> {
    let promise = new Promise<void>((resolve, reject) => {
      this.contactService.readById(parseInt(id)).subscribe(
        (cadastro) => {
          this.cadastro = cadastro;
          resolve();
        },
        (reason) => {
          reject(reason);
        }
      );
    }).finally(
      () =>
        (this.dialogRef = this.dialog.open(UpdateRegistrationModalComponent, {
          width: '1000px',
          data: { cadastro: this.cadastro },
        }))
    );

    return promise;
  }

  openModalDel(template: TemplateRef<any>, id: any) {
    this.contactService.readById(id).subscribe((cadastro) => {
      this.cadastro = cadastro;
    });

    this.modalService.show(template);
  }

  modDelete() {
    this.contactService.delete(this.cadastro).subscribe(() => {
      this.contactService.showMessage('Conta deletada com sucesso!');
      location.reload();
    });
  }

  closedModalDel() {
    this.modalService.hide();
  }
}
