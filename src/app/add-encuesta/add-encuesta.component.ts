import { Component, OnInit } from '@angular/core';
import { Encuesta } from '../models/Encuesta';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 


@Component({
  selector: 'app-add-encuesta',
  templateUrl: './add-encuesta.component.html',
  styleUrls: ['./add-encuesta.component.css']
})
export class AddEncuestaComponent implements OnInit {
  encuestaCreated = new Encuesta;
  newEncuesta: Encuesta;
  lastId: object;
  constructor(private data: DataService, private router: Router, private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    
  }

  public getJSON(): Observable<any> {
    return this.http.get("/src/models/data.json");
  }

  addEncuesta(modelE: Encuesta) {
    this.data.addEncuesta(modelE).subscribe(
      data => this.lastId = data
    );
    this.router.navigate(['/detailEncuesta/', this.lastId])
  }

}
