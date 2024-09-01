import axiosBase from "@/axiosConfig";
import { SearchState } from "@/pages/SongPage";
import { StatisticsResponse } from "@/types";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

export type Song = {
  title: string;
  artist: string;
  album: string;
  genre: string;
  _id?: string;
};

export const useCreateSong = () => {
  const createSongRequest = async (song: Song) => {
    try {
      const response = await axiosBase.post("/api/song/create", song);

      return response;
    } catch (error) {
      // console.log(error);

      throw new Error("Failed to create a song");
    }
  };

  const {
    mutateAsync: createSong,
    isLoading,
    isError,
    error,
    isSuccess,
    reset,
  } = useMutation(createSongRequest);

  if (isSuccess) {
    toast.success("Song Created Successfully!");
  }

  if (error) {
    toast.error(error.toString());
    reset();
  }

  return { createSong, isLoading, isError, isSuccess, reset };
};

export const useGetSong = (searchState: SearchState) => {
  const param = new URLSearchParams();

  param.set("selectedGenre", searchState.selectedGenre.toString());

  const getSongRequest = async (): Promise<[Song]> => {
    try {
      const response = await axiosBase.get(
        `/api/song/list?${param.toString()}`
      );

      return response.data;
    } catch (error) {
      // console.log(error);

      throw new Error("Failed to list song's ");
    }
  };

  const { data: songs, isLoading } = useQuery(
    ["getSongs", searchState],
    getSongRequest
  );

  return { songs, isLoading };
};

export const useDeleteSong = () => {
  const deleteSongRequest = async (id: string) => {
    try {
      const response = await axiosBase.delete(`/api/song/delete/${id}`);

      return response;
    } catch (error) {
      // console.log(error);

      throw new Error("Failed to create a song");
    }
  };

  const {
    mutateAsync: deleteSong,
    isLoading,
    error,
    isSuccess,
    reset,
  } = useMutation(deleteSongRequest);

  if (isSuccess) {
    toast.success("Song Deleted Successfully!");
    reset();
  }

  if (error) {
    toast.error(error.toString());
    reset();
  }

  return { deleteSong, isLoading };
};

export const useUpdateSong = (id: string) => {
  const updateSongRequest = async (song: Song) => {
    try {
      const response = await axiosBase.put(`/api/song/update/${id}`, song);

      return response;
    } catch (error) {
      // console.log(error);

      throw new Error("Failed to update a song");
    }
  };

  const {
    mutateAsync: updateSong,
    isLoading,
    isError,
    error,
    isSuccess,
    reset,
  } = useMutation(updateSongRequest);

  if (isSuccess) {
    toast.success("Song Updated Successfully!");
  }

  if (error) {
    toast.error(error.toString());
    reset();
  }

  return { updateSong, isLoading, isError, isSuccess, reset };
};

export const useGetSongById = (id: string) => {
  const getSongByIdRequest = async (): Promise<Song> => {
    try {
      const response = await axiosBase.get(`/api/song/get/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to get song by id");
    }
  };

  const { data: song, isLoading } = useQuery(
    ["getSongs", id],
    getSongByIdRequest,
    {
      staleTime: 0,
      cacheTime: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      enabled: !!id,
    }
  );

  return { song, isLoading };
};

export const useGetSongStatistics = () => {
  const getSongStatisticsRequest = async (): Promise<StatisticsResponse> => {
    try {
      const response = await axiosBase.get(`/api/song/statistics`);

      return response.data;
    } catch (error) {
      // console.log(error);

      throw new Error("Failed to get song's statistics ");
    }
  };

  const {
    data: statistics,
    isLoading,
    isSuccess,
  } = useQuery<StatisticsResponse>(
    ["getSongStatistics"],
    getSongStatisticsRequest
  );

  return { statistics, isLoading, isSuccess };
};
