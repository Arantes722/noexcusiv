import { InformationPageLayout } from "@/components/layout/InformationPageLayout";

const sections = [
  ["01", "Shipping", <p key="shipping-1">We currently ship to countries within Europe only.</p>],
  ["02", "Shipping Costs", <p key="shipping-2">Shipping costs and any applicable delivery charges are shown at checkout before payment.</p>],
  ["03", "Production", <p key="shipping-3">Production timing for this release is currently being confirmed. We will communicate the applicable timing before launch rather than present an estimate as guaranteed.</p>],
  ["04", "Estimated Delivery", <p key="shipping-4">Delivery estimates depend on destination and carrier and will be confirmed for your order when available. Delays may occur during busy periods, public holidays or customs procedures.</p>],
  ["05", "Order Tracking", <p key="shipping-5">When tracking is available for your order, it will be sent to you by email after dispatch.</p>],
  ["06", "Questions", <><p key="intro">Questions regarding shipping can be sent to:</p><a key="email" href="mailto:noexcusivclub@gmail.com" className="mt-5 inline-block font-semibold text-white underline decoration-white/20 underline-offset-4">noexcusivclub@gmail.com</a></>],
];

export default function ShippingPage() {
  return <InformationPageLayout title={"SHIPPING\nPOLICY."} description="What is currently confirmed about delivery for your NOEXCUSIV piece." sideLabel={<>Shipping<br />&amp; delivery</>} sections={sections.map(([number, title, content]) => ({ number: number as string, title: title as string, content }))} />;
}
