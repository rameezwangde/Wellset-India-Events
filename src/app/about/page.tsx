import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import OurExpertise from '@/components/about/OurExpertise';
import WhyClientsTrustUs from '@/components/about/WhyClientsTrustUs';
import ReadyToTalk from '@/components/about/ReadyToTalk';

export const metadata = {
  title: 'About Wellset India | Pan-India BTL & Activation Agency Since 2006',
  description: 'Discover Wellset India Events and Promotions, a pan-India BTL and activation agency delivering impactful campaigns since 2006.',
};

export default function AboutPage() {
  return (
    <main className="w-full overflow-hidden bg-soft-ivory">
      <AboutHero />
      <OurExpertise />
      <WhyClientsTrustUs />
      <ReadyToTalk />
    </main>
  );
}
