import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  @Input() icon?: IconDefinition;

  @Input() title: string;

  @Input() description: string;

  constructor() {}

  ngOnInit(): void {}
}
