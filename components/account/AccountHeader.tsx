type Props = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function AccountHeader({ eyebrow = "ACCOUNT", title, description }: Props) {
  return (
    <header className="border-b border-white/[0.08] pb-12">
      <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-white/25">{eyebrow}</p>
      <h1 className="mt-7 text-[clamp(3rem,8vw,7rem)] font-black leading-[0.86] tracking-[-0.075em]">{title}</h1>
      <p className="mt-7 max-w-xl text-[15px] leading-7 text-white/40">{description}</p>
    </header>
  );
}
