import InfoBar from "@/components/InfoBar";
import InfoDescription from "@/components/InfoDescription";
import InfoImage from "@/components/InfoImage";
import InfoSteps from "@/components/InfoSteps";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

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
      <InfoDescription
        heading="Chat with your documents in a seconds."
        description="Unlock your potential with AskPDF, allowing you to engage in meaningful conversations with any PDF document. Simply upload your file and begin your journey of discovery by asking questions right away!"
      />
      <div className="relative isolate">
        <InfoImage src={"/dashboard-preview.jpg"} alt="Product preview" />
      </div>
      <InfoSteps />
      <div className="relative isolate">
        <InfoImage src={"/file-upload-preview.jpg"} alt="File upload preview" />
      </div>
    </MaxWidthWrapper>
  );
}
