import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistInfo } from './playlist-info';

describe('PlaylistInfo', () => {
  let component: PlaylistInfo;
  let fixture: ComponentFixture<PlaylistInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
