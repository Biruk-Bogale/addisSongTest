import express from "express";
import SongController from "../controllers/SongController";

const router = express.Router();

router.post("/create", SongController.createSong);

router.get("/list", SongController.listSong);

router.get("/statistics", SongController.songStatistics);

router.delete("/delete/:id", SongController.deleteSong);

router.put("/update/:id", SongController.updateSong);

router.get("/get/:id", SongController.getSongById);

export default router;
