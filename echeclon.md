# Echelon — Portfolio Case Study

## Project Overview

| | |
|---|---|
| **Project** | Echelon — Macro Investing Dashboard |
| **Role** | Full-Stack Developer & Product Designer |
| **Timeline** | January 2026 |
| **Stack** | Next.js 16, React 19, TypeScript, Tailwind CSS 4, OpenAI GPT-4o, Recharts |
| **Live URL** | [tryechelon.vercel.app](https://tryechelon.vercel.app) |
| **Source** | [github.com/maruthiram08/echelon](https://github.com/maruthiram08/echelon) |

---

## Problem Statement

Individual investors lack access to institutional-quality macro analysis tools. Existing solutions are either:
- Too expensive (Bloomberg Terminal: $24,000/year)
- Too fragmented (data scattered across 10+ sources)
- Too complex (no progressive disclosure for varying expertise levels)

---

## Solution

Built **Echelon**, a real-time macro intelligence platform featuring:

### 1. Live Data Pipeline
- Integrated FRED API, Alpha Vantage, and NSE India feeds
- 20+ global macro indicators with status-based coloring
- Automatic signal classification (Favorable/Neutral/Caution/Alert)

### 2. AI-Powered Analysis
- GPT-4o integration for institutional-grade commentary
- Structured JSON output with regime detection
- Dual-layer summaries (Pro + Simple) for progressive disclosure

### 3. Correlation Engine
- 12+ strategic correlation pairs with 60-day rolling windows
- Trend detection (Strengthening/Weakening/Stable)
- Regime Matrix visualization (Liquidity vs Stress scatter plot)

### 4. Progressive UX
- Three-tier interface: Simple | Standard | Pro
- Bento Grid layout for scannable data density
- India-specific context with Quick Links to primary sources

---

## Technical Highlights

### Architecture
```
┌─────────────────────────────────────────┐
│            ECHELON FRONTEND             │
│  (Next.js App Router + React Server)    │
├─────────────────────────────────────────┤
│     API Routes (Serverless Functions)   │
│  /api/fred  /api/market  /api/analysis  │
├─────────────────────────────────────────┤
│           EXTERNAL SERVICES             │
│   FRED API │ Alpha Vantage │ OpenAI     │
└─────────────────────────────────────────┘
```

### Key Implementation Details
- **Server Components**: Data fetching on server for faster TTFB
- **SWR**: Client-side caching with stale-while-revalidate
- **Structured AI Output**: JSON schema enforcement for reliable parsing
- **Lazy OpenAI Instantiation**: Build-time compatibility for Vercel

---

## Impact & Metrics

- **20+ indicators** tracked in real-time
- **4 macro pillars** organized for quick scanning
- **~3s** AI insight generation time
- **3-tier disclosure** accommodating beginner to expert users

---

## Skills Demonstrated

| Category | Skills |
|----------|--------|
| **Frontend** | React 19, Next.js 16 App Router, TypeScript, Tailwind CSS 4 |
| **Backend** | Node.js API Routes, RESTful design, Error handling |
| **AI/ML** | Prompt engineering, Structured output, GPT-4o integration |
| **Data Viz** | Recharts, Scatter plots, Dual-axis charts |
| **DevOps** | Vercel deployment, Environment management, CI/CD |
| **Product** | Progressive disclosure UX, Information architecture |

---

## Screenshots

### Global Snapshot (Bento Grid)
*4-column layout showing 20+ indicators across macro pillars*

### Global Insights (AI Analysis)
*Regime Compass + AI-generated strategic commentary*

### Indian Snapshot
*Domestic indices + Quick Links to official sources*

---

## Future Roadmap

- [ ] Daily "What Changed" strip
- [ ] Regime history replay ("Last time we were here...")
- [ ] Jargon micro-tooltips (one-line definitions)
- [ ] Auto-graduating "Learning Mode"

---

## Links

- **Live**: https://tryechelon.vercel.app
- **GitHub**: https://github.com/maruthiram08/echelon
- **Documentation**: See README.md, ARCHITECTURE.md, FIRST_TIME_USER_GUIDE.md
