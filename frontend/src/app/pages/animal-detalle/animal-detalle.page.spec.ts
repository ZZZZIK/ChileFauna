import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalDetallePage } from './animal-detalle.page';

describe('AnimalDetallePage', () => {
  let component: AnimalDetallePage;
  let fixture: ComponentFixture<AnimalDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
