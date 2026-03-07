import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../services/player/player';
import {Observable} from 'rxjs';
import {Music} from '../../models/music';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.html',
  styleUrl: './player.css'
})
export class Player {
  // On injecte le service proprement
  public playerService = inject(PlayerService);

  // On lie les flux de données
  music: Observable<Music | null> = this.playerService.currentMusic;
  isPlaying: Observable<boolean> = this.playerService.isPlaying;
  currentTime: Observable<number> = this.playerService.currentTime;

  onTogglePlay() {
    console.log("Clic détecté");
    this.playerService.togglePlay();
  }

  onSliderChange(event: any) {
    this.playerService.seek(event.target.value);
  }

  formatTime(time: number | null): string {
    if (!time) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  onNext() {
    this.playerService.next();
  }

  onPrevious() {
    this.playerService.previous();
  }
}
