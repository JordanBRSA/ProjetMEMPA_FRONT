import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Music } from '../../models/music';
import { Contribute } from '../../models/contribute';
import { MOCK_PLAYLISTS } from '../../mock/mock-data';

const USE_MOCK = false;

export interface Playlist {
  id: number;
  name: string;
  creator: string;
  clicks: number;
  style: string;
  musics: Music[];
  contributors: Contribute[];
}

@Injectable({ providedIn: 'root' })
export class PlaylistService {

  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  private mapPlaylist(p: any): Playlist {
    console.log('Raw data:', p);
    return {
      id: p.id_playlist,
      name: p.nom_playlist,
      creator: p.id_createur,
      clicks: p.nb_cliques ?? 0,
      style: p.style_musique,
      contributors: [],
      musics: (p.id_mus_musiques ?? []).map((m: any) => ({
        id: m.id_mus,
        title: m.titre,
        artist: m.auteur,
        url: m.lien
      }))
    };
  }

  getPlaylists(): Observable<Playlist[]> {
    if (USE_MOCK) return of(MOCK_PLAYLISTS);
    return this.http.get<any[]>(`${this.apiUrl}/playlists`).pipe(
      map(playlists => playlists.map(p => this.mapPlaylist(p)))
    );
  }

  getPlaylistById(id: string): Observable<any> {

    if (USE_MOCK) return of(MOCK_PLAYLISTS.find(p => p.id === +id));

    return this.http.get<any>(`${this.apiUrl}/playlists/${id}`).pipe(
      map(p => this.mapPlaylist(p))
    );
  }

  addChanson(playlistId: number, formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/playlists/${playlistId}/chansons`, formData);
  }

  deletePlaylist(playlistId : number) : Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/playlists/${playlistId}`).pipe()

  }
}
