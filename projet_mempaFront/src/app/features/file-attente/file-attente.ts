import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../services/player/player';

@Component({
  selector: 'app-file-attente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-attente.html',
  styleUrl: './file-attente.css'
})
export class FileAttente {
  playlist$;

  constructor(private playerService: PlayerService) {
    this.playlist$ = this.playerService.queue;
  }

  playMusic(music: any) {
    this.playerService.playMusic(music);
  }
}
