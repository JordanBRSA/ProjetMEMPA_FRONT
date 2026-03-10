import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Player} from './features/player/player';
import {EnCours} from './features/en-cours/en-cours';
import {PlayerService} from './services/player/player';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CommonModule,
    Player,
    EnCours
  ],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProjetMEMPA');
}
