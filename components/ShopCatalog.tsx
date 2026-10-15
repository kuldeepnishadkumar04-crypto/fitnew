'use client';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { categories, products } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
export function ShopCatalog() {
  const params = useSearchParams();
  const initialCategory = params.get('category') || 'All products';
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('featured');
  const shown = useMemo(() => {
    let result = products.filter((p) => (category === 'All products' || p.category === category) && `${p.name} ${p.description} ${p.category}`.toLowerCase().includes(query.toLowerCase()));
    if (sort === 'price-low') result = [...result].sort((a,b) => a.priceInr - b.priceInr);
    if (sort === 'price-high') result = [...result].sort((a,b) => b.priceInr - a.priceInr);
    return result;
  }, [category, query, sort]);
  return <main className="page-main"><section className="page-hero compact-hero"><p className="eyebrow">THE FITNEW LINEUP</p><h1>FIND YOUR<br /><span>EVERYDAY ESSENTIALS.</span></h1><p>Explore sports nutrition products designed to fit into your routine.</p></section><section className="section-wrap catalog-section" id="categories"><div className="catalog-controls"><div className="filter-list">{['All products', ...categories.map((c) => c.name)].map((name) => <button key={name} className={category === name ? 'filter-chip filter-chip--active' : 'filter-chip'} onClick={() => setCategory(name)} type="button">{name}</button>)}</div><div className="catalog-tools"><input aria-label="Search products" placeholder="Search products…" value={query} onChange={(e) => setQuery(e.target.value)} /><select aria-label="Sort products" value={sort} onChange={(e) => setSort(e.target.value)}><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></div></div><div className="catalog-summary">{shown.length} PRODUCTS <span>·</span> PRICES DISPLAYED IN INR</div>{shown.length ? <div className="product-grid">{shown.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state"><h2>No products found</h2><p>Try a different search or category.</p><button className="button button--dark" onClick={() => {setCategory('All products');setQuery('');}} type="button">CLEAR FILTERS</button></div>}<p className="demo-note">Sample product catalog. Confirm all product data and local regulations before selling.</p></section></main>;
}
