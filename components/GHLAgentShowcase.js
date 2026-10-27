"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./GHLAgentShowcase.module.css";

const MODES = [
  { id: "sales", overline: "SMS · CONVERSATION AI", name: "Sales bot", icon: "message" },
  { id: "voice", overline: "PHONE CALLS · VOICE AI", name: "Voice AI", icon: "phone" },
  { id: "web", overline: "WEBSITE · LIVE CHAT", name: "Website chatbot", icon: "browser" },
];

const SCENARIOS = [
  { id: "book", overline: "BOOK", label: "Lead books an appointment", color: "green" },
  { id: "nurture", overline: "NURTURE", label: "Not ready? Follow up later", color: "blue" },
  { id: "handoff", overline: "HAND OFF", label: "Escalate to a real person", color: "red" },
];

const ev = (from, text, fill = {}, activity = "", stage = "") => ({ from, text, fill, activity, stage });

// Fictional contacts and scripted example interactions. No live GHL API requests.
const DEMOS = {
  sales: {
    book: {
      business: "Sample HVAC company · SMS inquiry",
      contact: "Jordan Lee",
      initial: { source: "Website quote form" },
      fields: ["firstName", "lastName", "phone", "service", "preferredTime", "leadStatus"],
      steps: [
        ev("system", "New HVAC service inquiry received.", {}, "Inquiry received"),
        ev("agent", "Hi! This is the scheduling assistant at Northside HVAC. Is this about AC repair, maintenance, or a new installation?"),
        ev("lead", "I need a maintenance visit for my AC." , { service: "AC maintenance" }, "Service recorded"),
        ev("agent", "I can help with that. What's your name and the best number for appointment updates?"),
        ev("lead", "Jordan Lee, (555) 010-0246.", { firstName: "Jordan", lastName: "Lee", phone: "(555) 010-0246" }, "Contact fields updated"),
        ev("agent", "Thanks, Jordan. I can offer Tuesday at 10 AM or Wednesday at 2 PM. Which works better?"),
        ev("lead", "Wednesday at 2, please.", { preferredTime: "Wednesday · 2:00 PM" }, "Appointment preference recorded"),
        ev("agent", "Great. Your maintenance visit is booked for Wednesday at 2 PM. A confirmation is on its way.", { leadStatus: "Booked" }, "Booking confirmation queued", "Appointment booked"),
      ],
    },
    nurture: {
      business: "Sample roofing company · SMS inquiry",
      contact: "Alex Morgan",
      initial: { source: "Roof estimate form" },
      fields: ["firstName", "lastName", "phone", "service", "followUp", "leadStatus"],
      steps: [
        ev("system", "New roofing estimate inquiry received.", {}, "Inquiry received"),
        ev("agent", "Hi! Thanks for contacting Summit Roofing. Are you looking for a repair or a full roof replacement?"),
        ev("lead", "Probably a replacement, but I'm only getting prices right now.", { service: "Roof replacement" }, "Interest captured"),
        ev("agent", "Understood. I can share the next steps without pushing for an appointment. May I get your name?"),
        ev("lead", "Alex Morgan.", { firstName: "Alex", lastName: "Morgan" }, "Name saved"),
        ev("agent", "Would a check-in next month be helpful, or would you prefer not to receive another message?"),
        ev("lead", "Next month is fine.", { followUp: "Next month", leadStatus: "Nurture" }, "Follow-up preference saved", "Nurture scheduled"),
        ev("agent", "Perfect. We'll follow up next month. You can reply STOP at any time to opt out."),
      ],
    },
    handoff: {
      business: "Sample plumbing company · SMS inquiry",
      contact: "Taylor Kim",
      initial: { source: "Missed-call text-back" },
      fields: ["firstName", "phone", "service", "priority", "assignedTo", "leadStatus"],
      steps: [
        ev("system", "Missed-call text-back sent after incoming call.", {}, "Missed call logged"),
        ev("agent", "Sorry we missed you. This is Harbor Plumbing's assistant. What can we help you with?"),
        ev("lead", "A pipe burst under the sink. Water is spreading!", { service: "Burst pipe", priority: "Urgent" }, "Urgent keyword detected"),
        ev("agent", "I'm flagging this for our on-call team right away. If safe, shut off the nearest water valve. Are you in a safe place?"),
        ev("lead", "Yes. Please have someone call me at (555) 010-0615.", { firstName: "Taylor", phone: "(555) 010-0615" }, "Callback number saved"),
        ev("system", "High-priority notification routed to on-call dispatcher.", { assignedTo: "On-call dispatcher", leadStatus: "Human handoff" }, "Team notified", "Human handoff"),
        ev("agent", "A team member has been alerted. They'll take over the conversation and confirm next steps with you."),
      ],
    },
  },
  voice: {
    book: {
      business: "Sample HVAC company · Inbound call",
      contact: "Morgan Davis",
      initial: { source: "Inbound phone call" },
      fields: ["firstName", "lastName", "phone", "service", "preferredTime", "leadStatus"],
      steps: [
        ev("system", "Inbound call connected to Voice AI.", {}, "Call answered"),
        ev("agent", "Thank you for calling Northside HVAC. This is the virtual scheduling assistant. How can I help today?"),
        ev("lead", "My heat isn't working well. Can I get an inspection?", { service: "Heating inspection" }, "Call intent identified"),
        ev("agent", "Of course. May I have your name and the best callback number?"),
        ev("lead", "Morgan Davis. It's (555) 010-0158.", { firstName: "Morgan", lastName: "Davis", phone: "(555) 010-0158" }, "Caller details saved"),
        ev("agent", "I can offer Thursday at 9 AM or Friday at 1 PM. Which would you prefer?"),
        ev("lead", "Thursday morning sounds good.", { preferredTime: "Thursday · 9:00 AM" }, "Time selected"),
        ev("agent", "You're scheduled for Thursday at 9 AM. Our team will send an appointment confirmation.", { leadStatus: "Booked" }, "Appointment confirmation queued", "Appointment booked"),
      ],
    },
    nurture: {
      business: "Sample home services · Follow-up call",
      contact: "Sam Patel",
      initial: { source: "Requested callback" },
      fields: ["firstName", "service", "followUp", "leadStatus"],
      steps: [
        ev("system", "Voice AI follows up on a requested quote.", {}, "Follow-up started"),
        ev("agent", "Hi, this is the scheduling assistant calling about your recent home-service estimate. Is now a convenient time?"),
        ev("lead", "A quick minute is fine, but I'm not ready to move forward."),
        ev("agent", "No problem. Is timing or the estimate the main thing you're still deciding?"),
        ev("lead", "Timing. I'm planning the work for the end of the month.", { firstName: "Sam", service: "Home-service estimate" }, "Timing concern recorded"),
        ev("agent", "Would you like us to follow up closer to the end of the month?"),
        ev("lead", "Yes, please.", { followUp: "End of month", leadStatus: "Nurture" }, "Follow-up task created", "Nurture scheduled"),
        ev("agent", "Absolutely. We'll check back then. Thanks for your time."),
      ],
    },
    handoff: {
      business: "Sample roofing company · Inbound call",
      contact: "Casey Nguyen",
      initial: { source: "Inbound phone call" },
      fields: ["firstName", "phone", "service", "priority", "assignedTo", "leadStatus"],
      steps: [
        ev("system", "Incoming call answered by Voice AI.", {}, "Call connected"),
        ev("agent", "Thank you for calling Summit Roofing. What can I help you with?"),
        ev("lead", "I need to speak with someone about a problem after a recent repair.", { service: "Post-repair concern" }, "Issue identified"),
        ev("agent", "I understand. I'll connect you with a team member. What name and number should they use if the call drops?"),
        ev("lead", "Casey, (555) 010-0892.", { firstName: "Casey", phone: "(555) 010-0892" }, "Callback details saved"),
        ev("system", "Call transfer requested. Callback task created as fallback.", { priority: "High", assignedTo: "Support team", leadStatus: "Human handoff" }, "Human transfer requested", "Human handoff"),
        ev("agent", "Thanks, Casey. I'm transferring this to our support team now."),
      ],
    },
  },
  web: {
    book: {
      business: "Sample service website · Live chat",
      contact: "Avery Cruz",
      initial: { source: "Website chat widget" },
      fields: ["firstName", "email", "service", "preferredTime", "leadStatus"],
      steps: [
        ev("system", "Website visitor opened the chat widget.", {}, "Web chat opened"),
        ev("agent", "Welcome! Looking for help with an installation, repair, or a free consultation?"),
        ev("lead", "I'd like a consultation about a new AC system.", { service: "AC installation consult" }, "Lead interest saved"),
        ev("agent", "Happy to help. What's your first name and email for the booking details?"),
        ev("lead", "Avery, avery@example.com", { firstName: "Avery", email: "avery@example.com" }, "Visitor contact captured"),
        ev("agent", "Thanks, Avery. Would Monday at 11 AM or Tuesday at 3 PM be better?"),
        ev("lead", "Tuesday at 3 PM.", { preferredTime: "Tuesday · 3:00 PM" }, "Booking time selected"),
        ev("agent", "Done! Your consultation is booked. You'll receive the confirmation at the email you provided.", { leadStatus: "Booked" }, "Confirmation email queued", "Appointment booked"),
      ],
    },
    nurture: {
      business: "Sample service website · Live chat",
      contact: "Jamie Brooks",
      initial: { source: "Website chat widget" },
      fields: ["firstName", "email", "service", "followUp", "leadStatus"],
      steps: [
        ev("system", "Visitor opened the pricing page chat.", {}, "Chat opened"),
        ev("agent", "Hi there! Can I help you compare service options or explain our process?"),
        ev("lead", "I'm just comparing quotes for a kitchen remodel.", { service: "Kitchen remodel" }, "Interest captured"),
        ev("agent", "That makes sense. Would a short checklist help while you compare providers?"),
        ev("lead", "Sure. Please email it to jamie@example.com.", { firstName: "Jamie", email: "jamie@example.com" }, "Email captured"),
        ev("agent", "I can send that. Is it okay if we check in next week?"),
        ev("lead", "Next week works.", { followUp: "Next week", leadStatus: "Nurture" }, "Follow-up preference saved", "Nurture scheduled"),
        ev("agent", "Great. We'll send the guide and follow up next week, as requested."),
      ],
    },
    handoff: {
      business: "Sample service website · Support chat",
      contact: "Riley Parker",
      initial: { source: "Support widget" },
      fields: ["firstName", "email", "service", "priority", "assignedTo", "leadStatus"],
      steps: [
        ev("system", "Existing customer opened support chat.", {}, "Support chat opened"),
        ev("agent", "Hi! I'm the virtual assistant. What can I help you with today?"),
        ev("lead", "I was charged twice for the same invoice.", { service: "Billing issue", priority: "High" }, "Billing issue detected"),
        ev("agent", "I'm sorry about the concern. I won't make changes to your payment details here, but I can get this to billing."),
        ev("lead", "Please contact Riley at riley@example.com.", { firstName: "Riley", email: "riley@example.com" }, "Contact details saved"),
        ev("system", "Billing ticket created and team member notified.", { assignedTo: "Billing specialist", leadStatus: "Human handoff" }, "Billing team notified", "Human handoff"),
        ev("agent", "Thanks, Riley. A billing specialist will review this and follow up directly."),
      ],
    },
  },
};

