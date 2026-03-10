import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { PlaylistService } from '../../services/playlist/playlist';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-music-add',
  imports: [NgIf, FormsModule],
  templateUrl: './music-add.html',
  styleUrl: './music-add.css',
  standalone: true
})
export class MusicAdd {
  playlist: any;
  message: string = '';
  loading = false;
  title: string = '';
  artist: string = '';
  contributor: string = '';
  url: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playlistService: PlaylistService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.playlistService.getPlaylistById(id).subscribe(data => {
        this.playlist = data;
        this.cdr.detectChanges();
      });
    }
  }

  addMusic() {
    if (!this.title)       { this.message = "Veuillez entrer un titre valide"; return; }
    if (!this.artist)      { this.message = "Veuillez entrer un artiste";      return; }
    if (!this.contributor) { this.message = "Veuillez entrer un contributeur"; return; }
    if (!this.url)         { this.message = "Veuillez entrer une URL";         return; }

    this.loading = true;

    const newMusic = {
      id: Date.now(),
      title: this.title,
      artist: this.artist,
      url: this.url
    };

    this.playlistService.addChanson(this.playlist.id, newMusic).subscribe({
      next: () => {
        this.message = "Musique ajoutée avec succès !";
        this.loading = false;
        setTimeout(() => {
          this.router.navigate(['/playlist', this.playlist.id]);
        }, 1500);
      },
      error: (err) => {
        this.message = "Erreur lors de l'ajout de la musique.";
        this.loading = false;
        console.error(err);
      }
    });





    // Retour à la playlist après ajout
    setTimeout(() => {
      this.router.navigate(['/playlist', this.playlist.id]);
    }, 1500);
  }
}
