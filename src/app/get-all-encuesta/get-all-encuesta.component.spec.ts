import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllEncuestaComponent } from './get-all-encuesta.component';

describe('GetAllEncuestaComponent', () => {
  let component: GetAllEncuestaComponent;
  let fixture: ComponentFixture<GetAllEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllEncuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
