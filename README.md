# 🌌 Orbit Training & Development — Electric Neon Web Platform

Welcome to the **Orbit Training & Development** website repository! This is a modern, high-performance, and visually stunning training institute web application designed with an **Electric Neon** theme. It provides an intuitive interface for students to browse courses, download syllabi, verify certificates, and contact the institute.

---

## 🎨 Design System: Electric Neon
The website features a premium, futuristic dark-mode aesthetic with high contrast and smooth micro-animations.

*   **Background:** `#000000` (Pure Black)
*   **Surface Panels:** `#0a0a0a` / `#111111` / `#1a1a1a` (Varying Dark Grays)
*   **Main Accent & Text Highlight:** `#00FFFF` (Teal/Cyan)
*   **Action & Highlight:** `#00FF00` (Bright Green)
*   **Accent Borders:** `#333333` (Dark Gray)
*   **Fonts:**
    *   `Outfit` (For headings & display text)
    *   `Nunito Sans` (For body copy)
    *   `Plus Jakarta Sans` (For tags, stats, and UI highlights)

---

## 📂 Project Architecture

```directory
/Users/bhanu/Desktop/Building_Orbit_Application/
├── index.html              # Main homepage with hero, tracks, comparison, and FAQ
├── course.html             # Dynamic course detail page (loads content via query parameters)
├── corporate.html          # Page dedicated to Corporate Training solutions
├── blog.html               # Blog / Insights page for training trends and success stories
├── contact.html            # Contact page with integrated map section and form
├── Orbit_Logo.png          # High-resolution PNG logo of Orbit IT Solutions
├── css/
│   └── style.css           # Electric Neon stylesheet containing custom variables, layouts, and animations
├── js/
│   └── main.js             # Main JavaScript logic (Navbar, FAQs, Modals, Forms, Verification)
├── data/
│   └── courses.js          # Centralized database for all 23 courses (syllabi, metadata, pricing)
└── assets/
    └── pdfs/               # Course syllabus PDF downloads
```

---

## 🌟 Core Features

### 1. Unified Navigation & Brand Identity
*   **Sticky Glassmorphism Navbar:** Stays fixed at the top with a subtle backdrop filter effect.
*   **Mega Dropdown:** Instantly view all 23 courses grouped by category under the courses menu.
*   **Mobile Optimized Menu:** Fully responsive hamburger menu that slides out on mobile screens.

### 2. Dynamic Course Detail Page (`course.html`)
*   Instead of maintaining 23 separate HTML files, a single `course.html` dynamically loads the specific course data using URL parameters (e.g., `course.html?id=data-science`).
*   **Syllabus Downloader:** Downloads the respective PDF file (e.g., `DATA SCIENCE 2025.pdf`) using a clean JavaScript download handler.
*   **Interactive Curriculum Accordion:** Neatly displays course modules and topics that expand/collapse on click.
*   **Enrollment Lead Capture Form:** Displays a custom modal popup that validates inputs and submits student details.

### 3. Comprehensive Training Program Tracks (23 Courses)
Courses are categorized into three specialized tracks inside `data/courses.js`:

*   **🖥️ Tech & Programming:**
    *   Data Science, Full Stack Python, AI & ML, Full Stack Java, Full Stack Web Development, Data Analysis, Oracle DBA, Cybersecurity, AWS, Azure, Software Testing, Digital Marketing
*   **📊 Business & Office:**
    *   MS Office, Advance Excel, Tally Prime GST, SAP FICO, Power BI, Hardware & Networking, MCSE, CCNA, Linux Admin
*   **🎨 Creative & Design:**
    *   Web Designing, Graphic Designing, Video & Audio Editing

### 4. Specialized Pages
*   **`corporate.html`:** Custom landing page highlighting group packages, on-premise/online training modes, corporate FAQs, and an inquiry form.
*   **`blog.html`:** Engaging article section featuring trends in technology, career tips, and placement reviews.
*   **`contact.html`:** Contact details, inquiry form, and location coordinates display.
*   **WhatsApp Float:** A persistent floating action button to connect users directly with Orbit support.

### 5. Certificate Verification System
*   Located on the homepage footer/section.
*   Allows students or employers to enter a certificate ID. If not found, it provides direct, friendly validation feedback.

---

## 🚀 How to Run Locally

Since the application uses standard JS modules and dynamic URL params for the course detail page, running it through a local server is recommended to prevent CORS or file protocol (`file://`) navigation issues.

### Using Python 3 (Fastest)
Run the following command in the project directory:
```bash
python3 -m http.server 3000
```
Then, open your browser and navigate to:
```url
http://localhost:3000
```

### Using Node.js (alternative)
If you have Node.js installed, you can use `npx` to serve the directory:
```bash
npx serve .
```

---

## 🛠️ Technology Stack
*   **HTML5** — Semantic markup, interactive tags.
*   **CSS3 (Vanilla)** — Custom property tokens, Flexbox/Grid layouts, and keyframe animations.
*   **JavaScript (ES6+)** — Dynamic routing, DOM manipulation, custom toast notifications, and forms handling.
# orbit_it_solutions
