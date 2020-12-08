import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { GetAllEncuestaComponent } from './get-all-encuesta/get-all-encuesta.component';
import { DetailEncuestaComponent } from './detail-encuesta/detail-encuesta.component';
import { AddEncuestaComponent } from './add-encuesta/add-encuesta.component';
import { UpdateEncuestaComponent } from './update-encuesta/update-encuesta.component';

const routes: Routes = [
  {
    path: '',
    component: DashBoardComponent
  },
  {
    path: 'getAllEncuesta',
    component: GetAllEncuestaComponent,
  },
  {
    path: 'detailEncuesta',
    component: DetailEncuestaComponent
  },
  {
    path: 'addEncuesta',
    component: AddEncuestaComponent
  },
  {
    path: 'updateEncuesta/:id',
    component: UpdateEncuestaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
