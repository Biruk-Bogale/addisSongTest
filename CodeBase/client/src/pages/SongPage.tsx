import {
  Song,
  useCreateSong,
  useDeleteSong,
  useGetSong,
} from "@/apiService/SongApiService";
import CreateSong from "@/components/CreateSong";
import GenreFilter from "@/components/GenreFilter";
import ListSong from "@/components/ListSong";
import ProgressBar from "@/components/ProgressBar";
import { useState } from "react";

export type SearchState = {
  listState: number;
  selectedGenre: string[];
};

function SongPage() {
  const [searchState, setSearchState] = useState<SearchState>({
    listState: 1,
    selectedGenre: [],
  });
  const [isExpanded, setIsExapanded] = useState<boolean>(false);

  const {
    createSong,
    isLoading: isCreateSongLoading,
    isSuccess,
    reset,
  } = useCreateSong();

  const { songs, isLoading: isGetLoading } = useGetSong(searchState);

  const { deleteSong, isLoading: isDeleteLoading } = useDeleteSong();

  const callCreateSong = async (formData: Song) => {
    await createSong(formData);

    setSearchState((prevState) => ({
      ...prevState,
      listState: prevState.listState + 1,
    }));
  };

  const callDeleteSong = async (id: string) => {
    await deleteSong(id);

    setSearchState((prevState) => ({
      ...prevState,
      listState: prevState.listState + 1,
    }));
  };

  const setSelectedGenre = (selectedGenre: string[]) => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedGenre,
      listState: prevState.listState + 1,
    }));
  };

  return (
    <>
      <div className="grid md:grid-cols-[200px_4fr_2fr]  gap-5">
        <ProgressBar
          isLoading={isCreateSongLoading || isGetLoading || isDeleteLoading}
        />

        <div>
          <GenreFilter
            selectedGener={searchState.selectedGenre}
            onChange={setSelectedGenre}
            isExpanded={isExpanded}
            onExpandedClick={() =>
              setIsExapanded((prevIsExpanded) => !prevIsExpanded)
            }
          />
        </div>

        <div className="overflow-x-auto">
          {songs ? (
            <ListSong songs={songs} deleteSong={callDeleteSong} />
          ) : (
            "Loading"
          )}
        </div>

        <div className="bg-gray-100 ">
          <CreateSong
            isCreateSongLoading={isCreateSongLoading}
            onSave={callCreateSong}
            isSuccess={isSuccess}
            resetMutation={reset}
          />
        </div>
      </div>
    </>
  );
}

export default SongPage;
