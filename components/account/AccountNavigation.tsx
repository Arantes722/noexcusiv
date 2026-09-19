import Link from "next/link";

const links = [
  ["/account", "Overview"],
  ["/account/orders", "Orders"],
  ["/account/settings", "Personal information"],
];

export function AccountNavigation() {
  return (
    <nav aria-label="Account navigation" className="flex flex-wrap gap-x-6 gap-y-3 border-b border-white/[0.08] py-5 text-[10px] uppercase tracking-[0.25em] text-white/35">
      {links.map(([href, label]) => (
        <Link key={href} href={href} className="transition hover:text-white">{label}</Link>
      ))}
    </nav>
  );
}
