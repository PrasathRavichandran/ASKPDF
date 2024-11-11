import PulseDot from "./PulseDot";
import { Common as Props } from "./Types";

export default function InfoBar({ className, children }: Props) {
  return (
    <div
      className={`
    max-w-fit 
    rounded-full 
    border 
    border-gray-200 
    bg-white 
    px-7 py-2 mb-4
    flex justify-center items-center 
    text-center shadow-sm
    backdrop-blur
    transition-all
    hover:bg-white/90
    hover:border-gray-300
    cursor-vertical-text
    `}
    >
      <PulseDot />
      <p className={"font-semibold text-sm text-gray-600"}>{children}</p>
    </div>
  );
}
