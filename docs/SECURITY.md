# 🔒 Security Policy & Requirements

## 🛡️ Overview
Security is an integral part of the architecture for **Semester Point**, ensuring zero student data leakage, clean client-side state handling, and defense-in-depth against common web vulnerabilities.

---

## 🔑 1. Secrets & Environment Isolation
- **Rule:** Never store secret keys, database credentials, or private administrative tokens in client-side code.
- **Client Variables:** Only public configuration prefixed with `VITE_` may exist in `.env.local`.
- **Repository Safety:** `.env.local` and `.env.*.local` are strictly ignored by `.gitignore`. The template file `.env.example` must contain zero production credentials.

---

## 💾 2. Local Storage & Client State Security
- **Data Scope:** The only data written to browser `localStorage` includes:
  - `semester_point_bookmarks`: Array of saved topic/lab IDs.
  - `semester_point_progress`: Topic completion IDs and reading timestamps.
  - `semester_point_preferences`: Theme and UI settings.
- **Safe Serialization:** All `localStorage` reads are wrapped in defensive `try/catch` handlers with schema fallback to prevent JSON injection or corrupted state crashes.
- **No PII:** No personally identifiable information (PII), student passwords, or university roll numbers are stored in plain text.

---

## 💉 3. Cross-Site Scripting (XSS) Mitigation
- **React JSX Escaping:** All user-facing text, search queries, and dynamic strings are rendered through standard React JSX expressions to ensure automatic HTML entity escaping.
- **Safe Mathematical Rendering:** Mathematical formulas are rendered exclusively via KaTeX's tested parser (`MathView`), avoiding raw `dangerouslySetInnerHTML` with untrusted inputs.

---

## 🌐 4. Content Security & External CDNs
- **Google Fonts:** Restricted to `fonts.googleapis.com` and `fonts.gstatic.com`.
- **KaTeX Stylesheets:** Loaded from trusted CDN endpoints (`cdn.jsdelivr.net`) with Subresource Integrity (`integrity="sha384-..."`) checks.

---

## 🔍 5. Pre-Deployment Security Checklist
- [ ] No API keys, passwords, or personal credentials committed to Git.
- [ ] `npm audit` reveals zero high or critical security vulnerabilities.
- [ ] All external links have `rel="noopener noreferrer"` attributes.
- [ ] `localStorage` parsing contains fallback exception handling.
