import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "@/app/ClientBody";

export const metadata: Metadata = {
  title: "Den Store Arkana - Novellesamling av Henrik Aareskjold",
  description: "En novellesamling inspirert av tarotkortenes mystikk. Historier som spenner fra hverdagsliv til fantasi, sci-fi og mørke eventyr.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="dark">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
