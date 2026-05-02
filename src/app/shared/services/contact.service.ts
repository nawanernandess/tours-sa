import { Contact } from '../../core/models/contact.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly http = inject(HttpClient);
  private readonly contactUrl = environment.contactUrl;

  send(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactUrl, contact);
  }
}
