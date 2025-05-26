import Link from "next/link";
import { Button } from "./ui/button";
import { HomeIcon, Sprout } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  return (
    <nav className="sticky top-0 h-12 w-full border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-12 justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              🌱 Plantventory
            </Link>
          </div>

          {/* Navbar Components */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/plants">
                <Sprout className="w-4 h-4 " />
                <span className="hidden lg:inline">Plants</span>
              </Link>
            </Button>

            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/">
                <HomeIcon className="w-4 h-4 " />
                <span className="hidden lg:inline">Home</span>
              </Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;