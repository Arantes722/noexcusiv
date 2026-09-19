export function OrderStatus({ status }: { status: string }) {
  return <span className="text-[10px] uppercase tracking-[0.2em] text-white/45">{status}</span>;
}
