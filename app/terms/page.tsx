import { InformationPageLayout } from "@/components/layout/InformationPageLayout";

const sections = [
  ["01", "General", <p key="terms-1">By accessing this website and placing an order, you agree to these Terms &amp; Conditions.</p>],
  ["02", "Products", <p key="terms-2">Product images are for illustration purposes and slight differences in colour or placement may occur. Any product specifications or production details not stated as confirmed should be treated as subject to confirmation.</p>],
  ["03", "Pricing & Payments", <p key="terms-3">All prices are displayed in Euros (€). Payments are processed securely through Stripe.</p>],
  ["04", "Shipping", <p key="terms-4">Orders are shipped according to our Shipping Policy. Delivery estimates are not guaranteed.</p>],
  ["05", "Returns & Refunds", <p key="terms-5">Returns and refunds are handled according to our Refund Policy.</p>],
  ["06", "Intellectual Property", <p key="terms-6">All NOEXCUSIV branding, designs, images and website content remain the intellectual property of NOEXCUSIV and may not be copied, reproduced or distributed without prior written permission.</p>],
  ["07", "Contact", <><p key="intro">Questions regarding these Terms &amp; Conditions can be sent to:</p><a key="email" href="mailto:noexcusivclub@gmail.com" className="mt-5 inline-block font-semibold text-white underline decoration-white/20 underline-offset-4">noexcusivclub@gmail.com</a></>],
];

export default function TermsPage() {
  return <InformationPageLayout title={"TERMS\n& CONDITIONS."} description="The terms that apply when accessing NOEXCUSIV and purchasing from the collection." sideLabel={<>Terms<br />&amp; conditions</>} sections={sections.map(([number, title, content]) => ({ number: number as string, title: title as string, content }))} />;
}
