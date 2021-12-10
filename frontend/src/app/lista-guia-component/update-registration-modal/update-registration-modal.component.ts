import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from 'src/app/model/cadastro.model';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-update-registration-modal',
  templateUrl: './update-registration-modal.component.html',
  styleUrls: ['./update-registration-modal.component.css']
})
export class UpdateRegistrationModalComponent implements OnInit {

  cadastro: Cadastro;
  
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<UpdateRegistrationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id')
    // this.contactService.readById(Number(id)).subscribe( cadastro => {
    //   this.cadastro = cadastro
    // })
  }

  updateGuia(){
    this.contactService.update(this.data.cadastro).subscribe(() => {
      this.contactService.showMessage("Conta atualizada com sucesso!")
      
    })
  }

  cancel(){
    
  }
}
