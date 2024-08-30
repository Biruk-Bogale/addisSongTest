import { Song } from "@/apiService/SongApiService";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Edit, Trash } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  songs: [Song];
  deleteSong: (id: string) => void;
};

function ListSong({ songs, deleteSong }: Props) {
  return (
    <Table className="min-w-full">
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Artist</TableHead>
          <TableHead>Genre</TableHead>
          <TableHead className="">Album</TableHead>
          <TableHead className="text-center">Delete/Edit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {songs.map((song, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{song.title}</TableCell>
            <TableCell>{song.artist}</TableCell>
            <TableCell>{song.genre}</TableCell>
            <TableCell>{song.album}</TableCell>
            <TableCell className="flex justify-center  gap-5">
              <span
                className="cursor-pointer"
                onClick={() => song._id && deleteSong(song._id)}
              >
                <Trash color="red" />
              </span>

              <Link to={`/update/${song._id}`}>
                <Edit color="green " className="" />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ListSong;
