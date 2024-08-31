import { GenreData } from "@/types";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";

type Props = {
  statistics: GenreData[];
};

function GenreStatistics({ statistics }: Props) {
  return (
    <div>
      <CardHeader className="text-center font-bold">Genre Statistics</CardHeader>
      <Card className="grid md:grid-cols-[2fr_2fr] gap-2 ">
        {statistics.map((genre, i) => (
          <div
            key={i}
            className="grid md:grid-cols-[100px_2fr]  bg-gray-100 py-5 font-bold items-center gap-2"
          >
            <CardContent className="bg-orange-500 text-white items-center text-center rounded-full py-3">
              {genre._id}
            </CardContent>
            <CardContent>
              Overall, there are {genre.count} {genre._id} Genre in the
              database.
            </CardContent>
          </div>
        ))}
      </Card>
      <Separator className="my-4 " />
    </div>
  );
}

export default GenreStatistics;
GenreStatistics;
