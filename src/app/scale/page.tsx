import scaleImg from '@/public/scale.jpg'
import Hero from "@/src/components/Hero";
export default function Home() {
  return (
      <Hero 
        imgData={scaleImg}
        title='Scale your app to infinity' 
        imgAlt="steel factory"
      />

  );
}
