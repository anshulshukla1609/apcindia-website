import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import alokAsset from "@/assets/alok.png.asset.json";
import anshulAsset from "@/assets/anshul.png.asset.json";
import sharadAsset from "@/assets/sharad.png.asset.json";
import ankurAsset from "@/assets/ankur.png.asset.json";
import shikharAsset from "@/assets/shikhar.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAVY = "#0A1F44";
const NAVY_DEEP = "#061434";
const GOLD = "#B8912F";
const IVORY = "#FBF9F3";
const EMAIL = "alokpandeyandco@gmail.com";

const services = [
  { title: "Audit & Assurance", desc: "Statutory, internal, concurrent, revenue and stock audits — including bank branch audits for PSU banks — conducted with rigour and independence." },
  { title: "Direct Taxation", desc: "Income tax planning, return filing, tax audits, scrutiny assessments, appeals and representation before tax authorities." },
  { title: "GST & Indirect Tax", desc: "Registrations, returns, refunds, departmental audits and litigation support under the GST regime." },
  { title: "Corporate & Government Advisory", desc: "Advisory and accounting engagements for PSUs, government boards, corporations and Companies Act statutory audits." },
  { title: "Accounting & Outsourcing", desc: "Bookkeeping, payroll, MIS, ERP implementations (Microsoft Navision) and virtual CFO services." },
  { title: "Business & Finance Consulting", desc: "Project finance, working capital funding, systems implementation, contact-point verifications and due diligence." },
];

const team = [
  {
    name: "CA Alok Pandey",
    role: "Founder & Managing Partner",
    phone: "+91-9889471057",
    img: alokAsset.url,
    quals: "FCA · M.Com. · LL.B.",
    certs: "Certified Peer Reviewer (ICAI) · Forensic & Fraud Detection Auditor (ICAI) · Certificate in Concurrent Audit (ICAI) · Certificate in Public Finance & Government Auditor (ICAI) · Certificate in Internal Audit (ICAI) · AICA Level 1",
    bio: "Founder of the firm since 2013, CA Alok Pandey leads statutory audit, government assignments and forensic engagements. He has led bank branch audits for Punjab & Sindh Bank and Bank of India, and heads accounting engagements for UPSIDA, ALIMCO, GSTAT and other state undertakings.",
  },
  {
    name: "CA Anshul Shukla",
    role: "Partner — Audit & Assurance",
    phone: "+91-9889929292",
    img: anshulAsset.url,
    quals: "ACA · M.Com. · LL.B.",
    certs: "Forensic & Fraud Detection Auditor (FAFD-ICAI) · Certificate in Public Finance & Government Auditor (ICAI) · Certified Concurrent Auditor (ICAI) · AICA Level 1",
    bio: "Anshul heads the assurance practice with focus on bank concurrent audits, revenue audits and forensic reviews. He has led concurrent audits for Central Bank of India, Baroda UP Bank, Aryavart Bank and Uttar Pradesh Gramin Bank.",
  },
  {
    name: "CA Sharad Shukla",
    role: "Partner — Taxation",
    phone: "+91-9956700632",
    img: sharadAsset.url,
    quals: "FCA · B.Com.",
    certs: "Certified Concurrent Auditor (ICAI) · AICA Level 1",
    bio: "Sharad specialises in direct and indirect taxation, tax audits, GST audits and representation. He advises corporates and HNIs on tax planning and appears in scrutiny, appellate and DRP proceedings.",
  },
  {
    name: "CA Ankur Malhotra",
    role: "Partner — Advisory",
    phone: "+91-9918647667",
    img: ankurAsset.url,
    quals: "FCA · B.Com.",
    certs: "Certificate in Internal Audit (ICAI)",
    bio: "Ankur leads the advisory vertical spanning GST, indirect tax and internal audit for private companies, exporters and manufacturing clients. He anchors the firm's ERP implementation and process assurance engagements.",
  },
  {
    name: "CA Shikhar Mehrotra",
    role: "Partner — Corporate Affairs",
    phone: "+91-9839604389",
    img: shikharAsset.url,
    quals: "FCA · B.Com.",
    certs: "Companies Act statutory audit · Corporate advisory",
    bio: "Shikhar oversees corporate affairs, statutory audits of companies and business consulting. He works with growth-stage companies on project finance, working capital funding and MIS design.",
  },
];

