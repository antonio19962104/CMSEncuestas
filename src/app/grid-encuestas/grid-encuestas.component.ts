import { Component, OnInit } from '@angular/core';
// import { ExcelExportModule } from "@progress/kendo-angular-excel-export";
// import { PDFExportModule } from "@progress/kendo-angular-pdf-export";
import { DataService } from "../data.service";
import {Router} from "@angular/router"

@Component({
  selector: 'app-grid-encuestas',
  templateUrl: './grid-encuestas.component.html',
  styleUrls: ['./grid-encuestas.component.css']
})
export class GridEncuestasComponent implements OnInit {

  public gridData: Object;

  constructor(private data: DataService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.data.getAllEncuesta().subscribe(
      data => this.gridData = data
    );
  }

  refresh() {
    this.data.getAllEncuesta().subscribe(
      data => this.gridData = data
    );
  }

  delete(data) {
    alert('Delete success ' + data);
    console.log(data);
    this.refresh();
    //this.data.deleteEncuesta(data);
  }

  update(data) {
    // alert('Update success ' + data);
    // console.log(data);
    // this.refresh();
    // //this.data.deleteEncuesta(data);
    var url = 'updateEncuesta/' + data;
    this.router.navigate([url])
  }

}
