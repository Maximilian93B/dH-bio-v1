# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 personal portfolio website for David Hanegraaf, a global finance and sustainability leader. The site showcases his professional experience, expertise in sustainable investments, and technology innovation leadership.

## Common Development Commands

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run ESLint

# Testing
# No test framework configured - add tests as needed
```

## Architecture & Key Components

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom grid animations
- **Animations**: Framer Motion for smooth transitions and viewport-triggered animations
- **Icons**: Lucide React
- **Fonts**: Geist Sans and Geist Mono from next/font/google
- **TypeScript**: Full TypeScript support

### Project Structure
```
src/
├── app/
│   ├── layout.tsx    # Root layout with SEO metadata and font configuration
│   ├── page.tsx      # Main page with GridBackground and ViewportSection components
│   └── globals.css   # Global styles
├── components/       # Reusable UI components
│   ├── Hero.tsx      # Landing hero with animated title transitions
│   ├── About.tsx     # Professional information sections
│   ├── Timeline.tsx  # Career timeline component
│   ├── ImageComponent.tsx # Full-screen image sections
│   ├── MediaPec.tsx  # Media recognition component
│   ├── FeaturedArticles.tsx # Articles showcase
│   └── Footer.tsx    # Site footer
└── utils/
    └── david.md      # Professional biography and career details
```

### Key Architectural Patterns

#### ViewportSection Pattern
The main page uses a `ViewportSection` wrapper component that:
- Uses Framer Motion's `useInView` hook to trigger animations when components enter viewport
- Passes `isInView` prop to child components for conditional animations
- Provides consistent spacing and responsive padding

#### GridBackground Component
Complex animated background featuring:
- Responsive CSS Grid that adapts to screen size (500-1000 items)
- Dynamic active nodes that highlight randomly every 3 seconds
- SVG connection lines between active nodes with gradient effects
- Performance optimized for mobile devices

#### Component Animation Strategy
- Most components accept an optional `isInView` prop for viewport-triggered animations
- Uses Framer Motion for smooth entrance animations with staggered timing
- Consistent animation delays (0.2s base + 0.1s per item for staggered effects)

### SEO & Metadata Configuration
Comprehensive SEO setup in `layout.tsx`:
- Open Graph and Twitter card metadata
- Structured data (JSON-LD) for person schema
- Keywords targeting global finance and sustainability
- Optimized for professional profile discovery

### Content Management
Professional content is stored in `src/utils/david.md` and imported into components. This separation allows for easy content updates without touching component logic.

## Development Notes

### Responsive Design
- Mobile-first approach with Tailwind responsive utilities
- Grid background adapts item count based on screen size
- Text scales appropriately across breakpoints (sm:, md:, lg:)

### Performance Considerations
- Uses `next/image` for optimized image loading
- GridBackground component includes mobile performance optimizations
- Framer Motion animations use `once: true` to prevent re-triggering on scroll

### Code Style Conventions
- TypeScript interfaces for component props
- Functional components with React.FC typing
- Consistent use of Tailwind utility classes
- Framer Motion variants for complex animations
- JSX className formatting with logical groupings

## Content Updates
- Professional information is centralized in `src/utils/david.md`
- Images are stored in `public/` directory
- Update metadata in `layout.tsx` for SEO changes
- Component content can be modified directly in respective files