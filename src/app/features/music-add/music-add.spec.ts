import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicAdd } from './music-add';

describe('MusicAdd', () => {
  let component: MusicAdd;
  let fixture: ComponentFixture<MusicAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
