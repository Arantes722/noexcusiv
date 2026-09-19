import { InformationPageLayout } from "@/components/layout/InformationPageLayout";

const sections = [
  ["01", "Information We Collect", <p key="privacy-1">When you place an order, we collect the information required to process and fulfill your purchase, including your name, email address, shipping address and information necessary to complete your order.</p>],
  ["02", "How We Use Your Information", <><p key="intro">Your information is used solely to process and fulfill your order, provide customer support, communicate with you regarding your purchase and comply with legal obligations when required.</p></>],
  ["03", "Payment Information", <p key="privacy-3">Payments are securely processed through Stripe. NOEXCUSIV does not store or have access to your complete payment card details.</p>],
  ["04", "Order Fulfillment", <p key="privacy-4">Information required to prepare and deliver your order may be shared with service providers involved in completing your purchase.</p>],
  ["05", "Data Protection", <p key="privacy-5">We take reasonable technical and organizational measures to protect your personal information. We do not sell, rent or trade your personal data to third parties.</p>],
  ["06", "Cookies", <p key="privacy-6">Our website may use essential cookies and similar technologies to ensure the website functions correctly and improve your browsing experience.</p>],
  ["07", "Changes to This Policy", <p key="privacy-7">We may update this Privacy Policy from time to time. Changes will be published on this page with the updated revision date.</p>],
  ["08", "Contact", <><p key="intro">Questions regarding this Privacy Policy can be sent to:</p><a key="email" href="mailto:noexcusivclub@gmail.com" className="mt-5 inline-block font-semibold text-white underline decoration-white/20 underline-offset-4">noexcusivclub@gmail.com</a></>],
];

export default function PrivacyPage() {
  return (
    <InformationPageLayout
      title={"PRIVACY\nPOLICY."}
      description="How NOEXCUSIV collects, uses and protects the information required to operate the store."
      updated="Last updated / July 2026"
      sideLabel={<>Privacy<br />&amp; data</>}
      sections={sections.map(([number, title, content]) => ({ number: number as string, title: title as string, content }))}
    />
  );
}
