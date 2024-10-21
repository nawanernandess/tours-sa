import { ContactService } from '../../shared/services/contact.service';
import { Contact } from '../../core/models/contact.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  DialogAlertService,
  DialogType,
} from 'src/app/shared/services/dialog-alert.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get question() {
    return this.contactForm.get('question');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get note() {
    return this.contactForm.get('note');
  }

  contactForm: FormGroup;
  isSubmitted: boolean;

  constructor(
    private contactService: ContactService,
    private dialogAlertService: DialogAlertService
  ) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      question: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      note: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    this.isSubmitted = true;
    if (this.contactForm.valid) {
      const newContact: Contact = this.contactForm.value;
      this.contactService.send(newContact).subscribe({
        next: () => {
          this.dialogAlertService.dialogOpen(
            DialogType.success,
            'Seus dados foram enviados com sucesso, nossa equipe entrará em contato em breve!'
          );
        },
        error: () => {
          this.dialogAlertService.dialogOpen(
            DialogType.error,
            'Não foi possível enviar seus dados, tente novamente!'
          );
        },
        complete: () => {
          this.contactForm.reset();
          this.isSubmitted = false;
          this.dialogAlertService.close();
        },
      });
    }
  }
}
