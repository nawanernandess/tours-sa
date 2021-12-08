import { MatDialogRef } from '@angular/material/dialog';
import { Cadastro } from './../../model/cadastro.model';
import { ContactService } from './../../service/contact.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<DeleteRegistrationComponent>
  ) { }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id')
    // this.contactService.readById(parseInt(id)).subscribe(cadastro => {
    //   this.cadastro = cadastro
    // })

  }

  deletarGuia(){
    this.contactService.delete(Number(this.cadastro)).subscribe(() => {
      this.contactService.showMessage('Conta deletada com sucesso!')
      this.dialogRef.close()
    })
  }

  cancel(){
    this.dialogRef.close()
  }
}
