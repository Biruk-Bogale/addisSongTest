import {
  Song,
  useCreateSong,
  useDeleteSong,
  useGetSong,
} from "@/apiService/SongApiService";
import CreateSong from "@/components/CreateSong";
import ListSong from "@/components/ListSong";
import ProgressBar from "@/components/ProgressBar";
import { useState } from "react";

export type SearchState = {
  listState: number;
};

function SongPage() {
  const [searchState, setSearchState] = useState<SearchState>({
    listState: 1,
  });

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

  return (
    <>
      <div className="grid md:grid-cols-[1fr_4fr_2fr]  gap-5">
        <ProgressBar
          isLoading={isCreateSongLoading || isGetLoading || isDeleteLoading}
        />

        <div>filter by genre</div>

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
