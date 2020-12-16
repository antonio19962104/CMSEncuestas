import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Encuesta } from './models/Encuesta'
import { map } from 'rxjs/operators';
import { Usuario } from './models/Usuario';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('tokenValidation') });

  constructor(private http: HttpClient) { }

  login(data: Usuario) {
    return this.http.post('http://localhost:40614/api/Login/getToken', data)
    .pipe(map((response: any) => response));
  }

/*Encuesta*/
  getAllEncuesta() {
    return this.http.get('http://localhost:40614/api/Encuesta', { headers: this.headers })
    .pipe(map((response: Encuesta) => response));
  }

  getByIdEncuesta(data) {
    return this.http.get('http://localhost:40614/api/Encuesta/' + data, { headers: this.headers })
    .pipe(map((response: Encuesta) => response));
  }

  addEncuesta(data: Encuesta) {
    return this.http.post('http://localhost:40614/api/Encuesta', data, { headers: this.headers })
      .pipe(map((response: Encuesta) => response));
  }

  updateEncuesta(data: Encuesta) {
    return this.http.put('', data);
  }

  deleteEncuesta(data: Encuesta) {
    return this.http.put('', data);
  }

/*Plantilla*/
  getAllPlantilla() {
    return this.http.get('');
  }

  getByIdPlantilla() {
    return this.http.get('');
  }

  addPlantilla(data: Encuesta) {
    return this.http.post('', data);
  }

  updatePlantilla(data: Encuesta) {
    return this.http.put('', data);
  }

  deletePlantilla(data: Encuesta) {
    return this.http.put('', data);
  }

  getEstatus() {
    return this.http.get('http://localhost:40614/api/Estatus')
    .pipe(map((response: Object) => response));
  }

}
