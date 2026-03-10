import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Music } from '../../models/music';
import { Contribute } from '../../models/contribute';
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

@Injectable({ providedIn: 'root' })
export class PlaylistService {

  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  private mapPlaylist(p: any): Playlist {
    return {
      id: p.id_play,
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

  addChanson(playlistId: number, music: Music): Observable<Music> {
    if (USE_MOCK) {
      const playlist = MOCK_PLAYLISTS.find(p => p.id === playlistId);
      if (playlist) playlist.musics.push(music);
      return of(music);
    }
    return this.http.post<any>(`${this.apiUrl}/playlists/${playlistId}/chansons`, {
      titre: music.title,
      auteur: music.artist,
      lien: music.url
    }).pipe(
      map(m => ({
        id: m.id_mus,
        title: m.titre,
        artist: m.auteur,
        url: m.lien
      }))
    );
  }
}
