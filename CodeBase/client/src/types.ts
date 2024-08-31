// Define the shape of the genre data
export type GenreData = {
  _id: string; // Genre name
  count: number; // Number of songs in this genre
};

// Define the shape of the artist data
export type ArtistData = {
  _id: string; // Artist name
  artistName: string;
  songCount: number; // Number of songs by this artist
};

// Define the shape of the album data
export type AlbumData = {
  _id: string; // Album name
  albumTitle: string; // Album name
  songCount: number; // Number of songs in this album
};

// Define the shape of the statistics response
export type StatisticsResponse = {
  songsByAlbum: AlbumData[];
  songsByArtist: ArtistData[];
  songsByGenre: GenreData[];
  totalAlbums: number;
  totalArtists: number;
  totalGenres: number;
  totalSongs: number;
};
