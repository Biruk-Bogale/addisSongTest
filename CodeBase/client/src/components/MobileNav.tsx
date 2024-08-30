import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";

function MobileNav() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-blue-700" />
        </SheetTrigger>

        <SheetContent className="space-y-3">
          <SheetTitle className="text-blue-800 font-bold text-center">
            Welcome to Addis Song
          </SheetTitle>
          <Separator />
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;
