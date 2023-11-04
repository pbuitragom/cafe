import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cafe } from './cafe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCafes(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.apiUrl);
  }

}
