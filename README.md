# 📊 Premium Sales & Performance Intelligence Dashboard

A state-of-the-art, high-fidelity sales analytics and team performance dashboard. Designed for premium visual aesthetics, responsive scalability, and seamless user interaction, this interface showcases complex sales metrics, team activity tracking, platform values, and revenue growth.

---

## 🚀 Key Features

### 1. **Multi-Tier Navigation System**
- **Dual-Sidebar Layout**:
  - **Primary Icon Rail**: High-density shortcut sidebar for quick access to Core panels (Home, Goals, Dashboard, Documents, Tasks, Settings).
  - **Secondary Folder Panel**: Interactive list grouping specific dashboards and reports (e.g., Shared dashboards, custom reports). Fully collapsible on desktop.
- **Mobile Responsive Drawer Switch**: A custom drag-handle toggle button that switches views on smaller viewports.

### 2. **Rich KPI & Metrics Indicators**
- **Revenue Overview Card**: Highlights total earnings ($528k+) with positive trend markers and absolute metrics. Features an inline, color-coded team progress bar mapping revenue contributions.
- **Micro-Metric Cards**: Specialized dashboard widgets for:
  - **Top Sales**: Highlights top performers (e.g., Mikasa with 72 sales).
  - **Best Deal**: Displays the highest deal size ($42,300, Rolf Inc.).
  - **Deals Volume**: Shows total deals processed with change indicators.
  - **Platform Value**: Shows absolute valuation with trend percentage.
  - **Win Rate**: Visualizes successful close rate percentages.

### 3. **Interactive Team Performance Tracker**
- **Expandable User Rows**: Clean user listing (Armin, Mikasa, Eren) displaying Sales, Revenue, Leads, KPI, and Win/Loss ratio.
- **Detailed Platform Breakdowns**: Selecting/expanding a team member exposes their custom sales attribution (Dribbble, Instagram, Google, Meta, Others).
- **Weekly Sales Dynamics Chart**: Lightweight, natural-looking SVG line chart mapping weekly progress against target baselines.
- **Visual Progress Bar**: Color-coded timeline displaying user activity.

### 4. **Advanced Platform & Referral Analytics**
- **Referrer Traffic List**: Breakdown of leads originating from creative and search platforms (Dribbble, Instagram, Behance, Google).
- **Custom Bar Charting**: Visualized deals amount using CSS-striped SVG bars.
- **Platform Deep Dive Card**: Interactive dropdown focusing on specific platforms (e.g., Dribbble), displaying monthly revenue averages, win/loss percentages, and active team member avatars.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) (Functional components, Hooks, and modern lifecycle)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Rapid UI development with utility-first classes)
- **Bundler & Build Tool**: [Vite 7](https://vite.dev/) (Fast Hot Module Replacement and production bundling)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Linting**: [ESLint](https://eslint.org/) (Strict standard configurations)

---

## 📁 Directory Structure

```text
├── public/                 # Static assets (avatars, icons, logo svg)
├── src/
│   ├── assets/             # Asset files
│   ├── components/         # Reusable dashboard widgets and panels
│   │   ├── dashboard/
│   │   │   ├── cards/      # KPI cards (Revenue, BestDeal, Deals, TopSales, Value, WinRate)
│   │   │   ├── sections/   # Core widgets (UserPerformance, PlatformList, ReferrerChart, RevenueBarChart, PlatformValueCard)
│   │   │   ├── ContentHeader.jsx
│   │   │   ├── PageHeader.jsx
│   │   │   ├── StatsCardsRow.jsx
│   │   │   └── UserMetricsBar.jsx
│   │   └── layout/
│   │       ├── Header/     # Header bar (SearchBar, AddButton, TimeframeSelector)
│   │       ├── Sidebar/    # Dual sidebars (IconSidebar, SidebarPanel, Logo, QuickLinks)
│   │       └── Layout.jsx  # Main application wrapper with layout grid logic
│   ├── App.jsx             # Main application entry layout
│   ├── main.jsx            # React client mount point
│   └── global.css          # Tailwind CSS directives & scrollbar styling
├── index.html              # HTML shell
├── tailwind.config.js      # Tailwind configurations
├── vite.config.js          # Vite plugins config
└── package.json            # Scripts and dependencies
```

---

## 💻 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install the node packages:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your web browser to view the application.

### Build and Preview

To generate a production-ready optimized bundle:
```bash
npm run build
```

To preview the production bundle locally:
```bash
npm run preview
```

### Code Quality (Linting)

To verify the code quality and locate syntax or styling issues:
```bash
npm run lint
```

---

## 📱 Responsive Configurations

The dashboard layout adjusts automatically based on the device width:
- **Desktop (>= 1024px)**: Complete 12-column grid layout displaying the double sidebar, referral channels, user metrics, performance charts, and platform values side-by-side.
- **Tablet (768px - 1023px)**: Stacks the platform list, charts, and user metrics row. Adapts paddings, font sizes, and layout gaps for high touch-target usability.
- **Mobile (< 768px)**: Collapses the folder sidebar into a single-column scroll view. Users can swap between the sidebar panel and dashboard content using the floating responsive toggle handle.
