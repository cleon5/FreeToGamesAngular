import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderJuegosComponent } from './slider-juegos.component';

describe('SliderJuegosComponent', () => {
  let component: SliderJuegosComponent;
  let fixture: ComponentFixture<SliderJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderJuegosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
