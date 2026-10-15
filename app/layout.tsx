import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: { default: 'Fitnew — Sports Nutrition for the Long Game', template: '%s | Fitnew' }, description: 'Explore Fitnew sports nutrition, including protein powder, mass gainer, creatine, and everyday essentials.', applicationName: 'Fitnew' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
