'use client';

import Link from 'next/link';

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-main"><div><Link className="wordmark" href="/"><span className="wordmark-mark">F</span>ITNEW<span className="wordmark-dot">.</span></Link><p className="footer-tagline">SPORTS NUTRITION FOR THE LONG GAME.</p></div>
      <div className="footer-column"><strong>SHOP</strong><Link href="/shop">All products</Link><Link href="/shop#categories">Categories</Link><Link href="/cart">Your cart</Link></div>
      <div className="footer-column"><strong>FITNEW</strong><Link href="/about">Our standard</Link><Link href="/contact">Contact us</Link><Link href="/faq">FAQs</Link></div>
      <div className="footer-column"><strong>HELP & POLICIES</strong><Link href="/shipping">Shipping</Link><Link href="/returns">Returns & refunds</Link><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of service</Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} FITNEW. ALL RIGHTS RESERVED.</span><span>DEMO STORE — POLICIES MUST BE REVIEWED BEFORE LAUNCH.</span></div>
  </footer>;
}
