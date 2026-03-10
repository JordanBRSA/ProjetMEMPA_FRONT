import { Component } from '@angular/core';
import {PlaylistList} from '../../features/playlist-list/playlist-list';
import {PlaylistInfo} from '../../features/playlist-info/playlist-info';

@Component({
  selector: 'app-info-music',
  imports: [
    PlaylistInfo
  ],
  templateUrl: './info-music.html',
  styleUrl: './info-music.css',
})
export class InfoMusic {

}
