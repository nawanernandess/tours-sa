import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  @Input() type: 'input' | 'textarea' = 'input';

  @Input() inputName: string;

  @Input() submitted: string;

  @Input() invalid: string;

  @Input() label: string;

  @Input() placeholder: boolean;

  @Input() required: boolean;

  constructor() {}

  ngOnInit(): void {}
}
