"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import type { Dict } from "../i18n";

type State = "idle" | "sending" | "sent" | "error" | "invalid";

export function ContactForm({ t, lang, privacyHref, privacyLabel }: { t: Dict["form"]; lang: string; privacyHref: string; privacyLabel: string }) {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setState("invalid");
      return;
    }
    setState("sending");
    try {
      const res = await fetch("https://formspree.io/f/xlgaggyk", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field-row">
        <label className="field">
          <span>{t.name}</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label className="field">
          <span>{t.email}</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label className="field">
        <span>{t.type}</span>
        <select name="project_type" defaultValue={t.types[0]}>
          {t.types.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>{t.message}</span>
        <textarea name="message" rows={5} required placeholder={t.placeholder} />
      </label>
      <input type="hidden" name="language" value={lang} />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" />
      <p className="privacy">
        {t.privacy} <Link href={privacyHref}>{privacyLabel}</Link>
      </p>
      <div className="form-end">
        <button type="submit" className="btn btn-primary" disabled={state === "sending"}>
          {state === "sending" ? t.sending : t.send}
        </button>
        <p className={`form-status ${state}`} role="status" aria-live="polite">
          {state === "sent" ? t.sent : state === "error" ? t.error : state === "invalid" ? t.invalid : ""}
        </p>
      </div>
    </form>
  );
}
