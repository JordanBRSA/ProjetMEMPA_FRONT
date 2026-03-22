import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { PlaylistService, Playlist } from '../../services/playlist/playlist';
import {Router, RouterLink} from '@angular/router';
import {Music} from '../../models/music';
import {AuthService} from '../../services/auth/auth';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-playlist-list',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, FormsModule],
  templateUrl: './playlist-list.html',
  styleUrl: './playlist-list.css'
})
export class PlaylistList implements OnInit {

  playlists: Playlist[] = [];
  isLoading = true;
  playerService: any;
  showFilter = false;
  searchQuery = '';
  sortBy = '';
  order = '';

  constructor(private playlistService: PlaylistService,
              private cdr: ChangeDetectorRef,
              private router : Router,
              private authService: AuthService) {}

  ngOnInit(): void {
    this.loadPlaylists();
  }

  loadPlaylists(): void {
    this.playlistService.getPlaylists().subscribe({
      next: (data) => {
        this.playlists = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erreur API :', err)
    });
  }

  onSearch(): void {
    if (!this.searchQuery && !this.sortBy) {
      this.loadPlaylists();
      return;
    }
    this.playlistService.searchPlaylists(this.searchQuery, this.sortBy, this.order).subscribe({
      next: (data) => {
        this.playlists = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erreur recherche :', err)
    });
  }

  onReset(): void {
    this.searchQuery = '';
    this.sortBy = '';
    this.order = '';
    this.loadPlaylists();
  }

  onCreatePlaylist() {
    this.router.navigate(['/playlist/create']);
  }

  onFilterPlaylist() {
    this.showFilter = !this.showFilter;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
