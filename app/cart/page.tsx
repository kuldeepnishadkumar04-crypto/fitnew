import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { CartPage } from '@/components/CartPage';
export const metadata: Metadata = { title: 'Your Cart | Fitnew', robots: { index: false, follow: false } };
export default function CartRoute() { return <PageShell><CartPage /></PageShell>; }
