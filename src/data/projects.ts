import { Project } from '../types';

export const PROJECTS: Project[] = [
    {
        id: 'echelon',
        title: 'Echelon',
        category: 'MACRO INVESTING',
        description: 'Real-time macro intelligence platform with 20+ global indicators, AI-powered regime analysis, and correlation engine for institutional-grade investing insights.',
        tags: ['Next.js 16', 'GPT-4o', 'FRED API'],
        imageUrl: '/echelon-thumbnail.png',
        link: 'https://tryechelon.vercel.app',
        github: 'https://github.com/maruthiram08/echelon',
        // Detailed Content
        role: 'Solo Founder & Full Stack Developer',
        challenge: 'Institutional-grade macro analysis is often locked behind expensive terminals (Bloomberg) or scattered across fragmented public data sources (FRED, pivotals). Retail investors lack a unified "Cockpit" to visualize regime changes, correlations, and liquidity cycles in real-time.',
        solution: 'Echelon is a **Macro Intelligence Engine** that democratizes hedge-fund style analysis. It aggregates 20+ critical economic indicators (Liquidity, Inflation, Growth) and uses an LLM layer to synthesize data into actionable "Market Regime" narratives (e.g., "Reflationary Growth").',
        techStack: ['Next.js 16', 'Python', 'FRED API', 'GPT-4o', 'Recharts'],
        features: [
            '**Global Liquidity Gauge:** Real-time tracking of Fed Net Liquidity vs. S&P 500 correlation.',
            '**Regime Identification:** AI-driven classification of current market conditions (Goldilocks vs. Stagflation).',
            '**Correlation Engine:** Dynamic heatmaps showing instant cross-asset relationships (Bitcoin vs. Gold vs. DXY).',
            '**Smart Charting:** Interactive visualizations of yield curves and credit spreads overlaying recession probabilities.'
        ],
        impact: [
            'Unified 5 distinct economic data pipelines into a single dashboard.',
            'Reduced analysis time for macro-trends from hours to seconds.',
            'Currently in beta testing with a closed group of quantitative traders.'
        ]
    },
    {
        id: 'leo',
        title: 'Leo',
        category: 'AMBIENT MEMORY',
        description: 'Your second brain for the web—an AI-powered browser companion that captures, enriches, and intelligently resurfaces content with semantic search and zero friction.',
        tags: ['Next.js 15', 'pgvector', 'Chrome Ext'],
        imageUrl: '/leo-thumbnail.png',
        link: 'https://leo-brain.vercel.app',
        github: 'https://github.com/maruthiram08/leo-brain',
        // Detailed Content
        role: 'Product Engineer',
        challenge: 'We consume massive amounts of information daily, but retention is near zero. Bookmarks are graveyards; history is noisy. Users need a "Second Brain" that works passively—capturing context without requiring active filing or tagging.',
        solution: 'Leo is an **Ambient Memory Engine**. It lives in the browser, passively capturing the semantic meaning of pages you dwell on. It uses vector embeddings to create a searchable "knowledge graph" of your browsing history, allowing you to ask natural language questions like "What article did I read about sparse autoencoders last week?"',
        techStack: ['Next.js 15', 'Chrome Extension API', 'pgvector', 'OpenAI Embeddings'],
        features: [
            '**Passive Ingestion:** Chrome extension auto-vectorizes content after 30s of active reading time.',
            '**Semantic Recall:** "Chat with your History" interface (RAG) to retrieve specific paragraphs or concepts.',
            '**Context Clustering:** Automatically groups related readings (e.g., "AI Safety Papers") into dynamic collections.',
            '**Privacy First:** Local-first processing option for sensitive data.'
        ],
        impact: [
            'Successfully indexing 1000+ pages per user with <50ms query latency.',
            'Solves the "tab fatigue" problem by allowing users to close tabs confidently, knowing they can "recall" them instantly.'
        ]
    },
    {
        id: 'tattva',
        title: 'Tattva',
        category: 'AI / RAG SCHOLAR',
        description: "An intelligent RAG application providing scholarly insights into Valmiki's Ramayana, processing 23k+ shlokas via semantic search.",
        tags: ['Pinecone', 'GPT-4o', 'Cohere'],
        imageUrl: '/tattva-thumbnail.png',
        link: 'https://tattva-app.vercel.app',
        github: 'https://github.com/maruthiram08/tattva-app',
        // Detailed Content
        role: 'Product Creator',
        challenge: 'Ancient texts like the Ramayana are vast (24,000 verses) and often inaccessible due to language barriers or lack of contextual search. Keyword search fails to capture the philosophical nuance requested by scholars and students (e.g., "Show me Dharma in times of war").',
        solution: 'Tattva is a **Semantic Scholar Interface** for the Valmiki Ramayana. It ingests the Sanskrit verses, translations, and purports into a vector database. It uses a specialized RAG pipeline to answer complex philosophical queries with citation-backed accuracy.',
        techStack: ['Pinecone', 'GPT-4o', 'Cohere Rerank', 'Python'],
        features: [
            '**Verse-Level Citations:** Every AI answer links directly to the specific Shloka (Chapter, Canto, Verse).',
            '**Dual-Language Processing:** Understands queries in English and Sanskrit/Hindi contexts.',
            '**Conceptual Search:** Maps abstract concepts (Dharma, Karma, Duty) to concrete narrative instances.'
        ],
        impact: [
            'Processed 23,402+ shlokas into a high-dimensional vector space.',
            'Achieved high fidelity in "Hallucination Checks" by enforcing strict retrieval constraints.',
            'Used by students for comparative mythology studies.'
        ]
    },
    {
        id: 'klyx',
        title: 'Klyx',
        category: 'STOCK ANALYSIS',
        description: 'Comprehensive financial platform for Indian markets with preset strategies like Golden Crossover and debt optimization.',
        tags: ['Next.js', 'Flask', 'Python'],
        imageUrl: '/klyx-thumbnail.png',
        link: 'https://projectklyx.vercel.app',
        github: 'https://github.com/maruthiram08/klyx-new',
        // Detailed Content
        role: 'Full Stack Developer',
        challenge: 'Retail stock screeners are often binary (Pass/Fail) or purely technical. Investors need a tool that combines Technical indicators (RSI, MA) with Fundamental filters in a flexible, strategy-based manner tailored for the Indian Markets (NSE/BSE).',
        solution: 'Klyx is a **Strategy-First Screener**. Instead of just listing stocks, it filters for "Setups". It runs background workers to calculate compute-heavy indicators (like Golden Crossovers) across the Nifty 500 and presents high-probability trade setups.',
        techStack: ['Next.js', 'Flask', 'Python', 'yfinance', 'Pandas'],
        features: [
            '**Golden Crossover Scanner:** Real-time alerts when 50 DMA crosses 200 DMA.',
            '**Debt Optimization Screen:** Filters companies reducing debt QoQ while increasing free cash flow.',
            '**Visual Fundamentals:** Quick-glance cards for P/E ratios and sector comparisons.'
        ],
        impact: [
            'Automates the weekend analysis routine for swing traders.',
            'Processes 500+ scrips daily with Python-based calculation engine.'
        ]
    },
    {
        id: 'zennity',
        title: 'Zennity',
        category: 'MOBILE APP',
        description: 'A credit card reward maximizer helping users stack offers and hit spending goals through intelligent tracking.',
        tags: ['React Native', 'TypeScript'],
        imageUrl: '/zennity-thumbnail.png',
        link: 'https://zennitycreditcardsapp.vercel.app',
        github: 'https://github.com/maruthiram08/zennityapp',
        // Detailed Content
        role: 'Mobile Developer (React Native)',
        challenge: 'Credit card rewards are complex. Users lose massive value by using the specific card for the wrong category (e.g., using a Travel card for Dining) or missing milestone spend goals (e.g., "Spend 1L to get 10k points").',
        solution: 'Zennity is a **Reward Maximization Assistant**. It tracks your card portfolio and tells you exactly which card to use for a specific transaction. It also gamifies spend milestones, tracking progress bars toward annual fee waivers or bonus points.',
        techStack: ['React Native', 'TypeScript', 'Expo'],
        features: [
            '**"Which Card?" Utility:** Quick selector for transaction category -> Best Card Recommendation.',
            '**Milestone Tracker:** Visual progress bars for quarterly/annual spend targets.',
            '**Offer Stacking:** Identifies overlaps between merchant offers and card rewards.'
        ],
        impact: [
            'Helps users extract ~2-3% additional value from existing spend.',
            'Reduces cognitive load at the point of sale.'
        ]
    },
    {
        id: 'momento',
        title: 'Momento',
        category: 'GEOLOCATION APP',
        description: 'A social experience where memories are bound to geography—unlocked only when users visit specific physical coordinates.',
        tags: ['React Native', 'Geo-API'],
        imageUrl: '/momento-thumbnail.png',
        link: 'https://heymomento.com',
        github: 'https://github.com/maruthiram08/heymomento',
        // Detailed Content
        role: 'Product Designer & Dev',
        challenge: 'Social media is detached from physical reality. Memories posted on Instagram are consumed anywhere, losing the "Soul of the Place". We wanted to bring the magic of "being there" back to digital memories.',
        solution: 'Momento is a **Geo-Locked Social Network**. You can leave digital "Time Capsules" at physical locations. These capsules remain locked and invisible to others until they physically visit that exact GPS coordinate.',
        techStack: ['React Native', 'Mapbox/Google Maps API', 'Firebase'],
        features: [
            '**Geo-Fencing:** Content unlocks only within a 50m radius of the drop zone.',
            '**Augmented Discovery:** Map interface showing "Locked Memories" nearby waiting to be discovered.',
            '**Shared History:** Collaborative capsules where friends contribute to a specific location\'s timeline.'
        ],
        impact: [
            'Gamifies urban exploration and travel.',
            'Creates a "Treasure Hunt" mechanic for social sharing.'
        ]
    }
];
