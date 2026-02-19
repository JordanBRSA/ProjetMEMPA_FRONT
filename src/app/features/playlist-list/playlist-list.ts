import { Component, OnInit } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { PlaylistService, Playlist } from '../../services/playlist/playlist';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-playlist-list',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './playlist-list.html',
  styleUrl: './playlist-list.css'
})
export class PlaylistList implements OnInit {

  playlists: Playlist[] = [];

  constructor(private playlistService: PlaylistService) {}

  ngOnInit(): void {
    this.playlistService.getPlaylists().subscribe(data => {
      this.playlists = data;
    });
  }

  onCreatePlaylist() {
    console.log('Bouton cliqué !');
    //TODO CHANGER POUR ADAPTER UNE FOIS LA PAGE D'AJOUT CREEE
    alert('Création d\'une nouvelle playlist...');
  }

  onFilterPlaylist() {
    //TODO FAIRE LE FILTRE DE PLAYLIST -> COMPOSANT ?
    alert("Ouvre le filtre...")
  }
}
