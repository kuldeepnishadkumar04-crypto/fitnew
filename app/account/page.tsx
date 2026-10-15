import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
export const metadata: Metadata = {
  title: "Your Account | Fitnew",
  robots: { index: false, follow: false },
};
export default function AccountPage() {
  return (
    <PageShell>
      <main className="page-main">
        <section className="page-hero compact-hero">
          <p className="eyebrow">YOUR FITNEW</p>
          <h1>
            YOUR ACCOUNT<span>.</span>
          </h1>
          <p>
            Order history and customer accounts will be available when
            authentication is connected.
          </p>
        </section>
        <section className="section-wrap checkout-placeholder">
          <h2>Account access is coming next</h2>
          <p>
            Customer sign-in, account recovery, saved addresses, and order
            history need a secure authentication and backend integration. This
            demo doesn't ask you to enter or store passwords.
          </p>
          <Link className="button button--dark" href="/shop">
            SHOP PRODUCTS ↗
          </Link>
        </section>
      </main>
    </PageShell>
  );
}
