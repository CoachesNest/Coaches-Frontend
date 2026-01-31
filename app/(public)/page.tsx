import Hero from "@/components/Hero";
import CoachesFeatures from "@/components/CoachesFeatures";
import LearningPathSection from "@/components/LearningPathSection";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import TestimonialsSection from "@/components/Testimonialssection";
import { MentorShowcase } from "@/components/mentorShowcase";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <CallToAction />
      <CoachesFeatures />
      <LearningPathSection />
      <MentorShowcase />
    
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
