import { Routes } from '@angular/router';
import { PlaylistList } from './features/playlist-list/playlist-list';
import {Home} from './pages/home/home';
import {PlaylistInfo} from './features/playlist-info/playlist-info';


export const routes: Routes = [
  {
    path: '',
    component: Home
  },{
    path: 'playlist/:id',
    component: PlaylistInfo
  }
];
