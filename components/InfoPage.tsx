import Link from 'next/link';
import type { ReactNode } from 'react';
import { PageShell } from '@/components/PageShell';
export function InfoPage({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro: string; children: ReactNode }) { return <PageShell><main className="page-main"><section className="page-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></section><section className="prose-page section-wrap">{children}<div className="info-cta"><h2>Need a hand?</h2><p>Our team can help with product and order questions.</p><Link className="button button--dark" href="/contact">CONTACT FITNEW ↗</Link></div></section></main></PageShell>; }
