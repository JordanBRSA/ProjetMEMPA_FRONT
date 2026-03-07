import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { PlayerService } from '../../services/player/player';
import { Music } from '../../models/music';
import {ActivatedRoute} from '@angular/router';
import {PlaylistService} from '../../services/playlist/playlist';

@Component({
  selector: 'app-player',
  templateUrl: './player.html',
  standalone: true,
  styleUrl: './player.css'
})
export class Player implements OnInit {

  audio = new Audio();
  music: Music | null = null;
  isPlaying = false;

  constructor(
    private route: ActivatedRoute,
    private playlistService: PlaylistService,
    private playerService: PlayerService,
  ) {}

  ngOnInit() {
    this.playerService.currentMusic$.subscribe(music => {
      if (music) {
        this.audio.src = music.url;
        this.audio.play();
        this.isPlaying = true;
      }
    });
  }

  playMusic(music:any){
    this.playerService.play(music);
  }

  togglePlay() {

    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }

    this.isPlaying = !this.isPlaying;
  }

}
