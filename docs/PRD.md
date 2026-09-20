# 📋 Product Requirements Document (PRD)

## 📌 Product Overview
- **Product Name:** Semester Point — BEU Learning Companion
- **Version:** 1.0.0 (Production Ready)
- **Target University:** Bihar Engineering University (BEU), Patna
- **Target Audience:** B.Tech 1st Semester Engineering Students (CSE, AI/ML, Data Science, ECE, EE, Mechanical, Civil & Group-A / Group-B branches).

---

## 🎯 Problem Statement
B.Tech first-year engineering students under BEU face several learning hurdles:
1. Fragmented syllabus notes and outdated PDFs scattered across unofficial groups.
2. Lack of step-by-step mathematical breakdowns for foundational engineering math & physics formulas.
3. Inadequate practical lab manuals with aim, circuit diagrams, step-by-step procedures, and viva exam preparation.
4. Difficulty tracking personal revision progress and exam-relevant university questions.

---

## 🚀 Product Goal
To build a lightning-fast, visually stunning, local-first web companion that consolidates the entire BEU 1st Semester curriculum into structured, 10-section conceptual deep-dives, interactive formula banks, 45 practical lab experiments, and an AI visual explainer.

---

## 🧩 Core Feature Matrix

| Feature Module | Description | Status |
| :--- | :--- | :--- |
| **Syllabus & Theory Hub** | 7 core theory subjects across 35 units and 56 topics aligned with BEU 2026–2030 syllabus. | ✅ Completed |
| **10-Section Topic Engine** | Standardized pedagogical learning structure for all topics (Definitions, Formulations, Numericals, Traps, Exam Focus, AI Visuals). | ✅ Completed |
| **Interactive Formula Bank** | Live rendered KaTeX equations, variable legends, and one-click LaTeX code copying. | ✅ Completed |
| **45 Practical Lab Manuals** | Physics Lab, BEEE Lab, and Programming for Problem Solving (PPS C/C++) Lab with Viva Q&A. | ✅ Completed |
| **Global Instant Search (`Ctrl+K`)**| Fast modal search across all subjects, topics, formulas, and experiments. | ✅ Completed |
| **Progress & Bookmarks Engine** | Local-first tracking of completed topics, reading history, and saved bookmarks. | ✅ Completed |
| **Quick Revision & Formula Cheat Sheets** | High-yield flash summaries designed for pre-exam cramming. | ✅ Completed |

---

## 📐 The 10-Section Topic Blueprint
Every theory topic follows a strict learning architecture:
1. **Quick Definition:** High-yield core summary.
2. **Why It Matters:** Real-world industrial & engineering relevance.
3. **Core Theory & Deep Concepts:** Step-by-step conceptual breakdown.
4. **Mathematical Formulations:** Live rendered KaTeX equations with parameter legends.
5. **Solved Numerical Examples:** BEU semester-style step-by-step solutions.
6. **Engineering Applications:** Practical applications in modern technology.
7. **Common Student Traps:** Top conceptual pitfalls and exam mistakes.
8. **Quick Revision Points:** Bulleted memory hooks for rapid recall.
9. **BEU University Exam Focus:** High-probability exam questions & Course Outcomes (CO).
10. **Interactive AI Explainer & Visuals:** Flowcharts, circuit SVG diagrams, and interactive simulators.

---

## 🛡️ Scope Definition

### ✅ In Scope (MVP & Version 1.0)
- Complete offline-capable static client with zero mandatory backend dependencies.
- Full 1st semester theory and practical laboratory curriculum for BEU.
- Dark-mode first sleek glassmorphism user interface.
- LocalStorage state persistence for bookmarks and progress.
- Keyboard shortcuts (`Ctrl/Cmd + K` search, responsive sidebar navigation).

### ❌ Out of Scope (Current Release)
- Cloud user authentication (Email/Password or OAuth) — *Local storage prioritized for instant zero-login access*.
- Paid subscriptions and payment gateways.
- Student community chat or social feed.
- Native mobile app (Android APK / iOS app) — *Handled via responsive PWA-ready web client*.

---

## 📊 Success Metrics
1. **Fast Page Loads:** LCP < 1.2s on standard 4G mobile connections.
2. **Comprehensive Coverage:** 100% of BEU 1st semester subjects covered with verified curriculum topics.
3. **Search Latency:** Instant `< 50ms` real-time search filtering across full catalog.
4. **Zero-Error Experience:** 100% type-safe compilation with TypeScript and Oxlint validation.
