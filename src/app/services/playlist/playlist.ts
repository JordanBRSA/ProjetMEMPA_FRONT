import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Playlist {
  id: number;
  name: string;
  creator: string;
  clicks: number;
  style: string;
}

@Injectable({
  providedIn: 'root'
})

export class PlaylistService {

  private mockPlaylists: Playlist[] = [
    { id: 1, name: 'Pop 2025', creator: 'Jordan', clicks: 12, style: 'Pop' },
    { id: 2, name: 'Rock Classics', creator: 'Yohan', clicks: 30, style: 'Rock' },
    { id: 3, name: 'Chill Vibes', creator: 'Nolan', clicks: 5, style: 'Chill' }
  ];

  getPlaylists(): Observable<Playlist[]> {
    return of(this.mockPlaylists);
  }

}

