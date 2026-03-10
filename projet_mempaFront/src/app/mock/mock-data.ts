import { Playlist } from '../services/playlist/playlist';
import { Music } from '../models/music';
import { Contribute } from '../models/contribute';

export const MOCK_MUSICS: Music[] = [
  { id: 1, title: 'Blinding Lights',    artist: 'The Weeknd',    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: 2, title: 'Levitating',         artist: 'Dua Lipa',      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id: 3, title: 'HUMBLE.',            artist: 'Kendrick Lamar',url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { id: 4, title: 'Bohemian Rhapsody',  artist: 'Queen',         url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
  { id: 5, title: 'Starboy',            artist: 'The Weeknd',    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
  { id: 6, title: 'God\'s Plan',        artist: 'Drake',         url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
];

export const MOCK_PLAYLISTS: Playlist[] = [
  {
    id: 1,
    name: 'Summer Vibes',
    creator: 'Alice',
    clicks: 120,
    style: 'Pop',
    musics: [MOCK_MUSICS[0], MOCK_MUSICS[1]],
    contributors: [{ name: 'Alice' }, { name: 'Bob' }]
  },
  {
    id: 2,
    name: 'Chill Hip-Hop',
    creator: 'Bob',
    clicks: 85,
    style: 'Hip-Hop',
    musics: [MOCK_MUSICS[2], MOCK_MUSICS[5]],
    contributors: [{ name: 'Bob' }]
  },
  {
    id: 3,
    name: 'Rock Classics',
    creator: 'Charlie',
    clicks: 200,
    style: 'Rock',
    musics: [MOCK_MUSICS[3], MOCK_MUSICS[4], MOCK_MUSICS[0]],
    contributors: [{ name: 'Charlie' }, { name: 'Alice' }, { name: 'David' }]
  }
];
