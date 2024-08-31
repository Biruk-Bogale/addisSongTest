import { useGetSongById, useUpdateSong } from "@/apiService/SongApiService";
import ProgressBar from "@/components/ProgressBar";
import UpdateSong from "@/components/UpdateSong";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SongUpdatePage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    updateSong,
    isLoading: isUpdateLoading,
    isSuccess,
    reset,
  } = useUpdateSong(id || "");

  const { song, isLoading: isGetByIdLoading } = useGetSongById(id || "");

  useEffect(() => {
    if (isSuccess) {
      reset();
      navigate("/");
    }
  }, [isSuccess, navigate, reset]);

  if (!song || isGetByIdLoading) {
    return <ProgressBar isLoading={true} />;
  }

  return (
    <UpdateSong onSave={updateSong} isLoading={isUpdateLoading} song={song} />
  );
}

export default SongUpdatePage;
