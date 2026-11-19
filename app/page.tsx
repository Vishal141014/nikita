import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import PersonalizedDiscovery from '@/components/sections/PersonalizedDiscovery';
import IRASection from '@/components/sections/IRASection';
import RecommendedProperties from '@/components/sections/RecommendedProperties';
import BudgetBrowser from '@/components/sections/BudgetBrowser';
import LocationAtlas from '@/components/sections/LocationAtlas';
import DeveloperSection from '@/components/sections/DeveloperSection';
import EMICalculator from '@/components/sections/EMICalculator';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';
import Chatbot from '@/components/chatbot/Chatbot';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PersonalizedDiscovery />
        <RecommendedProperties />
        <IRASection />
        <BudgetBrowser />
        <LocationAtlas />
        <DeveloperSection />
        <EMICalculator />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
