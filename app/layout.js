
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import VisualEffects from "../components/VisualEffects";
import AssistantBubble from "../components/AssistantBubble";
import CustomCursor from "../components/CustomCursor";

// WHITE SCROLL PROGRESS ABOVE HEADER
import ScrollProgressBar from "../components/ScrollProgressBar";

export const metadata = {
  title: "EROLL OLIVER — WordPress Developer & GHL Expert",
  description:
    "Portfolio replica inspired by the inspected reference: WordPress, GoHighLevel, funnels, automation and Shopify.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* GLOBAL VISUAL EFFECTS */}
        <VisualEffects />

        {/* CUSTOM CURSOR */}
        <CustomCursor />

        {/* WHITE SCROLL PROGRESS BAR */}
        <ScrollProgressBar />

        {/* EXISTING HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <Footer />

        {/* ASSISTANT BUBBLE */}
        <AssistantBubble />

      </body>
    </html>
  );
}
