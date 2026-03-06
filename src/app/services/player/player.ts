import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Music } from '../../models/music';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private currentMusic = new BehaviorSubject<Music | null>(null);

  currentMusic$ = this.currentMusic.asObservable();

  play(music: Music) {
    this.currentMusic.next(music);
  }

}
