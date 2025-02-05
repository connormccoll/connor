import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image"

export default function Contact() {
  return (
    <div className="container mx-auto p-4">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-2">
            <Mail className="mr-2" />
            <span>connormccoll@alumni.upenn.edu</span>
          </div>
          <div className="flex items-center mb-2">
            <Phone className="mr-2" />
            <span>+1 (262) 490-7937</span>
          </div>
          <div className="flex items-center mb-2">
            <MapPin className="mr-2" />
            <span>963 N 70th St, Wauwatosa, USA</span>
          </div>
        </CardContent>
      </Card>
      <AspectRatio ratio={16 / 9} className="w-full h-auto">
        <Image
          src="/images/connor-mccoll.jpg"
          alt="Photo by Connor McColl"
          fill
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  );  }