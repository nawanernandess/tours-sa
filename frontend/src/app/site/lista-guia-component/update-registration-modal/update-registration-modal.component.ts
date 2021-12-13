import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    public dialogRef: MatDialogRef<UpdateRegistrationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
  }

  updateGuia(){
    this.contactService.update(this.data.cadastro).subscribe(() => {
      this.contactService.showMessage("Conta atualizada com sucesso!")
      location.reload()
    })
  }

  cancel(){
    this.dialogRef.close();
  }
}
