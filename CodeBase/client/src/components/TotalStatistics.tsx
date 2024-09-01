import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";

function TotalStatistics({ statistics }: any) {
  if (!statistics) return <div>No artist data available.</div>;

  return (
    <div>
      <CardHeader className="text-center font-bold">
        Total Statistics
      </CardHeader>
      <Card className="grid md:grid-cols-[2fr_2fr] gap-2">
        <div className="grid md:grid-cols-[100px_2fr]  bg-gray-100 py-5 font-bold items-center gap-2">
          <CardContent className="bg-orange-500 text-white items-center text-center rounded-full py-3">
            Total Song
          </CardContent>
          <CardContent>
            Overall, there are {statistics.totalSongs} songs in the database.
          </CardContent>
        </div>
        <div className="grid md:grid-cols-[100px_2fr]  bg-gray-100 py-5 font-bold items-center gap-2">
          <CardContent className="bg-orange-500 text-white items-center text-center rounded-full py-3">
            Total Artists
          </CardContent>
          <CardContent>
            Overall, there are {statistics.totalArtists} Artists.
          </CardContent>
        </div>
        <div className="grid md:grid-cols-[100px_2fr]  bg-gray-100 py-5 font-bold items-center gap-2">
          <CardContent className="bg-orange-500 text-white items-center text-center rounded-full py-3">
            Total Album
          </CardContent>
          <CardContent>
            Overall, there are {statistics.totalAlbums} Albums in the database.
          </CardContent>
        </div>
        <div className="grid md:grid-cols-[100px_2fr]  bg-gray-100 py-5 font-bold items-center gap-2">
          <CardContent className="bg-orange-500 text-white items-center text-center rounded-full py-3">
            Total Genre
          </CardContent>
          <CardContent>
            Overall, there are {statistics.totalGenres} Song Genres in the
            database.
          </CardContent>
        </div>
      </Card>
      <Separator className="my-4 " />
    </div>
  );
}

export default TotalStatistics;
