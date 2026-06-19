import Hero from "@/components/sections/Hero";
import UnitDetail from "@/components/sections/UnitDetail";
import PassiveIncome from "@/components/sections/PassiveIncome";
import Location from "@/components/sections/Location";
import VideoReview from "@/components/sections/VideoReview";
import Pricing from "@/components/sections/Pricing";
import Survey from "@/components/sections/Survey";     
import Testimonials from "@/components/sections/Testimonials";   
import Faq from "@/components/sections/Faq";
import { cn } from "../lib/utils";

export default function Home() {
  return (
    <div className={cn('flex', 'flex-col', 'w-full','max-w-full','overflow-x-hidden', 'bg-gradient-to-br', 'from-slate-50', 'to-stone-100')}>
      <Hero />
      <UnitDetail />
      <PassiveIncome />
      <Location />
      <VideoReview />
      <Pricing />
      <Survey />
      <Testimonials />
      <Faq />
    </div>
  );
}
