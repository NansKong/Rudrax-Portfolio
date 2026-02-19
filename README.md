# 3D Portfolio Website

A premium 3D portfolio website built with React 18, Vite, TypeScript, Tailwind CSS, and Three.js (@react-three/fiber).

## Features

- **Premium Design**: Dark, minimal, high-end aesthetic with glassmorphism effects
- **ReactBits Components**: Locally maintained UI components following ReactBits design patterns
- **3D Integration**: Immersive Three.js backgrounds via @react-three/fiber
- **Optimized Performance**: Lazy loading, code splitting, 60 FPS target
- **Responsive**: Mobile-first design with breakpoint hooks
- **Smooth Animations**: Framer Motion and CSS animations
- **Accessibility**: Built with Radix UI primitives where needed

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom utilities
- **3D Graphics**: Three.js + @react-three/fiber + @react-three/drei
- **Animation**: Framer Motion
- **UI Primitives**: Radix UI

## Project Structure

```
src/
├── components/
│   ├── ui/              # ReactBits-style UI components
│   ├── layout/          # Layout components
│   └── three/           # 3D components (inside Canvas only)
├── scenes/              # Complete 3D scenes
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── types/               # TypeScript definitions
└── styles/              # Global styles
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Architecture Principles

### Strict UI/3D Separation
- **3D Layer**: Fixed position backgrounds (`z-index: 0`), rendered inside `<Canvas />`
- **UI Layer**: Scrollable content overlay (`z-index: 10+`), standard React components
- **Never**: Put ReactBits components inside `<Canvas />` or Three.js components outside

### Performance Optimization
- Lazy load 3D scenes with React Suspense
- Code splitting for Three.js bundles
- Performance monitoring hooks
- Target 60 FPS on mid-range devices

### Component Design
- Follow ReactBits visual and structural conventions
- Use Tailwind CSS for styling
- Leverage Radix UI for accessible primitives
- Maintain local components for full customization

## Next Steps

Upload your 3D assets (backgrounds, animations, models) and integrate them into the scenes directory. The current `HeroScene` component is a placeholder ready to be replaced with your custom Three.js components.

## License

MIT
