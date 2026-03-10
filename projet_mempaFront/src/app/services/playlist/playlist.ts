import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Music} from '../../models/music';
import {Contribute} from '../../models/contribute';
import { MOCK_PLAYLISTS } from '../../mock/mock-data';

const USE_MOCK = true;

export interface Playlist {
  id: number;
  name: string;
  creator: string;
  clicks: number;
  style: string;
  musics: Music[];
  contributors: Contribute[];
}

@Injectable({
  providedIn: 'root'
})

export class PlaylistService {

  private apiUrl = '/api';
  constructor(private http: HttpClient) {}

  getPlaylists(): Observable<Playlist[]> {

    if (USE_MOCK) return of(MOCK_PLAYLISTS); // ← retourne les données fictives

    return this.http.get<Playlist[]>(`${this.apiUrl}/playlists`);
  }

  getPlaylistById(id: string): Observable<any> {
    if (USE_MOCK) return of(MOCK_PLAYLISTS.find(p => p.id === +id));
    return this.http.get(`${this.apiUrl}/playlists/${id}`);
  }

  // TODO A CHANGER UNE FOIS API NODEJS pour delete
  // deletePlaylist(id: number): Observable<any> {
  // return this.http.delete(`${this.apiUrl}/${id}`);
  // }


}

