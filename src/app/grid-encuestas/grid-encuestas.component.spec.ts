import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridEncuestasComponent } from './grid-encuestas.component';

describe('GridEncuestasComponent', () => {
  let component: GridEncuestasComponent;
  let fixture: ComponentFixture<GridEncuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridEncuestasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridEncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
