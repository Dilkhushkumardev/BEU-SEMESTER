# 🏗️ System Architecture & Engineering Design

## 🌐 High-Level System Overview
Semester Point is built as a modern, high-performance Single Page Application (SPA) designed for instant client-side navigation, zero-latency search, and resilient offline-capable state.

```
┌────────────────────────────────────────────────────────────────────────┐
│                              CLIENT BROWSER                            │
│                                                                        │
│  ┌──────────────────┐  ┌────────────────────┐  ┌────────────────────┐  │
│  │  React 19 Views  │  │  Global Search     │  │  KaTeX Math Engine │  │
│  │  & Layout Shell  │  │  (Ctrl + K Modal)  │  │  (Formula Sheet)   │  │
│  └────────┬─────────┘  └─────────┬──────────┘  └─────────┬──────────┘  │
│           │                      │                       │             │
│  ┌────────▼──────────────────────▼───────────────────────▼──────────┐  │
│  │                    REACT CONTEXT STATE ENGINE                    │  │
│  │   • BookmarkContext    • ProgressContext    • SearchContext      │  │
│  └───────────────────────────────┬──────────────────────────────────┘  │
│                                  │                                     │
│  ┌───────────────────────────────▼──────────────────────────────────┐  │
│  │                  TYPED SYLLABUS & CURRICULUM DATA                │  │
│  │   • 7 Theory Subjects  • 45 Labs  • Formulas  • University PYQs  │  │
│  └───────────────────────────────┬──────────────────────────────────┘  │
│                                  │                                     │
│  ┌───────────────────────────────▼──────────────────────────────────┐  │
│  │                     LOCAL STORAGE ENGINE                         │  │
│  │   • semester_point_bookmarks  • semester_point_progress          │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Technology Stack

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **UI Library** | React 19.x | Modern functional components, hooks, high concurrency rendering. |
| **Language** | TypeScript 6.x | Strict compile-time type safety across syllabus datasets and UI props. |
| **Build Tool** | Vite 8.x | Sub-second HMR and optimized production bundling. |
| **Styling** | Tailwind CSS 4.x + PostCSS | Utility-first styling with custom dark theme design tokens and glowing accents. |
| **Math Renderer** | KaTeX 0.18.x | High-speed, TeX-compliant math equation rendering without runtime overhead. |
| **Icons** | Lucide React | Clean, tree-shakeable SVG icon collection. |
| **Linter / QA** | Oxlint + TypeScript Compiler | Ultra-fast static analysis and zero-cost type checking. |

---

## 📂 Project Directory Structure

```
semester-point/
│
├── docs/                      # Architectural & product documentation
│   ├── PRD.md                 # Product Requirements Document
│   ├── ARCHITECTURE.md        # Technical architecture (this file)
│   ├── DESIGN.md              # Design system tokens and UI specs
│   ├── RULES.md               # AI and developer coding guidelines
│   ├── TASKS.md               # Phased development roadmap
│   ├── DECISIONS.md           # Architecture Decision Records (ADRs)
│   ├── MEMORY.md              # Current project memory and status
│   ├── TEST_PLAN.md           # Verification checklist and test matrices
│   └── SECURITY.md            # Security posture and data handling
│
├── .cursor/                   # IDE rule specifications
│   └── rules/
│       ├── general.mdc
│       ├── frontend.mdc
│       └── testing.mdc
│
├── public/                    # Static assets & favicon
│
├── src/
│   ├── assets/                # Images, illustrations, and static icons
│   ├── components/            # Reusable UI component library
│   │   ├── ai/                # AI Explainer & concept summary widgets
│   │   ├── layout/            # Navbar, Sidebar, MobileNav, Footer, PageContainer
│   │   ├── math/              # MathView KaTeX wrapper & FormulaCard
│   │   ├── search/            # SearchModal (Global Ctrl+K)
│   │   └── visual/            # SVG diagrams & interactive visual engines
│   │
│   ├── context/               # React Context providers for global state
│   │   ├── BookmarkContext.tsx
│   │   ├── ProgressContext.tsx
│   │   └── SearchContext.tsx
│   │
│   ├── data/                  # Strongly typed BEU curriculum datasets
│   │   ├── formulas/          # Mathematical formula dictionaries
│   │   ├── syllabus/          # Individual subject & lab module data
│   │   └── index.ts           # Central export point for all data
│   │
│   ├── pages/                 # Route-level page components
│   │   ├── HomePage.tsx
│   │   ├── SubjectsPage.tsx
│   │   ├── SubjectDetailPage.tsx
│   │   ├── TopicDetailPage.tsx
│   │   ├── LabsPage.tsx
│   │   ├── LabDetailPage.tsx
│   │   ├── FormulaSheetPage.tsx
│   │   ├── QuickRevisionPage.tsx
│   │   ├── BookmarksPage.tsx
│   │   ├── DashboardPage.tsx
│   │   └── SettingsPage.tsx
│   │
│   ├── types/                 # Global TypeScript interfaces and types
│   │   ├── syllabus.ts
│   │   └── index.ts
│   │
│   ├── App.tsx                # Client-side router & provider shell
│   ├── index.css              # Tailwind CSS imports & custom utility classes
│   └── main.tsx               # DOM entry point
│
├── .env.example               # Environment variables template
├── package.json               # Project manifest and scripts
├── tailwind.config.js         # Tailwind configuration
└── vite.config.ts             # Vite build configuration
```

---

## 🏛️ Architectural Principles

1. **Local-First Reliability:** The platform requires no mandatory backend to browse syllabus data, formulas, or lab manuals. All student state is saved in `localStorage` with defensive fallbacks.
2. **Strict Type Safety:** Every syllabus topic, unit, formula, and lab manual adheres to strict interfaces defined in `src/types/syllabus.ts`.
3. **Component Separation:**
   - **Page Components (`src/pages`)**: Coordinate layout, read route state, and connect to contexts.
   - **Presentational Components (`src/components`)**: Pure, reusable, and strictly styled via `DESIGN.md` guidelines.
   - **Data Modules (`src/data`)**: Immutable static curriculum datasets.
4. **Performance by Default:** Zero unnecessary re-renders via memoization where appropriate, lightweight SVG diagrams instead of heavy bitmaps, and deferred KaTeX rendering.
