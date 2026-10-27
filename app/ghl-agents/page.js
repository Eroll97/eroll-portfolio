import GHLAgentShowcase from "../../components/GHLAgentShowcase";

export const metadata = {
  title: "Interactive AI Agent Systems | Eroll Oliver",
  description: "Explore illustrative GoHighLevel AI sales bot, voice agent and website chat workflows, including simulated CRM updates.",
};

export default function GHLAgentsPage() {
  return (
    <main style={{ background: "#090909", minHeight: "100vh", padding: "112px 16px 40px" }}>
      <GHLAgentShowcase />
    </main>
  );
}
