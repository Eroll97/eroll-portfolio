import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VisualEffects from '../components/VisualEffects';
import AssistantBubble from '../components/AssistantBubble';

export const metadata = {
  title: 'EROLL OLIVER — WordPress Developer & GHL Expert',
  description: 'Portfolio replica inspired by the inspected reference: WordPress, GoHighLevel, funnels, automation and Shopify.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <VisualEffects />
        <Header />
        <main>{children}</main>
        <Footer />
        <AssistantBubble />
      </body>
    </html>
  );
}
