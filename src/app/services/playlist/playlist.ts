import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

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

  private apiUrl = 'http://localhost:4200/playlists';
  constructor(private http: HttpClient) {}

  private mockPlaylists: Playlist[] = [
    { id: 1, name: 'Pop 2025', creator: 'Mr.Dupont', clicks: 12, style: 'Pop' },
    { id: 2, name: 'Rock Classics', creator: 'Mr.X', clicks: 30, style: 'Rock' },
    { id: 3, name: 'Chill Vibes', creator: "Mr.Y", clicks: 5, style: 'Chill' }
  ];

  getPlaylists(): Observable<Playlist[]> {
    return of(this.mockPlaylists);
  }

  getPlaylistById(id: string | null): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

}

