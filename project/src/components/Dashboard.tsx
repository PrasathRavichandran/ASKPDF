"use client";

import { trpcClient } from "@/trpc/client";
import NoListMessage from "./NoListMessage";
import UploadButton from "./UploadButton";

import { MessageSquare, Plus, Trash } from "lucide-react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

import { format } from "date-fns";
import { PropsWithChildren } from "react";
import { Button } from "./ui/button";

const ListTitle = ({ fileName = "" }: { fileName: string }) => {
  return (
    <div className={`flex-1 truncate`}>
      <div className={`flex items-center space-x-3`}>
        <h3 className={`truncate text-lg font-medium text-zinc-900`}>
          {fileName}
        </h3>
      </div>
    </div>
  );
};

const ListFooterWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={`
        px-6
        mt-4
        grid
        grid-cols-3
        place-items-center
        py-2
        gap-6
        text-xs
        text-zinc-600
        `}
    >
      {children}
    </div>
  );
};

const ListFooterSingleGrid = ({ children }: PropsWithChildren) => {
  return <div className={`flex items-center gap-2`}>{children}</div>;
};

export default function Dashboard() {
  const { data: files, isLoading } = trpcClient.getUserFiles.useQuery();

  return (
    <main className={`mx-auto max-w-7xl md:p-10`}>
      <div
        className={`
        mt-8
        flex
        flex-col
        items-start
        justify-between
        border-b
        border-gray-200
        gap-4
        pb-5
        sm:flex-row
        sm:items-center
        sm:gap-0
        `}
      >
        <h1 className={`mb-3 text-3xl font-bold text-gray-900`}>My Files</h1>
        <UploadButton />
      </div>

      {/* List of files */}
      {files && files.length !== 0 ? (
        <ul
          className={`
          mt-8
          grid
          grid-cols-1
          gap-6
          divide-y
          divide-zinc-200
          md:grid-cols-2
          lg:grid-cols-3
          `}
        >
          {files
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((file) => (
              <li
                key={file.id}
                className={`
                col-span-1
                divide-y
                divide-gray-200
                rounded-lg
                bg-white
                shadow
                transition
                hover:shadow-lg
                `}
              >
                <Link
                  href={`/dashboard/${file.id}`}
                  className={`flex flex-col gap-2`}
                >
                  <div
                    className={`pt-6 px-6 flex w-full items-center justify-between space-x-6`}
                  >
                    <div
                      className={`h-10 w-10 rounded-full flex-shrink-0 bg-gradient-to-r from-cyan-500 to-blue-500 `}
                    />

                    <ListTitle fileName={file.name} />
                  </div>
                </Link>

                <ListFooterWrapper>
                  <ListFooterSingleGrid>
                    <Plus className={`h-4 w-4`} />
                    {format(new Date(file.createdAt), "MMM yyyy")}
                  </ListFooterSingleGrid>
                  <ListFooterSingleGrid>
                    <MessageSquare className={`h-4 w-4`} />
                    mocked
                  </ListFooterSingleGrid>
                  <Button
                    size={"sm"}
                    className={"w-full"}
                    variant={"destructive"}
                  >
                    <Trash className={`h-4 w-4`} />
                  </Button>
                </ListFooterWrapper>
              </li>
            ))}
        </ul>
      ) : isLoading ? (
        <Skeleton height={100} count={3} />
      ) : (
        <NoListMessage />
      )}
    </main>
  );
}
