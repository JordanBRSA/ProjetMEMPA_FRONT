import { Component } from '@angular/core';
import {PlaylistList} from '../../features/playlist-list/playlist-list';
import {MusicAdd} from '../../features/music-add/music-add';

@Component({
  selector: 'app-new-music',
  imports: [
    MusicAdd
  ],
  templateUrl: './new-music.html',
  styleUrl: './new-music.css',
})
export class NewMusic {

}
