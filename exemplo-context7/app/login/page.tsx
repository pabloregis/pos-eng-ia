import Link from "next/link";
import { SignInWithGitHubButton } from "@/components/auth-buttons";
import { cx, ui } from "@/lib/ui-styles";

export default function LoginPage() {
  return (
    <div
      className={cx(
        ui.layoutShell,
        "bg-[radial-gradient(circle_at_80%_0%,#dcfce7_0%,#f0f9ff_40%,#fff7ed_100%)]",
      )}
    >
      <main className={cx(ui.cardBase, "max-w-md bg-white/90")}>
        <p className={ui.eyebrow}>Login / Signup</p>
        <h1 className={cx(ui.headingBase, "text-3xl")}>Entrar no Demo</h1>
        <p className="mt-3 text-sm text-slate-600">
          Use sua conta GitHub para autenticar rapidamente.
        </p>

        <div className="mt-6">
          <SignInWithGitHubButton />
        </div>

        <Link href="/" className={ui.subtleLink}>
          Voltar para Home
        </Link>
      </main>
    </div>
  );
}
