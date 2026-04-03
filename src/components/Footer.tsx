import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/20 relative overflow-hidden pt-20 pb-8">
      {/* Watermark Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none z-0">
        <Logo className="w-[80vw] md:w-[50vw] h-auto" showText={false} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center mb-6">
              <Logo className="w-36 h-auto" />
            </Link>
            <p className="text-ivory/70 text-sm leading-relaxed max-w-xs">
              Ancient legacy meets cutting-edge science. Timeless authority, modern precision, clean luxury.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-serif text-lg text-gold mb-6 tracking-widest uppercase">Quick Links</h4>
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-ivory/70 hover:text-gold transition-colors text-sm uppercase tracking-wider">Home</Link>
              <Link to="/about" className="text-ivory/70 hover:text-gold transition-colors text-sm uppercase tracking-wider">About</Link>
              <Link to="/manufacturing" className="text-ivory/70 hover:text-gold transition-colors text-sm uppercase tracking-wider">Manufacturing</Link>
              <Link to="/contact-us" className="text-ivory/70 hover:text-gold transition-colors text-sm uppercase tracking-wider">Contact Us</Link>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col">
            <h4 className="font-serif text-lg text-gold mb-6 tracking-widest uppercase">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-ivory/70 text-sm">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>2221 Oakland Rd<br />San Jose, CA 95131</span>
              </li>
              <li className="flex items-center gap-3 text-ivory/70 text-sm">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>415 814 9788 ext. 408</span>
              </li>
              <li className="flex items-center gap-3 text-ivory/70 text-sm">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:info@babylonllc.com" className="hover:text-gold transition-colors">info@babylonllc.com</a>
              </li>
            </ul>
            
            <div className="flex items-center gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-ivory/70 hover:text-gold hover:border-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-ivory/70 hover:text-gold hover:border-gold transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-ivory/70 hover:text-gold hover:border-gold transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/50 tracking-wider">
            &copy; {new Date().getFullYear()} Babylon LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-ivory/50">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
