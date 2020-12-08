import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEncuestaComponent } from './detail-encuesta.component';

describe('DetailEncuestaComponent', () => {
  let component: DetailEncuestaComponent;
  let fixture: ComponentFixture<DetailEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEncuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
