import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  public audio = new Audio();

  private musicSource = new BehaviorSubject<any>(null);
  private isPlayingSource = new BehaviorSubject<boolean>(false);
  private currentTimeSource = new BehaviorSubject<number>(0);
  private queueSource = new BehaviorSubject<any[]>([]);

  currentMusic = this.musicSource.asObservable();
  isPlaying = this.isPlayingSource.asObservable();
  currentTime = this.currentTimeSource.asObservable();
  queue = this.queueSource.asObservable();

  private currentPlaylist: any[] = [];

  constructor() {
    this.audio.ontimeupdate = () => {
      this.currentTimeSource.next(this.audio.currentTime);
    };

    this.audio.onended = () => {
      this.next();
    };
  }

  playMusic(music: any, playlist: any[] = []) {
    console.log("Musique reçue :", music);
    console.log("URL envoyée à l'audio :", music.url);

    if (playlist.length > 0) {
      this.currentPlaylist = playlist;
      this.queueSource.next([...playlist]);
    }

    const remaining = this.queueSource.value.filter(m => m.id !== music.id);
    this.queueSource.next(remaining);

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
      this.playMusic(this.currentPlaylist[currentIndex - 1]);
    } else {
      this.audio.currentTime = 0;
    }
  }

  next() {
    const current = this.musicSource.value;
    if (!current || this.currentPlaylist.length === 0) return;

    const currentIndex = this.currentPlaylist.findIndex(m => m.id === current.id);

    if (currentIndex !== -1 && currentIndex < this.currentPlaylist.length - 1) {
      this.playMusic(this.currentPlaylist[currentIndex + 1]);
    } else {
      this.isPlayingSource.next(false);
      console.log("Fin de la playlist");
    }
  }

  togglePlay() {
    const current = this.musicSource.value;

    if (!current) {
      console.warn("Aucune musique n'est chargée.");
      return;
    }

    if (this.audio.paused) {
      this.audio.play()
        .then(() => this.isPlayingSource.next(true))
        .catch(err => console.error("Erreur lecture :", err));
    } else {
      this.audio.pause();
      this.isPlayingSource.next(false);
    }
  }

  seek(time: number) {
    this.audio.currentTime = time;
  }
}
