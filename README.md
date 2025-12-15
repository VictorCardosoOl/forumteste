# Knowledge Base (Base de Conhecimento)

A modern, responsive knowledge base application built with **Vite** and **Vanilla JavaScript**.

## Prerequisites

- **Node.js**: Required to run the development server and build the project.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Open the URL shown in the terminal (usually `http://localhost:5173`) to view the application.

3.  **Build for production:**
    ```bash
    npm run build
    ```
    The output will be in the `dist/` directory.

## Architecture

- **Entry Point**: `index.html` loads `assets/js/main.js` as an ES Module.
- **Data**: Content is stored in `assets/js/data/modules/` as JavaScript modules and aggregated in `assets/js/data/index.js`.
- **Dependencies**: 
  - `locomotive-scroll` for smooth scrolling.
  - `fuse.js` for fuzzy search.
  - `tailwindcss` (via CDN) for styling.

## Project Structure

```
.
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── data/
│   │   │   ├── modules/    # Individual content modules
│   │   │   └── index.js    # Data aggregator
│   │   ├── main.js         # Application logic and entry point
│   │   └── sidebar.js      # Sidebar specific logic
├── index.html
├── package.json
├── vite.config.js          # (Auto-configured by Vite)
└── README.md
```
