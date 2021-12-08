import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from './../../model/cadastro.model';
import { ContactService } from './../../service/contact.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-registration',
  templateUrl: './update-registration.component.html',
  styleUrls: ['./update-registration.component.css']
})
export class UpdateRegistrationComponent implements OnInit {

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
    public dialogRef: MatDialogRef<UpdateRegistrationComponent>
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.contactService.readById(Number(id)).subscribe( cadastro => {
      this.cadastro = cadastro
    })
  }
  
  updateGuia(){
    this.contactService.update(this.cadastro).subscribe(() => {
      this.contactService.showMessage("Conta atualizada com sucesso!")
      this.dialogRef.close()
    })
  }

  cancel(){
    this.dialogRef.close()
  }

}
