import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
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
import { Button } from "./ui/button";
import LoadingButton from "./LoadingButton";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { generList } from "@/config/song-genre-options-config";
import { useEffect } from "react";

const formSchema = z.object({
  title: z.string().min(1, "title is required"),
  artist: z.string().min(1, "artist is required"),
  album: z.string().min(1, "album is required"),
  genre: z.string().min(1, "genre is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (songData: UserFormData) => void;
  isCreateSongLoading: boolean;
  isSuccess: boolean;
  resetMutation: () => void;
};

function CreateSong({
  onSave,
  isCreateSongLoading,
  isSuccess,
  resetMutation,
}: Props) {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "", artist: "", album: "", genre: "" },
  });

  useEffect(() => {
    if (isSuccess) {
      form.reset();
      resetMutation();
    }
  }, [isSuccess, form]);

  return (
    <Form {...form}>
      <form
        className="space-y-3 mx-6 px-2 py-9"
        onSubmit={form.handleSubmit(onSave)}
      >
        <FormDescription className="text-center">
          <span className=" font-bold text-2xl text-orange-500 ">
            Create A Song
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

        {/* <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem className="text-center">
              <FormLabel>Genre</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white " placeholder="genre" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

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
          {isCreateSongLoading ? (
            <LoadingButton loading={"Create Song"}></LoadingButton>
          ) : (
            <Button
              type="submit"
              className="bg-orange-800 hover:bg-orange-500 flex-1"
            >
              Create Song
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}

export default CreateSong;
