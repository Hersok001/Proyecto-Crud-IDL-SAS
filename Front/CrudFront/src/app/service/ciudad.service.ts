import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  url="http://localhost:8080/ciudad/";

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Ciudad[]> {
    return this.httpClient.get<Ciudad[]>(this.url + 'lista' );
  }

  public detail(id :number):Observable<Ciudad> {
    return this.httpClient.get<Ciudad>(this.url + `detail/${id}` );
  }

  public detailName(nombre :string):Observable<Ciudad> {
    return this.httpClient.get<Ciudad>(this.url + `detailname/${nombre}` );
  }

  public save(ciudad : Ciudad): Observable<any> {
    return this.httpClient.post<any>(this.url + 'create', ciudad);
  }

  public update(id:number, ciudad : Ciudad): Observable<any> {
    return this.httpClient.put<any>(this.url + `update/${id}`, ciudad);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}