const primaryContacts = team.filter((m) =>
  ["CA Alok Pandey", "CA Anshul Shukla", "CA Sharad Shukla"].includes(m.name)
);

const offices = [
  {
    label: "Head Office",
    lines: ["86/291 Afimkothi", "Near Anwarganj Post Office", "Kanpur, Uttar Pradesh 208003"],
  },
  {
    label: "Corporate Office",
    lines: ["117/K-53, Sarvodaya Nagar", "Kanpur, Uttar Pradesh 208005"],
  },
  {
    label: "Kanpur Office",
    lines: ["Flat No 202, 2nd Floor, Naraini Complex", "Lajpat Nagar, Kanpur 208005"],
  },
  {
    label: "Branch Office — Gurugram",
    lines: ["567 P, Sector 23-23A", "Near Gate No. 2", "Gurugram, Haryana 122017"],
  },
];

const stats = [
  { n: "12+", l: "Years of Practice" },
  { n: "5", l: "Partners" },
  { n: "9+", l: "Support Professionals" },
  { n: "50+", l: "Government Assignments" },
  { n: "100+", l: "Bank Audit Engagements" },
];

const badges = [
  { label: "ICAI FRN", value: "017912C" },
  { label: "RBI Reg.", value: "1011479" },
  { label: "CAG Reg.", value: "CR6109" },
];

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div style={{ backgroundColor: IVORY, color: NAVY, fontFamily: "Georgia, 'Times New Roman', serif" }}>
      {/* Top bar */}
      <div style={{ backgroundColor: NAVY_DEEP, color: "#fff", fontSize: 13 }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-6 py-2">
          <span>Chartered Accountants · Established 2013 · Kanpur · Gurugram</span>
          <span>
            <a href={`mailto:${EMAIL}`} style={{ color: "#fff" }}>{EMAIL}</a>{" · "}
            <a href="tel:+919889471057" style={{ color: GOLD }}>+91-9889471057</a>
          </span>
        </div>
      </div>

      {/* Nav */}
      <header style={{ backgroundColor: "#fff", borderBottom: `1px solid ${NAVY}22` }}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-3">
            <div style={{ width: 44, height: 44, background: NAVY, color: GOLD, display: "grid", placeItems: "center", fontWeight: 700, letterSpacing: 1 }}>AP</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: 1 }}>ALOK PANDEY &amp; CO.</div>
              <div style={{ fontSize: 11, color: NAVY, opacity: 0.7, letterSpacing: 2 }}>CHARTERED ACCOUNTANTS · EST. 2013</div>
            </div>
          </a>
          <ul className="hidden gap-8 md:flex" style={{ fontSize: 14, fontFamily: "system-ui, sans-serif" }}>
            {["Services", "Partners", "Experience", "Offices", "Contact", "About"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} style={{ color: NAVY }}>{l}</a></li>
            ))}
          </ul>
          <a href="#contact" style={{ background: NAVY, color: "#fff", padding: "10px 20px", fontSize: 13, letterSpacing: 1, fontFamily: "system-ui, sans-serif" }}>SCHEDULE CONSULTATION</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" style={{ background: "#fff" }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
          <div>
            <div className="flex flex-wrap gap-2" style={{ fontFamily: "system-ui" }}>
              {badges.map((b) => (
                <span key={b.label} style={{ border: `1px solid ${NAVY}33`, padding: "6px 12px", fontSize: 12, color: NAVY, letterSpacing: 1 }}>
                  {b.label} {b.value}
                </span>
              ))}
            </div>
            <div className="mt-8" style={{ color: GOLD, letterSpacing: 4, fontSize: 12, fontFamily: "system-ui" }}>CHARTERED ACCOUNTANTS · ESTABLISHED 2013</div>
            <h1 className="mt-4 text-4xl leading-tight md:text-6xl" style={{ fontWeight: 400 }}>
              Trusted Advisors in<br />
              <span style={{ color: GOLD, fontStyle: "italic" }}>Audit &amp; Taxation</span>
            </h1>
            <p className="mt-6 max-w-2xl" style={{ fontSize: 17, lineHeight: 1.75, color: `${NAVY}cc` }}>
              Institutional-grade compliance and advisory for India's leading financial, government and corporate sectors — delivered by a partner-led practice from Kanpur and Gurugram.
            </p>
            <div className="mt-10 flex flex-wrap gap-4" style={{ fontFamily: "system-ui" }}>
              <a href="#contact" style={{ background: NAVY, color: "#fff", padding: "14px 28px", fontWeight: 600, letterSpacing: 1 }}>SCHEDULE CONSULTATION →</a>
              <a href="#services" style={{ border: `1px solid ${NAVY}`, color: NAVY, padding: "14px 28px", letterSpacing: 1 }}>OUR SERVICES</a>
            </div>
          </div>
          <aside style={{ borderLeft: `3px solid ${GOLD}`, padding: "16px 24px", background: IVORY }}>
            <p style={{ fontStyle: "italic", fontSize: 17, lineHeight: 1.7, color: `${NAVY}dd` }}>
              "Integrity and precision have been the cornerstones of our practice since our founding in Kanpur."
            </p>
            <div className="mt-4" style={{ fontFamily: "system-ui", fontSize: 12, letterSpacing: 2, color: GOLD }}>— THE PARTNERSHIP</div>
          </aside>
        </div>

        {/* Stats strip */}
        <div style={{ borderTop: `1px solid ${NAVY}18`, borderBottom: `1px solid ${NAVY}18` }}>
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-5">
            {stats.map((s) => (
              <div key={s.l}>
                <div style={{ color: GOLD, fontSize: 40, fontWeight: 400 }}>{s.n}</div>
                <div style={{ fontFamily: "system-ui", fontSize: 12, letterSpacing: 2, color: `${NAVY}aa`, textTransform: "uppercase", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ background: "#fff", borderTop: `1px solid ${NAVY}18`, borderBottom: `1px solid ${NAVY}18` }}>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div style={{ color: GOLD, letterSpacing: 3, fontSize: 12, fontFamily: "system-ui" }}>SERVICES</div>
          <h2 className="mt-4 text-3xl md:text-4xl" style={{ fontWeight: 400 }}>A full spectrum of professional services.</h2>
          <div className="mt-12 grid gap-px" style={{ background: `${NAVY}22`, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {services.map((s, i) => (
              <div key={i} style={{ background: IVORY, padding: 32, minHeight: 220 }}>
                <div style={{ color: GOLD, fontSize: 12, letterSpacing: 2, fontFamily: "system-ui" }}>0{i + 1}</div>
                <h3 className="mt-3 text-xl" style={{ fontWeight: 500 }}>{s.title}</h3>
                <p className="mt-3" style={{ color: `${NAVY}b0`, fontSize: 15, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="partners" className="mx-auto max-w-7xl px-6 py-24">
        <div style={{ color: GOLD, letterSpacing: 3, fontSize: 12, fontFamily: "system-ui" }}>OUR PARTNERS</div>
        <h2 className="mt-4 text-3xl md:text-4xl" style={{ fontWeight: 400 }}>Leadership you can reach directly.</h2>
        <div className="mt-12 grid gap-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {team.map((m) => (
            <article key={m.name} style={{ background: "#fff", border: `1px solid ${NAVY}22`, display: "flex", flexDirection: "column" }}>
              <div style={{ width: "100%", aspectRatio: "3 / 4", overflow: "hidden", background: NAVY_DEEP }}>
                <img
                  src={m.img}
                  alt={`Portrait of ${m.name}`}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                />
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 20, fontWeight: 600 }}>{m.name}</h3>
                <div style={{ color: GOLD, fontSize: 12, letterSpacing: 2, marginTop: 4, fontFamily: "system-ui", textTransform: "uppercase" }}>{m.role}</div>
                <div style={{ marginTop: 10, fontFamily: "system-ui", fontSize: 13, color: NAVY, fontWeight: 600, letterSpacing: 0.5 }}>{m.quals}</div>
                <p style={{ marginTop: 14, color: `${NAVY}b8`, fontSize: 14.5, lineHeight: 1.65 }}>{m.bio}</p>
                <div style={{ marginTop: 14, paddingTop: 12, borderTop: `1px solid ${NAVY}18`, fontFamily: "system-ui", fontSize: 12.5, color: `${NAVY}99`, lineHeight: 1.55 }}>
                  <span style={{ color: GOLD, letterSpacing: 1.5 }}>CERTIFICATIONS · </span>{m.certs}
                </div>
                <a
                  href={`tel:${m.phone.replace(/[^+\d]/g, "")}`}
                  style={{ display: "inline-block", marginTop: 16, color: NAVY, borderTop: `1px solid ${GOLD}`, paddingTop: 12, fontSize: 15, fontWeight: 600, fontFamily: "system-ui", letterSpacing: 0.5 }}
                >
                  {m.phone}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ background: NAVY, color: "#fff" }}>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div style={{ color: GOLD, letterSpacing: 3, fontSize: 12, fontFamily: "system-ui" }}>SELECT ENGAGEMENTS</div>
          <h2 className="mt-4 text-3xl md:text-4xl" style={{ fontWeight: 400 }}>Institutional experience across banks, government and industry.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3" style={{ fontFamily: "system-ui", fontSize: 14.5, lineHeight: 1.7 }}>
            <div>
              <div style={{ color: GOLD, letterSpacing: 2, fontSize: 12 }}>BANKING</div>
              <ul className="mt-3 space-y-1" style={{ color: "#ffffffcc" }}>
                <li>Punjab &amp; Sindh Bank — Statutory Branch Audit</li>
                <li>Bank of India — Statutory &amp; Stock Audit</li>
                <li>Central Bank of India — Concurrent &amp; Revenue Audit</li>
                <li>Baroda UP Bank · Aryavart Bank · UP Gramin Bank</li>
                <li>Union Bank of India · Indian Bank — Stock Audit</li>
              </ul>
            </div>
            <div>
              <div style={{ color: GOLD, letterSpacing: 2, fontSize: 12 }}>GOVERNMENT</div>
              <ul className="mt-3 space-y-1" style={{ color: "#ffffffcc" }}>
                <li>UP State Industrial Development Authority (UPSIDA)</li>
                <li>Artificial Limbs Manufacturing Corporation (ALIMCO)</li>
                <li>GST Appellate Tribunal (GSTAT) — Principal Bench</li>
                <li>UP Building &amp; Other Construction Workers Welfare Board</li>
                <li>UP State Yarn Co. · UP Co-op Spinning Mills Federation</li>
                <li>DIOS Kanpur Nagar · DIOS Raebareli</li>
              </ul>
            </div>
            <div>
              <div style={{ color: GOLD, letterSpacing: 2, fontSize: 12 }}>INTERNAL AUDIT & INDUSTRY</div>
              <ul className="mt-3 space-y-1" style={{ color: "#ffffffcc" }}>
                <li>Harcourt Butler Technical University</li>
                <li>Kamla Nehru Institute of Technology Society</li>
                <li>Statutory audits of companies under the Companies Act</li>
                <li>Tax &amp; GST audits, representation and litigation</li>
                <li>ERP implementations (Microsoft Navision)</li>
                <li>Project finance &amp; working capital funding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section id="offices" style={{ background: "#fff", borderTop: `1px solid ${NAVY}18`, borderBottom: `1px solid ${NAVY}18` }}>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div style={{ color: GOLD, letterSpacing: 3, fontSize: 12, fontFamily: "system-ui" }}>OFFICES</div>
          <h2 className="mt-4 text-3xl md:text-4xl" style={{ fontWeight: 400 }}>Where to find us.</h2>
          <div className="mt-12 grid gap-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {offices.map((o) => (
              <div key={o.label} style={{ borderLeft: `3px solid ${GOLD}`, padding: "8px 0 8px 24px" }}>
                <div style={{ color: GOLD, fontSize: 12, letterSpacing: 2, fontFamily: "system-ui", textTransform: "uppercase" }}>{o.label}</div>
                <address style={{ marginTop: 10, fontStyle: "normal", fontSize: 15.5, lineHeight: 1.7, color: NAVY }}>
                  {o.lines.map((l) => <div key={l}>{l}</div>)}
                </address>
              </div>
            ))}
          </div>
          <div className="mt-10" style={{ fontFamily: "system-ui", fontSize: 14, color: `${NAVY}aa` }}>
            Email <a href={`mailto:${EMAIL}`} style={{ color: NAVY }}>{EMAIL}</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ background: NAVY_DEEP, color: "#fff" }}>
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2">
          <div>
            <div style={{ color: GOLD, letterSpacing: 3, fontSize: 12, fontFamily: "system-ui" }}>GET IN TOUCH</div>
            <h2 className="mt-4 text-3xl md:text-4xl" style={{ fontWeight: 400 }}>We welcome new engagements and enquiries.</h2>
            <div className="mt-10 space-y-8" style={{ fontFamily: "system-ui", fontSize: 15 }}>
              <div>
                <div style={{ color: GOLD, fontSize: 11, letterSpacing: 2 }}>EMAIL</div>
                <a href={`mailto:${EMAIL}`} style={{ color: "#fff" }}>{EMAIL}</a>
              </div>
              <div>
                <div style={{ color: GOLD, fontSize: 11, letterSpacing: 2 }}>DIRECT PARTNER LINES</div>
                <div className="mt-3 grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
                  {primaryContacts.map((m) => (
                    <div key={m.name} style={{ padding: 14, background: `${NAVY}66`, borderLeft: `3px solid ${GOLD}` }}>
                      <div style={{ fontSize: 13, color: "#ffffffcc" }}>{m.name}</div>
                      <a href={`tel:${m.phone.replace(/[^+\d]/g, "")}`} style={{ color: GOLD, fontSize: 16, fontWeight: 600, letterSpacing: 0.5 }}>{m.phone}</a>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ color: GOLD, fontSize: 11, letterSpacing: 2 }}>OTHER PARTNER DESKS</div>
                {team
                  .filter((m) => !["CA Alok Pandey", "CA Anshul Shukla", "CA Sharad Shukla"].includes(m.name))
                  .map((m) => (
                    <div key={m.name} style={{ marginTop: 6 }}>
                      {m.name} — <a href={`tel:${m.phone.replace(/[^+\d]/g, "")}`} style={{ color: "#fff" }}>{m.phone}</a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            style={{ background: "#fff", color: NAVY, padding: 32, fontFamily: "system-ui" }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 600 }}>Request a consultation</h3>
            {sent ? (
              <p className="mt-4" style={{ color: NAVY }}>Thank you. A partner will respond within one business day.</p>
            ) : (
              <>
                {["Full name", "Email address", "Phone"].map((p) => (
                  <input key={p} required placeholder={p} style={{ display: "block", width: "100%", marginTop: 16, padding: 12, border: `1px solid ${NAVY}44` }} />
                ))}
                <textarea required placeholder="How can we help?" rows={4} style={{ display: "block", width: "100%", marginTop: 16, padding: 12, border: `1px solid ${NAVY}44` }} />
                <button type="submit" style={{ marginTop: 20, background: NAVY, color: "#fff", padding: "14px 28px", letterSpacing: 1, fontWeight: 600, width: "100%" }}>SUBMIT ENQUIRY</button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* About — positioned last */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div style={{ color: GOLD, letterSpacing: 3, fontSize: 12, fontFamily: "system-ui" }}>ABOUT THE FIRM</div>
            <h2 className="mt-4 text-3xl md:text-4xl" style={{ fontWeight: 400 }}>A practice built on precision, discretion and enduring client relationships.</h2>
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.8, color: `${NAVY}cc` }}>
            <p>Established on 2nd April 2013, ALOK PANDEY &amp; CO. is a multi-disciplinary Chartered Accountancy firm serving public sector banks, government undertakings, corporates and MSMEs across India.</p>
            <p className="mt-4">The firm is registered with the Institute of Chartered Accountants of India (FRN 017912C), the Reserve Bank of India (1011479) and the Comptroller &amp; Auditor General of India (CR6109). Every engagement is anchored by senior involvement and rigorous quality control.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#04102a", color: "#ffffffaa", fontFamily: "system-ui", fontSize: 13 }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8">
          <div>© {new Date().getFullYear()} ALOK PANDEY &amp; CO., Chartered Accountants · ICAI FRN 017912C · RBI 1011479 · CAG CR6109</div>
          <div>Regulated by the Institute of Chartered Accountants of India</div>
        </div>
      </footer>
    </div>
  );
}
