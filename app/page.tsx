import type { Metadata } from 'next';
import { Storefront } from '@/components/Storefront';
export const metadata: Metadata = { title: 'Fitnew — Sports Nutrition for the Long Game', description: 'Explore Fitnew sports nutrition, including protein powder, mass gainer, creatine, and everyday essentials.' };
export default function HomePage() { return <Storefront />; }
