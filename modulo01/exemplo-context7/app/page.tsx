import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { SignOutButton } from "@/components/auth-buttons";
import { cx, ui } from "@/lib/ui-styles";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  return (
    <div
      className={cx(
        ui.layoutShell,
        "bg-[radial-gradient(circle_at_10%_20%,#fef3c7_0%,#fdf2f8_45%,#eef2ff_100%)]",
      )}
    >
      <main className={cx(ui.cardBase, "max-w-xl bg-white/85")}>
        <p className={ui.eyebrow}>Demo</p>
        <h1 className={cx(ui.headingBase, "text-4xl")}>Hello World</h1>

        <div className={ui.stateCard}>
          {user ? (
            <p className="text-slate-800">
              Logado como{" "}
              <span className="font-semibold">{user.email ?? user.name}</span>
            </p>
          ) : (
            <p className="text-slate-800">Voce nao esta logado</p>
          )}
        </div>

        <div className={ui.actionRow}>
          {user ? (
            <SignOutButton />
          ) : (
            <Link href="/login" className={cx(ui.buttonBase, ui.buttonPrimary)}>
              Ir para Login
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
