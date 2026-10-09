"use client";

import { useState, type FormEvent } from "react";

type State = "idle" | "sending" | "sent" | "error" | "invalid";

const messages: Record<Exclude<State, "idle">, string> = {
  sending: "Sending…",
  sent: "Thank you! Your message reached me, and I'll reply within a couple of days.",
  error: "Your message didn't go through. Please try again, or write to hello@elisatech.io.",
  invalid: "Please add your name, a valid email and a few words about what you need.",
};

export function ContactForm() {
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
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label className="field">
        <span>What is it about?</span>
        <select name="project_type" defaultValue="A website">
          <option>A website</option>
          <option>Improving an existing website</option>
          <option>Software or an integration</option>
          <option>AI or workflow automation</option>
          <option>A job or internship</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="field">
        <span>Tell me a little</span>
        <textarea name="message" rows={5} required placeholder="What you have in mind, and roughly when you need it" />
      </label>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" />
      <p className="privacy">Your message goes to my inbox through Formspree and is only used to reply to you.</p>
      <div className="form-end">
        <button type="submit" className="btn btn-primary" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send message"}
        </button>
        <p className={`form-status ${state}`} role="status" aria-live="polite">
          {state === "idle" || state === "sending" ? "" : messages[state]}
        </p>
      </div>
    </form>
  );
}
