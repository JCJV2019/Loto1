import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieNumericaComponent } from './serie-numerica.component';

describe('SerieNumericaComponent', () => {
  let component: SerieNumericaComponent;
  let fixture: ComponentFixture<SerieNumericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieNumericaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieNumericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
