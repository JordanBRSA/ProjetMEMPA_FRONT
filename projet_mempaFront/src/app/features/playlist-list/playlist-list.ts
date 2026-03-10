import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { PlaylistService, Playlist } from '../../services/playlist/playlist';
import {RouterLink} from '@angular/router';
import {Music} from '../../models/music';

@Component({
  selector: 'app-playlist-list',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './playlist-list.html',
  styleUrl: './playlist-list.css'
})
export class PlaylistList implements OnInit {

  playlists: Playlist[] = [];
  isLoading = true;
  playerService: any;

  constructor(private playlistService: PlaylistService,
              private cdr: ChangeDetectorRef ) {}

  ngOnInit(): void {
    console.log('Appel de getPlaylists...');
    this.playlistService.getPlaylists().subscribe({
      next: (data) => {
        console.log('Données reçues :', data); // Doit afficher l'array de 5 playlists
        this.playlists = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erreur API détaillée :', err);
      }
    });
  }

  onPlayMusic(music: Music) {
    this.playerService.playMusic(music);
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
