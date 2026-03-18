# 🚀 Cyber Portfolio - Modern Brutalist Experience

A high-performance, visually striking portfolio website built with **React 18**, **TypeScript**, and **Vite**. This project features a unique "Cyber-Brutalist" aesthetic with high-contrast interfaces, fluid Framer Motion animations, and a neon-green accent system.

## ✨ Key Features

- **🎯 Brutalist Design** - Bold typography, high contrast, and raw layout structures.
- **⚡ Blazing Fast** - Powered by Vite for near-instant HMR and optimized production builds.
- **🎭 Fluid Animations** - Smooth scroll reveals and micro-interactions using Framer Motion.
- **📱 Fully Responsive** - Tailored experiences for mobile, tablet, and desktop.
- **🛠️ Component-Driven** - Built with shadcn/ui for accessible and customizable components.
- **🎨 Dynamic Backgrounds** - Custom animated glow backgrounds and noise overlays.
- **🔒 Type Safe** - Written in TypeScript for better developer experience and fewer bugs.
- **🧪 Testing Ready** - Pre-configured with Vitest for unit testing and Playwright for E2E.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18, TypeScript, React Router 6 |
| **Styling** | Tailwind CSS, Lucide React (Icons), shadcn/ui |
| **Animation** | Framer Motion |
| **Build Tool** | Vite, PostCSS, Autoprefixer |
| **State/Data** | TanStack Query (React Query), Zod |
| **Testing** | Vitest, React Testing Library, Playwright |

---

## 🏁 Getting Started

### 📋 Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher)
- **npm** (comes with Node) or **yarn**

### 📥 Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Draftgamz/test.git
    cd test
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Copy the example environment file and fill in your keys:
    ```bash
    cp .env.example .env
    ```
    *Note: Edit `.env` to include your `GEMINI_API_KEY` and `APP_URL` if you plan to use AI features.*

4.  **Start Developing**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```text
.
├── components/          # shadcn/ui generated components
├── src/
│   ├── assets/          # Images, fonts, and static media
│   ├── components/      # Reusable UI components (Navbar, Footer, etc.)
│   │   └── ui/          # Low-level UI primitives (shadcn)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and animation variants
│   ├── pages/           # Page-level components (Routes)
│   ├── test/            # Test setup and example tests
│   ├── App.tsx          # Root component & Router config
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles & Tailwind directives
├── public/              # Static assets served from root
├── components.json      # shadcn/ui configuration
├── tailwind.config.ts   # Tailwind CSS theme & plugin config
└── vite.config.ts       # Vite build configuration
```

---

## 🔧 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Compiles the project for production into `dist/`. |
| `npm run preview` | Serves the production build locally for testing. |
| `npm run lint` | Runs ESLint to find and fix code style issues. |
| `npm run test` | Runs unit tests using Vitest. |
| `npm run test:watch` | Runs Vitest in watch mode. |

---

## 📖 Usage Guide

### ➕ Adding New Components
This project uses **shadcn/ui**. To add a new component (e.g., a Dialog):
```bash
npx shadcn-ui@latest add dialog
```
The component will be added to `src/components/ui/`.

### 📄 Creating New Pages
1. Create a new file in `src/pages/` (e.g., `Services.tsx`).
2. Add a new route in `src/App.tsx`:
   ```tsx
   <Route path="/services" element={<Services />} />
   ```

### 🎨 Customizing Theme
Colors and fonts are defined in `tailwind.config.ts` and `src/index.css`. Look for the `:root` and `.dark` classes in `index.css` to modify the HSL color variables.

---

## ⚠️ Common Problems & Troubleshooting

### 1. `Module not found: Error: Can't resolve '@/...'`
This project uses TypeScript path aliases. Ensure your IDE recognizes the `tsconfig.json` paths. If the build fails, verify `vite.config.ts` has the `resolve.alias` configured correctly.

### 2. Styles not updating
Tailwind CSS relies on scanning your files. If you add a new directory for components, ensure it's included in the `content` array of `tailwind.config.ts`.

### 3. Hydration Errors (if using SSR)
While this is a client-side Vite app, if you move to a framework like Next.js later, ensure your Framer Motion animations only run on the client by using `useEffect` or checking `typeof window`.

### 4. Dependencies conflict
If you encounter issues with `npm install`, try:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🚀 Deployment

### Vercel / Netlify
These platforms will automatically detect the Vite config. 
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### GitHub Pages
1. Update `base` in `vite.config.ts` to `'/your-repo-name/'`.
2. Run `npm run build`.
3. Deploy the `dist` folder.

---

## 🤝 Contributing

Contributions are welcome!
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

## 👤 Author

**Draft**
- GitHub: [@Draftgamz](https://github.com/Draftgamz)

---

<p align="center">
  Built with 💚 and Brutalism.
</p>
