import { Component } from '@angular/core';
import {PlaylistList} from "../../features/playlist-list/playlist-list";
import {PlaylistInfo} from '../../features/playlist-info/playlist-info';

@Component({
  selector: 'app-playlist',
  imports: [
    PlaylistInfo
  ],
  templateUrl: './playlist.html',
  styleUrl: './playlist.css',
})
export class Playlist {

}
