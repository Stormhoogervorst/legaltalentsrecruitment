"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const menuItems = [
  { label: "Vacatures", href: "/vacatures" },
  { label: "Voor Kandidaten", href: "/voor-kandidaten" },
  { label: "Voor Opdrachtgevers", href: "/voor-opdrachtgevers" },
  { label: "Over Ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#FFFFFF",
        zIndex: 9999,
        width: "100vw",
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "16px",
          paddingBottom: "16px",
          borderBottom: "1px solid rgba(10,10,15,0.08)",
          width: "100vw",
          maxWidth: "100vw",
          boxSizing: "border-box",
          margin: 0,
        }}
      >
        <div style={{ flexShrink: 1, minWidth: 0, overflow: "hidden" }}>
          <Link href="/" onClick={onClose} aria-label="Legal Talents home">
            <Image
              src="/logo lt.svg"
              alt="Legal Talents Recruitment"
              width={32}
              height={32}
              style={{
                display: "block",
                width: "32px",
                height: "32px",
                objectFit: "contain",
              }}
            />
          </Link>
        </div>
        <button
          onClick={onClose}
          aria-label="Sluit menu"
          style={{
            width: "40px",
            height: "40px",
            minWidth: "40px",
            minHeight: "40px",
            flexShrink: 0,
            borderRadius: "9999px",
            border: "1px solid rgba(10,10,15,0.12)",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <X size={20} />
        </button>
      </div>

      <nav style={{ flex: 1, padding: "32px 20px", display: "flex", flexDirection: "column" }}>
        {menuItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            style={{
              fontSize: "24px",
              fontWeight: 500,
              padding: "16px 0",
              borderBottom: index < menuItems.length - 1 ? "1px solid rgba(10,10,15,0.08)" : "none",
              color: "#0A0A0F",
              textDecoration: "none",
            }}
            className="font-display"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>,
    document.body,
  );
}
