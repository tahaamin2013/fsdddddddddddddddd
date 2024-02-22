import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Topbutton from "@/components/Topbutton";
import Footer from "@/components/Footer";
import Memberships from "@/components/memberships";
import Loader from "@/lib/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wash Me Car Wash Longview | The Only Handwash Tunnel Around!!",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={inter.className}>
        <Loader>
          <Memberships />
          <Navbar />

          {children}
          <Topbutton />
          <Footer />
        </Loader>
      </body>
    </html>
  );
}
