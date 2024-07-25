import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsappShortcut from "@/components/quickwhatsapp";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saptaloka Digital",
  description: "Lead your business to digital transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-full ">
          <div className="w-full h-full  absolute">
            {children}
            <Footer />
          </div>
          <Navbar />
          <WhatsappShortcut />
        </div>
      </body>
    </html>
  );
}
