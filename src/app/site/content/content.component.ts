import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastroGuiaComponent } from '../cadastro-guia-component/cadastro-guia.component';
import {
  faCar,
  faEnvelope,
  faMap,
  faPlaneDeparture,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  car = faCar;
  map = faMap;
  planeDerpature = faPlaneDeparture;

  constructor(public dialog: MatDialog, private _Router: Router) {}

  ngOnInit() {}

  openModCad() {
    const dialogRef = this.dialog.open(CadastroGuiaComponent, {
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe();
  }
}
