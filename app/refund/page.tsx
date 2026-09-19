import { InformationPageLayout } from "@/components/layout/InformationPageLayout";

const sections = [
  ["01", "Returns", <p key="refund-1">Returns and exchanges are subject to applicable consumer protection rules and the specific circumstances of each order. Please contact us before sending anything back so we can confirm whether your order is eligible.</p>],
  ["02", "Damaged or Incorrect Items", <p key="refund-2">If your order arrives damaged, defective or incorrect, contact us within 14 days of receiving it and include your order number and clear photos of the issue.</p>],
  ["03", "Refunds", <p key="refund-3">If your claim is approved, we will confirm the applicable refund or replacement process. Approved refunds will be issued to the original payment method.</p>],
  ["04", "Contact", <><p key="intro">Questions regarding returns, refunds or your order can be sent to:</p><a key="email" href="mailto:noexcusivclub@gmail.com" className="mt-5 inline-block font-semibold text-white underline decoration-white/20 underline-offset-4">noexcusivclub@gmail.com</a></>],
];

export default function RefundPage() {
  return <InformationPageLayout title={"REFUND\nPOLICY."} description="Information about returns, damaged orders, replacements and refunds." sideLabel={<>Returns<br />&amp; refunds</>} sections={sections.map(([number, title, content]) => ({ number: number as string, title: title as string, content }))} />;
}
