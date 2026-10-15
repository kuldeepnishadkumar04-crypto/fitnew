import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
export const metadata: Metadata = {
  title: "Checkout | Fitnew",
  robots: { index: false, follow: false },
};
export default function CheckoutPage() {
  return (
    <PageShell>
      <main className="page-main">
        <section className="page-hero compact-hero">
          <p className="eyebrow">SECURE CHECKOUT</p>
          <h1>
            ALMOST <span>THERE.</span>
          </h1>
          <p>Checkout setup is the next implementation phase.</p>
        </section>
        <section className="section-wrap checkout-placeholder">
          <div className="notice-icon">i</div>
          <h2>Payments aren't connected yet</h2>
          <p>
            This starter project does not collect payment details or create
            orders. Before launch, we'll connect a payment provider, validate
            payment status server-side, calculate shipping and applicable taxes,
            and create order records securely.
          </p>
          <div className="checkout-actions">
            <Link className="button button--dark" href="/cart">
              BACK TO CART
            </Link>
            <Link className="text-link" href="/shop">
              Continue shopping ↗
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
