import FloatingDockDemo from "@/components/floating-dock-demo";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <div>
      <LandingPage/>
      <div className="fixed items-center top-103 right-150">
        <FloatingDockDemo/>
      </div>
    </div>
  );
}
