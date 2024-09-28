import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastroGuiaComponent } from 'src/app/site/cadastro-guia-component/cadastro-guia.component';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openModCad(){
    const dialogRef = this.dialog.open(CadastroGuiaComponent, {
      width: '1000px'
    })

    dialogRef.afterClosed().subscribe();
  }
}
