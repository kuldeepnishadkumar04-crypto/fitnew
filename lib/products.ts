export type ProductCategory = 'Protein' | 'Performance' | 'Weight gain' | 'Wellness';

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  priceInr: number;
  badge?: string;
  flavor: string;
  visual: 'lime' | 'silver' | 'orange' | 'purple';
};

// Demo data only. Replace names, prices, claims and product details with verified Fitnew information.
export const products: Product[] = [
  {
    id: 'whey-core',
    name: 'Whey Core',
    category: 'Protein',
    description: 'Whey protein powder · 1 kg',
    priceInr: 2499,
    badge: 'BESTSELLER',
    flavor: 'Chocolate',
    visual: 'lime',
  },
  {
    id: 'mass-builder',
    name: 'Mass Builder',
    category: 'Weight gain',
    description: 'Mass gainer powder · 3 kg',
    priceInr: 2899,
    flavor: 'Rich chocolate',
    visual: 'orange',
  },
  {
    id: 'creatine-pure',
    name: 'Creatine Pure',
    category: 'Performance',
    description: 'Creatine monohydrate · 250 g',
    priceInr: 999,
    badge: 'DAILY ESSENTIAL',
    flavor: 'Unflavoured',
    visual: 'silver',
  },
  {
    id: 'daily-multi',
    name: 'Daily Multi',
    category: 'Wellness',
    description: 'Multivitamin tablets · 60 count',
    priceInr: 699,
    flavor: 'Tablet',
    visual: 'purple',
  },
];

export const categories = [
  { name: 'Protein', detail: 'Powders for your routine', number: '01' },
  { name: 'Weight gain', detail: 'Mass gainer formulas', number: '02' },
  { name: 'Performance', detail: 'Creatine and training support', number: '03' },
  { name: 'Wellness', detail: 'Tablets and daily essentials', number: '04' },
] as const;
