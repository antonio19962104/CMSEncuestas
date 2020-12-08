import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { GetAllEncuestaComponent } from './get-all-encuesta/get-all-encuesta.component';
import { DetailEncuestaComponent } from './detail-encuesta/detail-encuesta.component';
import { AddEncuestaComponent } from './add-encuesta/add-encuesta.component';
import { UpdateEncuestaComponent } from './update-encuesta/update-encuesta.component';
import { GridEncuestasComponent } from './grid-encuestas/grid-encuestas.component';

import { GridModule, ExcelModule, PDFModule } from "@progress/kendo-angular-grid";
import { ExcelExportModule } from "@progress/kendo-angular-excel-export";
import { PDFExportModule } from "@progress/kendo-angular-pdf-export";

import { DialogModule, DialogsModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    GetAllEncuestaComponent,
    DetailEncuestaComponent,
    AddEncuestaComponent,
    UpdateEncuestaComponent,
    GridEncuestasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GridModule,
    ExcelModule,
    PDFModule,
    InputsModule,
    ExcelExportModule,
    PDFExportModule,
    DialogModule,
    LabelModule,
    DialogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
