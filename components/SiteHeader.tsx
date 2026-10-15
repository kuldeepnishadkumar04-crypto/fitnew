'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CART_EVENT, readCart } from '@/lib/cart';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const sync = () => setCartCount(readCart().reduce((sum, item) => sum + item.quantity, 0));
    sync();
    window.addEventListener(CART_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => { window.removeEventListener(CART_EVENT, sync); window.removeEventListener('storage', sync); };
  }, []);
  const close = () => setMenuOpen(false);
  return <>
    <div className="announcement-bar">SPORTS NUTRITION FOR THE LONG GAME <span>·</span> MEET FITNEW</div>
    <header className="site-header">
      <Link className="wordmark" href="/" onClick={close} aria-label="Fitnew home"><span className="wordmark-mark">F</span>ITNEW<span className="wordmark-dot">.</span></Link>
      <button className="mobile-menu-toggle" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'CLOSE −' : 'MENU +'}</button>
      <nav className={menuOpen ? 'main-nav main-nav--open' : 'main-nav'} aria-label="Main navigation">
        <Link href="/shop" onClick={close}>Shop all</Link><Link href="/shop#categories" onClick={close}>Categories</Link><Link href="/about" onClick={close}>Our standard</Link><Link href="/contact" onClick={close}>Contact</Link>
      </nav>
      <div className="header-actions"><Link className="account-link" href="/account">Account</Link><Link className="cart-link" href="/cart" aria-label={`Cart, ${cartCount} items`}><span>Cart</span><span className="cart-count">{cartCount}</span></Link></div>
    </header>
  </>;
}
