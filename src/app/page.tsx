import ButtonA from "@/components/button";
import Image from "next/image";
import Changecolor from "./changecolor";
import PortofolioPrev from "@/components/pages/PortofolioPrev";
import ClientsPrev from "@/components/pages/ClientsPrev";
import CoreValue from "@/components/pages/CoreValue";
import ContactMail from "@/components/pages/ContactMail";
import NewsPrev from "@/components/pages/NewsPrev";
import Landingarea from "@/components/pages/Landingarea";
import Services from "@/components/pages/Services";

export default function Home() {
  return (
    <main>
      <Landingarea />
      <div id="services" className="flex flex-col">
        <Services />
        <div className="w-full"></div>
        <div className="flex flex-col gap-24"></div>
        <PortofolioPrev />
        <ClientsPrev />
        <CoreValue />
        <ContactMail />
        <NewsPrev />
      </div>
    </main>
  );
}
