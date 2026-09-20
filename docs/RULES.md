# 📜 Development Rules & AI Code of Conduct

These rules MUST be followed by both AI agents and human contributors when working on **Semester Point**.

---

## 1. General Engineering Rules
- **TypeScript First:** All new code must be written in strict TypeScript. Avoid `any` types; define explicit interfaces or use existing types in `src/types/`.
- **Zero Logic Duplication:** Always reuse existing data utilities, KaTeX wrappers (`MathView`), and layout components (`PageContainer`, `Sidebar`, `MobileNav`).
- **Single Responsibility:** Keep components focused and small (< 250 lines where practical). Extract reusable widgets into sub-components.
- **Surgical Modifications:** Do NOT touch unrelated files or refactor established data schemas without explicit instruction.

---

## 2. Before Making Any Code Changes
1. **Read Context:** Always read `docs/PRD.md`, `docs/ARCHITECTURE.md`, and `docs/DESIGN.md` before adding a feature.
2. **Inspect Existing Files:** Examine how neighbouring components implement state, icons, and Tailwind styling.
3. **Check Types:** Verify prop interfaces and data structures in `src/types/syllabus.ts`.

---

## 3. UI & Design Integrity
- **Adhere to `DESIGN.md`:** Use the established deep-space dark palette (`#050816`), cyan/blue gradients, and glassmorphic card borders (`border-slate-800/80`).
- **Always Responsive:** Every UI element must look pixel-perfect across:
  - Mobile screens (375px - 425px)
  - Tablets (768px - 1024px)
  - Desktops (1440px+)
- **Three Core States:** Always provide:
  1. *Normal State*
  2. *Empty State* (e.g., "No bookmarks found", "No search results")
  3. *Active / Focus State* (Focus rings, hover transitions)

---

## 4. State & Data Handling
- **Immutable Updates:** Never mutate state directly in Context or React hooks.
- **Defensive LocalStorage:** Always wrap `localStorage.getItem` and `localStorage.setItem` in `try/catch` blocks to protect against private browsing restrictions or storage quota limits.
- **Static Syllabus Integrity:** The BEU syllabus data in `src/data/` is the single source of truth. Ensure all unit and topic IDs remain deterministic and unique.

---

## 5. Security & Hygiene
- **Never Hardcode Secrets:** Use `.env.example` as a template; never commit API keys, personal tokens, or live URLs.
- **Sanitize Dynamic Output:** When rendering formulas or mathematical symbols, use KaTeX through the vetted `MathView` component.

---

## 6. Verification & Quality Gates
Before considering any task complete:
1. Run `npm run typecheck` (TypeScript validation).
2. Run `npm run lint` (Oxlint check).
3. Test edge cases (empty search results, unbookmarked states, mobile viewport navigation).

---

## 7. Git & Commit Protocol
- Use Conventional Commits:
  - `feat(syllabus): add topic 6 to computer fundamentals`
  - `fix(search): prevent modal scrolling when closed`
  - `docs(prd): update syllabus coverage matrix`
  - `style(ui): improve mobile bottom navigation padding`
