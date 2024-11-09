import InfoBar from "@/components/InfoBar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper
      className={`
    
      mb-12
      mt-10
      sm:mt-40
      flex flex-col justify-center items-center text-center

      `}
    >
      <InfoBar>AskPDF is live!</InfoBar>
    </MaxWidthWrapper>
  );
}
