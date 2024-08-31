import { Request, Response } from "express";
import Song from "../models/song";

const createSong = async (req: Request, res: Response) => {
  try {
    const newSong = new Song(req.body);

    await newSong.save();

    res.status(200).json(newSong.toObject());

    //
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error creating song",
    });
  }
};

const listSong = async (req: Request, res: Response) => {
  try {
    const filterByGenre = (req.query.selectedGenre as string) || "";

    let query: any = {};

    if (filterByGenre) {
      const searchRegex = new RegExp(filterByGenre, "i");
      query.genre = searchRegex;
    }

    const getSong = await Song.find(query);

    res.status(200).json(getSong);

    //
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error getting songs",
    });
  }
};

const songStatistics = async (req: Request, res: Response) => {
  try {
    const totalSongs = await Song.countDocuments({});
    const totalAlbums = (await Song.distinct("album")).length;
    const totalArtists = (await Song.distinct("artist")).length;
    const totalGenres = (await Song.distinct("genre")).length;

    // console.log(totalSongs, totalAlbums, totalArtists, totalGenres);

    // number of songs in each genre
    const songsByGenre = await Song.aggregate([
      { $group: { _id: "$genre", count: { $sum: 1 } } },
    ]);

    // console.log(songsByGenre);

    // number of songs by each artist
    const songsByArtist = await Song.aggregate([
      { $group: { _id: "$artist", count: { $sum: 1 } } },
      { $project: { artistName: "$_id", songCount: "$count" } },
    ]);

    // console.log(songsByArtist);

    // Number of songs in each album
    const songsByAlbum = await Song.aggregate([
      { $group: { _id: "$album", count: { $sum: 1 } } },
      { $project: { albumTitle: "$_id", songCount: "$count" } },
    ]);

    // console.log(songsByAlbum);

    // Combine the results into a single response object
    const statistics = {
      totalSongs,
      totalAlbums,
      totalArtists,
      totalGenres,
      songsByGenre,
      songsByArtist,
      songsByAlbum,
    };

    // console.log(statistics)

    res.status(200).json(statistics);

    //
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error getting songs statistics",
    });
  }
};

const deleteSong = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Song.findByIdAndDelete(id);

    res.status(200).json({
      message: "Song Deleted",
    });

    //
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error deleting song",
    });
  }
};

const updateSong = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Song.findByIdAndUpdate(id, req.body);

    res.status(200).json({
      message: "Song Updated",
    });

    //
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error Updating song",
    });
  }
};

const getSongById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const getSong = await Song.findById(id);

    res.status(200).json(getSong);

    //
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error Getting song by id",
    });
  }
};

export default {
  createSong,
  listSong,
  deleteSong,
  updateSong,
  getSongById,
  songStatistics,
};