const FIELD_NAMES = {
  firstName: "First name", lastName: "Last name", phone: "Phone", email: "Email",
  service: "Service", preferredTime: "Preferred booking", followUp: "Follow-up", leadStatus: "Lead status",
  source: "Source", priority: "Priority", assignedTo: "Assigned to",
};

const BUILD_STEPS = {
  sales: [
    ["Connect CRM channels", "Set up the business inbox, approved SMS channel, calendars, and user permissions.", "GHL · MESSAGING"],
    ["Define the bot's goal", "Write focused prompts for qualifying interest and offering a clear next action.", "CONVERSATION AI"],
    ["Capture lead details", "Store service type, customer information, and preferences in custom fields.", "CUSTOM FIELDS"],
    ["Create safety rules", "Handle opt-outs, urgent issues, unexpected answers, and human handoff.", "GUARDRAILS"],
    ["Connect booking", "Offer actual available appointment times when the calendar is configured.", "CALENDARS"],
    ["Test every scenario", "Use test contacts to verify booking, nurturing, handoff, and message consent.", "QA · WORKFLOWS"],
  ],
  voice: [
    ["Configure phone routing", "Set up permitted numbers, business hours, voicemail, and call destinations.", "PHONE"],
    ["Build a voice prompt", "Keep responses concise, clear, and optimized for spoken conversations.", "VOICE AI"],
    ["Connect knowledge", "Add approved services, FAQs, service areas, and basic operating policies.", "KNOWLEDGE BASE"],
    ["Map intake fields", "Record a caller's service needs and callback details inside the CRM.", "CRM DATA"],
    ["Build transfer rules", "Escalate emergencies, complaints, and requests for a real person.", "HANDOFF"],
    ["Test real call paths", "Verify recognition, booking, failures, after-hours calls, and transfer behavior.", "CALL QA"],
  ],
  web: [
    ["Install chat widget", "Add the chat experience to the right website or funnel pages.", "WEBSITE"],
    ["Configure the assistant", "Set answer guidelines, the target audience, and qualification goals.", "CHATBOT"],
    ["Connect lead capture", "Map answers into contact and custom field records.", "CRM FIELDS"],
    ["Set response branches", "Route sales questions, follow-ups, support questions, and escalation.", "WORKFLOWS"],
    ["Offer next actions", "Give visitors a booking link, handoff, or requested information.", "CONVERSION"],
    ["Review and optimize", "Test on mobile and desktop, review transcripts, and refine the knowledge base.", "QA · REPORTS"],
  ],
};

