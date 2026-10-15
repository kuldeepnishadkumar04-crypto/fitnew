import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Fitnew",
  description: "Contact Fitnew about products, orders, shipping, or support.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <main className="page-main">
        <section className="page-hero">
          <p className="eyebrow">WE&apos;RE HERE TO HELP</p>
          <h1>
            LET&apos;S <span>TALK.</span>
          </h1>
          <p>Questions about products, orders, or Fitnew? Send us a message.</p>
        </section>

        <section className="section-wrap contact-layout">
          <div>
            <h2>Get in touch</h2>
            <p>Customer support details will be updated before launch.</p>

            <div className="contact-detail">
              <span>EMAIL</span>
              <strong>hello@fitnew.example</strong>
              <small>Replace this placeholder with your business email.</small>
            </div>

            <div className="contact-detail">
              <span>SUPPORT HOURS</span>
              <strong>To be confirmed</strong>
              <small>Publish accurate support hours before launch.</small>
            </div>
          </div>

          <ContactForm />
        </section>
      </main>
    </PageShell>
  );
}