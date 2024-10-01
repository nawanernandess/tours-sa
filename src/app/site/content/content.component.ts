import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastroGuiaComponent } from '../cadastro-guia-component/cadastro-guia.component';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  envelope = faEnvelope;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openModCad() {
    const dialogRef = this.dialog.open(CadastroGuiaComponent, {
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe();
  }
}
