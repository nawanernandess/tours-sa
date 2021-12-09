import { MatDialogRef } from '@angular/material/dialog';
import { Cadastro } from './../../model/cadastro.model';
import { ContactService } from './../../service/contact.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete-registration',
  templateUrl: './delete-registration.component.html',
  styleUrls: ['./delete-registration.component.css']
})
export class DeleteRegistrationComponent implements OnInit {

  cadastro: Cadastro = {
    id: 0,
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    valor: 0,
    desconto: 0
  }

  modalRef: BsModalRef;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    public dialogRef: MatDialogRef<DeleteRegistrationComponent>
  ) { }

  ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id')
      this.contactService.readById(Number(id)).subscribe(cadastro => {
        this.cadastro = cadastro
      })

  }

  modDeletarGuia(template: TemplateRef<any>){

    this.modalRef = this.modalService.show(template)
    // this.contactService.delete(this.cadastro.id).subscribe(() => {
    //   this.contactService.showMessage('Conta deletada com sucesso!')
    //   this.router.navigate(['/lista'])
    // })
  }
  
  cancel(){
    this.router.navigate(['/lista'])
  }
}
