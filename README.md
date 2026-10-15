# Fitnew storefront starter

A custom Next.js App Router + TypeScript starter for Fitnew, styled with a clean premium white-and-black visual system.

## Requirements
- Node.js 20.9+
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Validate
```bash
npm run lint
npm run build
```

## Pages included
- `/` — homepage and featured product range
- `/shop` — searchable, filterable, sortable catalog
- `/products/[slug]` — product details and related products
- `/cart` — local demo cart with quantity controls and remove action
- `/checkout` — checkout setup placeholder; no payments are processed
- `/account` — customer account placeholder; authentication is not connected
- `/about` — brand story
- `/contact` — client-side contact form validation demo; messages are not sent
- `/shipping` — shipping policy template
- `/returns` — returns and refunds policy template
- `/privacy` — privacy policy template
- `/terms` — terms of service template
- `/faq` — frequently asked questions

## Important before launch
- Catalog data and prices in `lib/products.ts` are illustrative. Replace them with verified Fitnew product information.
- Product packaging art is CSS-generated placeholder artwork, not final packaging photography.
- The cart uses browser local storage for demonstration. It is not an authoritative order/cart service.
- Checkout, payments, inventory persistence, account authentication, shipping integrations, email delivery, analytics, and order management are not connected.
- Contact form submissions are not sent to a server.
- Shipping, returns, privacy, and terms pages are templates and need business-specific/legal review.
- For India and international sales, validate supplement licensing, classification, labelling, claims, destination-country restrictions, tax, customs, privacy, and consumer protection requirements before accepting orders.
- Never trust client-side cart totals or client-reported payment status. Recalculate prices and verify payments server-side.

## Structure
```text
app/
  page.tsx
  shop/page.tsx
  products/[slug]/page.tsx
  cart/page.tsx
  checkout/page.tsx
  account/page.tsx
  about/page.tsx
  contact/page.tsx
  shipping/page.tsx
  returns/page.tsx
  privacy/page.tsx
  terms/page.tsx
  faq/page.tsx
components/
  Storefront.tsx
  SiteHeader.tsx
  SiteFooter.tsx
  PageShell.tsx
  ProductCard.tsx
  ProductDetails.tsx
  ShopCatalog.tsx
  CartPage.tsx
  InfoPage.tsx
lib/
  products.ts
  cart.ts
```
