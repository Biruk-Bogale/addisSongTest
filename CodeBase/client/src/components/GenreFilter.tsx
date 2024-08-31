import { Label } from "./ui/label";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";
import { generList } from "@/config/song-genre-options-config";

type Props = {
  onChange: (genre: string[]) => void;
  selectedGener: string[];
  isExpanded: boolean;
  onExpandedClick: () => void;
};

function GenreFilter({
  onChange,
  selectedGener,
  isExpanded,
  onExpandedClick,
}: Props) {
  const handleGenreChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedGenre = event.target.value;
    const isChecked = event.target.checked;

    const newGenreList = isChecked
      ? [...selectedGener, clickedGenre]
      : selectedGener.filter((genre) => genre !== clickedGenre);

    onChange(newGenreList);
  };

  const handleGenreReset = () => onChange([]);

  return (
    <>
      <div className="flex justify-between items-center px-2">
        <div className="text-md font-semibold mb-2">Filter By Genre</div>
        <div
          onClick={handleGenreReset}
          className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500"
        >
          Reset Filter
        </div>
      </div>

      <div className="space-y-2 flex flex-col">
        {generList.slice(0, isExpanded ? generList.length : 5).map((genre,i) => {
          const isSelected = selectedGener?.includes(genre);

          return (
            <div key={i} className="flex">
              <input
                id={`genre_${genre}`}
                type="checkbox"
                className="hidden"
                value={genre}
                checked={isSelected}
                onChange={handleGenreChange}
              />
              <Label
                htmlFor={`genre_${genre}`}
                className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold ${
                  isSelected
                    ? "border border-green-600 text-green-600"
                    : "border border-slate-300"
                } `}
              >
                {isSelected && <Check size={20} strokeWidth={3} />}
                {genre}
              </Label>
            </div>
          );
        })}
        <Button
          onClick={onExpandedClick}
          variant="link"
          className="mt-4 flex-1"
        >
          {isExpanded ? (
            <span className="flex flex-row items-ceinter">
              View Less <ChevronUp />
            </span>
          ) : (
            <span className="flex flex-row items-ceinter">
              View More <ChevronDown />
            </span>
          )}
        </Button>
      </div>
    </>
  );
}

export default GenreFilter;
