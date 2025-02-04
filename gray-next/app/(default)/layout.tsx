"use client";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/navbar/Navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="grow">{children}</main>

      <Footer />
    </>
  );
}
