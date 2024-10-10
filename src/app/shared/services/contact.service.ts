import { Contact } from '../../core/models/contact.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  FContactUrl: string = environment.contactUrl;

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  send(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.FContactUrl, contact);
  }
}
