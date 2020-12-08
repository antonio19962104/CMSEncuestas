import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Encuesta } from './models/Encuesta'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

/*Encuesta*/
  getAllEncuesta() {
    return this.http.get('http://localhost:40614/api/Encuesta')
    .pipe(map((response: Encuesta) => response));
  }

  getByIdEncuesta(data) {
    return this.http.get('http://localhost:40614/api/Encuesta/' + data)
    .pipe(map((response: Encuesta) => response));
  }

  addEncuesta(data: Encuesta) {
    return this.http.post('http://localhost:40614/api/Encuesta/'+ data.idEncuesta, data);
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

}
