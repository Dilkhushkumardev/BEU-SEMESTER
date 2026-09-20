# 🏛️ Architecture Decision Records (ADRs)

This document records the key architectural and design decisions made for **Semester Point**. It prevents accidental deviations or unwarranted refactoring during AI development.

---

## 📑 ADR-001: Pure Client-Side SPA (Vite + React 19) over Server-Side Framework
- **Status:** Accepted
- **Context:** Students frequently study on variable mobile connections and need zero-latency navigation.
- **Decision:** Build the entire application as a static Single Page Application using Vite + React 19.
- **Consequences:**
  - *Pros:* Near-instant page transitions, zero backend hosting overhead, easily deployable to Vercel / Cloudflare Pages / GitHub Pages, full offline caching potential.
  - *Cons:* No server-side rendering for search engine crawlers, but solved via descriptive static `index.html` metadata and structured semantic HTML.

---

## 📑 ADR-002: KaTeX over MathJax for Mathematical Equations
- **Status:** Accepted
- **Context:** Engineering subjects (Mathematics-I, Physics, BEEE) require heavy rendering of calculus, matrix, differential, and electromagnetic equations.
- **Decision:** Use `katex` via a dedicated `<MathView />` component.
- **Consequences:**
  - *Pros:* KaTeX renders over 10x faster than MathJax, avoids layout jumps, produces clean DOM elements, and has minimal JavaScript bundle size.
  - *Cons:* Slightly less lenient with invalid TeX syntax, requiring clean formula definitions in `src/data/formulas/`.

---

## 📑 ADR-003: Local-First State vs. Cloud Database & Authentication
- **Status:** Accepted
- **Context:** Students should not be forced to create accounts or authenticate just to read syllabus notes, save bookmarks, or track revision progress.
- **Decision:** Use `localStorage` backed by dedicated React Context providers (`BookmarkContext`, `ProgressContext`).
- **Consequences:**
  - *Pros:* Frictionless onboarding, instant response, 100% privacy-preserving, zero database maintenance or API costs.
  - *Cons:* Progress is tied to the student's browser device. Mitigated by adding an export/import progress feature in `SettingsPage`.

---

## 📑 ADR-004: Standardized 10-Section Topic Engine
- **Status:** Accepted
- **Context:** University notes often suffer from inconsistent quality, missing numericals, or omitting university exam patterns.
- **Decision:** Enforce a strict 10-section structure for all theory topics (Definitions, Engineering Relevance, Deep Theory, KaTeX Formulations, Solved Numericals, Practical Applications, Pitfalls & Traps, Revision Points, BEU Exam Focus, and AI Visuals).
- **Consequences:**
  - *Pros:* Predictable, high-yield learning experience for every subject; easy to navigate and memorize.

---

## 📑 ADR-005: Oxlint & TypeScript Compiler for Continuous Quality
- **Status:** Accepted
- **Context:** Need fast static analysis during vibe coding without heavy linter delays.
- **Decision:** Use `oxlint` for lightning-fast JavaScript/TypeScript linting combined with `tsc -b` for strict type checking.
