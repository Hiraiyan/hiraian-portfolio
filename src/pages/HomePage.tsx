import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { ExperienceSection } from '../components/ExperienceSection';
import { SkillsSection } from '../components/SkillsSection';
import { ContactSection } from '../components/ContactSection';
import { SideDotNav } from '../components/SideDotNav';

interface HomePageProps {
  onOpenResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenResume }) => {
  return (
    <>
      <SideDotNav />
      <HeroSection />
      <FeaturedProjects />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection onOpenResume={onOpenResume} />
    </>
  );
};
