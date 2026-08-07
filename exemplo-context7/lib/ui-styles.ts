type ClassValue = string | false | null | undefined;

export function cx(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(" ");
}

export const ui = {
  layoutShell:
    "relative flex min-h-screen items-center justify-center overflow-hidden p-6",
  cardBase:
    "w-full rounded-3xl border border-black/10 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.16)] backdrop-blur",
  eyebrow: "text-xs font-semibold uppercase tracking-[0.22em] text-slate-500",
  headingBase: "mt-2 font-semibold tracking-tight text-slate-900",
  stateCard: "mt-6 rounded-2xl border border-slate-200 bg-white p-5",
  actionRow: "mt-6 flex flex-wrap gap-3",
  buttonBase:
    "inline-flex h-11 items-center justify-center rounded-xl px-4 text-sm font-medium transition",
  buttonPrimary: "bg-slate-900 text-white hover:bg-slate-700",
  buttonSecondary:
    "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
  subtleLink:
    "mt-6 inline-block text-sm font-medium text-slate-600 underline underline-offset-4",
};
