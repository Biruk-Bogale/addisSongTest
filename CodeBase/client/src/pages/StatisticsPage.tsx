import { useGetSongStatistics } from "@/apiService/SongApiService";
import AlbumStatistics from "@/components/AlbumStatistics";
import ArtistStatistics from "@/components/ArtistStatistics";
import GenreStatistics from "@/components/GenreStatistics";
import ProgressBar from "@/components/ProgressBar";
import TotalStatistics from "@/components/TotalStatistics";

function StatisticsPage() {
  const { statistics, isLoading } = useGetSongStatistics();

  if (!statistics || isLoading) {
    return <ProgressBar isLoading={true} />;
  }


  return (
    <div>
      <TotalStatistics statistics={statistics} />
      <GenreStatistics statistics={statistics.songsByGenre} />
      <ArtistStatistics  statistics={statistics.songsByArtist}/>
      <AlbumStatistics statistics={statistics.songsByAlbum}/>
    </div>
  );
}

export default StatisticsPage;
