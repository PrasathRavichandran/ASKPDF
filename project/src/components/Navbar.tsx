import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  return (
    <nav
      className={`
            sticky
            top-0
            z-30
            h-14
            inset-x-0
            w-full
            bg-white/50
            border-b
            border-gray-200/50
            transition-all
            backdrop-blur-lg
            `}
    >
      <MaxWidthWrapper>
        <div
          className={`
                flex
                items-center
                justify-between
                h-14
                border-b
                border-zinc-200/50
                `}
        >
          <Link href={"/"} className={`flex z-40 font-semibold`}>
            <span>AskPDF.</span>
          </Link>

          <div className={`hidden space-x-4 items-center sm:flex`}>
            <Link
              href={"/pricing"}
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Pricing
            </Link>
            <LoginLink
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Sign in
            </LoginLink>
            <RegisterLink
              className={buttonVariants({
                size: "sm",
              })}
            >
              Get Started <ArrowRight />
            </RegisterLink>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
