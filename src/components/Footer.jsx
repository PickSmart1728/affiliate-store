import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

/* ── Modal content data ──────────────────────────────────────────────── */
const MODAL_CONTENT = {
  faq: {
    title: "Frequently Asked Questions",
    type: "faq",
    items: [
      {
        q: "What is PickSmart?",
        a: "PickSmart is a curated affiliate store where we handpick the best products across tech, home, and fashion. Every product listed has been personally reviewed to ensure it offers real value, quality, and the best possible price.",
      },
      {
        q: "How do I purchase a product?",
        a: "Simply click the \"Buy on Amazon\" button on any product page. You'll be taken directly to the official Amazon listing where you can complete your purchase safely and securely through Amazon's trusted checkout.",
      },
      {
        q: "Are the prices on PickSmart the same as on Amazon?",
        a: "Yes — you always pay the Amazon price. We don't add any markup. In fact, we actively track coupons and limited-time deals so you're often getting the best available price at the time of your visit.",
      },
      {
        q: "Does PickSmart store my personal data?",
        a: "No. PickSmart is a static storefront — we do not collect, store, or process any personal information. All transactions happen directly on Amazon's platform, which has its own privacy and security standards.",
      },
      {
        q: "Why should I trust PickSmart's product picks?",
        a: "Every product is hand-selected based on customer reviews, ratings, real-world performance, and value for money. We only list items we would genuinely recommend — no filler, no paid placements.",
      },
      {
        q: "Does PickSmart earn a commission from purchases?",
        a: "Yes. PickSmart participates in the Amazon Associates affiliate programme. When you buy through our links, we earn a small commission at absolutely no extra cost to you. This helps us keep the store running and the content fresh.",
      },
      {
        q: "Can I suggest a product to be added?",
        a: "Absolutely! Reach out to us via our Instagram (@picksmart_1728), YouTube channel, or email at picksmart1728@gmail.com with your suggestion. We review every recommendation seriously.",
      },
      {
        q: "How often are products updated?",
        a: "We refresh our product listings regularly — typically whenever better alternatives become available, deals change significantly, or new top-rated products enter the market. Bookmark us and check back often!",
      },
    ],
  },
  shipping: {
    title: "Shipping & Deals",
    type: "info",
    sections: [
      {
        heading: "📦 How Shipping Works",
        body: "PickSmart is a product discovery and affiliate storefront — we don't ship products ourselves. When you click \"Buy on Amazon,\" all shipping, delivery, and fulfilment is handled entirely by Amazon. Your order is subject to Amazon's standard shipping terms, including Prime delivery where applicable.",
      },
      {
        heading: "🚀 Amazon Prime Benefits",
        body: "If you're an Amazon Prime member, you'll enjoy free and fast delivery on eligible products — often within 1–2 business days. Prime eligibility is clearly marked on Amazon's product pages. Not a member yet? You can start a free trial directly on Amazon.",
      },
      {
        heading: "🏷️ How We Track Deals",
        body: "Our team regularly monitors Amazon's pricing, lightning deals, coupon drops, and seasonal sales events (like Prime Day, Diwali Sale, and Festive Season offers). We update product pages to highlight ongoing deals so you always know when a price has dropped.",
      },
      {
        heading: "⚡ Limited-Time Offers",
        body: "Some deals are time-sensitive and may expire within hours. If you spot a product with a discounted price on our site, we recommend visiting the Amazon listing promptly to lock in the offer before it ends.",
      },
      {
        heading: "🌍 Delivery Locations",
        body: "Delivery availability and timelines depend on your Amazon region (India, US, UK, etc.) and your specific pin code or address. Amazon will show the exact delivery date at checkout based on your location.",
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    type: "info",
    sections: [
      {
        heading: "🔍 Overview",
        body: "PickSmart respects your privacy. This policy explains what information — if any — is collected when you visit our site, and how we handle it. In short: we collect nothing personally identifiable.",
      },
      {
        heading: "📊 Data We Do NOT Collect",
        body: "PickSmart is a static affiliate storefront. We do not have user accounts, sign-up forms, or any backend database. We do not collect your name, email address, phone number, payment information, or any other personal data.",
      },
      {
        heading: "🔗 Affiliate Links & Third-Party Sites",
        body: "Our site contains affiliate links to Amazon. When you click these links and visit Amazon, you are subject to Amazon's own Privacy Policy and Terms of Service. PickSmart has no control over, and no access to, any data collected by Amazon during your purchase.",
      },
      {
        heading: "🍪 Cookies & Analytics",
        body: "We may use basic, privacy-respecting analytics tools (such as page view counters) to understand how visitors interact with the site. These tools do not personally identify you. No third-party advertising cookies are used on this site.",
      },
      {
        heading: "💼 Amazon Associates Disclosure",
        body: "PickSmart participates in the Amazon Associates Programme, an affiliate advertising programme designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon. This is disclosed in full compliance with FTC and advertising guidelines.",
      },
      {
        heading: "📬 Contact",
        body: "If you have any questions about this Privacy Policy, please contact us at picksmart1728@gmail.com. We're happy to address any concerns.",
      },
    ],
  },
  support: {
    title: "Support Contact",
    type: "support",
    channels: [
      {
        icon: "📧",
        label: "Email",
        value: "picksmart1728@gmail.com",
        href: "mailto:picksmart1728@gmail.com",
        desc: "Best for detailed queries. We typically respond within 24–48 hours on working days.",
      },
      {
        icon: "📸",
        label: "Instagram",
        value: "@picksmart_1728",
        href: "https://www.instagram.com/picksmart_1728/",
        desc: "Send us a DM for quick questions, product suggestions, or deal tips. Usually the fastest response.",
      },
      {
        icon: "▶️",
        label: "YouTube",
        value: "PickSmart Channel",
        href: "https://www.youtube.com/channel/UCXB2J4q1a1GvFAS7Lgw2mug",
        desc: "Watch in-depth product reviews and drop a comment — we read and reply to every comment.",
      },
    ],
    note: "PickSmart does not handle order fulfilment, returns, or payments. For issues with a purchase, please contact Amazon Support directly through your Amazon account.",
  },
};

/* ── FAQ Accordion Item ──────────────────────────────────────────────── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " faq-item--open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span>{q}</span>
        <ChevronDown size={16} className="faq-chevron" />
      </button>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  );
}

/* ── Modal ───────────────────────────────────────────────────────────── */
function InfoModal({ modal, onClose }) {
  if (!modal) return null;
  const data = MODAL_CONTENT[modal];

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={data.title}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{data.title}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {/* FAQ type */}
          {data.type === "faq" && (
            <div className="faq-list">
              {data.items.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          )}

          {/* Info sections type */}
          {data.type === "info" && (
            <div className="modal-sections">
              {data.sections.map((sec, i) => (
                <div key={i} className="modal-section">
                  <h3 className="modal-section-heading">{sec.heading}</h3>
                  <p className="modal-section-body">{sec.body}</p>
                </div>
              ))}
            </div>
          )}

          {/* Support type */}
          {data.type === "support" && (
            <div className="modal-support">
              <div className="support-channels">
                {data.channels.map((ch, i) => (
                  <a key={i} href={ch.href} target="_blank" rel="noreferrer" className="support-channel-card">
                    <span className="support-channel-icon">{ch.icon}</span>
                    <div className="support-channel-info">
                      <span className="support-channel-label">{ch.label}</span>
                      <span className="support-channel-value">{ch.value}</span>
                      <span className="support-channel-desc">{ch.desc}</span>
                    </div>
                  </a>
                ))}
              </div>
              <div className="support-note">
                <span>ℹ️</span>
                <p>{data.note}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Footer ──────────────────────────────────────────────────────────── */
function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (key) => (e) => {
    e.preventDefault();
    setActiveModal(key);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-content">

          {/* ── Brand Column ─────────────────────────── */}
          <div className="footer-brand">
            <div className="logo-group">
              <img src="/logo_footer.png?v=1" alt="PickSmart Logo" className="logo-image" style={{ height: '32px', width: 'auto' }} />
              <span className="footer-logo">PickSmart</span>
            </div>
            <p className="footer-tagline">
              Discover the absolute best handpicked products across tech, home, and fashion.
              We curate top-rated essentials so you can shop smarter, not harder.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/picksmart_1728/" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCXB2J4q1a1GvFAS7Lgw2mug" target="_blank" rel="noreferrer" className="social-btn" aria-label="Youtube">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" /><path d="m10 15 5-3-5-3z" /></svg>
              </a>
              <a href="mailto:picksmart1728@gmail.com" className="social-btn" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </a>
            </div>
          </div>

          {/* ── Customer Care Column ─────────────────── */}
          <div>
            <h4 className="footer-column-title">Customer Care</h4>
            <ul className="footer-links">
              <li><a href="#faq"      onClick={openModal("faq")}>FAQs</a></li>
              <li><a href="#shipping" onClick={openModal("shipping")}>Shipping &amp; Deals</a></li>
              <li><a href="#privacy"  onClick={openModal("privacy")}>Privacy Policy</a></li>
              <li><a href="#support"  onClick={openModal("support")}>Support Contact</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} PickSmart. All rights reserved.</span>
          <span className="footer-bottom-note">
            PickSmart is an Amazon affiliate. We earn from qualifying purchases — at <strong>no extra cost</strong> to you.
          </span>
        </div>
      </footer>

      <InfoModal modal={activeModal} onClose={closeModal} />
    </>
  );
}

export default Footer;