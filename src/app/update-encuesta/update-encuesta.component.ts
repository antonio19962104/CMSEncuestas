import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Encuesta } from '../models/Encuesta';
import { validationMessage } from '../models/validationMessage';
@Component({
  selector: 'app-update-encuesta',
  templateUrl: './update-encuesta.component.html',
  styleUrls: ['./update-encuesta.component.css']
})
export class UpdateEncuestaComponent implements OnInit {
  // encuesta: object;
  param1: string;
  result: object;
  encuestas = new Encuesta();
  objVal = new validationMessage();
  msg = this.objVal.account_validation_messages;
  listEstatus: Object;
  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.param1 = this.route.snapshot.paramMap.get("id");
    this.data.getByIdEncuesta(this.param1).subscribe(
      data => this.encuestas = data
    );
    this.data.getEstatus().subscribe(
      data => this.listEstatus = data
    );
  }

  postUpdate(data: Encuesta): void {
    this.data.updateEncuesta(data).subscribe(
      data => this.result = data
    );
  }

}
