import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:5000/form';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    console.log("In Form Service");
    console.log(JSON.stringify(data));
    return this.http.post(`${baseUrl}/add`, JSON.stringify(data), httpOptions);
  }
}
