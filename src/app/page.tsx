import { HeroSection } from "@/components/home/HeroSection";
import { WhoWeAreSection } from "@/components/home/WhoWeAreSection";
import { CampaignsThatMoveIndia } from "@/components/home/CampaignsThatMoveIndia";
import { OurClientsSection } from "@/components/home/OurClientsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <CampaignsThatMoveIndia />
      <OurClientsSection />
      <CTASection />
    </>
  );
}

