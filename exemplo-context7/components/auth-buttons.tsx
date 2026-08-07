"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { cx, ui } from "@/lib/ui-styles";

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.5 0 12.3C0 17.74 3.44 22.35 8.2 23.98C8.8 24.09 9.02 23.71 9.02 23.39C9.02 23.1 9.01 22.34 9 21.33C5.66 22.08 4.96 19.87 4.96 19.87C4.42 18.46 3.63 18.08 3.63 18.08C2.55 17.33 3.71 17.35 3.71 17.35C4.9 17.44 5.52 18.6 5.52 18.6C6.58 20.45 8.31 19.92 8.98 19.6C9.08 18.8 9.39 18.25 9.73 17.93C7.06 17.62 4.26 16.56 4.26 11.8C4.26 10.45 4.73 9.34 5.51 8.46C5.39 8.15 4.97 6.89 5.63 5.18C5.63 5.18 6.64 4.85 8.99 6.49C9.95 6.21 10.98 6.06 12 6.05C13.02 6.06 14.05 6.21 15.01 6.49C17.36 4.85 18.37 5.18 18.37 5.18C19.03 6.89 18.61 8.15 18.49 8.46C19.27 9.34 19.74 10.45 19.74 11.8C19.74 16.57 16.94 17.62 14.26 17.93C14.69 18.31 15.08 19.05 15.08 20.19C15.08 21.83 15.06 23.02 15.06 23.39C15.06 23.72 15.28 24.1 15.89 23.98C20.66 22.35 24.1 17.74 24.1 12.3C24.1 5.5 18.73 0 12.1 0H12Z" />
    </svg>
  );
}

export function SignInWithGitHubButton() {
  return (
    <button
      type="button"
      onClick={async () => {
        await authClient.signIn.social({
          provider: "github",
          callbackURL: "/",
        });
      }}
      className={cx(ui.buttonBase, ui.buttonPrimary, "gap-2")}
    >
      <GitHubIcon />
      Entrar com GitHub
    </button>
  );
}

export function SignOutButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={async () => {
        await authClient.signOut();
        router.push("/");
        router.refresh();
      }}
      className={cx(ui.buttonBase, ui.buttonSecondary)}
    >
      Sair
    </button>
  );
}
