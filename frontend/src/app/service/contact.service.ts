import { environment } from './../../environments/environment';
import { Cadastro } from '../model/cadastro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ContactService {
    
    constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

    baseUrl: string = environment.cadBaseUrl

    showMessage(msg: string): void{
        this.snackBar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
        })
    }

    creat(cadastro: Cadastro): Observable<Cadastro>{
        return this.http.post<Cadastro>(this.baseUrl, cadastro)
    }
    read(): Observable<Cadastro[]>{
        return this.http.get<Cadastro[]>(this.baseUrl)
    }
    readById(id: string): Observable<Cadastro> {
        const url = `${this.baseUrl}/${id}`
        return this.http.get<Cadastro>(url)
    }
    update(cadastro: Cadastro): Observable<Cadastro>{
        const url = `${this.baseUrl}/${cadastro.id}`
        return this.http.put<Cadastro>(url, cadastro)
    }
    delte(cadastro: Cadastro): Observable<Cadastro>{
        const url = `${this.baseUrl}/${cadastro.id}`
        return this.http.delete<Cadastro>(url)
    }
}