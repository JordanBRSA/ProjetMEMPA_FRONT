import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Music} from '../../models/music';
import {Contribute} from '../../models/contribute';

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

  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getPlaylists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(`${this.apiUrl}/playlists`);
  }

  getPlaylistById(id: string){
    return this.http.get(`http://localhost:3000/playlists/${id}`);
  }

  // TODO A CHANGER UNE FOIS API NODEJS pour delete
  // deletePlaylist(id: number): Observable<any> {
  // return this.http.delete(`${this.apiUrl}/${id}`);
  // }


}

