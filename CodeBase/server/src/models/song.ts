import mongoose from "mongoose";

// define a schema for a song
const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String, required: true },
  genre: { type: String, required: true },
});

// create a Mongoose model
const Song = mongoose.model("Song", songSchema);

// export the Song model
export default Song;
