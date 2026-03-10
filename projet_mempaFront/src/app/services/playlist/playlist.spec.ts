import { TestBed } from '@angular/core/testing';

import {Playlist, PlaylistService} from './playlist';

describe('Playlist', () => {
  let service: PlaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
