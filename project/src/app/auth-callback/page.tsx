import { trpc } from "@/trpc/client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function AuthCallback() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const origin = searchParams.get("origin");

  const { isLoading, status } = trpc.authCallback.useQuery();
  if (!isLoading && status === "success") {
    router.push(origin ? `/${origin}` : "/dashboard");
  }
}
