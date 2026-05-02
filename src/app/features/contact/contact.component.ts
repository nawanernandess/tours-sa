import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { ContactService } from '../../shared/services/contact.service';
import { Contact } from '../../core/models/contact.model';
import {
  DialogAlertService,
  DialogType,
} from '../../shared/services/dialog-alert.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private readonly contactService = inject(ContactService);
  private readonly dialogAlertService = inject(DialogAlertService);

  isSubmitted = false;

  readonly contactForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    question: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    phone: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10)] }),
    note: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  submit(): void {
    this.isSubmitted = true;
    if (this.contactForm.valid) {
      const newContact: Contact = this.contactForm.getRawValue();
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
        },
      });
    }
  }
}
