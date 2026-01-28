type PlaceholderPanelProps = {
  label?: string;
  className?: string;
};

export function PlaceholderPanel({
  label = "Image goes here later",
  className = ""
}: PlaceholderPanelProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-dashed border-white/20 bg-gradient-to-br from-white/5 to-white/0 px-6 py-10 text-center text-sm text-white/50 ${className}`}
    >
      <span className="relative z-10">{label}</span>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_55%)]" />
    </div>
  );
}
