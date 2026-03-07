import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnCours } from './en-cours';

describe('EnCours', () => {
  let component: EnCours;
  let fixture: ComponentFixture<EnCours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnCours]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnCours);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
