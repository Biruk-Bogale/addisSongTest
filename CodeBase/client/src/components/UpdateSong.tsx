import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Controller, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import LoadingButton from "./LoadingButton";
import { Button } from "./ui/button";
import { generList } from "@/config/song-genre-options-config";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ProgressBar from "./ProgressBar";
import { Song } from "@/apiService/SongApiService";

const formSchema = z.object({
  title: z.string().min(1, "title is required"),
  artist: z.string().min(1, "artist is required"),
  album: z.string().min(1, "album is required"),
  genre: z.string().min(1, "genre is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (songData: UserFormData) => void;
  isLoading: boolean;
  song: Song;
};

function UpdateSong({ onSave, isLoading, song }: Props) {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: song.title,
      artist: song.artist,
      album: song.album,
      genre: song.genre,
    },
  });
  return (
    <Form {...form}>
      <ProgressBar isLoading={isLoading} />

      <form
        className="space-y-3  px-8 py-9 mx-5 md:mx-64 bg-gray-100"
        onSubmit={form.handleSubmit(onSave)}
      >
        <FormDescription className="text-center">
          <span className=" font-bold text-2xl text-orange-500 ">
            Update A Song
          </span>
        </FormDescription>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="text-center">
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white " placeholder="title" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="artist"
          render={({ field }) => (
            <FormItem className="text-center">
              <FormLabel>Artist</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" placeholder="artist" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Controller
          control={form.control}
          name="genre"
          render={({ field, fieldState }) => {
            return (
              <FormItem className="text-center">
                <FormLabel
                  className={fieldState?.invalid ? "text-red-500" : ""}
                >
                  Genre
                </FormLabel>
                <FormControl>
                  <Select
                    value={field?.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                  >
                    <SelectTrigger className="bg-white py-5">
                      <SelectValue placeholder="Select Genre" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Genre</SelectLabel>
                        {generList?.map((genre, i) => (
                          <SelectItem key={i} value={genre}>
                            {genre}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="album"
          render={({ field }) => (
            <FormItem className="text-center">
              <FormLabel>Album</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white " placeholder="album" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col pt-5">
          {isLoading ? (
            <LoadingButton loading={"Update Song"}></LoadingButton>
          ) : (
            <Button
              type="submit"
              className="bg-orange-800 hover:bg-orange-500 flex-1"
            >
              Update Song
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}

export default UpdateSong;
