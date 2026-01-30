import FreeRedesignLandingPage from "@/components/FreeRedesignLandingPage";
import { FREE_REDESIGN_COPY_DEFAULT } from "@/lib/freeRedesignCopy";

export default function FreeRedesignPage() {
  return (
    <FreeRedesignLandingPage copy={FREE_REDESIGN_COPY_DEFAULT} vertical={null} />
  );
}
