import { Contact } from '../../core/models/contact.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  FContactUrl: string = environment.contactUrl;

  send(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.FContactUrl, contact);
  }
}
