import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:3000",
  secret: process.env.BETTER_AUTH_SECRET ?? "demo-better-auth-secret-change-me",
  database: new Database("./better-auth.sqlite"),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID ?? "demo-client-id",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "demo-client-secret",
    },
  },
});
