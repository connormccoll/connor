import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { toast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, UserPen } from "lucide-react";
import Image from "next/image"
import { MouseEventHandler } from "react";

export default function Contact() {
  const copyToClipboard = (text: string): MouseEventHandler<HTMLButtonElement> => () => {
    switch (text) {
      case "email":
        navigator.clipboard.writeText("connormccoll@alumni.upenn.edu");
        toast({
          title: "e-mail copied!",
          duration: 1000,
        })
        break;
      case "phone":
        navigator.clipboard.writeText("+1 (262) 490-7937");
        toast({
          title: "phone # copied!",
          duration: 1000,
        });
        break;
    }
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline"><UserPen />Contact Me</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>I can be reached at...</DrawerTitle>
          </DrawerHeader>
          <div className="flex items-center mb-2">
            <button
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              onClick={copyToClipboard("email")}
            >
              <Mail />
            </button>
            <span style={{ padding: '5px' }}> connormccoll@alumni.upenn.edu</span>
          </div>
          <div className="flex items-center mb-2">
            <button
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                onClick={copyToClipboard("phone")}
              >
                <Phone />
              </button>
            <span style={{ padding: '5px' }}> +1 (262) 490-7937</span>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}