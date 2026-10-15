import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/lib/products';
import { PageShell } from '@/components/PageShell';
import { ProductDetails } from '@/components/ProductDetails';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return products.map((product) => ({ slug: product.id })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const product = products.find((item) => item.id === slug); return { title: product ? `${product.name} | Fitnew` : 'Product | Fitnew', description: product?.description || 'Fitnew sports nutrition product.' }; }
export default async function ProductPage({ params }: Props) { const { slug } = await params; const product = products.find((item) => item.id === slug); if (!product) notFound(); return <PageShell><ProductDetails product={product} /></PageShell>; }
