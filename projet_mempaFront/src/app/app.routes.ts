import { Routes } from '@angular/router';
import { PlaylistList } from './features/playlist-list/playlist-list';
import {Home} from './pages/home/home';
import {PlaylistInfo} from './features/playlist-info/playlist-info';
import {MusicAdd} from './features/music-add/music-add';
import {EnCours} from './features/en-cours/en-cours';
import {LoginRegister} from './features/login-register/login-register';
import {authGuard} from './guards/guard';
import {PlaylistCreate} from './features/playlist-create/playlist-create';


export const routes: Routes = [
  {
    path: 'login',
    component: LoginRegister
  },
  {
    path: '',
    component: Home,
    canActivate: [authGuard]
  },
  {
    path: 'playlist/create',
    component: PlaylistCreate ,
    canActivate: [authGuard]
  },
  {
    path: 'playlist/:id',
    component: PlaylistInfo,
    canActivate: [authGuard]
  },
  { path: 'playlist/:id/add',
    component: MusicAdd,
    canActivate: [authGuard]
  },
  { path: '**',
    redirectTo: ''
  }

];
