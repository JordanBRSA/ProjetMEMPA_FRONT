import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Player} from './features/player/player';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Player],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProjetMEMPA');
}
