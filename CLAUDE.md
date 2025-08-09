# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 personal music website for JoseF. It's a single-page application showcasing the artist's repertoire with audio playback functionality and song lyrics. The site is configured for static export deployment.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build the application for production (static export)
- `npm run start` - Start production server 
- `npm run lint` - Run ESLint

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom band colors (band-green: #166C21, band-green-dark: #09260d)
- **TypeScript**: Full TypeScript support with strict mode
- **Content**: MDX support configured for markdown processing
- **Fonts**: Self-hosted Roboto font family
- **Code formatting**: Prettier with Tailwind plugin, no semicolons

## Architecture Notes

### Static Export Configuration
The app is configured for static export (`output: "export"` in next.config.mjs) suitable for hosting on static file servers.

### App Structure
- Single page application in `app/page.tsx`
- Song data is hardcoded as a TypeScript array with interface definitions
- Audio files stored in `public/songs/` directory
- Custom layout with fixed background image and audio player

### Key Features
- Audio playback with automatic song progression
- Touch device detection for mobile interaction
- Song selection with visual indicators (⚡ for playing, ▶ for selected)
- Song lyrics display with anchor navigation
- Fixed bottom audio player
- English interface with Spanish song lyrics

### Styling Approach
- Dark theme with black background and white text
- Custom Roboto font loading via CSS @font-face
- Tailwind with custom color extensions
- Background image overlay with opacity
- Responsive design (mobile-first approach)

## Color Palette
- Background: #020617 (theme-bg - very dark blue)
- Primary: #1E293B (theme-primary - midnight blue) 
- Secondary: #3B82F6 (theme-secondary - electric blue)
- Dark: #0F172A (theme-dark - darker blue)
- Text: #E2E8F0 (light gray)

## File Organization
- `/app` - Next.js App Router pages and layout
- `/public` - Static assets (images, fonts, audio files)
- `/out` - Build output directory (static export)