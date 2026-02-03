import FreeWebsiteLandingPage from "@/components/FreeWebsiteLandingPage";
import { FREE_WEBSITE_COPY_DEFAULT } from "@/lib/freeWebsiteCopy";

export default function FreeWebsitePage() {
  return (
    <FreeWebsiteLandingPage copy={FREE_WEBSITE_COPY_DEFAULT} vertical={null} />
  );
}
