import { Component, OnInit } from '@angular/core';
import { Encuesta } from '../models/Encuesta';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { validationMessage } from '../models/validationMessage';
import { UUID } from 'angular2-uuid';
@Component({
  selector: 'app-add-encuesta',
  templateUrl: './add-encuesta.component.html',
  styleUrls: ['./add-encuesta.component.css']
})
export class AddEncuestaComponent implements OnInit {
  encuestaCreated = new Encuesta;
  newEncuesta: Encuesta;
  lastId: object;//frmTester.debug.cs
  UniqueId: string = UUID.UUID();
  objVal = new validationMessage();
  msg = this.objVal.account_validation_messages;

  constructor(private data: DataService, private router: Router, private http: HttpClient) { }
  

  ngOnInit(): void {
    this.generateUID();
  }

  generateUID() {
    this.UniqueId = UUID.UUID();
    console.log(this.UniqueId);
  }

  addEncuesta(modelE: Encuesta) {
    this.data.addEncuesta(modelE).subscribe(
      data => this.lastId = data
    );
    this.router.navigate(['/detailEncuesta/', this.lastId])
  }

}
