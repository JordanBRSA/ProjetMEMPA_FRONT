import { Component } from '@angular/core';
import {PlaylistList} from '../../features/playlist-list/playlist-list'

@Component({
  selector: 'app-home',
  imports: [PlaylistList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
