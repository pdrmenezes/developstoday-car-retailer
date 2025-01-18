import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex place-content-center gap-2">
      <LoaderCircle className="animate-spin" />
      <p>...Loading content</p>
    </div>
  );
}
