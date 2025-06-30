import { Button } from "@/components/ui/button";
type text = {
  text: string;
};

export function ButtonOutline({ text }: text) {
  return <Button variant="outline">{text}</Button>;
}