function Glyph({ type, size = 22 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  if (type === "message") return <svg {...common}><path d="M4 5.5h16v11H9l-5 3v-14Z"/><path d="M8 10h8M8 13h5"/></svg>;
  if (type === "phone") return <svg {...common}><path d="M6.2 3.8 9 7.2 7.7 9a15 15 0 0 0 7.3 7.3l1.8-1.3 3.4 2.8-1.4 3c-.3.6-1 .9-1.7.8C8.5 20.7 3.3 15.5 2.4 6.9c-.1-.7.2-1.4.8-1.7l3-1.4Z"/></svg>;
  if (type === "browser") return <svg {...common}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/></svg>;
  if (type === "play") return <svg {...common}><path d="m8 5 11 7-11 7V5Z" fill="currentColor" stroke="none"/></svg>;
  if (type === "pause") return <svg {...common}><path d="M8 5v14M16 5v14" strokeWidth="3"/></svg>;
  if (type === "next") return <svg {...common}><path d="m5 5 9 7-9 7V5ZM18 5v14"/></svg>;
  if (type === "reload") return <svg {...common}><path d="M20 7v5h-5M4 17v-5h5"/><path d="M6 9a7 7 0 0 1 12-2l2 5M4 12l2 5a7 7 0 0 0 12-2"/></svg>;
  return null;
}

export default function GHLAgentShowcase() {
  const [mode, setMode] = useState("sales");
  const [scenario, setScenario] = useState("book");
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const streamRef = useRef(null);
  const data = DEMOS[mode][scenario];
  const total = data.steps.length;
  const done = step >= total;

  useEffect(() => {
    if (!playing || done) return;
    const timer = setTimeout(() => {
      setStep((s) => Math.min(s + 1, total));
    }, 1750);
    return () => clearTimeout(timer);
  }, [playing, step, total, done]);

  useEffect(() => {
    if (done) setPlaying(false);
  }, [done]);

  useEffect(() => {
    const panel = streamRef.current;
    if (panel) panel.scrollTo({ top: panel.scrollHeight, behavior: "smooth" });
  }, [step]);

  const crm = useMemo(() => {
    const next = { ...data.initial };
    const activity = [];
    let stage = "New inquiry";
    for (const item of data.steps.slice(0, step)) {
      Object.assign(next, item.fill);
      if (item.activity) activity.push(item.activity);
      if (item.stage) stage = item.stage;
    }
    return { fields: next, activity, stage };
  }, [data, step]);

  const completedMessages = data.steps.slice(0, step);
  const lastRole = completedMessages.length ? completedMessages[completedMessages.length - 1].from : "";

  function reset(nextMode = mode, nextScenario = scenario) {
    setPlaying(false);
    setStep(0);
    setMode(nextMode);
    setScenario(nextScenario);
  }
  function playOrPause() {
    if (done) { setStep(0); setPlaying(true); }
    else setPlaying((v) => !v);
  }
  function next() { setPlaying(false); setStep((v) => Math.min(v + 1, total)); }

  return (
    <section className={styles.root} aria-label="Interactive GoHighLevel AI Agent demonstrations">
      <div className={styles.intro}>
        <div>
          <div className={styles.eyebrow}><span className={styles.pulse} /> EROLL OLIVER / INTERACTIVE AI SYSTEMS</div>
          <h2>See how an AI agent <em>moves a lead forward.</em></h2>
          <p>Explore three communication channels and follow every response as contact fields, opportunities, and team actions update in the simulated CRM.</p>
        </div>
        <div className={styles.introMeta}><span>03 AGENT TYPES</span><b>09</b><small>INTERACTIVE PATHS</small></div>
      </div>

      <div className={styles.modeGrid} role="group" aria-label="Select agent type">
        {MODES.map((item) => (
          <button className={`${styles.mode} ${mode === item.id ? styles.modeActive : ""}`} key={item.id} onClick={() => reset(item.id, scenario)} aria-pressed={mode === item.id} type="button">
            <span className={styles.modeIcon}><Glyph type={item.icon} /></span>
            <span><small>{item.overline}</small><strong>{item.name}</strong></span>
            {mode === item.id && <span className={styles.activeIndicator} aria-hidden="true" />}
          </button>
        ))}
      </div>

      <div className={styles.scenarioGrid} role="group" aria-label="Select conversation scenario">
        {SCENARIOS.map((item) => (
          <button type="button" key={item.id} aria-pressed={scenario === item.id} onClick={() => reset(mode, item.id)} className={`${styles.scenario} ${scenario === item.id ? styles.scenarioActive : ""}`}>
            <span className={`${styles.dot} ${styles[item.color]}`} />
            <span><small>{item.overline}</small><strong>{item.label}</strong></span>
          </button>
        ))}
      </div>

      <div className={styles.demoGrid}>
        <div className={styles.chatPanel}>
          <div className={styles.panelTop}>
            <div className={styles.panelIdentity}>
              <div className={styles.botAvatar}>AI</div>
              <div><strong>{MODES.find((m) => m.id === mode)?.name} <span>· scripted demo</span></strong><small><span className={styles.tinyDot} /> {data.business}</small></div>
            </div>
            <div className={styles.actions}>
              <button type="button" className={styles.miniAction} onClick={() => reset()} title="Restart demo" aria-label="Restart demo"><Glyph type="reload" size={17}/></button>
              <button type="button" className={styles.miniAction} onClick={next} disabled={done} title="Next step" aria-label="Next message"><Glyph type="next" size={17}/></button>
              <button type="button" className={styles.mainAction} onClick={playOrPause}><Glyph type={playing ? "pause" : "play"} size={15}/>{playing ? "Pause" : done ? "Replay" : step > 0 ? "Resume" : "Run demo"}</button>
            </div>
          </div>
          <div ref={streamRef} className={styles.stream} aria-live="polite" aria-atomic="false">
            {step === 0 && <div className={styles.emptyChat}><span className={styles.emptyOrb}><Glyph type={MODES.find((m) => m.id === mode)?.icon}/></span><strong>Ready to simulate {MODES.find((m) => m.id === mode)?.name.toLowerCase()}</strong><p>Click <b>Run demo</b> to see this conversation unfold and update the CRM on the right.</p></div>}
            {completedMessages.map((item, i) => item.from === "system" ? (
              <div key={i} className={styles.systemMessage}><span className={styles.systemLine} />{item.text}<span className={styles.systemLine} /></div>
            ) : (
              <div key={i} className={`${styles.messageRow} ${item.from === "lead" ? styles.messageLead : styles.messageAgent}`}>
                <div className={styles.messageMeta}>{item.from === "agent" ? (mode === "voice" ? "VOICE ASSISTANT" : "AI ASSISTANT") : (mode === "voice" ? "CALLER" : "VISITOR")}</div>
                <div className={styles.messageBubble}>{item.text}</div>
                {(item.activity || item.stage) && <span className={styles.messageNote}>{item.activity || item.stage}</span>}
              </div>
            ))}
            {done && <div className={styles.completed}><span>END OF SAMPLE</span><strong>{crm.stage}</strong></div>}
            <div />
          </div>
          <div className={styles.chatFooter}>
            <span><span className={playing ? styles.liveDot : styles.tinyDot} /> {playing ? "RUNNING TEST SEQUENCE" : done ? "TEST COMPLETED" : "DEMO MODE"}</span>
            <div className={styles.progressBar} role="progressbar" aria-valuenow={step} aria-valuemin={0} aria-valuemax={total} aria-label="Conversation progress"><i style={{ width: `${(step / total) * 100}%` }} /></div>
            <span>{String(step).padStart(2,"0")} / {String(total).padStart(2,"0")}</span>
          </div>
        </div>

        <aside className={styles.crmPanel} aria-label="Simulated CRM updates">
          <div className={styles.crmHeader}><div><small>GOHIGHLEVEL · DATA PREVIEW</small><strong>Lead capture & activity</strong></div><span className={`${styles.stageBadge} ${done ? styles.stageFinal : ""}`}>{crm.stage}</span></div>
          <div className={styles.crmSection}>
            <h3>CONTACT PROFILE <span>SYNCED WITH CHAT</span></h3>
            {data.fields.filter((k) => k === "firstName" || k === "lastName" || k === "phone" || k === "email").map((key) => <div className={styles.field} key={key}><span>{FIELD_NAMES[key]}</span><strong className={crm.fields[key] ? styles.filled : ""}>{crm.fields[key] || "—"}</strong></div>)}
          </div>
          <div className={styles.crmSection}>
            <h3>CUSTOM FIELDS</h3>
            {data.fields.filter((k) => !["firstName","lastName","phone","email"].includes(k)).map((key) => <div className={styles.field} key={key}><span>{FIELD_NAMES[key]}</span><strong className={crm.fields[key] ? styles.filled : ""}>{crm.fields[key] || "—"}</strong></div>)}
            <div className={styles.field}><span>Source</span><strong className={styles.filled}>{crm.fields.source}</strong></div>
          </div>
          <div className={styles.crmSection}>
            <h3>IN GOHIGHLEVEL <span>SIMULATED EVENTS</span></h3>
            <div className={styles.events}>{crm.activity.length ? crm.activity.map((activity, index) => <div className={styles.event} key={`${index}-${activity}`}><span className={styles.eventIcon}>✓</span>{activity}</div>) : <p className={styles.noEvents}>Events will appear as the demo runs.</p>}</div>
          </div>
          <div className={styles.crmFooter}><span className={styles.connectionDot} /> No live CRM connection. Demo data only.</div>
        </aside>
      </div>

      <div className={styles.note}><b>Interactive simulation.</b> All people, contacts, messages, bookings, and activities are fictional. This demonstration does not send real texts, make calls, create GHL contacts, or book real calendar slots.</div>
      <div className={styles.buildHeader}><div><span className={styles.eyebrow}>IMPLEMENTATION PROCESS</span><h3>How I structure a {MODES.find((m) => m.id === mode)?.name.toLowerCase()} build</h3><p>From initial setup to reliable testing, each stage has a purpose.</p></div><span className={styles.buildCount}>06 STEPS</span></div>
      <div className={styles.stepsGrid}>
        {BUILD_STEPS[mode].map(([title, description, tag], idx) => <article className={styles.stepCard} key={title}><span className={styles.stepNumber}>{String(idx + 1).padStart(2,"0")}</span><h4>{title}</h4><p>{description}</p><span className={styles.stepTag}>{tag}</span></article>)}
      </div>
      <div className={styles.bottom}><span>EROLL OLIVER / CRM AUTOMATION & AI SYSTEMS</span><a href="/contact">Let's discuss your project <span aria-hidden="true">↗</span></a></div>
    </section>
  );
}
