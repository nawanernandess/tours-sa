import { Contact } from '../model/contact.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  baseUrl: string = environment.cadBaseUrl;

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  create(cadastro: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.baseUrl, cadastro);
  }
  read(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl);
  }
  readById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.baseUrl}/${id}`);
  }
  update(cadastro: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.baseUrl}/${cadastro.id}`, cadastro);
  }
  delete(cadastro: Contact): Observable<Contact> {
    return this.http.delete<Contact>(`${this.baseUrl}/${cadastro.id}`);
  }
}
