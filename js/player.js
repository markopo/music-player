/**
 * BoxCat Games - Epic Song.mp3
 * Chad Crouch - Algorithms.mp3
   Jahzzar - The last ones.mp3
   Jason Shaw - RUNNING WATERS.mp3
   Lobo Loco - Lucky Village Waltz (ID 1364).mp3
   Lobo Loco - Silentfilm - Part A (ID 1294).mp3
   ROZKOL - Good Soldier.mp3
   Scott Holmes Music - Hotshot.mp3
   Shaolin Dub - Moods.mp3
 */

const songs = [
    {
        name: 'BoxCat Games - Epic Song',
        artist: 'BoxCat Games',
        album: 'Epic Song',
        url: './music/BoxCat Games - Epic Song.mp3'
    },
    {
        name: 'Chad Crouch - Algorithms',
        artist: 'Chad Crouch',
        album: 'Algorithms',
        url: './music/Chad Crouch - Algorithms.mp3'
    },
    {
        name: 'Jason Shaw - RUNNING WATERS',
        artist: 'Jason Shaw',
        album: 'RUNNING WATERS',
        url: './music/Jason Shaw - RUNNING WATERS.mp3'
    },
    {
        name: 'Lobo Loco - Lucky Village Waltz',
        artist: 'Lobo Loco',
        album: 'Lucky Village Waltz',
        url: './music/Lobo Loco - Lucky Village Waltz (ID 1364).mp3'
    },
    {
        name: 'Lobo Loco - Silentfilm - Part A',
        artist: 'Lobo Loco',
        album: 'Silentfilm',
        url: './music/Lobo Loco - Silentfilm - Part A (ID 1294).mp3'
    },
    {
        name: 'ROZKOL - Good Soldier',
        artist: 'ROZKOL',
        album: 'Good Soldier',
        url: './music/ROZKOL - Good Soldier.mp3'
    },
    {
        name: 'Scott Holmes Music - Hotshot',
        artist: 'Scott Holmes Music',
        album: 'Hotshot',
        url: './music/Scott Holmes Music - Hotshot.mp3'
    },
    {
        name: 'Shaolin Dub - Moods',
        artist: 'Shaolin Dub',
        album: 'Moods',
        url: './music/Shaolin Dub - Moods.mp3'
    },
];

Amplitude.init({
    songs: songs
});