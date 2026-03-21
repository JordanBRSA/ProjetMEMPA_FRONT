import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PlaylistService } from '../../services/playlist/playlist';
import { AuthService } from '../../services/auth/auth';

@Component({
  selector: 'app-playlist-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './playlist-create.html',
  styleUrl: './playlist-create.css'
})
export class PlaylistCreate {
  nom_playlist = '';
  style_musique = '';
  message = '';
  loading = false;

  styles = ['Pop', 'Rock', 'Hip-Hop', 'Classique', 'Jazz', 'Électro', 'R&B'];

  constructor(
    private playlistService: PlaylistService,
    private authService: AuthService,
    private router: Router
  ) {}

  submit() {
    if (!this.nom_playlist) { this.message = 'Veuillez entrer un nom.'; return; }
    if (!this.style_musique) { this.message = 'Veuillez choisir un style.'; return; }

    this.loading = true;

    const token = this.authService.getToken();
    const payload = JSON.parse(atob(token!.split('.')[1]));
    const id_createur = payload.id;

    console.log('Payload JWT :', payload); // ← ajoute ça
    console.log('id_createur :', payload.id); // ← et ça

    this.playlistService.createPlaylist(this.nom_playlist, this.style_musique, id_createur).subscribe({
      next: (playlist) => {
        this.router.navigate(['/playlist', playlist.id_playlist]);
      },
      error: () => {
        this.message = 'Erreur lors de la création.';
        this.loading = false;
      }
    });
  }
}
