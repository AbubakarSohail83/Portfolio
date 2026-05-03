"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, KeyRound } from "lucide-react";
import { getSupabaseBrowser } from "@/utils/supabaseBrowser";

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  const [hasSession, setHasSession] = useState(false);

  useEffect(() => {
    let supabase;
    try {
      supabase = getSupabaseBrowser();
    } catch (clientError) {
      setError(clientError instanceof Error ? clientError.message : "Missing Supabase browser configuration");
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      setHasSession(Boolean(data.session));
    });

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" || session) {
        setHasSession(Boolean(session));
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const updatePassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setError("");

    if (password.length < 8) {
      setError("Use at least 8 characters for the new password.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsBusy(true);

    let supabase;
    try {
      supabase = getSupabaseBrowser();
    } catch (clientError) {
      setIsBusy(false);
      setError(clientError instanceof Error ? clientError.message : "Missing Supabase browser configuration");
      return;
    }

    const { error: updateError } = await supabase.auth.updateUser({ password });
    setIsBusy(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setPassword("");
    setConfirmPassword("");
    setMessage("Password updated. You can now sign in with your new password.");
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
              <KeyRound className="w-4 h-4" />
              New password
            </div>

            <h1 className="section-title" style={{ marginBottom: "12px" }}>
              Choose a new password
            </h1>
            <p className="text-body text-[var(--text-tertiary)]" style={{ marginBottom: "24px" }}>
              This page works from the secure recovery link sent by Supabase.
            </p>

            {!hasSession && !message && (
              <p className="text-body text-[var(--warning)]" style={{ marginBottom: "16px" }}>
                Open this page from the password reset email before setting a new password.
              </p>
            )}

            <form onSubmit={updatePassword} className="blog-form">
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="blog-input"
                placeholder="New password"
                type="password"
                required
                autoComplete="new-password"
              />
              <input
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="blog-input"
                placeholder="Confirm new password"
                type="password"
                required
                autoComplete="new-password"
              />
              <button className="btn-primary justify-center" type="submit" disabled={isBusy || !hasSession}>
                {isBusy ? "Updating password..." : "Update password"}
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
