import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Encuesta } from '../models/Encuesta';
@Component({
  selector: 'app-get-all-encuesta',
  templateUrl: './get-all-encuesta.component.html',
  styleUrls: ['./get-all-encuesta.component.css']
})
export class GetAllEncuestaComponent implements OnInit {

  listEncuestas$: Encuesta;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getAllEncuesta().subscribe(
      data => this.listEncuestas$ = data
    );
  }

}
