import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptomonedaComponent } from './criptomoneda.component';

describe('CriptomonedaComponent', () => {
  let component: CriptomonedaComponent;
  let fixture: ComponentFixture<CriptomonedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriptomonedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriptomonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
