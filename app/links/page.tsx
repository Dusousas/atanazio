"use client";

import React, { useMemo, useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaGlobe,
} from "react-icons/fa";
import { FiShare, FiSettings } from "react-icons/fi";

type LinkItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  accent: string;
  iconColor?: string;
};

export default function LinksPage() {
  const [copied, setCopied] = useState(false);

  const links = useMemo<LinkItem[]>(
    () => [
      {
        label: "Fale Conosco",
        href: "https://api.whatsapp.com/send/?phone=5514996794593&text=Ol%C3%A1+gostaria+de+algumas+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0",
        icon: <FaWhatsapp />,
        accent: "#25D366",
        iconColor: "#fff",
      },
      {
        label: "Ligue Agora",
        href: "https://criarmeulink.com.br/u/1699383687",
        icon: <FaPhoneAlt />,
        accent: "#F8D244",
        iconColor: "#111",
      },
      {
        label: "Nossa Localização",
        href: "https://www.google.com/maps/place/Atanazio+Terraplanagem/@-22.2698239,-48.1386772,15z/data=!4m6!3m5!1s0x94c779b8e5214d71:0x2ad7a636b9efb9ee!8m2!3d-22.2698239!4d-48.1386772!16s%2Fg%2F11n11yd7h8?sa=X&ved=2ahUKEwjBypyNyLKCAxX0B7kGHSTdBdEQ_BJ6BAg2EAA&entry=tts",
        icon: <FaMapMarkerAlt />,
        accent: "#E53935",
        iconColor: "#fff",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/atanazioterraplanagem",
        icon: <FaInstagram />,
        accent: "#E1306C",
        iconColor: "#fff",
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/terraplanagemetransportes?mibextid=aejMdD",
        icon: <FaFacebookF />,
        accent: "#1877F2",
        iconColor: "#fff",
      },
      {
        label: "Nosso Site",
        href: "/",
        icon: <FaGlobe />,
        accent: "#F8D244",
        iconColor: "#111",
      },
    ],
    []
  );

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Atanazio Terraplanagem",
          text: "Acesse nossos links",
          url,
        });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Ignora cancelamento
    }
  };

  return (
    <>
<style>{`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@400;500;600&display=swap');

  :root {
    --yellow: #F8D244;
    --black: #0d0d0d;
    --surface: rgba(255,255,255,0.05);
    --border: rgba(255,255,255,0.08);
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  .at-page {
    min-height: 100vh;
    width: 100%;
    background: var(--black);
    background-image:
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 39px,
        rgba(255,255,255,0.02) 39px,
        rgba(255,255,255,0.02) 40px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 39px,
        rgba(255,255,255,0.02) 39px,
        rgba(255,255,255,0.02) 40px
      );
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem 0.9rem;
    font-family: 'Barlow', sans-serif;
  }

  .at-card {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
  }

  .at-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    position: relative;
    text-align: center;
  }

  .at-avatar-wrap {
    position: relative;
    width: 88px;
    height: 88px;
    margin-bottom: 1rem;
  }

  .at-avatar {
    width: 88px;
    height: 88px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--yellow);
    display: block;
  }

  .at-avatar-ring {
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 1px dashed rgba(248,210,68,0.3);
    animation: at-spin 20s linear infinite;
  }

  @keyframes at-spin {
    to { transform: rotate(360deg); }
  }

  .at-handle {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 900;
    font-size: 1.75rem;
    color: #fff;
    letter-spacing: 0.01em;
    line-height: 1.1;
    text-align: center;
    margin: 0;
  }

  .at-sub {
    font-size: 0.72rem;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-top: 0.45rem;
    text-align: center;
  }

  .at-accent-line {
    width: 36px;
    height: 3px;
    background: var(--yellow);
    margin-top: 1rem;
  }

  .at-links {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .at-link {
    display: flex;
    align-items: center;
    border-radius: 6px;
    overflow: hidden;
    text-decoration: none;
    position: relative;
    transition: transform 0.15s, filter 0.15s;
  }

  .at-link:hover {
    transform: translateX(2px);
    filter: brightness(1.08);
  }

  .at-link:active {
    transform: scale(0.99);
  }

  .at-link-icon {
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 1.15rem;
    transition: width 0.2s;
  }

  .at-link-body {
    flex: 1;
    height: 54px;
    background: rgba(255,255,255,0.06);
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-left: 1px solid rgba(255,255,255,0.04);
    border-top: 1px solid rgba(255,255,255,0.04);
    border-bottom: 1px solid rgba(0,0,0,0.3);
  }

  .at-link-label {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: #fff;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    flex: 1;
  }

  .at-link-arrow {
    width: 42px;
    height: 54px;
    background: rgba(255,255,255,0.03);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: rgba(255,255,255,0.2);
    font-size: 1.1rem;
    border-top: 1px solid rgba(255,255,255,0.04);
    border-bottom: 1px solid rgba(0,0,0,0.3);
  }

  .at-footer {
    margin-top: 1.8rem;
    padding-top: 1.2rem;
    border-top: 1px solid rgba(255,255,255,0.06);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .at-footer-brand {
    font-size: 0.7rem;
    color: rgba(255,255,255,0.2);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .at-footer-tag {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.72rem;
    font-weight: 600;
    color: rgba(248,210,68,0.45);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .at-copied {
    margin-top: 0.6rem;
    text-align: center;
    font-size: 0.72rem;
    color: rgba(248,210,68,0.6);
    letter-spacing: 0.06em;
  }

  @media (max-width: 480px) {
    .at-page {
      padding: 1rem 0.75rem;
    }

    .at-card {
      max-width: 100%;
    }

    .at-avatar-wrap,
    .at-avatar {
      width: 82px;
      height: 82px;
    }

    .at-handle {
      font-size: 1.55rem;
    }

    .at-sub {
      font-size: 0.68rem;
      letter-spacing: 0.1em;
    }

    .at-link-icon {
      width: 50px;
      height: 52px;
      font-size: 1.05rem;
    }

    .at-link-body {
      height: 52px;
      padding: 0 0.9rem;
    }

    .at-link-label {
      font-size: 0.95rem;
    }

    .at-link-arrow {
      width: 38px;
      height: 52px;
    }

    .at-footer {
      justify-content: center;
      text-align: center;
    }
  }
`}</style>

      <section className="at-page">
        <div className="at-card">


          {/* Profile */}
          <div className="at-profile">
            <div className="at-avatar-wrap">
              <div className="at-avatar-ring" />
              <img
                src="/atanazio-logo.webp"
                alt="Atanazio Terraplanagem"
                className="at-avatar"
                loading="eager"
                decoding="async"
              />
            </div>
            <h1 className="at-handle">@atanazioterraplanagem</h1>
            <p className="at-sub">Terraplanagem · Brotas, SP</p>
            <div className="at-accent-line" />
          </div>

          {/* Links */}
          <div className="at-links">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="at-link"
              >
                <div
                  className="at-link-icon"
                  style={{ background: item.accent, color: item.iconColor ?? "#fff" }}
                >
                  {item.icon}
                </div>
                <div className="at-link-body">
                  <span className="at-link-label">{item.label}</span>
                </div>
                <div className="at-link-arrow">›</div>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="at-footer">
            <span className="at-footer-brand">Atanazio Terraplanagem</span>
            <span className="at-footer-tag">◆ Desde 2010</span>
          </div>

          {copied && <p className="at-copied">Link copiado.</p>}
        </div>
      </section>
    </>
  );
}