import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
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
import { InputsModule, SliderModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    GetAllEncuestaComponent,
    DetailEncuestaComponent,
    AddEncuestaComponent,
    UpdateEncuestaComponent,
    GridEncuestasComponent,
    LoginComponent,
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
    DialogsModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
