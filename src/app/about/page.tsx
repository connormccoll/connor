import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-2">
      <div className="w-full md:w-1/2 p-2">
        <Image
          src="/images/connor-mccoll-2.jpg"
          priority={true}
          alt="Connor McColl"
          width={300}
          height={300}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
          className="rounded-full"
          style={{ minWidth: '200px' }} // Set the minimum width here

        />
      </div>
      <div className="w-full p-2">
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent><Smile/></CardContent>
          <CardContent style={{ minWidth: '300px' }}>
              <p className="text-lg">
              Hi, I'm Connor! I am a UI owner and Senior Software Engineer working on cloud-based applications in the healthcare industry. I live in Milwaukee with my wife and our pup! I am passionate about protecting our environment and in my free time I enjoy running, biking, skiing, camping, cooking, and art projects.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}