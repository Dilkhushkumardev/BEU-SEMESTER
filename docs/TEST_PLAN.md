# 🧪 Test Plan & Verification Matrix

This document defines what **"working"** means for **Semester Point**. Every feature must be verified against these criteria before deployment.

---

## 🎯 Core Functional Acceptance Checklist

### 1. 🧭 Navigation & Layout
- [ ] Navigation sidebar is visible on desktop (> 1024px) and collapsible.
- [ ] Bottom navigation bar (`MobileNav`) is active on mobile (< 768px).
- [ ] Route switching between Home, Subjects, Labs, Formulas, Revision, Bookmarks, and Settings occurs with zero page reload.
- [ ] Active route indicator reflects current page accurately.

### 2. 📚 Syllabus & Topic Engine (10-Section Detail)
- [ ] Selecting a subject displays its course code, credits, and all syllabus units.
- [ ] Clicking a topic opens the 10-section detail view.
- [ ] All KaTeX formulas render with zero unformatted LaTeX syntax artifacts.
- [ ] Solved numerical examples display step-by-step solutions cleanly.
- [ ] Toggling the "Mark as Completed" button updates the global progress percentage and triggers confetti celebration when completing a unit/subject.
- [ ] Toggling the Bookmark icon updates the `BookmarkContext` and saves to `localStorage`.

### 3. 🔬 Practical Labs & Viva Engine
- [ ] Labs page correctly filters experiments by Physics, BEEE, and PPS.
- [ ] Lab detail view renders Aim, Theory, Circuit/Flowchart Diagram, and Procedure steps.
- [ ] Viva accordion items toggle answer visibility on click.
- [ ] "Mark Lab Complete" updates practical progress.

### 4. 📐 Formula Sheet
- [ ] Formula cards render math equations via KaTeX without layout shift.
- [ ] Clicking the "Copy LaTeX" button writes the valid TeX string to the user's clipboard and displays a temporary "Copied!" confirmation.
- [ ] Subject filter pills instantly filter visible formulas.

### 5. 🔍 Global Instant Search (`Ctrl + K` / `Cmd + K`)
- [ ] Pressing `Ctrl + K` (Windows/Linux) or `Cmd + K` (macOS) opens the search modal.
- [ ] Search input autofocuses immediately upon modal opening.
- [ ] Typing matches subjects, topic titles, formula names, and lab experiments.
- [ ] Pressing `Esc` or clicking the backdrop closes the search modal cleanly.
- [ ] Selecting a search result navigates to the target page and closes the modal.

### 6. 📊 Progress & Persistence Engine
- [ ] Progress is restored seamlessly upon page refresh.
- [ ] Resetting progress in `SettingsPage` asks for confirmation before clearing storage.
- [ ] Data survives closing and reopening the browser window.

---

## 📱 Responsive Testing Matrix

| Viewport | Device Profile | Target Verification |
| :--- | :--- | :--- |
| **375px × 667px** | Mobile (iPhone SE) | Bottom nav active, single column cards, no horizontal scroll, readable formulas. |
| **768px × 1024px** | Tablet (iPad Portrait) | 2-column grid layout, touch-friendly buttons, accessible search trigger. |
| **1440px × 900px** | Desktop (Laptop / Monitor) | Fixed sidebar, 3-column dashboard grid, prominent `Ctrl+K` search bar. |

---

## 🤖 Automated Quality Checks
Run these commands locally before committing any changes:

```bash
# 1. Static Type Checking
npm run typecheck

# 2. Fast Linter
npm run lint

# 3. Production Build Validation
npm run build
```
