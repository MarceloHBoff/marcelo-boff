import { ComponentProps } from "@/@types";

export default function Title({ children }: ComponentProps) {
  return <h1 className="font-bold text-2xl my-8 py-1 px-4 rounded-xl border-b-4 border-b-orange-100 bg-orange-50 cursor-default">{children}</h1>;
}
