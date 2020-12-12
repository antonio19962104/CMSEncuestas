import { Component, OnInit } from '@angular/core';
import { Encuesta } from '../models/Encuesta';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { validationMessage } from '../models/validationMessage';
import { UUID } from 'angular2-uuid';
import swal from 'sweetalert';
@Component({
  selector: 'app-add-encuesta',
  templateUrl: './add-encuesta.component.html',
  styleUrls: ['./add-encuesta.component.css']
})
export class AddEncuestaComponent implements OnInit {
  encuestaCreated = new Encuesta;
  newEncuesta: Encuesta;
  lastId: object;//frmTester.debug.cs
  objVal = new validationMessage();
  msg = this.objVal.account_validation_messages;

  constructor(private data: DataService, private router: Router, private http: HttpClient) { }
  

  ngOnInit(): void {
    
  }

  generateUID() {
    swal(UUID.UUID(), '', 'info');
    // swal({
    //   title: '',
    //   text: 'Search for a movie. e.g. "La La Land".',
    //   content: {
    //     element: 'input',
    //     attributes: {  }
    //   },
    //   buttons: {
    //     ['OK']: true,
    //     ['Cancel']: true,
    //     ['btn']: true
    //   },
    //   closeOnClickOutside: false,
    //   closeOnEsc: false,
    // }).then(function () { });
    return UUID.UUID();
  }

  addEncuesta(modelE: Encuesta) {
    modelE.uid = this.generateUID();
    this.data.addEncuesta(modelE).subscribe(
      data => this.encuestaCreated = data
    );
    this.router.navigate(['/detailEncuesta/', this.encuestaCreated.idEncuesta])
  }

}
