import FloatingDockDemo from "@/components/floating-dock-demo";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <div>
      <LandingPage/>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
  <FloatingDockDemo />
</div>
    </div>
  );
}
