import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datos} from './datos'

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Datos[]>('http://localhost:3000/datos');
  }

  create(payload: Datos) {
    return this.http.post<Datos>('http://localhost:3000/datos', payload);
  }

  getById(id: string) {
    return this.http.get<Datos>(`http://localhost:3000/datos/${id}`);
   }

   update(payload:Datos){
    return this.http.put(`http://localhost:3000/datos/${payload.id}`,payload);
   }

   delete(id:string){
    return this.http.delete<Datos>(`http://localhost:3000/datos/${id}`);
 }

}
