"use client";

import Navbar from "@/components/navbar/Navbar";
import CombinedFooter from "@/components/combinedfooter";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="grow">{children}</main>

      <CombinedFooter />
    </>
  );
}
