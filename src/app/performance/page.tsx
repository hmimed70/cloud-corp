import performanceImg from '@/public/performance.jpg'
import Hero from "@/src/components/Hero";
export default function Home() {
  return (
      <Hero 
        imgData={performanceImg}
        title='We serve high performance applications' 
        imgAlt="welding"
      />

  );
}
