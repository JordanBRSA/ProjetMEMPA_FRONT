import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistService, Playlist } from '../../services/playlist/playlist';

@Component({
  selector: 'app-playlist-list',
  standalone: true,
  imports: [CommonModule],
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
}
