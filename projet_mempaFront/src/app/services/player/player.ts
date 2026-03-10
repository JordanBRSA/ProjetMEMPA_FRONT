import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  public audio = new Audio();

  private musicSource = new BehaviorSubject<any>(null);
  private isPlayingSource = new BehaviorSubject<boolean>(false);
  private currentTimeSource = new BehaviorSubject<number>(0);

  currentMusic = this.musicSource.asObservable();
  isPlaying = this.isPlayingSource.asObservable();
  currentTime = this.currentTimeSource.asObservable();

  // Stockage de la playlist actuelle pour l'enchaînement
  private currentPlaylist: any[] = [];

  constructor() {
    this.audio.ontimeupdate = () => {
      this.currentTimeSource.next(this.audio.currentTime);
    };

    // GESTION DE LA SUITE AUTOMATIQUE
    this.audio.onended = () => {
      this.next();
    };
  }

  // On ajoute un deuxième argument : la playlist entière
  playMusic(music: any, playlist: any[] = []) {

    console.log("Musique reçue :", music);
    console.log("URL envoyée à l'audio :", music.url);

    if (playlist.length > 0) {
      this.currentPlaylist = playlist;
    }

    if (!music || !music.url) {
      console.error("URL manquante");
      return;
    }

    this.musicSource.next(music);
    this.audio.src = music.url;
    this.audio.load();
    this.audio.play()
      .then(() => this.isPlayingSource.next(true))
      .catch(err => console.error("Erreur lecture:", err));
  }

  previous() {
    const current = this.musicSource.value;
    if (!current || this.currentPlaylist.length === 0) return;

    const currentIndex = this.currentPlaylist.findIndex(m => m.id === current.id);

    if (currentIndex > 0) {
      // Joue la précédente
      this.playMusic(this.currentPlaylist[currentIndex - 1]);
    } else {
      // Si c'est la première, on recommence juste au début
      this.audio.currentTime = 0;
    }
  }

  next() {
    const current = this.musicSource.value;
    if (!current || this.currentPlaylist.length === 0) return;

    // Trouver l'index de la musique actuelle
    const currentIndex = this.currentPlaylist.findIndex(m => m.id === current.id);

    // Si il reste une musique après
    if (currentIndex !== -1 && currentIndex < this.currentPlaylist.length - 1) {
      this.playMusic(this.currentPlaylist[currentIndex + 1]);
    } else {
      // Fin de playlist
      this.isPlayingSource.next(false);
      console.log("Fin de la playlist");
    }
  }

  // Dans player.service.ts
  togglePlay() {
    // On récupère la musique actuelle du flux BehaviorSubject
    const current = this.musicSource.value;

    if (!current) {
      console.warn("Aucune musique n'est chargée. Cliquez sur une musique dans la liste d'abord !");
      return;
    }

    if (this.audio.paused) {
      this.audio.play()
        .then(() => {
          this.isPlayingSource.next(true);
        })
        .catch(err => {
          console.error("Erreur lecture :", err);
        });
    } else {
      this.audio.pause();
      this.isPlayingSource.next(false);
    }
  }

  seek(time: number) {
    this.audio.currentTime = time;
  }
}
