import { Mail } from "lucide-react";
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { toast } from "@/hooks/use-toast";
import { MouseEventHandler } from "react";
import { metadata } from "./metadata";
export { metadata };

export default function Home() {
  return (
  <AspectRatio ratio={16 / 9} className="w-[1000px] h-[562px]">
      <Image
        src="/images/connor-mccoll.jpg"
        alt="Photo by Connor McColl"
        fill
        className="h-full w-full rounded-md object-cover"
      />
    </AspectRatio>
)}