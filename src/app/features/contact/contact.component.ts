import { ContactService } from '../../shared/services/contact.service';
import { Contact } from '../../core/models/contact.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { ModalComponent } from './modal/modal.component';

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
  modal: any;

  constructor(
    private contactService: ContactService,
    private dialogRef: MatDialog
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
          this.contactService.showMessage(
            'Seus dados para contato foram enviados com sucesso! Logo entraresmos em contato.'
          );
          this.modal = this.dialogInformation();
        },
        complete: () => {
          this.contactForm.reset();
          this.isSubmitted = false;
          setTimeout(() => {
            this.modal.close();
          }, 3000);
        },
      });
    }
  }

  dialogInformation() {
    return this.dialogRef.open(ModalComponent);
  }
}
