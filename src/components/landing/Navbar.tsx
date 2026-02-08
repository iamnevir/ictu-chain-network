import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Giới thiệu", href: "#gioi-thieu" },
  { label: "Mục tiêu", href: "#muc-tieu" },
  { label: "Nền tảng", href: "#nen-tang" },
  { label: "Đào tạo", href: "#dao-tao" },
  { label: "Dịch vụ", href: "#dich-vu" },
  { label: "Lộ trình", href: "#lo-trinh" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-18 px-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">IBN</span>
          </div>
          <span className={`font-bold text-lg hidden sm:inline ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            ICTU Blockchain
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/10 ${
                scrolled ? "text-foreground" : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
          <Button size="sm" className="ml-3" onClick={() => handleClick("#lien-he")}>
            Liên hệ
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-left px-3 py-2.5 text-sm font-medium text-foreground rounded-md hover:bg-muted transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button size="sm" className="mt-2" onClick={() => handleClick("#lien-he")}>
              Liên hệ
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
