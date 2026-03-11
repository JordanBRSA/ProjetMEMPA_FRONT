import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {PlaylistService} from '../../services/playlist/playlist';
import {NgForOf, NgIf} from '@angular/common';
import {PlayerService} from '../../services/player/player';

@Component({
  selector: 'app-playlist-info',
  imports: [
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './playlist-info.html',
  styleUrl: './playlist-info.css',
  standalone: true
})
export class PlaylistInfo {
  playlist: any;
  showDeleteModal = false;


  constructor(private route: ActivatedRoute,
              private playlistService: PlaylistService,
              private playerService: PlayerService,
              private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.playlistService.getPlaylistById(id).subscribe(data => {

        console.log("Playlist reçu :", data);

        this.playlist = data;
        this.cdr.detectChanges();

      });
    }

  }

  playMusic(music: any) {
    this.playerService.playMusic(music, this.playlist.musics);
  }

  protected closeDeleteModal() {
    this.showDeleteModal = false;
  }

  protected openDeleteModal() {
    this.showDeleteModal = true;
  }

   protected confirmDelete() {
     this.playlistService.deletePlaylist(this.playlist.id).subscribe(() => {
     this.showDeleteModal = false;
     console.log('Playlist supprimée !');
    });
  }

  protected addMusic() {
    alert("Direction page newMusic...");
  }


}
