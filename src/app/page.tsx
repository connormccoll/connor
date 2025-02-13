import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { metadata } from "./metadata";
import { Separator } from "@/components/ui/separator";
export { metadata };

export default function Home() {
  return (
    <div className="flex flex-grow p-10">
    <AspectRatio ratio={16 / 9}>
        <Image
          src="/images/connor-mccoll-5.jpg"
          priority={true}
          alt="Photo by Connor McColl"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-full object-cover"
        />

      </AspectRatio>
      <div>
      <Separator orientation="vertical" className="h-full mx-4"/>
      </div>
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Connor McColl</h1>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          My Resume Site
        </h3>
      </div>
    </div>
)}