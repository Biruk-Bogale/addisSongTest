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
    const getSong = await Song.find();

    res.status(200).json(getSong);

    //
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error getting songs",
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
};
