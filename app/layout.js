import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import VisualEffects from "../components/VisualEffects";
import CustomCursor from "../components/CustomCursor";
import ScrollProgressBar from "../components/ScrollProgressBar";
import PortfolioChatbot from "../components/PortfolioChatbot";
import FloatingLetsTalk from "../components/FloatingLetsTalk";
import ContentDeterrents from "../components/ContentDeterrents";

export const metadata = {
  title: "EROLL OLIVER — WordPress Developer & GHL Expert",
  description:
    "Eroll Oliver is a WordPress Developer, GoHighLevel Expert, and AI Automation Specialist specializing in professional websites, Shopify stores, high-converting funnels, CRM systems, and intelligent automation workflows.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContentDeterrents />
        <VisualEffects />
        <CustomCursor />
        <ScrollProgressBar />
        <Header />

        <main>{children}</main>

        <Footer />
        <PortfolioChatbot />
        <FloatingLetsTalk />
      </body>
    </html>
  );
}
