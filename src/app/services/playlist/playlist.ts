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

  // private apiUrl = 'http://localhost:4200/playlist';
  // constructor(private http: HttpClient) {}

  private mockPlaylists: Playlist[] = [
    {
      id: 1,
      name: 'Pop 2025',
      creator: 'Mr.Dupont',
      clicks: 12,
      style: 'Pop',
      musics: [
        {
          title: 'Blinding Lights',
          artist: 'The Weeknd'
        },
        {
          title: 'Levitating',
          artist: 'Dua Lipa'
        },
        {
          title: 'As It Was',
          artist: 'Harry Styles'
        }
      ],
      contributors :  [
        {
          name: 'Dupont'
        },
        {
          name:'Delaroche'
        }
      ]
    },

    {
      id: 2,
      name: 'Rock Classics',
      creator: 'Mr.X',
      clicks: 30,
      style: 'Rock',
      musics: [
        {
          title: 'Bohemian Rhapsody',
          artist: 'Queen'
        },
        {
          title: 'Back in Black',
          artist: 'AC/DC'
        },
        {
          title: 'Smells Like Teen Spirit',
          artist: 'Nirvana'
        }
      ],
      contributors :  [
        {
          name: 'Henry'
        },
        {
          name:'Lacroix'
        }
      ]
    },

    {
      id: 3,
      name: 'Chill Vibes',
      creator: 'Mr.Y',
      clicks: 5,
      style: 'Chill',
      musics: [
        {
          title: 'Sunset Lover',
          artist: 'Petit Biscuit'
        },
        {
          title: 'Weightless',
          artist: 'Marconi Union'
        }
      ],
      contributors :  [
        {
          name: 'Yves'
        },
        {
          name:'Delaroche'
        }
      ]
    }
  ];

  getPlaylists(): Observable<Playlist[]> {
    return of(this.mockPlaylists);
  }

  getPlaylistById(id: string): Observable<Playlist | undefined> {
    const numericId = Number(id);
    const playlist = this.mockPlaylists.find(playlist => playlist.id === numericId);
    return of(playlist);

    // TODO A CHANGER UNE FOIS API NODEJS
  }


}

