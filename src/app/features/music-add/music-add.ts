import {ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {PlaylistService} from '../../services/playlist/playlist';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-music-add',
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './music-add.html',
  styleUrl: './music-add.css',
  standalone: true
})
export class MusicAdd {
  playlist: any;
  message: string = '';
  loading = false;
  title: any;
  artist: any;

  constructor(private route: ActivatedRoute,
              private playlistService: PlaylistService,
              private cdr: ChangeDetectorRef

  ) {}

  addMusic() {
    if (this.title.length == 0) {
      this.message = "Veuillez entrer un titre valide";
      return;
    }

    // TODO VOIR TP BANQUE POUR L'AJOUT
    // TODO VOIR POUR AJOUTER UN FICHIER AUDIO
  };

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // récupère l'id depuis l'URL
    if (id) {
      this.playlistService.getPlaylistById(id).subscribe(data => {
        this.playlist = data;
        this.cdr.detectChanges();
      });

    }
  }
}
