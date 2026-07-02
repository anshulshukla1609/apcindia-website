import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAVY = "#0A1F44";
const NAVY_DEEP = "#061434";
const GOLD = "#B8912F";
const IVORY = "#FBF9F3";

const services = [
  {
    title: "Audit & Assurance",
    desc: "Statutory, internal, tax and management audits conducted with rigour and independence.",
  },
  {
    title: "Direct Taxation",
    desc: "Income tax planning, return filing, assessments, appeals and representation.",
  },
  {
    title: "GST & Indirect Tax",
    desc: "Registrations, returns, refunds, audits and litigation support under GST.",
  },
  {
    title: "Corporate Advisory",
    desc: "Company incorporation, ROC compliance, secretarial and FEMA advisory.",
  },
  {
    title: "Accounting & Outsourcing",
    desc: "End-to-end bookkeeping, payroll, MIS and virtual CFO services.",
  },
  {
    title: "Business Consulting",
    desc: "Financial due diligence, valuations, project reports and CMA data.",
  },
];

const team = [
  { name: "CA Alok Pandey", role: "Founder & Managing Partner", phone: "+91-9889471057" },
  { name: "CA Anshul Shukla", role: "Partner — Audit & Assurance", phone: "+91-9889929292" },
  { name: "CA Sharad Shukla", role: "Partner — Taxation", phone: "+91-9956700632" },
  { name: "CA Ankur Malhotra", role: "Partner — Advisory", phone: "+91-9918647667" },
  { name: "CA Shikhar Malhotra", role: "Partner — Corporate Affairs", phone: "+91-9839604389" },
];

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div style={{ backgroundColor: IVORY, color: NAVY, fontFamily: "Georgia, 'Times New Roman', serif" }}>
      {/* Top bar */}
      <div style={{ backgroundColor: NAVY_DEEP, color: "#fff", fontSize: 13 }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-6 py-2">
          <span>Chartered Accountants · Established Excellence</span>
          <span>
            <a href="mailto:alokpandeyandco@gmail.com" style={{ color: "#fff" }}>
              alokpandeyandco@gmail.com
            </a>{" "}
            · <a href="tel:+919889929292" style={{ color: GOLD }}>+91-9889929292</a>
          </span>
        </div>
      </div>

      {/* Nav */}
      <header style={{ backgroundColor: "#fff", borderBottom: `1px solid ${NAVY}22` }}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-3">
            <div
              style={{
                width: 44,
                height: 44,
                background: NAVY,
                color: GOLD,
                display: "grid",
                placeItems: "center",
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              AP
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: 1 }}>ALOK PANDEY &amp; CO.</div>
              <div style={{ fontSize: 11, color: NAVY, opacity: 0.7, letterSpacing: 2 }}>
                CHARTERED ACCOUNTANTS
              </div>
            </div>
          </a>
          <ul className="hidden gap-8 md:flex" style={{ fontSize: 14, fontFamily: "system-ui, sans-serif" }}>
            {["About", "Services", "Team", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} style={{ color: NAVY }}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            style={{
              background: NAVY,
              color: "#fff",
              padding: "10px 20px",
              fontSize: 13,
              letterSpacing: 1,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            CONSULT US
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`, color: "#fff" }}>
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div style={{ color: GOLD, letterSpacing: 4, fontSize: 12, fontFamily: "system-ui" }}>
            SINCE INCEPTION · TRUST · INTEGRITY · EXCELLENCE
          </div>
          <h1 className="mt-6 text-4xl leading-tight md:text-6xl" style={{ fontWeight: 400 }}>
            Chartered accountancy,<br />
            <span style={{ color: GOLD, fontStyle: "italic" }}>rendered with distinction.</span>
          </h1>
          <p className="mt-6 max-w-2xl" style={{ opacity: 0.85, fontSize: 17, lineHeight: 1.7 }}>
            ALOK PANDEY &amp; CO. advises enterprises, institutions and individuals across audit,
            taxation, GST, corporate law and strategic advisory — with the discipline of a legacy
            practice and the agility of a modern firm.
          </p>
          <div className="mt-10 flex flex-wrap gap-4" style={{ fontFamily: "system-ui" }}>
            <a href="#services" style={{ background: GOLD, color: NAVY_DEEP, padding: "14px 28px", fontWeight: 600, letterSpacing: 1 }}>
              EXPLORE SERVICES
            </a>
            <a href="#contact" style={{ border: "1px solid #fff", color: "#fff", padding: "14px 28px", letterSpacing: 1 }}>
              SCHEDULE A MEETING
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div style={{ color: GOLD, letterSpacing: 3, fontSize: 12, fontFamily: "system-ui" }}>ABOUT THE FIRM</div>
            <h2 className="mt-4 text-3xl md:text-4xl" style={{ fontWeight: 400 }}>
              A practice built on precision, discretion and enduring client relationships.
            </h2>
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.8, color: `${NAVY}cc` }}>
            <p>
              We are a multi-disciplinary Chartered Accountancy firm serving a diverse clientele of
              corporates, MSMEs, public sector undertakings and high-net-worth individuals. Our
              partners bring decades of collective experience across assurance, tax and advisory.
            </p>
            <p className="mt-4">
              Every engagement is anchored by senior involvement, rigorous quality control and a
              commitment to institutional integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ background: "#fff", borderTop: `1px solid ${NAVY}18`, borderBottom: `1px solid ${NAVY}18` }}>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div style={{ color: GOLD, letterSpacing: 3, fontSize: 12, fontFamily: "system-ui" }}>SERVICES</div>
          <h2 className="mt-4 text-3xl md:text-4xl" style={{ fontWeight: 400 }}>
            A full spectrum of professional services.
          </h2>
          <div className="mt-12 grid gap-px" style={{ background: `${NAVY}22`, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {services.map((s, i) => (
              <div key={i} style={{ background: IVORY, padding: 32, minHeight: 200 }}>
                <div style={{ color: GOLD, fontSize: 12, letterSpacing: 2, fontFamily: "system-ui" }}>
                  0{i + 1}
                </div>
                <h3 className="mt-3 text-xl" style={{ fontWeight: 500 }}>
                  {s.title}
                </h3>
                <p className="mt-3" style={{ color: `${NAVY}b0`, fontSize: 15, lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="mx-auto max-w-7xl px-6 py-24">
        <div style={{ color: GOLD, letterSpacing: 3, fontSize: 12, fontFamily: "system-ui" }}>OUR PARTNERS</div>
        <h2 className="mt-4 text-3xl md:text-4xl" style={{ fontWeight: 400 }}>
          Leadership you can reach directly.
        </h2>
        <div className="mt-12 grid gap-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {team.map((m) => (
            <div
              key={m.name}
              style={{ background: "#fff", border: `1px solid ${NAVY}22`, padding: 28, textAlign: "center" }}
            >
              <div
                style={{
                  width: 84,
                  height: 84,
                  borderRadius: "50%",
                  background: NAVY,
                  color: GOLD,
                  margin: "0 auto",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 24,
                  fontWeight: 700,
                }}
              >
                {m.name.split(" ").slice(-2).map((w) => w[0]).join("")}
              </div>
              <h3 className="mt-5" style={{ fontSize: 18, fontWeight: 600 }}>
                {m.name}
              </h3>
              <div style={{ color: `${NAVY}99`, fontSize: 13, marginTop: 4, fontFamily: "system-ui" }}>
                {m.role}
              </div>
              <a
                href={`tel:${m.phone.replace(/[^+\d]/g, "")}`}
                style={{
                  display: "inline-block",
                  marginTop: 16,
                  color: NAVY,
                  borderTop: `1px solid ${GOLD}`,
                  paddingTop: 12,
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: "system-ui",
                  letterSpacing: 0.5,
                }}
              >
                {m.phone}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ background: NAVY, color: "#fff" }}>
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2">
          <div>
            <div style={{ color: GOLD, letterSpacing: 3, fontSize: 12, fontFamily: "system-ui" }}>GET IN TOUCH</div>
            <h2 className="mt-4 text-3xl md:text-4xl" style={{ fontWeight: 400 }}>
              We welcome new engagements and enquiries.
            </h2>
            <div className="mt-10 space-y-5" style={{ fontFamily: "system-ui", fontSize: 15 }}>
              <div>
                <div style={{ color: GOLD, fontSize: 11, letterSpacing: 2 }}>EMAIL</div>
                <a href="mailto:info@alokpandeyco.com" style={{ color: "#fff" }}>
                  info@alokpandeyco.com
                </a>
              </div>
              <div>
                <div style={{ color: GOLD, fontSize: 11, letterSpacing: 2 }}>PARTNER DESKS</div>
                {team.map((m) => (
                  <div key={m.name} style={{ marginTop: 6 }}>
                    {m.name} —{" "}
                    <a href={`tel:${m.phone.replace(/[^+\d]/g, "")}`} style={{ color: "#fff" }}>
                      {m.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            style={{ background: "#000", color: NAVY, padding: 32, fontFamily: "system-ui" }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 600 }}>Request a consultation</h3>
            {sent ? (
              <p className="mt-4" style={{ color: NAVY }}>
                Thank you. A partner will respond within one business day.
              </p>
            ) : (
              <>
                {["Full name", "Email address", "Phone"].map((p) => (
                  <input
                    key={p}
                    required
                    placeholder={p}
                    style={{ display: "block", width: "100%", marginTop: 16, padding: 12, border: `1px solid ${NAVY}44` }}
                  />
                ))}
                <textarea
                  required
                  placeholder="How can we help?"
                  rows={4}
                  style={{ display: "block", width: "100%", marginTop: 16, padding: 12, border: `1px solid ${NAVY}44` }}
                />
                <button
                  type="submit"
                  style={{ marginTop: 20, background: NAVY, color: "#fff", padding: "14px 28px", letterSpacing: 1, fontWeight: 600, width: "100%" }}
                >
                  SUBMIT ENQUIRY
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: NAVY_DEEP, color: "#ffffffaa", fontFamily: "system-ui", fontSize: 13 }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8">
          <div>© {new Date().getFullYear()} ALOK PANDEY &amp; CO., Chartered Accountants. All rights reserved.</div>
          <div>Regulated by the Institute of Chartered Accountants of India</div>
        </div>
      </footer>
    </div>
  );
}
