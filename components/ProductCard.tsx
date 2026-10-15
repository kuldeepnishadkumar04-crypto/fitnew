'use client';

import Link from 'next/link';
import type { Product } from '@/lib/products';
import { addToCart } from '@/lib/cart';

const visualLabel: Record<Product['visual'], string> = { lime: 'WHEY', silver: 'PURE', orange: 'MASS', purple: 'DAILY' };

export function ProductCard({ product }: { product: Product }) {
  return <article className="product-card">
    <Link href={`/products/${product.id}`} className={`product-art product-art--${product.visual}`} aria-label={`View ${product.name}`}>
      {product.badge && <span className="product-badge">{product.badge}</span>}<div className="tub-lid" /><div className="tub"><div className="tub-brand">FITNEW<span>®</span></div><div className="tub-rule" /><div className="tub-product">{visualLabel[product.visual]}</div><div className="tub-subtitle">SPORTS<br />NUTRITION</div><div className="tub-weight">{product.id === 'mass-builder' ? '3 KG' : product.id === 'daily-multi' ? '60 TABLETS' : product.id === 'creatine-pure' ? '250 G' : '1 KG'}</div></div><span className="art-index">FITNEW / {product.id === 'whey-core' ? '01' : product.id === 'mass-builder' ? '02' : product.id === 'creatine-pure' ? '03' : '04'}</span>
    </Link>
    <div className="product-meta"><div className="product-category">{product.category} <span>·</span> {product.flavor}</div><Link href={`/products/${product.id}`} className="product-title-link"><h3>{product.name}</h3></Link><p>{product.description}</p><div className="product-buy-row"><strong>₹{product.priceInr.toLocaleString('en-IN')}</strong><button className="add-button" type="button" aria-label={`Add ${product.name} to cart`} onClick={() => addToCart(product.id)}>+</button></div></div>
  </article>;
}
