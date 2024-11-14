"use client";

import { trpcClient } from "@/trpc/client";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function AuthCallback() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const origin = searchParams.get("origin");

  const { error, isSuccess, isError } = trpcClient.authCallback.useQuery(
    undefined,
    {
      retry: true,
      retryDelay: 500,
    }
  );

  useEffect(() => {
    if (isSuccess) {
      router.push(origin ? `/${origin}` : "/dashboard");
    }
    if (isError && error.data?.code === "UNAUTHORIZED") {
      router.push("/sign-in");
    }
  }, [isSuccess, isError, error]);

  return (
    <div className={"w-full justify-center flex mt-24"}>
      <div className={"items-center flex flex-col gap-2"}>
        <Loader2 className={"h-8 w-8 animate-spin text-zinc-800"} />
        <h3 className={"font-semibold text-xl"}>Setting up your account...</h3>
        <p>You will be redirect automatically.</p>
      </div>
    </div>
  );
}
