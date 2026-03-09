# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with React + TypeScript + Vite. Single-page application with Hero, About, Projects, and Contact sections.

## Commands

- `pnpm dev` - Start dev server
- `pnpm build` - TypeScript check + Vite build
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build

## Tech Stack

- React 18 + TypeScript 5.6 + Vite 6
- Tailwind CSS 3 with tailwindcss-animate
- Framer Motion for animations
- Icons: Lucide React, React Icons, Heroicons

## Architecture

### App Structure
The app is a single-page portfolio wrapped in `ThemeProvider` for dark/light mode support. Main sections render sequentially: Hero → About → Projects → Contact.

### Key Patterns

**Class utilities**: Use `cn()` from `src/lib/utils.ts` for conditional Tailwind classes (combines clsx + tailwind-merge).

**Theme system**: `ThemeProvider` in `src/context/ThemeContext.tsx` manages dark/light mode via `useTheme()` hook. Persists to localStorage and respects system preference.

**Component variants**: Use `class-variance-authority` (cva) for components with multiple visual variants.

**Navigation**: `TimelineNav` component provides section navigation overlay.

**UI components**: Reusable components in `src/components/ui/` (text effects, theme toggle, timeline, tech icons).

### Adding Projects
Projects are defined as an array in `src/components/Projects.tsx`. Each project object has: title, description, tech (array), image (imported), link, and optional github URL. Tech icons are rendered via the `TechIcon` component in the same file.

## Code Style

- Use TypeScript strictly, avoid `any`
- Use `cn()` for conditional class names
- Tailwind utility classes for all styling
- Framer Motion for animations
- Follow existing ESLint config

## Email

Contact form uses @emailjs/browser. Do not hardcode EmailJS service/template/public keys.
