// import { Loader2 } from "lucide-react";
import { FadeLoader } from "react-spinners";

type Props = {
  isLoading: boolean;
};

function ProgressBar({ isLoading }: Props) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      {/* <Loader2 className="mr-2 h-9 w-16 animate-spin text-white" />
       */}
      <FadeLoader color="#ffffff" />

      <div className="absolute inset-0 bg-black-500 opacity-50 animate-pulse"></div>
    </div>
  );
}

export default ProgressBar;
