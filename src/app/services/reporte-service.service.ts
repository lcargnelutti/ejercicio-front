import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { ReporteCobranzas } from '../models/reporte-cobranzas';
import {environment} from '../../environment/environment'

@Injectable({
  providedIn: 'root'
})
export class ReporteServiceService {

  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = environment.apiUrl;
  }

  get(dateRequest: string) {
    let urlRequest: string = this.resourceUrl + dateRequest;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', environment.key)
    return this.httpClient.get<ReporteCobranzas>(urlRequest, { headers: headers });
  }

}
