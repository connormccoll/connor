import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-2">
      <div className="w-full md:w-1/2 p-10">
        <Image
          src="/images/connor-mccoll.jpg"
          alt="Connor McColl"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <div className="w-full p-10">
        <Card style={{ paddingRight: '20px' }}>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent><Smile/></CardContent>
          <CardContent>
              <p className="text-lg">
              Hi, I'm Connor! I am a UI owner and Senior Software Engineer working on cloud-based applications in the healthcare industry. I live in Milwaukee with my wife and our pup! I am passionate about protecting our environment and in my free time I enjoy running, biking, skiing, camping, cooking, and art projects.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}