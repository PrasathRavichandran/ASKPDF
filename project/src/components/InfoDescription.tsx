import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { buttonVariants } from "./ui/button";

type Props = {
  heading: string;
  description: string;
};

type headingProps = {
  children: ReactNode;
};

const CustomHeading = ({ children }: headingProps) => {
  const highlightWord = "documents";
  const sentence = children
    ?.toString()
    .split(new RegExp(`(${highlightWord})`, "g"))
    .reduce<(string | JSX.Element)[]>((prev, next, index) => {
      return [
        ...prev,
        next === highlightWord ? (
          <span key={index} className={`text-green-600`}>
            {next}
          </span>
        ) : (
          next
        ),
      ];
    }, []);
  return (
    <h1
      className={`
    max-w-4xl
    text-5xl
    font-bold
    md:text-6xl
    lg:text-7xl
    `}
    >
      {sentence}
    </h1>
  );
};

export default function InfoDescription({ heading, description }: Props) {
  return (
    <>
      <CustomHeading>{heading}</CustomHeading>
      <p className="mt-5 text-zinc-700 sm:text-lg max-w-prose">{description}</p>
      <Link
        href={"/dashboard"}
        className={buttonVariants({
          size: "lg",
          className: "mt-5",
        })}
      >
        Get Started <ArrowRight />
      </Link>
    </>
  );
}
