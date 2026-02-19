import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlaylistService} from '../../services/playlist/playlist';

@Component({
  selector: 'app-playlist-info',
  imports: [],
  templateUrl: './playlist-info.html',
  styleUrl: './playlist-info.css',
})
export class PlaylistInfo {
  playlist: any;

  constructor(private route: ActivatedRoute, private playlistService: PlaylistService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.playlistService.getPlaylistById(id).subscribe((data: any) => {
      this.playlist = data;
    });
  }
}
