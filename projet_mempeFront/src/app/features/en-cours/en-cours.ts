import {Component, ChangeDetectorRef, OnInit, inject} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule, NgIf} from '@angular/common';
import {PlayerService} from '../../services/player/player';
import {BehaviorSubject, Observable} from 'rxjs';
import {Music} from '../../models/music';

@Component({
  selector: 'app-en-cours',
  imports: [
    CommonModule,
  ],
  templateUrl: './en-cours.html',
  styleUrl: './en-cours.css',
  standalone: true
})
export class EnCours {

  private playerService = inject(PlayerService);
  public currentMusic: Observable<Music | null> = this.playerService.currentMusic;

}
