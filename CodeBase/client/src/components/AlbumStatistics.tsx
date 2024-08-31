import { AlbumData } from "@/types";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";

type Props = {
  statistics: AlbumData[];
};

function AlbumStatistics({ statistics }: Props) {
  return (
    <div>
      <CardHeader className="text-center font-bold">Album Statistics</CardHeader>
      <Card className="grid md:grid-cols-[2fr_2fr] gap-2">
        {statistics.map((album, i) => (
        <div
        key={i}
        className="grid md:grid-cols-[100px_2fr]  bg-gray-100 py-5 font-bold items-center gap-2"
      >
        <CardContent className="bg-orange-500 text-white items-center text-center rounded-full py-3">{album.albumTitle}</CardContent>
            <CardContent>
              Overall, there are {album.songCount} song in {album.albumTitle}{" "}
              album{" "}
            </CardContent>
          </div>
        ))}
      </Card>
      <Separator className="my-4 " />
    </div>
  );
}

export default AlbumStatistics;
