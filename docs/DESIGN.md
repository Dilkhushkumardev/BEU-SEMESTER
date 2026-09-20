# 🎨 Design System & Visual Guidelines

## 🌌 Visual Theme: Deep Space Glow & Engineering Glassmorphism
Semester Point uses a sleek, premium dark-mode aesthetic with vibrant cybernetic gradients, glassmorphism cards, and high-contrast typography designed for long study sessions.

---

## 🎨 Color Palette & Tokens

### 1. Base Backgrounds & Surfaces
| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Canvas Background** | `#050816` | Main application background (Deep space midnight). |
| **Card Surface Base** | `#0B1120` / `#0D1527` | Primary content cards, sidebar, navigation background. |
| **Card Surface Raised** | `#131F38` | Hover states, elevated dropdowns, modal layers. |
| **Glass Border** | `rgba(255, 255, 255, 0.08)` | Subtly glowing card borders and divider lines. |

### 2. Accent & Brand Colors
| Brand Accent | Hex / Tailwind | Purpose |
| :--- | :--- | :--- |
| **Primary Blue** | `#3B82F6` (`blue-500`) | Primary buttons, active navigation, key highlights. |
| **Cyber Cyan** | `#06B6D4` (`cyan-500`) | Engineering badges, AI features, active search tags. |
| **Electric Purple** | `#8B5CF6` (`purple-500`) | Labs, numerical examples, advanced theory tags. |
| **Success Emerald** | `#10B981` (`emerald-500`) | Topic completion checks, verified answers, positive metrics. |
| **Warning Amber** | `#F59E0B` (`amber-500`) | Common student traps, exam alert notices, formula legends. |
| **Destructive Rose** | `#EF4444` (`rose-500`) | Reset actions, error banners, critical warnings. |

### 3. Text Contrast & Hierarchy
| Level | Color Class | Usage |
| :--- | :--- | :--- |
| **Primary Text** | `text-slate-100` (`#F1F5F9`) | Main headings, body text, readable content. |
| **Secondary Text** | `text-slate-400` (`#94A3B8`) | Subheadings, metadata, unit titles, timestamps. |
| **Muted Text** | `text-slate-500` (`#64748B`) | Inactive icons, subtle hints, keyboard shortcuts. |

---

## 🔤 Typography & Hierarchy

Google Fonts integrated into `<head>`:

```html
<!-- Outfit (Display), Inter (Body), JetBrains Mono (Code/Math) -->
font-family: 'Outfit', sans-serif;         /* Headings & Heroes */
font-family: 'Inter', sans-serif;          /* Body copy & UI */
font-family: 'JetBrains Mono', monospace;  /* Formulas, Code, Chips */
```

### Font Scales
- **Display 1 (Hero Title):** `text-4xl md:text-5xl font-extrabold tracking-tight font-display`
- **Heading 1 (Page Title):** `text-2xl md:text-3xl font-bold font-display`
- **Heading 2 (Section Title):** `text-xl md:text-2xl font-semibold text-slate-100`
- **Heading 3 (Card Title):** `text-lg font-semibold text-slate-200`
- **Body Large:** `text-base text-slate-300 leading-relaxed`
- **Body Small / Captions:** `text-xs md:text-sm text-slate-400`
- **Code & KaTeX Legend:** `font-mono text-xs md:text-sm`

---

## 🎛️ Component Guidelines & Interactive States

### 1. Cards & Containers
- **Border Radius:** `rounded-2xl` (16px) for major cards, `rounded-xl` (12px) for sub-cards and badges.
- **Glassmorphism Backdrop:** `backdrop-blur-md bg-slate-900/60 border border-slate-800/80`
- **Hover Micro-Animations:** `transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5`

### 2. Buttons
- **Primary Action:** Gradient button with glow effect:
  ```css
  bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 active:scale-95 transition-all
  ```
- **Secondary / Outline:** Glass card button:
  ```css
  bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 text-slate-200 rounded-xl transition-all
  ```

### 3. Responsive Viewport Matrix
- **Mobile (`< 768px`):** Fixed bottom navigation bar (`MobileNav`), stacked single-column cards, full-width modal sheets.
- **Tablet (`768px - 1024px`):** 2-column grid, compact header, collapsible sidebar.
- **Desktop (`> 1024px`):** Permanent left navigation sidebar, 3-column dashboard grid, floating `Ctrl+K` search bar.

---

## ⚡ Accessibility & UX Polish
- **Accessible Color Contrast:** All primary text meets WCAG AA standards (contrast ratio >= 4.5:1 against `#050816`).
- **Focus Rings:** Visible focus ring on interactive buttons and inputs (`focus:ring-2 focus:ring-blue-500 focus:outline-none`).
- **Loading & Empty States:** Every list component must render clean empty state visuals and smooth skeleton loading indicators.
