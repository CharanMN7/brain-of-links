import { LogIn, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export const Hero = () => (
  <div className="w-full h-screen flex flex-col justify-center">
    <div className="container mx-auto px-4">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <div>
          <Badge variant="outline" className="rounded-full">
            Hi there! 👋
          </Badge>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
            A brian to store your links
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            Do you hate how bookmarks work in your browser? Have too many tabs
            open in your browser and it&apos;s slowing down your computer? We
            got you.
          </p>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <ModeToggle />
          <Button size="lg" className="gap-4" variant="outline" asChild>
            <Link href="/my-space">
              Open my space <LogIn className="w-4 h-4" />
            </Link>
          </Button>
          <Button size="lg" className="gap-4" asChild>
            <Link href="/signup">
              Sign up here <MoveRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        <p className="flex items-center">
          <span className="text-muted-foreground">Creator:</span>
          <Button variant="link" asChild>
            <Link href="https://charan.dev">charan.dev</Link>
          </Button>
        </p>
      </div>
    </div>
  </div>
);
