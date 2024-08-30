import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  loading: string;
};

function LoadingButton({ loading }: Props) {
  return (
    <Button disabled className="bg-blue-800  flex-1">
      <Loader2 className="mr-2 h-4 w-6 animate-spin" />
      <div>{loading}</div>
    </Button>
  );
}

export default LoadingButton;
