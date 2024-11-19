import LandingBanner from "@/components/Bannner";
import LandingBar from "@/components/LandingNav";
import "./globals.scss";


export default function Home() {
  return (
    
    <div>
      <LandingBar />
      <LandingBanner />
    </div>
  );
}
