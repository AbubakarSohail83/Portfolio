"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { getSupabaseBrowser } from "@/utils/supabaseBrowser";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  const sendResetEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setError("");
    setIsBusy(true);

    let supabase;
    try {
      supabase = getSupabaseBrowser();
    } catch (clientError) {
      setIsBusy(false);
      setError(clientError instanceof Error ? clientError.message : "Missing Supabase browser configuration");
      return;
    }

    const redirectTo = `${window.location.origin}/admin/update-password`;
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo,
    });

    setIsBusy(false);

    if (resetError) {
      setError(resetError.message);
      return;
    }

    setMessage("If that email belongs to an admin user, Supabase will send a password reset link.");
    setEmail("");
  };

  return (
    <main className="section min-h-screen bg-[var(--background)]">
      <div className="container">
        <div className="content-wrapper">
          <Link href="/admin/blog" className="btn-secondary inline-flex" style={{ marginBottom: "24px" }}>
            <ArrowLeft className="w-4 h-4" />
            Back to sign in
          </Link>

          <div className="card" style={{ padding: "32px" }}>
            <div className="section-badge" style={{ marginBottom: "20px" }}>
              <Mail className="w-4 h-4" />
              Account recovery
            </div>

            <h1 className="section-title" style={{ marginBottom: "12px" }}>
              Reset your password
            </h1>
            <p className="text-body text-[var(--text-tertiary)]" style={{ marginBottom: "24px" }}>
              Enter the email for your Supabase admin user. You&apos;ll receive a secure link to choose a new password.
            </p>

            <form onSubmit={sendResetEmail} className="blog-form">
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="blog-input"
                placeholder="Admin email"
                type="email"
                required
                autoComplete="email"
              />
              <button className="btn-primary justify-center" type="submit" disabled={isBusy}>
                {isBusy ? "Sending reset link..." : "Send reset link"}
              </button>
            </form>

            {message && (
              <p className="text-body text-[var(--success)]" style={{ marginTop: "16px" }}>
                {message}
              </p>
            )}
            {error && (
              <p className="text-body text-[var(--error)]" style={{ marginTop: "16px" }}>
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
