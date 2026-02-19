import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlaylistService} from '../../services/playlist/playlist';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-playlist-info',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './playlist-info.html',
  styleUrl: './playlist-info.css',
})
export class PlaylistInfo {
  playlist: any;

  constructor(private route: ActivatedRoute, private playlistService: PlaylistService) {
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // récupère l'id depuis l'URL
    if (id) {
      this.playlistService.getPlaylistById(id).subscribe(data => {
        this.playlist = data;
      });

    }
  }
}
