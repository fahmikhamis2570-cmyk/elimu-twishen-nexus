# Implementation Plan - Elimu Plus Twishen Centre Website

Build a professional, responsive, blue-and-white themed website for Elimu Plus Twishen Centre. The project includes a wide range of informational pages, functional forms for registration, and various login portals.

## Scope Summary
- **Theme:** Blue and White (Modern & Attractive).
- **Core Pages:** Home, About Us, Courses, Gallery, Events, Contact Us.
- **Portals (Frontend Shells):** Student Login/Registration, Parent Login, Teacher Login.
- **Academic Features:** Online Results (view), Timetable (view).
- **Communication:** WhatsApp Chat integration, Google Maps integration.
- **Responsibility:** Fully responsive design (Mobile/Desktop), App-ready layout.

## Non-Goals
- Real backend authentication or database persistence (Local storage or mocks only).
- Real-time result processing or automated timetable generation.
- Publishing to Google Play Store (App-readiness only).

## Assumptions
- The logo provided (1774945238001.png) will be used as the primary branding asset.
- Logins will be simulated/mocked for demonstration.
- "Easy to convert to Android app" implies using a PWA-friendly layout or standard mobile-first web practices.

## Affected Areas
- **UI Components:** Navigation (Mobile-first), Hero section, Cards for Courses/Events, Contact Forms.
- **Routing:** React Router for multiple pages.
- **State:** Basic client-side state for form handling and mock logins.

## Ordered Phases

### Phase 1: Foundation & Theme
- Configure Tailwind colors for the blue/white theme.
- Set up React Router and basic page structure.
- **Owner:** frontend_engineer

### Phase 2: Navigation & Branding
- Create the Header/Navbar with the provided logo.
- Implement the mobile-responsive drawer/menu.
- Add the sticky WhatsApp Chat button.
- **Owner:** frontend_engineer

### Phase 3: Core Informational Pages
- Home: Hero section, overview, featured courses.
- About Us: History, mission, vision.
- Courses: Grid layout of available programs.
- Gallery & Events: Image grids and event cards.
- **Owner:** frontend_engineer

### Phase 4: Forms & Portals
- Student Registration: Comprehensive form.
- Unified/Separate Login pages: Student, Parent, Teacher.
- Contact Us: Form + Google Maps embed.
- **Owner:** frontend_engineer

### Phase 5: Academic Views
- Online Results: Search/View interface (mock data).
- Timetable: Weekly schedule display.
- **Owner:** frontend_engineer

### Phase 6: Refinement & Mobile Optimization
- Ensure accessibility.
- Polish animations and transitions.
- Final responsive check for "app-like" feel.
- **Owner:** quick_fix_engineer

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Setup theme, routing, and all main pages/forms.
2. quick_fix_engineer — Final polish, responsive tweaks, and asset checking.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1, 2, 3, 4, 5
- **Scope:** 
    - Initialize routing in `App.tsx`.
    - Set up Tailwind theme in `index.css` or `tailwind.config.js` (if applicable) using shades of Blue and White.
    - Create a reusable `Layout` component with the Header (Logo: `https://storage.googleapis.com/dala-prod-public-storage/attachments/b2d8b08c-0bc9-4dfd-83e8-a075230b6617/1782621648513_1774945238001.png`) and Footer.
    - Implement all pages: Home, About, Courses, Registration, Logins, Results, Timetable, Gallery, Events, Contact.
    - Use `lucide-react` for icons and `framer-motion` for subtle animations.
    - Integrate a WhatsApp bubble (links to `https://wa.me/...`).
- **Files:** `src/App.tsx`, `src/components/*`, `src/pages/*`, `src/index.css`.
- **Depends on:** none
- **Acceptance criteria:** All 11+ routes work; UI matches blue/white theme; logo is visible; forms are present and interactive.

### 2. quick_fix_engineer
- **Phases:** 6
- **Scope:** 
    - Review mobile responsiveness specifically for small screens (360px width).
    - Ensure Google Maps embed is responsive and styled.
    - Fix any overlapping text or minor alignment issues.
    - Ensure all links (even if internal/mock) feel "app-like" with smooth transitions.
- **Files:** `src/index.css`, `src/components/Header.tsx`, `src/pages/Contact.tsx`.
- **Depends on:** frontend_engineer
- **Acceptance criteria:** No layout breaks on mobile; maps are centered; buttons have clear touch targets.
