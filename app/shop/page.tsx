import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ShopCatalog } from '@/components/ShopCatalog';
import { PageShell } from '@/components/PageShell';
export const metadata: Metadata = { title: 'Shop Sports Nutrition | Fitnew', description: 'Explore the Fitnew range of sports nutrition products.' };
export default function ShopPage() { return <PageShell><Suspense fallback={<main className="page-main"><section className="page-hero compact-hero"><h1>THE FITNEW LINEUP.</h1><p>Loading products…</p></section></main>}><ShopCatalog /></Suspense></PageShell>; }
