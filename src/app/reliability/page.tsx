import reliabilityImg from '@/public/reliability.jpg'
import Hero from "@/src/components/Hero";
export default function Home() {
  return (
      <Hero 
        imgData={reliabilityImg}
        title='Super high reliability hosting' 
        imgAlt="welding"
      />

  );
}
