import { ShimmerButton } from "@/components/magicui/shimmer-button";

type text = {
  text: string;
};

export function ShimmerButtonDemo({ text }: text) {
  return (
    <ShimmerButton className="shadow-2xl">
      <span className="whitespace-pre-wrap text-center text-sm font-medium  leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        {text}
      </span>
    </ShimmerButton>
  );
}
