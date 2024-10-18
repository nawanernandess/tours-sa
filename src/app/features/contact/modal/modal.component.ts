import { Component, OnInit } from '@angular/core';
import {
  faCheck,
  faCheckCircle,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  icon: IconDefinition = faCheckCircle;
  title: string = 'Sucesso';
  description: string =
    'Seus dados foram enviados com sucesso, nossa equipe entrará em contato em breve!';

  constructor() {}

  ngOnInit(): void {}
}
