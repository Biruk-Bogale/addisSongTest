import express from "express";
import createSongController from "../controllers/createSongController";

const router = express.Router();

router.post("/create", createSongController.createSong);

router.get("/list", createSongController.listSong);

router.delete("/delete/:id", createSongController.deleteSong);

router.put("/update/:id", createSongController.updateSong);

router.get("/get/:id", createSongController.getSongById);

export default router;
