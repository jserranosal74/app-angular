import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { URL_APIS } from '../global';
import { marca } from '../../models/marca.model';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {
  public urlMarcas: string;

  constructor(private http: HttpClient) { 
    this.urlMarcas = URL_APIS.urlMarcas;
  }

  public getMarca(Id_Marca : number | null): Observable<marca[]> {
    return this.http.get<marca[]>(this.urlMarcas + '?Id_Marca=' + Id_Marca);
  }

  public getMarcas(): Observable<marca[]> {
    return this.http.get<marca[]>(this.urlMarcas + '?Id_Marca=');
  }

  public putMarca(objMarca: marca): Observable<marca> {
    return this.http.put<marca>(this.urlMarcas, objMarca);
  }

  public postMarca(objMarca: marca): Observable<marca> {
    return this.http.post<marca>(this.urlMarcas, objMarca);
  }

  public deleteMarca(Id_Marca : number): Observable<marca> {
    return this.http.delete<marca>(this.urlMarcas + '?Id_Marca=' + Id_Marca);
  }

}
