import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DivisasPage } from './divisas.page';

describe('DivisasPage', () => {
  let component: DivisasPage;
  let fixture: ComponentFixture<DivisasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
