import { Button } from "@/components/ui/button";
type text = {
  text: string;
  className: string;
};

export function ButtonDemo({ text, className }: text) {
  return (
    <div
      className={`flex flex-wrap *:bg-[#3655ee] rounded-sm text-white  items-center gap-2 md:flex-row ${
        className || ""
      }`}
    >
      <Button>{text}</Button>
    </div>
  );
}
